import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ollasoftware.com',
  build: {
    inlineStylesheets: 'auto',
  },
  devToolbar: {
    enabled: true,
  },
});
