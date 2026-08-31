export type Locale = 'de' | 'en';

/** Canonical German path (no trailing slash, '' for home) → English path */
export const DE_TO_EN: Record<string, string> = {
  '': '/en',
  '/ueber-uns': '/en/about',
  '/ueber-uns/auszeichnungen': '/en/about/awards',
  '/team': '/en/team',
  '/team/sven-biewald': '/en/team/sven-biewald',
  '/team/thomas-boss': '/en/team/thomas-boss',
  '/leistungen': '/en/services',
  '/leistungen/planung': '/en/services/planning',
  '/leistungen/modulbau': '/en/services/modular-construction',
  '/leistungen/logistik': '/en/services/logistics',
  '/leistungen/ausstattung': '/en/services/equipment',
  '/leistungen/beratung': '/en/services/consulting',
  '/leistungen/smart-lab': '/en/services/smart-lab',
  '/laborcontainer': '/en/lab-containers',
  '/laborcontainer/labtogo': '/en/lab-containers/labtogo',
  '/laborcontainer-mieten': '/en/rent-lab-containers',
  '/laborcontainer-kaufen': '/en/buy-lab-containers',
  '/projekte': '/en/projects',
  '/partner': '/en/partners',
  '/kontakt': '/en/contact',
  '/standorte': '/en/locations',
  '/impressum': '/en/imprint',
  '/datenschutz': '/en/privacy',
  '/branchen': '/en/industries',
  '/branchen/pharma-biotech': '/en/industries/pharma-biotech',
  '/branchen/forschung-hochschule': '/en/industries/research-universities',
  '/branchen/industrie-werkstoffpruefung': '/en/industries/industry-materials-testing',
  '/branchen/bildung': '/en/industries/education',
  '/branchen/public-health-krisenvorsorge': '/en/industries/public-health-emergency-preparedness',
  '/branchen/energiewende-h2-batterie': '/en/industries/energy-transition-h2-battery',
  '/branchen/oel-gas': '/en/industries/oil-gas',
  '/laborcontainer-hamburg': '/en/lab-containers-hamburg',
  '/laborcontainer-berlin': '/en/lab-containers-berlin',
  '/laborcontainer-muenchen': '/en/lab-containers-munich',
  '/laborcontainer-stuttgart': '/en/lab-containers-stuttgart',
  '/laborcontainer-duesseldorf': '/en/lab-containers-dusseldorf',
  '/laborcontainer-frankfurt': '/en/lab-containers-frankfurt',
  '/laborcontainer-zuerich': '/en/lab-containers-zurich',
  '/laborcontainer-basel': '/en/lab-containers-basel',
  '/laborcontainer-bern': '/en/lab-containers-bern',
  '/laborcontainer-wien': '/en/lab-containers-vienna',
  '/laborcontainer-graz': '/en/lab-containers-graz',
  '/laborcontainer-linz': '/en/lab-containers-linz',
  '/magazin': '/en/magazine',
  '/magazin/wenn-das-neue-labor-zu-spaet-kommt-5-planungsfehler':
    '/en/magazine/when-the-new-lab-arrives-too-late-5-planning-mistakes',
  '/magazin/laborcontainer-laborabzug-din-en-14175':
    '/en/magazine/lab-container-fume-hood-din-en-14175',
  '/magazin/laborcontainer-brandschutz-feuerwiderstand':
    '/en/magazine/lab-container-fire-protection',
  '/magazin/laborcontainer-kosten-preise-2026':
    '/en/magazine/lab-container-costs-prices-2026',
  '/magazin/uebergangslabor-sanierung-mietcontainer':
    '/en/magazine/temporary-lab-renovation-rental-containers',
  '/magazin/laborcontainer-aufstellung-bodenplatte-statik':
    '/en/magazine/lab-container-installation-foundation-statics',
  '/magazin/laborcontainer-digitalisierung-lims-iot-remote-monitoring':
    '/en/magazine/lab-container-digitalization-lims-iot-remote-monitoring',
  '/magazin/laborcontainer-baustelle-materialpruefung':
    '/en/magazine/lab-container-construction-site-materials-testing',
  '/magazin/laborcontainer-energiewende-h2-batterie-ex-schutz':
    '/en/magazine/lab-container-energy-transition-h2-battery-ex-protection',
  '/magazin/laborcontainer-katastropheneinsatz-krisenreaktion':
    '/en/magazine/lab-container-disaster-response',
  '/magazin/analytica-2026-rueckblick-labtogo-premiere':
    '/en/magazine/analytica-2026-review-labtogo-premiere',
  '/magazin/laborcontainer-ausstattung-checkliste':
    '/en/magazine/lab-container-equipment-checklist',
  '/magazin/laborcontainer-klimatisierung-lueftung-normen':
    '/en/magazine/lab-container-hvac-ventilation-standards',
  '/magazin/laborcontainer-genehmigung-baurecht-vorschriften':
    '/en/magazine/lab-container-permits-building-law',
  '/magazin/laborcontainer-projektablauf-von-idee-bis-uebergabe':
    '/en/magazine/lab-container-project-process',
  '/magazin/planexus-analytica-2026-muenchen':
    '/en/magazine/planexus-analytica-2026-munich',
  '/magazin/laborcontainer-mieten-oder-kaufen':
    '/en/magazine/lab-containers-rent-or-buy',
  '/magazin/gmp-reinraum-container-pharma-produktion':
    '/en/magazine/gmp-cleanroom-container-pharma-production',
  '/magazin/innovation-modulbau-zukunft-mobiles-labor':
    '/en/magazine/innovation-modular-construction-mobile-lab',
  '/magazin/nachhaltigkeit-laborbau-energieeffizienz':
    '/en/magazine/sustainability-lab-construction-energy-efficiency',
  '/magazin/bsl-2-bsl-3-container-labor': '/en/magazine/bsl-2-bsl-3-container-lab',
};

