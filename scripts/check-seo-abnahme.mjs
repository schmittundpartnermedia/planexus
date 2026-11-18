// Prüft die Abnahmeliste docs/ABNAHME-seo-umsetzung.md gegen dist/ und einen lokal gestarteten Server.
// Aufruf: node scripts/check-seo-abnahme.mjs   (vorher Build; startet dist/server/entry.mjs selbst auf Port 5078)
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { spawn, execFileSync } from 'node:child_process';

const DIST = 'dist/client';
const results = [];
const check = (nr, ok, detail = '') => results.push({ nr, ok: Boolean(ok), detail });

function htmlFiles(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out.push(...htmlFiles(p));
    else if (name.endsWith('.html')) out.push(p);
  }
  return out;
}
const routeOf = (f) => {
  let r = f.slice(DIST.length).replace(/\/index\.html$/, '').replace(/\.html$/, '');
  return r === '' ? '/' : r;
};
const pages = htmlFiles(DIST)
  .map((f) => ({ file: f, route: routeOf(f), html: readFileSync(f, 'utf8') }))
  .filter((p) => !['/404', '/en/404', '/admin'].includes(p.route) && !p.html.includes('http-equiv="refresh"'));
const page = (r) => pages.find((p) => p.route === r);
const text = (h) => h.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ');
const mainOf = (h) => (h.match(/<main[\s\S]*<\/main>/) || [h])[0];
const h1Of = (h) => text((h.match(/<h1[\s\S]*?<\/h1>/) || [''])[0]).trim();
const ldOf = (h) => [...h.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((m) => m[1]);
const sitemap = readdirSync(DIST).filter((n) => /^sitemap-\d+\.xml$/.test(n)).map((n) => readFileSync(join(DIST, n), 'utf8')).join('');

// --- Server-Prüfungen (1, 2, 7)
const srv = spawn('node', ['dist/server/entry.mjs'], { env: { ...process.env, PORT: '5078', HOST: '127.0.0.1' }, stdio: 'ignore' });
const base = 'http://127.0.0.1:5078';
for (let i = 0; i < 40; i++) { try { await fetch(base + '/'); break; } catch { await new Promise((r) => setTimeout(r, 250)); } }
const get = (p) => fetch(base + p, { redirect: 'manual' });
try {
  const r404 = await get('/404');
  const b404 = await r404.text();
  check(1, r404.status === 404 && /noindex/.test(b404), `/404 → ${r404.status}`);
  const u1 = await get('/gibt-es-nicht-xyz'); const u2 = await get('/en/gibt-es-nicht-xyz');
  check(2, u1.status === 404 && u2.status === 404 && /noindex/.test(await u1.text()) && /noindex/.test(await u2.text()), `${u1.status}/${u2.status}`);
  const a1 = await get('/magazin/planexus-analytica-2026-muenchen');
  const a2 = await get('/en/magazine/planexus-analytica-2026-munich');
  const loc1 = a1.headers.get('location') || '', loc2 = a2.headers.get('location') || '';
  const anyLink = pages.some((p) => /href="(https:\/\/planexus\.de)?\/(magazin\/planexus-analytica-2026-muenchen|en\/magazine\/planexus-analytica-2026-munich)"/.test(p.html));
  const inSitemap = /planexus-analytica-2026-(muenchen|munich)</.test(sitemap);
  const hasEvent = pages.some((p) => /"@type":"Event"/.test(p.html));
  check(7, a1.status === 301 && loc1.endsWith('/magazin/analytica-2026-rueckblick-labtogo-premiere') && a2.status === 301 && loc2.endsWith('/en/magazine/analytica-2026-review-labtogo-premiere') && !anyLink && !inSitemap && !hasEvent,
    `${a1.status}→${loc1} | ${a2.status}→${loc2} | Link:${anyLink} Sitemap:${inSitemap} Event:${hasEvent}`);
} finally { srv.kill(); }

// --- Schema (3, 4, 5, 6)
check(3, !pages.some((p) => p.html.includes('AggregateOffer')), pages.filter((p) => p.html.includes('AggregateOffer')).map((p) => p.route).join(' '));
const cityLB = pages.filter((p) => /"name":"Planexus GmbH – (Laborcontainer|Lab containers?) /.test(p.html));
check(4, cityLB.length === 0, cityLB.map((p) => p.route).join(' '));
const badOrg = pages.filter((p) => !(p.html.includes('"@id":"https://planexus.de/#organization"') && /"parentOrganization":\{"@type":"Organization","name":"Wesemann Holding GmbH"/.test(p.html)));
check(5, badOrg.length === 0, `${badOrg.length} Seiten ohne @id/parentOrganization`);
let jsonErr = [], fewTypes = [];
for (const p of pages) {
  const types = new Set();
  for (const j of ldOf(p.html)) {
    try { const walk = (o) => { if (Array.isArray(o)) o.forEach(walk); else if (o && typeof o === 'object') { if (o['@type']) [].concat(o['@type']).forEach((t) => types.add(t)); Object.values(o).forEach(walk); } }; walk(JSON.parse(j)); }
    catch { jsonErr.push(p.route); }
  }
  if (types.size < 3) fewTypes.push(p.route);
}
check(6, jsonErr.length === 0 && fewTypes.length === 0, `JSON-Fehler: ${jsonErr.join(' ')} | <3 Typen: ${fewTypes.join(' ')}`);

// --- 8 Hub-Hero
const hubOk = ['/laborcontainer', '/en/lab-containers'].every((r) => { const h = page(r)?.html || ''; return /<img[^>]*fetchpriority="high"[^>]*srcset=|<img[^>]*srcset=[^>]*fetchpriority="high"/.test(h); });
const small = 'public/attached_assets/Laborcontainer_001_1769688326918-800.webp';
check(8, hubOk && existsSync(small) && statSync(small).size <= 150 * 1024, `img:${hubOk} 800w:${existsSync(small) ? Math.round(statSync(small).size / 1024) + 'KB' : 'fehlt'}`);

// --- 9 Titel/Description
const longT = [], longD = [];
for (const p of pages) {
  const t = (p.html.match(/<title>([^<]*)<\/title>/) || [])[1] || '';
  const core = t.replace(/&amp;/g, '&');
  if (core.length > 60) longT.push(`${p.route}(${core.length})`);
  const d = ((p.html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '').replace(/&amp;/g, '&').replace(/&quot;/g, '"');
  if (d.length > 155) longD.push(`${p.route}(${d.length})`);
}
check(9, !longT.length && !longD.length, `Titel: ${longT.join(' ')} | Desc: ${longD.join(' ')}`);

// --- 10 H1
const h1Need = { '/kontakt': /laborcontainer/i, '/team': /laborcontainer/i, '/ueber-uns': /laborcontainer/i, '/projekte': /laborcontainer/i, '/partner': /laborcontainer|laborbau/i, '/magazin': /laborcontainer|laborbau/i,
  '/en/contact': /lab container/i, '/en/team': /lab container/i, '/en/about': /lab container/i, '/en/projects': /lab container/i, '/en/partners': /lab container|laboratory/i, '/en/magazine': /lab container|laboratory/i,
  '/laborcontainer/labtogo': /LABtoGO[\s\S]*Laborcontainer|Laborcontainer[\s\S]*LABtoGO/, '/en/lab-containers/labtogo': /LABtoGO[\s\S]*lab container|lab container[\s\S]*LABtoGO/i };
const badH1 = Object.entries(h1Need).filter(([r, re]) => !re.test(h1Of(page(r)?.html || ''))).map(([r]) => `${r}: "${h1Of(page(r)?.html || '')}"`);
check(10, !badH1.length, badH1.join(' | '));

// --- 12 Formular ohne Pflicht-Betreff (Quelltext)
const form = readFileSync('src/components/ContactForm.tsx', 'utf8');
const subjRequired = /name="subject"[\s\S]{0,80}required/.test(form);
check(12, !subjRequired, `Betreff Pflicht: ${subjRequired} (Server-Durchlauf siehe PRUEFUNG)`);

// --- 13 Kontaktseite
const k13 = ['/kontakt', '/en/contact'].every((r) => { const h = page(r)?.html || ''; return /data-contact-steps/.test(h) && /data-contact-person/.test(h) && /\/team\//.test(h) && /tel:\+4974357519700/.test(h); });
check(13, k13);

// --- 14 48-h-Satz
const money = ['/laborcontainer', '/laborcontainer-mieten', '/laborcontainer-kaufen', '/laborcontainer/labtogo', '/en/lab-containers', '/en/rent-lab-containers', '/en/buy-lab-containers', '/en/lab-containers/labtogo'];
const no48 = money.filter((r) => !/data-cta-response[^>]*>[^<]*48 (Stunden|hours)/.test(page(r)?.html || ''));
check(14, !no48.length, no48.join(' '));

// --- 15 Anker
const hub = mainOf(page('/laborcontainer')?.html || '');
const homeMain = (page('/')?.html || '').split(/<\/section>/).slice(1).join('</section>');
const a15 = /href="\/laborcontainer-mieten"[^>]*>\s*Laborcontainer mieten\s*</i.test(hub) && /href="\/laborcontainer-kaufen"[^>]*>\s*Laborcontainer kaufen\s*</i.test(hub) && /href="\/laborcontainer"[^>]*>\s*Laborcontainer\s*</.test(homeMain);
check(15, a15);

// --- 16 + 17 Links
const linksIn = (h) => new Set([...mainOf(h).matchAll(/<a\s[^>]*href="(\/[^"#?]*)/g)].map((m) => m[1] || '/'));
const few16 = ['/laborcontainer-mieten', '/laborcontainer-kaufen', '/en/rent-lab-containers', '/en/buy-lab-containers'].filter((r) => linksIn(page(r)?.html || '').size < 10).map((r) => `${r}(${linksIn(page(r)?.html || '').size})`);
check(16, !few16.length, few16.join(' '));
const baseline = { '/magazin/made-in-germany-qualitaet-tempo-laborbau': 2, '/magazin/laborcontainer-katastropheneinsatz-krisenreaktion': 3, '/magazin/pfas-analytik-labor-laborcontainer': 4, '/magazin/anforderungen-laborraeume': 5, '/magazin/wenn-das-neue-labor-zu-spaet-kommt-5-planungsfehler': 5, '/magazin/s1-s2-labor-anforderungen': 6, '/magazin/uebergangslabor-sanierung-mietcontainer': 6, '/magazin/gmp-reinraum-container-pharma-produktion': 25 };
const inbound = {};
for (const p of pages) for (const l of new Set([...p.html.matchAll(/<a\s[^>]*href="(\/[^"#?]*)/g)].map((m) => m[1]))) (inbound[l] ||= new Set()).add(p.route);
const weak = Object.entries(baseline).filter(([r, b]) => (inbound[r]?.size || 0) < b + 2).map(([r, b]) => `${r}(${inbound[r]?.size || 0}, Ziel ${b + 2})`);
check(17, !weak.length, weak.join(' '));

// --- 18 Zuschreibung
const att = ['/', '/projekte', '/en', '/en/projects'].filter((r) => /Mehrgeschossiges Pharmalabor|Multi-storey pharma laboratory|Mehrgeschossiger Laborcontainer|Multi-storey laboratory container/i.test(text(page(r)?.html || '')));
check(18, !att.length, att.join(' '));

// --- 20 Vorschaubild
const defOg = pages.filter((p) => /property="og:image" content="[^"]*opengraph\.jpg"/.test(p.html) && !/^\/(en\/)?(impressum|datenschutz|imprint|privacy)$/.test(p.route));
check(20, defOg.length <= 2, `${defOg.length}: ${defOg.map((p) => p.route).join(' ')}`);

// --- 22 Hero unverändert
let heroSame = false;
try {
  const now = readFileSync('src/pages/index.astro', 'utf8');
  const old = execFileSync('git', ['show', 'fee93a4:src/pages/index.astro'], { encoding: 'utf8' });
  const hero = (s) => (s.match(/<!-- Hero Section -->[\s\S]*?<\/section>/) || [''])[0];
  const heroEn = (s) => (s.match(/<section class="relative min-h-screen[\s\S]*?<\/section>/) || [''])[0];
  const nowEn = readFileSync('src/pages/en/index.astro', 'utf8');
  const oldEn = execFileSync('git', ['show', 'fee93a4:src/pages/en/index.astro'], { encoding: 'utf8' });
  heroSame = hero(now) !== '' && hero(now) === hero(old) && heroEn(nowEn) === heroEn(oldEn);
} catch {}
check(22, heroSame, 'Hero DE/EN gegen Commit fee93a4');

let fail = 0;
for (const r of results.sort((a, b) => a.nr - b.nr)) { if (!r.ok) fail++; console.log(`${r.ok ? 'OK  ' : 'ROT '} Satz ${r.nr}${r.detail ? ' – ' + r.detail : ''}`); }
console.log(`\n${results.length - fail}/${results.length} grün (Sätze 11, 19, 21 werden separat belegt)`);
process.exit(fail ? 1 : 0);
