# ELI10 Cyber

Cybersecurity explained like you're 10, for mid-career people switching into security. Live at https://eli10cyber.com.

Built with [Astro](https://astro.build) and hosted on Cloudflare Workers (static assets, free plan).

## How the site is organised

| Where | What |
|---|---|
| `src/content/lessons/*.md` | One file per lesson. Adding a file publishes a lesson. |
| `src/data/map.ts` | The learning map (Security+ SY0-701 domains and topics). |
| `src/data/glossary.ts` | Glossary terms, each with a kid version and a grown-up version. |
| `public/images/` | Illustrations. Use `.webp` or `.svg`, ideally under 200 KB. |
| `src/pages/` | Home, lessons, map, glossary, about. |

## Adding a lesson

1. Copy `LESSON-TEMPLATE.md` to `src/content/lessons/<topic-id>.md`.
2. Set `topic` to an id from `src/data/map.ts` so the map links to it.
3. Fill in the three boxes: Like you're 10, Grown-up version, Why a buyer cares.
4. Add 3 to 5 flashcards.
5. Add new terms to `src/data/glossary.ts`.
6. Commit and push. Cloudflare builds and publishes in about a minute.

Set `draft: true` to keep a lesson hidden while you work on it.

## Commands

```bash
npm install       # once
npm run dev       # local preview at http://localhost:4321
npm run build     # build to ./dist
npm run deploy    # build and deploy with Wrangler (normally done by Cloudflare on push)
```

## Rules for content

- Write in your own words. Never copy text or diagrams from the book.
- Fact-check the grown-up version against official sources (RFCs, NIST, vendor docs).
- Check every label on AI-generated illustrations; they often misspell words.
