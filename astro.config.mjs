import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://eli10cyber.com',
  integrations: [sitemap()],
  image: { layout: 'constrained', responsiveStyles: true },
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
});
