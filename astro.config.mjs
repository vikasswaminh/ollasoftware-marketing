import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

// https://docs.astro.build/en/reference/configuration-reference/
//
// Hybrid mode (2026-06-03):
//   output: 'server' + adapter = SSR-by-default with per-route opt-in to
//   prerender. Every existing .astro page route declares
//   `export const prerender = true;` so the site keeps shipping as static
//   HTML to the edge cache. Future routes can opt into SSR by setting
//   `export const prerender = false;` — no architectural change needed.
//
// CF Pages routing precedence (preserved):
//   1. Static asset in dist/   →  served by CF Pages directly
//   2. Pages Function          →  functions/api/submit/[slug].ts handles forms
//   3. Worker fallback         →  Astro-emitted _worker.js handles SSR routes
export default defineConfig({
  site: 'https://ollasoftware.com',
  output: 'server',
  adapter: cloudflare(),
  trailingSlash: 'always',
  compressHTML: true,
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  build: {
    inlineStylesheets: 'auto',
    assets: '_assets',
  },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date(),
      customPages: [
        'https://ollasoftware.com/',
        'https://ollasoftware.com/services/',
        'https://ollasoftware.com/services/ai-software/',
        'https://ollasoftware.com/services/software-dev/',
        'https://ollasoftware.com/services/aeo/',
        'https://ollasoftware.com/services/seo/',
        'https://ollasoftware.com/services/social-media/',
        'https://ollasoftware.com/services/performance-marketing/',
        'https://ollasoftware.com/work/',
        'https://ollasoftware.com/process/',
        'https://ollasoftware.com/about/',
        'https://ollasoftware.com/jobs/',
        'https://ollasoftware.com/jobs/ai-marketing-intern/',
        'https://ollasoftware.com/apply/',
        'https://ollasoftware.com/contact/',
        // Top-10 listicles — high-intent commercial queries, content-deep pages.
        'https://ollasoftware.com/top-10/',
        'https://ollasoftware.com/top-10/ai-software-development-companies-bangalore/',
        'https://ollasoftware.com/top-10/software-development-companies-bangalore/',
        'https://ollasoftware.com/top-10/aeo-companies-india/',
        'https://ollasoftware.com/top-10/seo-agencies-bangalore/',
        'https://ollasoftware.com/top-10/social-media-marketing-agencies-bangalore/',
        'https://ollasoftware.com/top-10/performance-marketing-agencies-bangalore/',
        // Brand deep-dive blog — one 5,000-word piece per olla brand.
        'https://ollasoftware.com/blog/',
        'https://ollasoftware.com/blog/ollima/',
        'https://ollasoftware.com/blog/ollagraph/',
        'https://ollasoftware.com/blog/ollabear/',
        'https://ollasoftware.com/blog/ollanode/',
        'https://ollasoftware.com/blog/olladns/',
        'https://ollasoftware.com/blog/24observe/',
        'https://ollasoftware.com/blog/ollasuper/',
        'https://ollasoftware.com/blog/ollastack/',
        'https://ollasoftware.com/blog/ollasync/',
      ],
      serialize(item) {
        // Higher priority for home + services + jobs + top-10 (high-intent pages).
        if (item.url === 'https://ollasoftware.com/') item.priority = 1.0;
        else if (item.url.startsWith('https://ollasoftware.com/services/')) item.priority = 0.9;
        else if (item.url === 'https://ollasoftware.com/jobs/') item.priority = 0.9;
        else if (item.url.startsWith('https://ollasoftware.com/top-10/') &&
                 item.url !== 'https://ollasoftware.com/top-10/') item.priority = 0.85;
        else if (item.url === 'https://ollasoftware.com/top-10/') item.priority = 0.8;
        else if (item.url === 'https://ollasoftware.com/apply/') item.priority = 0.8;
        else if (item.url === 'https://ollasoftware.com/contact/') item.priority = 0.8;
        else if (item.url === 'https://ollasoftware.com/blog/') item.priority = 0.85;
        else if (item.url.startsWith('https://ollasoftware.com/blog/') &&
                 item.url !== 'https://ollasoftware.com/blog/') item.priority = 0.8;
        return item;
      },
    }),
  ],
  devToolbar: { enabled: true },
});
