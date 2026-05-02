#!/usr/bin/env node
/**
 * WebP-Konvertierung aller großen Bilder im attached_assets/.
 *
 * Konvertiert alle JPG/PNG > MIN_BYTES (Default: 300 KB) zu WebP (Q80, max 1920 px Breite).
 * Original wird BEHALTEN (für Fallback in <picture>-Tags).
 * WebP wird neben dem Original gespeichert: foo.jpg → foo.webp
 *
 * Aufruf:
 *   node scripts/convert-images-webp.mjs
 *
 * Dry-Run (nur anzeigen, nicht konvertieren):
 *   node scripts/convert-images-webp.mjs --dry
 */

import { readdir, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, extname, basename } from 'node:path';
import sharp from 'sharp';

const ASSETS_DIR = 'attached_assets';
const PUBLIC_ASSETS_DIR = 'public/attached_assets';
const PUBLIC_IMAGES_DIR = 'public/images';
const MIN_BYTES = 300 * 1024;
const MAX_WIDTH = 1920;
const QUALITY = 80;

const dryRun = process.argv.includes('--dry');

async function findCandidates(dir, minBytes) {
  const candidates = [];
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isDirectory()) {
      // Sub-dirs auch durchsuchen (z.B. public/images/magazin/)
      const sub = await findCandidates(join(dir, entry.name), minBytes);
      candidates.push(...sub);
      continue;
    }
    if (!entry.isFile()) continue;
    const ext = extname(entry.name).toLowerCase();
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue;
    const fullPath = join(dir, entry.name);
    const s = await stat(fullPath);
    if (s.size < minBytes) continue;
    const webpName = basename(entry.name, ext) + '.webp';
    const webpPath = join(dir, webpName);
    if (existsSync(webpPath)) {
      const ws = await stat(webpPath);
      // Skip if WebP already exists and is non-trivial
      if (ws.size > 1024) continue;
    }
    candidates.push({ src: fullPath, dst: webpPath, size: s.size });
  }
  return candidates;
}

async function convert(src, dst) {
  const meta = await sharp(src).metadata();
  let pipeline = sharp(src);
  if (meta.width && meta.width > MAX_WIDTH) {
    pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
  }
  await pipeline.webp({ quality: QUALITY, effort: 5 }).toFile(dst);
  const ws = await stat(dst);
  return ws.size;
}

async function processDir(dir, label, minBytes = MIN_BYTES) {
  if (!existsSync(dir)) {
    console.log(`(skip ${label}: dir not found)`);
    return { converted: 0, savedBytes: 0 };
  }
  const candidates = await findCandidates(dir, minBytes);
  console.log(`\n=== ${label}: ${candidates.length} Kandidaten >${(minBytes/1024)|0} KB ===`);
  let converted = 0;
  let savedBytes = 0;
  for (const c of candidates) {
    const sizeKB = (c.size / 1024).toFixed(0);
    if (dryRun) {
      console.log(`  [dry] ${sizeKB} KB  ${c.src} → ${c.dst}`);
      continue;
    }
    try {
      const newSize = await convert(c.src, c.dst);
      const newKB = (newSize / 1024).toFixed(0);
      const reduction = (((c.size - newSize) / c.size) * 100).toFixed(0);
      savedBytes += c.size - newSize;
      converted++;
      console.log(`  ✓ ${sizeKB} KB → ${newKB} KB  (-${reduction}%)  ${basename(c.src)}`);
    } catch (err) {
      console.error(`  ✗ FEHLER bei ${c.src}: ${err.message}`);
    }
  }
  return { converted, savedBytes };
}

(async () => {
  console.log(`WebP-Konvertierung — Min ${(MIN_BYTES/1024)|0} KB, max ${MAX_WIDTH}px, Q${QUALITY}`);
  if (dryRun) console.log('(DRY-RUN)');
  const r1 = await processDir(ASSETS_DIR, 'attached_assets');
  const r2 = await processDir(PUBLIC_ASSETS_DIR, 'public/attached_assets');
  // /images/ Schwelle niedriger (50 KB), weil dort bewusst gepflegte Marketing-Bilder liegen
  const r3 = await processDir(PUBLIC_IMAGES_DIR, 'public/images', 50 * 1024);
  const totalConverted = r1.converted + r2.converted + r3.converted;
  const totalSavedMB = ((r1.savedBytes + r2.savedBytes + r3.savedBytes) / 1024 / 1024).toFixed(1);
  console.log(`\n=== FERTIG ===`);
  console.log(`Konvertiert: ${totalConverted}`);
  console.log(`Eingespart: ${totalSavedMB} MB`);
})();
