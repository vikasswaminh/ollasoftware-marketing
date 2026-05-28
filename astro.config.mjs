import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: 'https://ollasoftware.com',
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
        'https://ollasoftware.com/pricing/',
        'https://ollasoftware.com/about/',
        'https://ollasoftware.com/contact/',
      ],
      serialize(item) {
        // Higher priority for home + services.
        if (item.url === 'https://ollasoftware.com/') item.priority = 1.0;
        else if (item.url.startsWith('https://ollasoftware.com/services/')) item.priority = 0.9;
        else if (item.url === 'https://ollasoftware.com/contact/') item.priority = 0.7;
        return item;
      },
    }),
  ],
  devToolbar: { enabled: true },
});
