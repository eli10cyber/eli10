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

## Illustrations

Put images in `src/content/lessons/images/` and reference them from the lesson with a relative path:

```md
![Describe what the picture shows](./images/my-picture.jpg)

<p class="caption">One line about the picture.</p>
```

The site converts them to WebP automatically, sizes them for phones, and lets readers tap any image to open it full size.

For a comic made of several panels, put each panel in its own file inside a `panels` block. It shows as a strip of four on desktop and one panel per screen on phones, so the text stays readable:

```md
<div class="panels">

![Panel 1](./images/panel-1.jpg)

![Panel 2](./images/panel-2.jpg)

</div>
```

**Image checklist**
- Export the original, not a mock-up photo of it. At least 2000 px on the long side.
- Keep text inside the picture short and large; long captions go in the lesson text.
- Check every number and label is correct (AI images often garble them).
- No company logos or brand names inside illustrations.

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
