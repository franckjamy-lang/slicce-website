import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Une entrée = une page produit (AEF/AF/IWF/LB/CAPIF).
// Schéma validé à l'étape 3 sur la page charging-iwf (mesure directe du
// site live). Le corps markdown de chaque fichier contient les paragraphes
// "ce qui rend ce produit unique" (section libre, sous les Features).
const products = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/products' }),
  schema: z.object({
    title: z.string(),
    shortName: z.string(), // ex: "CHF-IWF" — utilisé dans "Check out some {shortName} use cases"
    category: z.enum([
      'capif-core-function',
      'api-exposure-functions',
      'application-functions',
      'interworking-functions',
      'load-balancers',
    ]),
    order: z.number().default(0),
    heroDescription: z.string(),
    // Chemin vers une image locale (jamais une URL Google Sites) — laissé
    // vide tant que l'asset réel n'a pas été fourni.
    heroIcon: z.string().optional(),
    features: z
      .array(
        z.object({
          title: z.string(),
          // Peut contenir des **termes en gras** (mini-syntaxe markdown).
          description: z.string(),
        })
      )
      .default([]),
    specs: z
      .array(
        z.object({
          label: z.string(),
          values: z.array(z.string()),
          wide: z.boolean().optional(),
        })
      )
      .default([]),
    useCasesIcon: z.string().optional(),
    useCases: z
      .array(
        z.object({
          label: z.string(),
          href: z.string(),
        })
      )
      .default([]),
    marketplace: z
      .object({
        aws: z.string().url().optional(),
      })
      .optional(),
  }),
});

export const collections = { products };