export const EN_TO_DE: Record<string, string> = Object.fromEntries(
  Object.entries(DE_TO_EN).map(([de, en]) => [en, de === '' ? '/' : de]),
);

export function normalizePath(pathname: string): string {
  if (!pathname || pathname === '/') return '';
  return pathname.replace(/\/+$/, '');
}

export function detectLocale(pathname: string): Locale {
  const path = normalizePath(pathname);
  return path === '/en' || path.startsWith('/en/') ? 'en' : 'de';
}

export function getAlternatePath(pathname: string, locale?: Locale): string {
  const path = normalizePath(pathname);
  const loc = locale ?? detectLocale(path || '/');
  if (loc === 'de') {
    return DE_TO_EN[path] ?? '/en';
  }
  if (path === '/en') return '/';
  return EN_TO_DE[path] ?? '/';
}

export function localizeHref(href: string, locale: Locale): string {
  if (!href.startsWith('/') || href.startsWith('//') || href.startsWith('/api') || href.startsWith('/admin')) {
    return href;
  }
  const path = normalizePath(href);
  if (locale === 'en') {
    if (path === '/en' || path.startsWith('/en/')) return path || '/en';
    return DE_TO_EN[path] ?? '/en';
  }
  if (path === '/en') return '/';
  if (path.startsWith('/en/')) return EN_TO_DE[path] ?? '/';
  return path === '' ? '/' : path;
}

export const CITY_SLUGS: Record<string, { de: string; en: string; nameDe: string; nameEn: string; region: 'DE' | 'CH' | 'AT' }> = {
  hamburg: { de: 'hamburg', en: 'hamburg', nameDe: 'Hamburg', nameEn: 'Hamburg', region: 'DE' },
  berlin: { de: 'berlin', en: 'berlin', nameDe: 'Berlin', nameEn: 'Berlin', region: 'DE' },
  muenchen: { de: 'muenchen', en: 'munich', nameDe: 'München', nameEn: 'Munich', region: 'DE' },
  stuttgart: { de: 'stuttgart', en: 'stuttgart', nameDe: 'Stuttgart', nameEn: 'Stuttgart', region: 'DE' },
  duesseldorf: { de: 'duesseldorf', en: 'dusseldorf', nameDe: 'Düsseldorf', nameEn: 'Düsseldorf', region: 'DE' },
  frankfurt: { de: 'frankfurt', en: 'frankfurt', nameDe: 'Frankfurt', nameEn: 'Frankfurt', region: 'DE' },
  zuerich: { de: 'zuerich', en: 'zurich', nameDe: 'Zürich', nameEn: 'Zurich', region: 'CH' },
  basel: { de: 'basel', en: 'basel', nameDe: 'Basel', nameEn: 'Basel', region: 'CH' },
  bern: { de: 'bern', en: 'bern', nameDe: 'Bern', nameEn: 'Bern', region: 'CH' },
  wien: { de: 'wien', en: 'vienna', nameDe: 'Wien', nameEn: 'Vienna', region: 'AT' },
  graz: { de: 'graz', en: 'graz', nameDe: 'Graz', nameEn: 'Graz', region: 'AT' },
  linz: { de: 'linz', en: 'linz', nameDe: 'Linz', nameEn: 'Linz', region: 'AT' },
};

export function cityHref(slug: keyof typeof CITY_SLUGS | string, locale: Locale): string {
  const city = CITY_SLUGS[slug];
  if (!city) return locale === 'en' ? '/en' : '/';
  return locale === 'en' ? `/en/lab-containers-${city.en}` : `/laborcontainer-${city.de}`;
}

export const CH_PATHS = [
  '/laborcontainer-zuerich',
  '/laborcontainer-basel',
  '/laborcontainer-bern',
  '/en/lab-containers-zurich',
  '/en/lab-containers-basel',
  '/en/lab-containers-bern',
];

export const AT_PATHS = [
  '/laborcontainer-wien',
  '/laborcontainer-graz',
  '/laborcontainer-linz',
  '/en/lab-containers-vienna',
  '/en/lab-containers-graz',
  '/en/lab-containers-linz',
];
