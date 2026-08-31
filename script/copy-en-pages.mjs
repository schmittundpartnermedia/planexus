import fs from 'node:fs';
import path from 'node:path';
import { DE_TO_EN } from '../src/i18n/routes.ts';

const root = path.resolve(import.meta.dirname, '..');
const pages = path.join(root, 'src/pages');

const SOURCE = {
  '': 'index.astro',
  '/ueber-uns': 'ueber-uns.astro',
  '/ueber-uns/auszeichnungen': 'ueber-uns/auszeichnungen.astro',
  '/team': 'team.astro',
  '/team/sven-biewald': 'team/sven-biewald.astro',
  '/team/thomas-boss': 'team/thomas-boss.astro',
  '/leistungen': 'leistungen/index.astro',
  '/leistungen/planung': 'leistungen/planung.astro',
  '/leistungen/modulbau': 'leistungen/modulbau.astro',
  '/leistungen/logistik': 'leistungen/logistik.astro',
  '/leistungen/ausstattung': 'leistungen/ausstattung.astro',
  '/leistungen/beratung': 'leistungen/beratung.astro',
  '/leistungen/smart-lab': 'leistungen/smart-lab.astro',
  '/laborcontainer': 'laborcontainer/index.astro',
  '/laborcontainer/labtogo': 'laborcontainer/labtogo.astro',
  '/laborcontainer-mieten': 'laborcontainer-mieten.astro',
  '/laborcontainer-kaufen': 'laborcontainer-kaufen.astro',
  '/projekte': 'projekte.astro',
  '/partner': 'partner.astro',
  '/kontakt': 'kontakt.astro',
  '/standorte': 'standorte.astro',
  '/impressum': 'impressum.astro',
  '/datenschutz': 'datenschutz.astro',
  '/branchen': 'branchen/index.astro',
  '/branchen/pharma-biotech': 'branchen/pharma-biotech.astro',
  '/branchen/forschung-hochschule': 'branchen/forschung-hochschule.astro',
  '/branchen/industrie-werkstoffpruefung': 'branchen/industrie-werkstoffpruefung.astro',
  '/branchen/bildung': 'branchen/bildung.astro',
  '/branchen/public-health-krisenvorsorge': 'branchen/public-health-krisenvorsorge.astro',
  '/branchen/energiewende-h2-batterie': 'branchen/energiewende-h2-batterie.astro',
  '/branchen/oel-gas': 'branchen/oel-gas.astro',
  '/laborcontainer-hamburg': 'laborcontainer-hamburg.astro',
  '/laborcontainer-berlin': 'laborcontainer-berlin.astro',
  '/laborcontainer-muenchen': 'laborcontainer-muenchen.astro',
  '/laborcontainer-stuttgart': 'laborcontainer-stuttgart.astro',
  '/laborcontainer-duesseldorf': 'laborcontainer-duesseldorf.astro',
  '/laborcontainer-frankfurt': 'laborcontainer-frankfurt.astro',
  '/laborcontainer-zuerich': 'laborcontainer-zuerich.astro',
  '/laborcontainer-basel': 'laborcontainer-basel.astro',
  '/laborcontainer-bern': 'laborcontainer-bern.astro',
  '/laborcontainer-wien': 'laborcontainer-wien.astro',
  '/laborcontainer-graz': 'laborcontainer-graz.astro',
  '/laborcontainer-linz': 'laborcontainer-linz.astro',
  '/magazin': 'magazin.astro',
};

for (const [de] of Object.entries(DE_TO_EN)) {
  if (de.startsWith('/magazin/') && de !== '/magazin') {
    SOURCE[de] = `magazin/${de.slice('/magazin/'.length)}.astro`;
  }
}

function destFile(enPath) {
  if (enPath === '/en') return 'en/index.astro';
  const rest = enPath.replace(/^\/en/, '');
  const indexPaths = new Set(['/services', '/lab-containers', '/industries']);
  if (indexPaths.has(rest)) return `en${rest}/index.astro`;
  return `en${rest}.astro`;
}

const deKeys = Object.keys(DE_TO_EN).sort((a, b) => b.length - a.length);

function rewriteUrls(text) {
  let out = text;
  for (const de of deKeys) {
    const en = DE_TO_EN[de];
    const deUrl = de === '' ? '/' : de;
    if (de === '') {
      out = out.replaceAll('canonical="/"', 'canonical="/en"');
      out = out.replaceAll('"item": "https://planexus.de/"', '"item": "https://planexus.de/en"');
      out = out.replaceAll('"@id": "https://planexus.de/"', '"@id": "https://planexus.de/en"');
      continue;
    }
    out = out.replaceAll(`https://planexus.de${deUrl}`, `https://planexus.de${en}`);
    out = out.replaceAll(`href="${deUrl}"`, `href="${en}"`);
    out = out.replaceAll(`href="${deUrl}#`, `href="${en}#`);
    out = out.replaceAll(`href={\`${deUrl}`, `href={\`${en}`);
    out = out.replaceAll(`canonical="${deUrl}"`, `canonical="${en}"`);
  }
  out = out.replaceAll('href={`/magazin/${post.slug}`}', 'href={post.href}');
  return out;
}

function bumpImports(text) {
  return text
    .replaceAll("from '../../", "from '../../../")
    .replaceAll("from '../", "from '../../");
}

function addLocaleProps(text) {
  return text
    .replaceAll('<ContactForm client:visible />', '<ContactForm client:visible locale="en" />')
    .replaceAll('<ContactForm client:load />', '<ContactForm client:load locale="en" />')
    .replaceAll('<ProjekteGallery client:visible />', '<ProjekteGallery client:visible locale="en" />')
    .replaceAll(/<RelatedArticles slug="([^"]+)" \/>/g, '<RelatedArticles slug="$1" locale="en" />')
    .replaceAll(/<AuthorBio([^>]*)\/>/g, (m, attrs) => (m.includes('locale=') ? m : `<AuthorBio${attrs} locale="en" />`))
    .replaceAll(/<CityCrossLinks current="([^"]+)" \/>/g, '<CityCrossLinks current="$1" locale="en" />');
}

function addInLanguage(text) {
  return text.replaceAll('"inLanguage": "de-DE"', '"inLanguage": "en"');
}

let count = 0;
for (const [de, srcRel] of Object.entries(SOURCE)) {
  const enPath = DE_TO_EN[de];
  if (!enPath) {
    console.warn('missing en path for', de);
    continue;
  }
  const src = path.join(pages, srcRel);
  const destRel = destFile(enPath);
  const dest = path.join(pages, destRel);
  if (!fs.existsSync(src)) {
    console.warn('missing source', srcRel);
    continue;
  }
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  let text = fs.readFileSync(src, 'utf8');
  text = bumpImports(text);
  text = rewriteUrls(text);
  text = addLocaleProps(text);
  text = addInLanguage(text);
  fs.writeFileSync(dest, text);
  count += 1;
  console.log(srcRel, '→', destRel);
}

console.log('copied', count, 'pages');
