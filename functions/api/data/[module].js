/**
 * Cloudflare Pages Function — secure proxy to GitHub Contents API
 * Route: /api/data/:module   (module = "articles" | "blog" | "catalog")
 *
 * The GitHub token never reaches the browser — it lives only as an
 * encrypted environment variable on Cloudflare (GITHUB_TOKEN).
 */

const REPO_OWNER = 'franckjamy-lang';
const REPO_NAME  = 'slicce-data';
const BRANCH     = 'main';

const FILES = {
  articles: 'articles-data.json',
  blog:     'blog-data.json',
  catalog:  'catalog-data.json',
};

function b64ToUtf8(b64) {
  return decodeURIComponent(escape(atob(b64.replace(/\n/g, ''))));
}
function utf8ToB64(str) {
  return btoa(unescape(encodeURIComponent(str)));
}

export async function onRequestGet(context) {
  const { params, env } = context;
  const path = FILES[params.module];
  if (!path) return new Response('Unknown module', { status: 404 });

  const url = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${path}?ref=${BRANCH}`;
  const r = await fetch(url, {
    headers: {
      Authorization: `token ${env.GITHUB_TOKEN}`,
      Accept: 'application/vnd.github+json',
      'User-Agent': 'slicce-admin-hub',
    },
  });

  if (r.status === 404) {
    return new Response(JSON.stringify({ json: null, sha: null }), {
      headers: { 'Content-Type': 'application/json' },
    });
  }
  if (!r.ok) {
    const bodyText = await r.text();
    return new Response(JSON.stringify({
      error: 'GitHub error ' + r.status + ': ' + bodyText,
      hasToken: !!env.GITHUB_TOKEN,
    }), { status: 502 });
  }

  const data = await r.json();
  const content = b64ToUtf8(data.content);
  return new Response(JSON.stringify({ json: JSON.parse(content), sha: data.sha }), {
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function onRequestPut(context) {
  const { params, env, request } = context;
  const path = FILES[params.module];
  if (!path) return new Response('Unknown module', { status: 404 });

  const body = await request.json(); // { json, sha, message }
  const contentB64 = utf8ToB64(JSON.stringify(body.json, null, 2));
  const ghBody = {
    message: body.message || ('Update ' + params.module),
    content: contentB64,
    branch: BRANCH,
  };
  if (body.sha) ghBody.sha = body.sha;

  const url = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${path}`;
  const r = await fetch(url, {
    method: 'PUT',
    headers: {
      Authorization: `token ${env.GITHUB_TOKEN}`,
      Accept: 'application/vnd.github+json',
      'Content-Type': 'application/json',
      'User-Agent': 'slicce-admin-hub',
    },
    body: JSON.stringify(ghBody),
  });

  if (!r.ok) {
    const err = await r.text();
    return new Response(JSON.stringify({
      error: 'GitHub error ' + r.status + ': ' + err,
      hasToken: !!env.GITHUB_TOKEN,
    }), { status: 502 });
  }
  const result = await r.json();
  return new Response(JSON.stringify({ sha: result.content.sha }), {
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function onRequestDelete(context) {
  // Deletes are handled as a PUT with the row removed client-side,
  // so this endpoint isn't strictly needed — kept for completeness.
  return new Response('Use PUT with updated content to remove entries', { status: 405 });
}
