import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const cities = [
  { slug: 'stuttgart', name: 'Stuttgart' },
  { slug: 'hamburg', name: 'Hamburg' },
  { slug: 'berlin', name: 'Berlin' },
  { slug: 'muenchen', name: 'München' },
  { slug: 'duesseldorf', name: 'Düsseldorf' },
  { slug: 'frankfurt', name: 'Frankfurt' },
  { slug: 'zuerich', name: 'Zürich' },
  { slug: 'basel', name: 'Basel' },
  { slug: 'bern', name: 'Bern' },
  { slug: 'wien', name: 'Wien' },
  { slug: 'graz', name: 'Graz' },
  { slug: 'linz', name: 'Linz' },
];

for (const c of cities) {
  const path = join('src/pages', `laborcontainer-${c.slug}.astro`);
  let src = readFileSync(path, 'utf8');
  let changed = false;

  // 1. Add imports after Layout import (only once)
  if (!src.includes("AuthorBio.astro")) {
    src = src.replace(
      /(import Layout from ['"][^'"]+['"];?\s*\n)/,
      `$1import AuthorBio from '../components/AuthorBio.astro';\nimport CityCrossLinks from '../components/CityCrossLinks.astro';\n`
    );
    changed = true;
  }

  // 2. Insert <AuthorBio /> right after the first </section> (after hero)
  if (!src.includes('<AuthorBio')) {
    const firstClose = src.indexOf('</section>');
    if (firstClose !== -1) {
      const insertAt = firstClose + '</section>'.length;
      src = src.slice(0, insertAt) + `\n\n    <AuthorBio city="${c.name}" />\n` + src.slice(insertAt);
      changed = true;
    }
  }

  // 3. Remove existing "Weitere Standorte" block if present (old simple text-link version)
  src = src.replace(
    /\s*<section class="py-12 border-t border-gray-100">[\s\S]*?Weitere Standorte[\s\S]*?<\/section>\s*/g,
    '\n    '
  );

  // 4. Insert <CityCrossLinks /> before final </Layout>
  if (!src.includes('<CityCrossLinks')) {
    src = src.replace(
      /(\s*<\/div>\s*<\/Layout>\s*)$/,
      `\n    <CityCrossLinks current="${c.slug}" />\n$1`
    );
    changed = true;
  }

  if (changed) {
    writeFileSync(path, src);
    console.log(`✓ ${c.slug}`);
  } else {
    console.log(`= ${c.slug} (unchanged)`);
  }
}
