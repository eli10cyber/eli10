// Hand-drawn topic icons in public/icons/<id>-96.webp and -192.webp (sliced from one generated sheet).
import { existsSync } from 'node:fs';
import { join } from 'node:path';

export function iconFor(id: string): { src: string; srcset: string } | null {
  if (!existsSync(join(process.cwd(), 'public', 'icons', `${id}-96.webp`))) return null;
  return { src: `/icons/${id}-96.webp`, srcset: `/icons/${id}-96.webp 96w, /icons/${id}-192.webp 192w` };
}
