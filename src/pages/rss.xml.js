import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const lessons = (await getCollection('lessons', ({ data }) => !data.draft)).map((l) => ({ ...l, href: `/lessons/${l.id}/` }));
  const news = (await getCollection('news', ({ data }) => !data.draft)).map((n) => ({ ...n, href: `/news/${n.id}/` }));
  const items = [...lessons, ...news].sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  return rss({
    title: 'ELI10 Cyber',
    description: 'Cybersecurity explained like you’re 10, for mid-career career switchers.',
    site: context.site,
    items: items.map((l) => ({
      title: l.data.title,
      description: l.data.description,
      pubDate: l.data.pubDate,
      link: l.href,
    })),
  });
}
