import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const lessons = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/lessons' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    number: z.number(),
    topic: z.string(), // must match a topic id in src/data/map.ts
    chapter: z.string().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    oneLiner: z.string(), // the "explain like I'm 10" sentence
    flashcards: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { lessons };
