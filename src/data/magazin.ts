export interface MagazinPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
}

export const magazinPosts: MagazinPost[] = [
  {
    id: -15,
    slug: "made-in-germany-qualitaet-tempo-laborbau",
    title: "Made in Germany: Qualität und Tempo im Laborbau vereint",
    excerpt: "Warum Made in Germany im modularen Laborbau kein Widerspruch zu Tempo ist: schlüsselfertige Labore in 8–14 Wochen, GMP-, BSL- und ATEX-konform aus Albstadt-Laufen.",
    date: "22. Juli 2026",
    author: "Sven Biewald",
    category: "Ratgeber",
    image: "/images/blog-made-in-germany-qualitaet-tempo-laborbau.jpg",
  },
  {
    id: -14,
    slug: "wenn-das-neue-labor-zu-spaet-kommt-5-planungsfehler",
    title: "Wenn das neue Labor zu spät kommt: 5 Planungsfehler",
    excerpt: "Die meisten Laborverzögerungen entstehen nicht durch technische Pannen, sondern durch vermeidbare Fehler in der Anfangsphase. Die 5 häufigsten Planungsfehler – und wie Sie sie vermeiden.",
    date: "25. Juni 2026",
    author: "Sven Biewald",
    category: "Ratgeber",
    image: "/images/blog-wenn-das-neue-labor-zu-spaet-kommt-5-planungsfehler.jpg",
  },
  {
    id: -13,
    slug: "laborcontainer-laborabzug-din-en-14175",
    title: "Laborabzüge im Container – Abzugstechnik, Rückhaltevermögen und DIN EN 14175",
    excerpt: "Der Laborabzug ist die wichtigste Schutzeinrichtung im Labor – und im Container der größte Energieverbraucher.",
    date: "16. Juni 2026",
    author: "Thomas Boss",
    category: "Technik & Lüftung",
    image: "/attached_assets/generated_images/laborcontainer-laborabzug-din-en-14175.png",
  },
  {
    id: -12,
    slug: "laborcontainer-brandschutz-feuerwiderstand",
    title: "Brandschutz im Laborcontainer – Feuerwiderstand, Gefahrstofflager und Rettungswege",
    excerpt: "Baulicher, anlagentechnischer und organisatorischer Brandschutz im Laborcontainer.",
    date: "11. Juni 2026",
    author: "Thomas Boss",
    category: "Sicherheit & Brandschutz",
    image: "/attached_assets/generated_images/laborcontainer-brandschutz-feuerwiderstand.png",
  },
  {
    id: -11,
    slug: "laborcontainer-kosten-preise-2026",
    title: "Laborcontainer-Kosten: Was den Preis wirklich bestimmt",
    excerpt: "Welche acht Kostenblöcke ein Projekt aufbauen und wann sich Miete, Kauf oder Mietkauf rechnet.",
    date: "28. Mai 2026",
    author: "Sven Biewald",
    category: "Kosten & Kalkulation",
    image: "/magazin/laborcontainer-kosten-preise-hero.png",
  },
  {
    id: -10,
    slug: "uebergangslabor-sanierung-mietcontainer",
    title: "Übergangslabor bei Sanierung – Mietcontainer als Brückenlösung",
    excerpt: "Generalsanierung ohne Forschungs- oder Produktionsstillstand mit Mietcontainern als Übergangslabor.",
    date: "20. Mai 2026",
    author: "Sven Biewald",
    category: "Mietlösung & Sanierung",
    image: "/magazin/uebergangslabor-sanierung-hero.png",
  },
  {
    id: -9,
    slug: "laborcontainer-aufstellung-bodenplatte-statik",
    title: "Aufstellung, Bodenplatte und Statik für Laborcontainer – der Praxisleitfaden",
    excerpt: "Baugrund, Lastannahmen, Gründungsvarianten und Kran-Logistik für Laborcontainer.",
    date: "14. Mai 2026",
    author: "Sven Biewald",
    category: "Bau & Gründung",
    image: "/attached_assets/generated_images/laborcontainer-aufstellung-kran-bodenplatte.png",
  },
  {
    id: -8,
    slug: "laborcontainer-digitalisierung-lims-iot-remote-monitoring",
    title: "Digitalisierung im Laborcontainer – LIMS, IoT-Sensoren & Remote-Monitoring",
    excerpt: "Smart Lab im Container: LIMS-Integration, IoT-Sensorik und 24/7-Remote-Monitoring.",
    date: "7. Mai 2026",
    author: "Sven Biewald",
    category: "Digitalisierung & Smart Lab",
    image: "/attached_assets/Kopf_green-scaled_1768306688943.jpg",
  },
  {
    id: -7,
    slug: "laborcontainer-baustelle-materialpruefung",
    title: "Laborcontainer auf der Baustelle – Mobile Materialprüfung & Qualitätssicherung",
    excerpt: "Wie ein Containerlabor direkt auf der Baustelle Prüffenster einhält.",
    date: "30. April 2026",
    author: "Sven Biewald",
    category: "Bau & Materialprüfung",
    image: "/images/magazin/baustellenlabor-materialpruefung.jpg",
  },
  {
    id: -6,
    slug: "laborcontainer-energiewende-h2-batterie-ex-schutz",
    title: "Laborcontainer für H₂-Forschung & Batterietests – Ex-Schutz, Gasdetektion und Förderung",
    excerpt: "Wasserstoff- und Batterielabore im Container: ATEX-Zonen, H₂-Gasdetektion und Förderung.",
    date: "20. April 2026",
    author: "Sven Biewald",
    category: "Energiewende & Ex-Schutz",
    image: "/images/magazin/h2-batterie-laborcontainer.webp",
  },
  {
    id: -5,
    slug: "laborcontainer-katastropheneinsatz-krisenreaktion",
    title: "Laborcontainer im Katastropheneinsatz – Schnelle Laborkapazität bei Krisen & Pandemien",
    excerpt: "Autarke Laborcontainer innerhalb von 48 Stunden vollwertige Analytik vor Ort.",
    date: "9. April 2026",
    author: "Redaktion Planexus",
    category: "Katastrophenschutz",
    image: "/images/blog-laborcontainer-katastropheneinsatz.jpg",
  },
  {
    id: -4,
    slug: "analytica-2026-rueckblick-labtogo-premiere",
    title: "analytica 2026 — Planexus präsentiert den LABtoGO",
    excerpt: "Rückblick auf die Weltpremiere des LABtoGO auf der analytica 2026 in München.",
    date: "2. April 2026",
    author: "Sven Biewald",
    category: "Messe & Events",
    image: "/images/analytica-2026/hero.jpg",
  },
  {
    id: -3,
    slug: "laborcontainer-ausstattung-checkliste",
    title: "Laborcontainer Ausstattung – Die komplette Checkliste von A bis Z",
    excerpt: "Labormöbel, Medienversorgung, Sicherheitseinrichtungen – was ein Laborcontainer wirklich braucht.",
    date: "12. März 2026",
    author: "Sven Biewald",
    category: "Ratgeber",
    image: "/images/blog-laborcontainer-ausstattung.jpg",
  },
  {
    id: -2,
    slug: "laborcontainer-klimatisierung-lueftung-normen",
    title: "Klimatisierung im Laborcontainer – Temperatur, Lüftung & Normen",
    excerpt: "DIN 1946-7, TRGS 526, HEPA-Filtration und Unterdruckkonzepte im Containerlabor.",
    date: "5. März 2026",
    author: "Sven Biewald",
    category: "Technik & Normen",
    image: "/images/blog-laborcontainer-klimatisierung.jpg",
  },
  {
    id: -1,
    slug: "laborcontainer-genehmigung-baurecht-vorschriften",
    title: "Laborcontainer Genehmigung – Baurecht, Vorschriften & Praxisleitfaden",
    excerpt: "16 Landesbauordnungen, Sonderfälle für Labore und häufige Genehmigungsfehler.",
    date: "26. Februar 2026",
    author: "Sven Biewald",
    category: "Ratgeber",
    image: "/images/blog-laborcontainer-genehmigung.jpg",
  },
  {
    id: 0,
    slug: "laborcontainer-projektablauf-von-idee-bis-uebergabe",
    title: "Von der Idee bis zur Übergabe – So läuft ein Laborcontainer-Projekt ab",
    excerpt: "Der komplette Projektablauf mit Zeitplan und Checkliste für Auftraggeber.",
    date: "18. Februar 2026",
    author: "Sven Biewald",
    category: "Ratgeber",
    image: "/images/blog-laborcontainer-projektablauf.jpg",
  },
  {
    id: 1,
    slug: "planexus-analytica-2026-muenchen",
    title: "Labore der Zukunft: Planexus auf der Analytica 2026 in München",
    excerpt: "Modulare Labore, Smart Lab Integration und nachhaltige Lösungen auf der analytica 2026.",
    date: "11. Februar 2026",
    author: "Sven Biewald",
    category: "Messe & Events",
    image: "/attached_assets/planexus-messe-analytica-2026-muenchen_1770786130636.png",
  },
  {
    id: 2,
    slug: "laborcontainer-mieten-oder-kaufen",
    title: "Laborcontainer mieten vs. kaufen: Der Entscheidungsguide für Forschungsleiter",
    excerpt: "Break-Even-Faustformel, Entscheidungsmatrix und Praxis-Checkliste für Miete vs. Kauf.",
    date: "10. Februar 2026",
    author: "Sven Biewald",
    category: "Ratgeber",
    image: "/images/blog-laborcontainer-mieten-oder-kaufen.jpg",
  },
  {
    id: 3,
    slug: "gmp-reinraum-container-pharma-produktion",
    title: "GMP-Reinraum im Container: Pharmazeutische Produktion auf kleinstem Raum",
    excerpt: "Was GMP-konforme Container-Reinräume leisten, was sie kosten und wo die Grenzen liegen.",
    date: "10. Februar 2026",
    author: "Thomas Boss",
    category: "Pharma & Biotech",
    image: "/images/backgrounds/magazin-gmp-reinraum.webp",
  },
  {
    id: 4,
    slug: "innovation-modulbau-zukunft-mobiles-labor",
    title: "Innovation im Modulbau: Die Zukunft des mobilen Labors",
    excerpt: "Warum Containerlabore eine echte Alternative zum Massivbau sind.",
    date: "12. Januar 2026",
    author: "Sven Biewald",
    category: "Technologie",
    image: "/images/backgrounds/magazin-innovation-modulbau.webp",
  },
  {
    id: 5,
    slug: "nachhaltigkeit-laborbau-energieeffizienz",
    title: "Nachhaltigkeit im Laborbau: Energieeffizienz trifft High-Tech",
    excerpt: "Nachhaltige Materialien und smarte Klimatechnik senken den CO2-Fußabdruck.",
    date: "05. Januar 2026",
    author: "Thomas Boss",
    category: "Nachhaltigkeit",
    image: "/images/backgrounds/lab-ausstattung.webp",
  },
  {
    id: 6,
    slug: "bsl-2-bsl-3-container-labor",
    title: "BSL-2 und BSL-3 im Container: Geht das?",
    excerpt: "Wie höchste Sicherheitsanforderungen in mobilen Einheiten realisiert werden.",
    date: "20. Dezember 2025",
    author: "Redaktion Planexus",
    category: "Sicherheit",
    image: "/images/backgrounds/magazin-bsl-labor.webp",
  },
];

