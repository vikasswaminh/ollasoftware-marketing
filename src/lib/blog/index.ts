// Blog barrel — every brand deep-dive piece is registered here. The order
// is reverse-chron (newest first), which is what the /blog/ index renders.
//
// Adding piece N+1: drop a new file under src/lib/blog/<slug>.ts that
// exports a BlogPost, import it here, and prepend it to allPosts.

import type { BlogPost } from './types';
import { networkershomePost } from './networkershome';
import { nhprepPost } from './nhprep';
import { twentyonetunnelPost } from './twentyonetunnel';
import { ollimaPost } from './ollima';
import { ollagraphPost } from './ollagraph';
import { ollabearPost } from './ollabear';
import { ollanodePost } from './ollanode';
import { olladnsPost } from './olladns';
import { twentyfourobservePost } from './twentyfourobserve';
import { ollasuperPost } from './ollasuper';
import { ollastackPost } from './ollastack';
import { ollasyncPost } from './ollasync';
import { aeonitiPost } from './aeoniti';
import { crawlcrawlPost } from './crawlcrawl';
import { memfogPost } from './memfog';
import { browserfogPost } from './browserfog';
import { ollavpnPost } from './ollavpn';
import { quickztnaPost } from './quickztna';
import { meshwgPost } from './meshwg';
import { quicksdwanPost } from './quicksdwan';
import { freefreecvPost } from './freefreecv';

export type { BlogPost, BlogSection, BlogSubsection, BlogFAQ } from './types';

export const allPosts: readonly BlogPost[] = [
  networkershomePost,
  nhprepPost,
  twentyonetunnelPost,
  freefreecvPost,
  quicksdwanPost,
  meshwgPost,
  quickztnaPost,
  ollavpnPost,
  browserfogPost,
  memfogPost,
  crawlcrawlPost,
  aeonitiPost,
  ollasyncPost,
  ollastackPost,
  ollasuperPost,
  twentyfourobservePost,
  olladnsPost,
  ollanodePost,
  ollabearPost,
  ollagraphPost,
  ollimaPost,
] as const;

export function postBySlug(slug: string): BlogPost | undefined {
  return allPosts.find(p => p.slug === slug);
}
