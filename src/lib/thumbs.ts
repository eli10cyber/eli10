// Poster thumbnails for lesson cards. Any file named <lesson-id>-poster.jpg in the lessons'
// images folder is picked up automatically, resized and converted to WebP at build time.
import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';

const posters = import.meta.glob<{ default: ImageMetadata }>('/src/content/lessons/images/*-poster.{jpg,jpeg,png,webp}', { eager: true });

export type Thumb = { src: string; srcset: string; width: number; height: number } | null;

const cache = new Map<string, Thumb>();

export async function thumbFor(id: string): Promise<Thumb> {
  if (cache.has(id)) return cache.get(id)!;
  const entry = Object.entries(posters).find(([path]) => path.split('/').pop()!.replace(/-poster\.\w+$/, '') === id);
  let out: Thumb = null;
  if (entry) {
    const img = await getImage({ src: entry[1].default, widths: [360, 560, 840], format: 'webp', quality: 70 });
    out = { src: img.src, srcset: img.srcSet.attribute, width: 560, height: Math.round((560 * entry[1].default.height) / entry[1].default.width) };
  }
  cache.set(id, out);
  return out;
}