/** Thematische Verwandtschaft – 3 Slugs pro Artikel */
const relatedSlugsMap: Record<string, string[]> = {
  "made-in-germany-qualitaet-tempo-laborbau": [
    "innovation-modulbau-zukunft-mobiles-labor",
    "gmp-reinraum-container-pharma-produktion",
    "laborcontainer-projektablauf-von-idee-bis-uebergabe",
  ],
  "wenn-das-neue-labor-zu-spaet-kommt-5-planungsfehler": [
    "laborcontainer-projektablauf-von-idee-bis-uebergabe",
    "laborcontainer-genehmigung-baurecht-vorschriften",
    "laborcontainer-kosten-preise-2026",
  ],
  "laborcontainer-laborabzug-din-en-14175": [
    "laborcontainer-klimatisierung-lueftung-normen",
    "laborcontainer-ausstattung-checkliste",
    "laborcontainer-brandschutz-feuerwiderstand",
  ],
  "laborcontainer-brandschutz-feuerwiderstand": [
    "bsl-2-bsl-3-container-labor",
    "laborcontainer-genehmigung-baurecht-vorschriften",
    "laborcontainer-ausstattung-checkliste",
  ],
  "laborcontainer-kosten-preise-2026": [
    "laborcontainer-mieten-oder-kaufen",
    "laborcontainer-ausstattung-checkliste",
    "laborcontainer-projektablauf-von-idee-bis-uebergabe",
  ],
  "uebergangslabor-sanierung-mietcontainer": [
    "laborcontainer-mieten-oder-kaufen",
    "laborcontainer-genehmigung-baurecht-vorschriften",
    "laborcontainer-projektablauf-von-idee-bis-uebergabe",
  ],
  "laborcontainer-aufstellung-bodenplatte-statik": [
    "laborcontainer-genehmigung-baurecht-vorschriften",
    "laborcontainer-projektablauf-von-idee-bis-uebergabe",
    "laborcontainer-baustelle-materialpruefung",
  ],
  "laborcontainer-digitalisierung-lims-iot-remote-monitoring": [
    "innovation-modulbau-zukunft-mobiles-labor",
    "gmp-reinraum-container-pharma-produktion",
    "laborcontainer-ausstattung-checkliste",
  ],
  "laborcontainer-baustelle-materialpruefung": [
    "laborcontainer-genehmigung-baurecht-vorschriften",
    "laborcontainer-aufstellung-bodenplatte-statik",
    "laborcontainer-katastropheneinsatz-krisenreaktion",
  ],
  "laborcontainer-energiewende-h2-batterie-ex-schutz": [
    "laborcontainer-brandschutz-feuerwiderstand",
    "bsl-2-bsl-3-container-labor",
    "laborcontainer-klimatisierung-lueftung-normen",
  ],
  "laborcontainer-katastropheneinsatz-krisenreaktion": [
    "bsl-2-bsl-3-container-labor",
    "laborcontainer-klimatisierung-lueftung-normen",
    "laborcontainer-baustelle-materialpruefung",
  ],
  "analytica-2026-rueckblick-labtogo-premiere": [
    "planexus-analytica-2026-muenchen",
    "innovation-modulbau-zukunft-mobiles-labor",
    "laborcontainer-ausstattung-checkliste",
  ],
  "laborcontainer-ausstattung-checkliste": [
    "laborcontainer-klimatisierung-lueftung-normen",
    "laborcontainer-genehmigung-baurecht-vorschriften",
    "laborcontainer-projektablauf-von-idee-bis-uebergabe",
  ],
  "laborcontainer-klimatisierung-lueftung-normen": [
    "laborcontainer-laborabzug-din-en-14175",
    "laborcontainer-ausstattung-checkliste",
    "bsl-2-bsl-3-container-labor",
  ],
  "laborcontainer-genehmigung-baurecht-vorschriften": [
    "laborcontainer-projektablauf-von-idee-bis-uebergabe",
    "laborcontainer-aufstellung-bodenplatte-statik",
    "laborcontainer-mieten-oder-kaufen",
  ],
  "laborcontainer-projektablauf-von-idee-bis-uebergabe": [
    "laborcontainer-genehmigung-baurecht-vorschriften",
    "laborcontainer-kosten-preise-2026",
    "wenn-das-neue-labor-zu-spaet-kommt-5-planungsfehler",
  ],
  "planexus-analytica-2026-muenchen": [
    "analytica-2026-rueckblick-labtogo-premiere",
    "innovation-modulbau-zukunft-mobiles-labor",
    "gmp-reinraum-container-pharma-produktion",
  ],
  "laborcontainer-mieten-oder-kaufen": [
    "laborcontainer-kosten-preise-2026",
    "uebergangslabor-sanierung-mietcontainer",
    "laborcontainer-projektablauf-von-idee-bis-uebergabe",
  ],
  "gmp-reinraum-container-pharma-produktion": [
    "bsl-2-bsl-3-container-labor",
    "laborcontainer-klimatisierung-lueftung-normen",
    "laborcontainer-digitalisierung-lims-iot-remote-monitoring",
  ],
  "innovation-modulbau-zukunft-mobiles-labor": [
    "nachhaltigkeit-laborbau-energieeffizienz",
    "laborcontainer-digitalisierung-lims-iot-remote-monitoring",
    "bsl-2-bsl-3-container-labor",
  ],
  "nachhaltigkeit-laborbau-energieeffizienz": [
    "innovation-modulbau-zukunft-mobiles-labor",
    "laborcontainer-klimatisierung-lueftung-normen",
    "laborcontainer-energiewende-h2-batterie-ex-schutz",
  ],
  "bsl-2-bsl-3-container-labor": [
    "gmp-reinraum-container-pharma-produktion",
    "laborcontainer-katastropheneinsatz-krisenreaktion",
    "laborcontainer-brandschutz-feuerwiderstand",
  ],
};

export function getRelatedArticles(currentSlug: string, count = 3): MagazinPost[] {
  const bySlug = new Map(magazinPosts.map((post) => [post.slug, post]));
  const current = bySlug.get(currentSlug);
  const manual = relatedSlugsMap[currentSlug] ?? [];
  const picked: MagazinPost[] = [];

  for (const slug of manual) {
    if (slug === currentSlug) continue;
    const post = bySlug.get(slug);
    if (post && !picked.some((p) => p.slug === slug)) {
      picked.push(post);
    }
    if (picked.length >= count) return picked;
  }

  if (current) {
    for (const post of magazinPosts) {
      if (post.slug === currentSlug) continue;
      if (post.category !== current.category) continue;
      if (picked.some((p) => p.slug === post.slug)) continue;
      picked.push(post);
      if (picked.length >= count) return picked;
    }
  }

  for (const post of magazinPosts) {
    if (post.slug === currentSlug) continue;
    if (picked.some((p) => p.slug === post.slug)) continue;
    picked.push(post);
    if (picked.length >= count) return picked;
  }

  return picked;
}
