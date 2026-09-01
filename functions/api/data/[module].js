/**
 * Cloudflare Pages Function — secure proxy to GitHub Contents API
 * Route: /api/data/:module   (module = "articles" | "blog" | "catalog" | "permissions")
 *
 * The GitHub token never reaches the browser — it lives only as an
 * encrypted environment variable on Cloudflare (GITHUB_TOKEN).
 *
 * Permission model:
 *   - Identity comes from Cloudflare Access, injected as the
 *     'Cf-Access-Authenticated-User-Email' header. This is only
 *     trustworthy if Access actually protects this path (/api/*) —
 *     otherwise the header could be spoofed by a direct caller.
 *   - Who-can-do-what lives in permissions.json (managed from the
 *     hub's "Team" tab). Role 'admin' bypasses all checks.
 *   - Non-admins ("contributor") get per-module create/edit/delete
 *     flags, enforced here by diffing the incoming array against
 *     what's currently stored.
 */

const REPO_OWNER = 'franckjamy-lang';
const REPO_NAME  = 'slicce-data';
const BRANCH     = 'main';

const FILES = {
  articles:    'articles-data.json',
  blog:        'blog-data.json',
  catalog:     'catalog-data.json',
  permissions: 'permissions.json',
};

// Top-level array key inside each data file, used for diffing changes
const ARRAY_KEY = {
  articles: 'articles',
  blog:     'posts',
  catalog:  'products',
};

function b64ToUtf8(b64) {
  return decodeURIComponent(escape(atob(b64.replace(/\n/g, ''))));
}
function utf8ToB64(str) {
  return btoa(unescape(encodeURIComponent(str)));
}

async function readFile(path, token) {
  const url = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${path}?ref=${BRANCH}`;
  const r = await fetch(url, {
    headers: {
      Authorization: `token ${token}`,
      Accept: 'application/vnd.github+json',
      'User-Agent': 'slicce-admin-hub',
    },
  });
  if (r.status === 404) return null;
  if (!r.ok) throw new Error('GitHub error ' + r.status + ': ' + (await r.text()));
  const data = await r.json();
  return { json: JSON.parse(b64ToUtf8(data.content)), sha: data.sha };
}

async function writeFile(path, jsonObj, sha, message, token) {
  const body = {
    message: message || ('Update ' + path),
    content: utf8ToB64(JSON.stringify(jsonObj, null, 2)),
    branch: BRANCH,
  };
  if (sha) body.sha = sha;
  const r = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${path}`, {
    method: 'PUT',
    headers: {
      Authorization: `token ${token}`,
      Accept: 'application/vnd.github+json',
      'Content-Type': 'application/json',
      'User-Agent': 'slicce-admin-hub',
    },
    body: JSON.stringify(body),
  });
  if (!r.ok) throw new Error(await r.text());
  return r.json();
}

function getIdentity(request) {
  return request.headers.get('Cf-Access-Authenticated-User-Email') || null;
}

async function getUser(env, email) {
  if (!email) return null;
  const perms = await readFile(FILES.permissions, env.GITHUB_TOKEN);
  // Bootstrap: no permissions.json yet anywhere -> allow (first-time setup)
  if (!perms) return { email, role: 'admin' };
  const users = perms.json.users || [];
  const found = users.find(u => (u.email || '').toLowerCase() === email.toLowerCase());
  return found || null; // unknown emails: no access
}

function diffArrays(oldArr, newArr) {
  const oldMap = new Map((oldArr || []).map(x => [x.id, x]));
  const newMap = new Map((newArr || []).map(x => [x.id, x]));
  const added    = [...newMap.keys()].filter(id => !oldMap.has(id));
  const removed  = [...oldMap.keys()].filter(id => !newMap.has(id));
  const modified = [...newMap.keys()].filter(id =>
    oldMap.has(id) && JSON.stringify(oldMap.get(id)) !== JSON.stringify(newMap.get(id))
  );
  return { added, removed, modified };
}

function errJson(message, status) {
  return new Response(JSON.stringify({ error: message }), {
    status, headers: { 'Content-Type': 'application/json' },
  });
}

export async function onRequestGet(context) {
  const { params, env } = context;
  const path = FILES[params.module];
  if (!path) return errJson('Unknown module', 404);
  try {
    const result = await readFile(path, env.GITHUB_TOKEN);
    if (!result) return new Response(JSON.stringify({ json: null, sha: null }), {
      headers: { 'Content-Type': 'application/json' },
    });
    return new Response(JSON.stringify(result), { headers: { 'Content-Type': 'application/json' } });
  } catch (e) {
    return errJson(e.message, 502);
  }
}

export async function onRequestPut(context) {
  const { params, env, request } = context;
  const moduleName = params.module;
  const path = FILES[moduleName];
  if (!path) return errJson('Unknown module', 404);

  const email = getIdentity(request);
  const user = await getUser(env, email);

  if (!user) {
    return errJson('Not authorized. Ask an admin to add your email in the Team tab.', 403);
  }

  const body = await request.json(); // { json, sha, message }

  if (moduleName === 'permissions') {
    // Only admins can manage the team/permissions file itself
    if (user.role !== 'admin') return errJson('Only admins can manage team permissions.', 403);
  } else if (user.role !== 'admin') {
    // Contributors: enforce create/edit/delete on this module's content array
    const key = ARRAY_KEY[moduleName];
    let current;
    try { current = await readFile(path, env.GITHUB_TOKEN); }
    catch (e) { return errJson(e.message, 502); }
    const oldArr = current ? (current.json[key] || []) : [];
    const newArr = body.json[key] || [];
    const { added, removed, modified } = diffArrays(oldArr, newArr);
    const perms = user[moduleName] || {};
    if (added.length    && !perms.create) return errJson('You do not have permission to add items in ' + moduleName + '.', 403);
    if (modified.length && !perms.edit)   return errJson('You do not have permission to edit items in ' + moduleName + '.', 403);
    if (removed.length  && !perms.delete) return errJson('You do not have permission to delete items in ' + moduleName + '.', 403);
  }

  try {
    const result = await writeFile(
      path, body.json, body.sha,
      body.message || ('Update ' + moduleName + (email ? ' by ' + email : '')),
      env.GITHUB_TOKEN
    );
    return new Response(JSON.stringify({ sha: result.content.sha }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (e) {
    return errJson(e.message, 502);
  }
}

export async function onRequestDelete() {
  return new Response('Use PUT with updated content to remove entries', { status: 405 });
}
