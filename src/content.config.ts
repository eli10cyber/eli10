import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Each of the four buyer-score questions is scored 0–2.5, in steps of 0.5.
const part = z.number().min(0).max(2.5).multipleOf(0.5);

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
    grownLiner: z.string().optional(), // the same idea in one precise sentence, used on the homepage
    buyerScore: z
      .object({
        budget: part, // is there a product category companies buy for this?
        pain: part, // does it cause breaches or outages people have heard of?
        pressure: part, // do regulators, insurers or auditors demand it?
        owner: part, // is there a clear buyer who is judged on it?
        verdict: z.string(), // one line: why the score is what it is
        pitch: z.string().optional(), // the selling point in one sentence, for the Selling points page
      })
      .optional(),
    // Poster panels: grid edges as % of the poster [left, midLeft, midRight, right, top, row1Bottom, row2Top, bottom]
    posterGrid: z.array(z.number()).length(8).optional(),
    panels: z.array(z.object({ title: z.string(), note: z.string(), find: z.string() })).length(4).optional(),
    game: z.enum(['acl']).optional(), // an interactive exercise placed where the lesson has <div data-game="..."></div>
    quiz: z
      .array(z.object({ q: z.string(), options: z.array(z.string()).min(2), answer: z.number(), why: z.string() }))
      .default([]),
    flashcards: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    draft: z.boolean().default(false),
  }),
});

// "In the news, explained": short posts that take a real headline and explain it the eli10 way
const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    oneLiner: z.string(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    related: z.array(z.string()).default([]), // lesson ids
    sources: z.array(z.object({ title: z.string(), publisher: z.string(), url: z.string().url() })).min(1),
    buyerScore: z
      .object({ budget: part, pain: part, pressure: part, owner: part, verdict: z.string(), pitch: z.string().optional() })
      .optional(),
    posterGrid: z.array(z.number()).length(8).optional(),
    panels: z.array(z.object({ title: z.string(), note: z.string(), find: z.string() })).length(4).optional(),
    quiz: z.array(z.object({ q: z.string(), options: z.array(z.string()).min(2), answer: z.number(), why: z.string() })).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { lessons, news };
