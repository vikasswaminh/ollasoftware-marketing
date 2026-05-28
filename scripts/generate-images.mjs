// Generate PNG raster variants from SVG sources in public/_source/.
// Run with: node scripts/generate-images.mjs
//
// Inputs:
//   public/_source/favicon.svg   — 64×64 viewBox brand mark
//   public/_source/og-image.svg  — 1200×630 social-share card
//
// Outputs (written to public/):
//   favicon.svg                  — copy of source (vector, modern browsers)
//   favicon-16x16.png
//   favicon-32x32.png
//   favicon-48x48.png
//   apple-touch-icon.png         (180×180)
//   android-chrome-192x192.png
//   android-chrome-512x512.png
//   og-image.png                 (1200×630 — WhatsApp / Slack / LinkedIn etc.)
//   og-image-square.png          (1080×1080 — Instagram / iMessage square)

import sharp from 'sharp';
import { readFile, writeFile, copyFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const SRC  = resolve(ROOT, 'public/_source');
const DST  = resolve(ROOT, 'public');

const faviconSvgBuf = await readFile(resolve(SRC, 'favicon.svg'));
const ogSvgBuf      = await readFile(resolve(SRC, 'og-image.svg'));

// Copy SVG source through to public (modern browsers prefer the vector).
await copyFile(resolve(SRC, 'favicon.svg'), resolve(DST, 'favicon.svg'));

// Favicon raster variants — sized for the most common touchpoints.
const faviconSizes = [
  { name: 'favicon-16x16.png',          size: 16 },
  { name: 'favicon-32x32.png',          size: 32 },
  { name: 'favicon-48x48.png',          size: 48 },
  { name: 'apple-touch-icon.png',       size: 180 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 },
];

for (const { name, size } of faviconSizes) {
  const out = resolve(DST, name);
  await sharp(faviconSvgBuf, { density: 300 })
    .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile(out);
  console.log(`  wrote ${name.padEnd(28)}  ${size}×${size}`);
}

// OG image — high density for crisp text. Compress hard but keep under 300 KB
// so WhatsApp's preview-fetch (which is bandwidth-conscious) renders reliably.
await sharp(ogSvgBuf, { density: 200 })
  .resize(1200, 630, { fit: 'cover' })
  .png({ compressionLevel: 9, adaptiveFiltering: true, palette: false })
  .toFile(resolve(DST, 'og-image.png'));
console.log('  wrote og-image.png            1200×630');

// Square variant for iMessage / WhatsApp Business catalogue / Threads etc.
await sharp(ogSvgBuf, { density: 200 })
  .resize(1080, 1080, { fit: 'cover', position: 'center' })
  .png({ compressionLevel: 9, adaptiveFiltering: true, palette: false })
  .toFile(resolve(DST, 'og-image-square.png'));
console.log('  wrote og-image-square.png     1080×1080');

console.log('\n✓ done');
