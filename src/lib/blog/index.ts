// Blog barrel — every brand deep-dive piece is registered here. The order
// is reverse-chron (newest first), which is what the /blog/ index renders.
//
// Adding piece N+1: drop a new file under src/lib/blog/<slug>.ts that
// exports a BlogPost, import it here, and prepend it to allPosts.

import type { BlogPost } from './types';
import { ollimaPost } from './ollima';
import { ollagraphPost } from './ollagraph';
import { ollabearPost } from './ollabear';
import { ollanodePost } from './ollanode';

export type { BlogPost, BlogSection, BlogSubsection, BlogFAQ } from './types';

export const allPosts: readonly BlogPost[] = [
  ollanodePost,
  ollabearPost,
  ollagraphPost,
  ollimaPost,
] as const;

export function postBySlug(slug: string): BlogPost | undefined {
  return allPosts.find(p => p.slug === slug);
}
