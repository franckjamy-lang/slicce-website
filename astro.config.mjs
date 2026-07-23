// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Nécessaire pour générer des URLs absolues correctes (sitemap.xml,
  // Open Graph, JSON-LD canonique) — ajoutés à l'étape 7.
  site: 'https://www.slicce.co',
});
