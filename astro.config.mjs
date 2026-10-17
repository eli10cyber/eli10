import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import rehypeTermLinks from './src/plugins/rehype-term-links.mjs';
import { glossary } from './src/data/glossary.ts';

export default defineConfig({
  site: 'https://eli10cyber.com',
  integrations: [sitemap()],
  image: { layout: 'constrained', responsiveStyles: true },
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  markdown: {
    rehypePlugins: [[rehypeTermLinks, { glossary }]],
  },
});
