import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://eli10cyber.com',
  integrations: [sitemap()],
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
});
