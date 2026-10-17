// Auto-links glossary terms inside lessons.
// The first mention of each term on a page becomes a link:
//   - to the lesson that teaches it, if that lesson is published
//   - otherwise to the term's entry on the glossary page
// Hovering shows the "like you're 10" definition.
// Terms are never linked inside headings, code, existing links, or on their own lesson.
import fs from 'node:fs';
import path from 'node:path';

const LESSON_DIR = path.resolve('src/content/lessons');
const SKIP_TAGS = new Set(['a', 'code', 'pre', 'h1', 'h2', 'h3', 'h4', 'script', 'style', 'button']);

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-');
const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const isAcronym = (s) => /^[A-Z0-9]+$/.test(s);

function publishedLessons() {
  const ids = new Set();
  if (!fs.existsSync(LESSON_DIR)) return ids;
  for (const f of fs.readdirSync(LESSON_DIR)) {
    if (!f.endsWith('.md')) continue;
    const src = fs.readFileSync(path.join(LESSON_DIR, f), 'utf8');
    const fm = src.match(/^---\n([\s\S]*?)\n---/);
    if (fm && /^draft:\s*true\s*$/m.test(fm[1])) continue;
    ids.add(f.replace(/\.md$/, ''));
  }
  return ids;
}

function hasClass(node, cls) {
  const c = node.properties?.className;
  return Array.isArray(c) ? c.includes(cls) : c === cls;
}

export default function rehypeTermLinks({ glossary = [] } = {}) {
  // Map every spelling (term + aliases) back to its entry
  const forms = [];
  for (const entry of glossary) {
    for (const form of [entry.term, ...(entry.aliases ?? [])]) forms.push({ form, entry });
  }
  forms.sort((a, b) => b.form.length - a.form.length);
  const pattern = new RegExp(`(?<![\\w-])(${forms.map((f) => escapeRe(f.form)).join('|')})(?![\\w-])`, 'gi');

  return (tree, file) => {
    if (!forms.length) return;
    const published = publishedLessons();
    const filePath = file.path || file.history?.[0] || '';
    const currentLesson = path.basename(filePath).replace(/\.md$/, '');
    const linked = new Set();

    const lookup = (text) => {
      const hit = forms.find((f) => f.form.toLowerCase() === text.toLowerCase());
      if (!hit) return null;
      // Acronyms must match case exactly ("dns" in normal prose is not linked)
      if (isAcronym(hit.form) && text !== hit.form) return null;
      return hit.entry;
    };

    const hrefFor = (entry) => {
      if (entry.lesson && published.has(entry.lesson) && entry.lesson !== currentLesson) return `/lessons/${entry.lesson}/`;
      if (entry.lesson === currentLesson) return null; // this lesson teaches it: no self-link
      return `/glossary/#${slug(entry.term)}`;
    };

    const walk = (node) => {
      if (!node.children) return;
      const out = [];
      for (const child of node.children) {
        if (child.type === 'element') {
          if (!SKIP_TAGS.has(child.tagName) && !hasClass(child, 'layer-name')) walk(child);
          out.push(child);
          continue;
        }
        if (child.type !== 'text') { out.push(child); continue; }

        const text = child.value;
        let last = 0;
        let changed = false;
        pattern.lastIndex = 0;
        let m;
        while ((m = pattern.exec(text))) {
          const entry = lookup(m[1]);
          if (!entry || linked.has(entry.term)) continue;
          const href = hrefFor(entry);
          if (!href) continue;
          linked.add(entry.term);
          if (m.index > last) out.push({ type: 'text', value: text.slice(last, m.index) });
          out.push({
            type: 'element',
            tagName: 'a',
            properties: { href, className: ['term-link'], title: entry.kid, dataTerm: entry.term },
            children: [{ type: 'text', value: m[1] }],
          });
          last = m.index + m[1].length;
          changed = true;
        }
        if (changed) {
          if (last < text.length) out.push({ type: 'text', value: text.slice(last) });
        } else {
          out.push(child);
        }
      }
      node.children = out;
    };

    walk(tree);
  };
}
