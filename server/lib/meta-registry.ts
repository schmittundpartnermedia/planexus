interface FAQItem {
  question: string;
  answer: string;
}

interface SSRContent {
  h1: string;
  intro: string;
  sections?: { heading: string; content: string }[];
  faqs?: FAQItem[];
  localBusiness?: {
    name: string;
    city: string;
    services: string[];
  };
}

interface PageMeta {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  ogType: string;
  robots: string;
  ssrContent?: SSRContent;
}

export const metaRegistry: Record<string, PageMeta> = {
  "/": {
    title: "Planexus GmbH | Laborcontainer & Modulbau Labor Spezialist",
    description: "Planexus ist Ihr Experte für Laborcontainer, mobile Labore und Modulbau. Über 10 Jahre Erfahrung in Laborplanung, BSL-2/BSL-3 Labore und Containerbau.",
    keywords: "Laborcontainer, Modulbau Labor, Mobiles Labor, Containerlabor, Laborplanung, BSL-2 Labor, BSL-3 Labor",
    canonical: "https://www.planexus.de/",
    ogType: "website",
    robots: "index, follow",
    ssrContent: {
      h1: "Planexus GmbH - Ihr Spezialist für Laborcontainer und Modulbau",
      intro: "Denken. Planen. Verbinden. Planexus ist Ihr Fachplaner für Containerlabore mit mehr als 10 Jahren Erfahrung und über 50 realisierten Projekten. Wir entwickeln intelligente, nachhaltige und modulare Laborlösungen für Forschung und Industrie.",
      sections: [
        { heading: "Laborcontainer Made in Germany", content: "Unsere Laborcontainer werden nach höchsten Qualitätsstandards in Deutschland gefertigt. Von der Planung über die Produktion bis zur schlüsselfertigen Übergabe bieten wir Ihnen alles aus einer Hand." },
        { heading: "BSL-2 und BSL-3 Sicherheitslabore", content: "Wir realisieren mobile Labore aller Sicherheitsstufen. Unsere Container erfüllen die strengen Anforderungen für BSL-2 und BSL-3 Laboratorien mit zertifizierten Sicherheitssystemen." },
        { heading: "Smart Lab Integration", content: "Zukunftsfähige Vernetzung mit IoT-Sensoren, Raumklima-Monitoring und digitalen Workflows. Unsere Smart Lab Lösungen maximieren Effizienz und Compliance." }
      ],
      faqs: [
        { question: "Was kostet ein Laborcontainer?", answer: "Die Kosten für einen Laborcontainer variieren je nach Größe, Ausstattung und Sicherheitsstufe. Kontaktieren Sie uns für ein individuelles Angebot." },
        { question: "Wie lange dauert die Lieferung eines Laborcontainers?", answer: "Die Produktionszeit beträgt in der Regel 8-16 Wochen je nach Komplexität. Transport und Montage erfolgen innerhalb weniger Tage." },
        { question: "Können Laborcontainer gemietet werden?", answer: "Ja, wir bieten flexible Miet- und Leasingmodelle für Laborcontainer an. So können Sie Ihre Investition optimal planen." }
      ],
      localBusiness: {
        name: "Planexus GmbH",
        city: "Albstadt",
        services: ["Laborcontainer", "Modulbau Labor", "BSL-2 Labor", "BSL-3 Labor", "Smart Lab", "Laborplanung"]
      }
    }
  },

  "/about": {
    title: "Über Planexus - Ihre Laborcontainer Experten | Planexus GmbH",
    description: "Lernen Sie Planexus kennen: Pioniere im modularen Laborbau seit 2016. Erfahrung, Innovation und Qualität für Ihre Laborprojekte.",
    keywords: "Planexus, Laborcontainer Hersteller, Modulbau Experten, Sven Biewald, Thomas Boss",
    canonical: "https://www.planexus.de/about",
    ogType: "website",
    robots: "index, follow",
    ssrContent: {
      h1: "Über Planexus - Pioniere im modularen Laborbau",
      intro: "Mit Sven Biewald und Thomas Boss vereint sich in Planexus geballte Kompetenz im Laborbau. Gemeinsam entwickeln wir Laborcontainer-Konzepte, die nicht nur den heutigen Anforderungen gerecht werden, sondern die Zukunft des Laborbaus aktiv mitgestalten.",
      sections: [
        { heading: "Die Historie: Laborcontainer Pionier", content: "Als Sven Biewald 2016 mit seiner damaligen Firma MC Labor auf der Analytica in München den ersten vollfunktionsfähigen Laborcontainer präsentierte, war die Branche skeptisch. Doch er glaubte an seine Idee und behielt recht." },
        { heading: "Innovation im Modulbau", content: "Es wurden neue Maßstäbe im mobilen Laborbau gesetzt – modular, flexibel und zuverlässig. Was einst als Nische galt, wurde zum wegweisenden Modell für moderne Laborlösungen." },
        { heading: "Die Zukunft: Planexus GmbH", content: "Heute steht Planexus für Innovation, Qualität und Zuverlässigkeit im Laborcontainerbau. Mit über 50 realisierten Projekten sind wir Ihr vertrauensvoller Partner." }
      ]
    }
  },

  "/services": {
    title: "Leistungen - Laborcontainer Komplettservice | Planexus GmbH",
    description: "Alle Leistungen von Planexus: Technische Fachplanung, Modulbau, Logistik, Laborausstattung, Beratung und Smart Lab Integration.",
    keywords: "Laborcontainer Leistungen, Laborplanung, Modulbau, Laborausstattung, Smart Lab",
    canonical: "https://www.planexus.de/services",
    ogType: "website",
    robots: "index, follow",
    ssrContent: {
      h1: "Unsere Leistungen - Komplettservice für Laborcontainer",
      intro: "Von der ersten Idee bis zur schlüsselfertigen Übergabe – wir begleiten Sie durch alle Phasen Ihres Laborprojekts. Profitieren Sie von über 10 Jahren Erfahrung im modularen Laborbau.",
      sections: [
        { heading: "Technische Fachplanung Labor", content: "Detaillierte Planung Ihres Laborcontainers unter Berücksichtigung aller Sicherheits- und Effizienzanforderungen. CAD-Zeichnungen, 3D-Visualisierung und TGA-Konzepte." },
        { heading: "Modulbau & Fertigung", content: "Hochwertige Umsetzung in modularer Bauweise. Made in Germany mit Stahlrahmenkonstruktion und labortauglichen Oberflächen." },
        { heading: "Logistik & Montage", content: "Weltweiter Transport und fachgerechte Montage. Schlüsselfertige Übergabe mit Plug & Play Lösungen." },
        { heading: "Laborausstattung", content: "Integration von Labormöbeln, Abzügen, Sicherheitseinrichtungen und Ihrer Laborgeräte." },
        { heading: "Beratung & Genehmigung", content: "Unterstützung bei Genehmigungsverfahren, Baurecht, Arbeitsschutz und Brandschutzkonzepten." },
        { heading: "Smart Lab Integration", content: "Zukunftsfähige Vernetzung mit IoT-Sensoren, Monitoring-Systemen und digitalen Workflows." }
      ]
    }
  },

  "/services/planning": {
    title: "Technische Fachplanung Labor | Planexus GmbH",
    description: "Professionelle Laborplanung für Ihren Laborcontainer. CAD-Zeichnungen, 3D-Visualisierung, TGA-Konzepte und Workflow-Optimierung.",
    keywords: "Laborplanung, CAD Planung Labor, TGA Planung, 3D Visualisierung Labor",
    canonical: "https://www.planexus.de/services/planning",
    ogType: "website",
    robots: "index, follow",
    ssrContent: {
      h1: "Technische Fachplanung für Ihr Labor",
      intro: "Von der ersten Skizze bis zum detaillierten Ausführungsplan: Unsere erfahrenen Ingenieure entwickeln maßgeschneiderte Laborkonzepte, die Ihre wissenschaftlichen Anforderungen perfekt erfüllen.",
      sections: [
        { heading: "CAD-Planung und 3D-Visualisierung", content: "Wir erstellen detaillierte CAD-Zeichnungen und fotorealistische 3D-Visualisierungen, damit Sie Ihr Labor schon vor dem Bau erleben können." },
        { heading: "TGA-Fachplanung", content: "Komplette technische Gebäudeausrüstung: Elektrotechnik, Heizung, Klimatisierung, Lüftung und Sanitär werden perfekt aufeinander abgestimmt." },
        { heading: "Workflow-Optimierung", content: "Wir analysieren Ihre Arbeitsabläufe und optimieren die Raumaufteilung für maximale Effizienz und kurze Wege." }
      ],
      faqs: [
        { question: "Wie lange dauert die Planungsphase?", answer: "Die Planungsphase dauert je nach Komplexität 2-8 Wochen. Wir stimmen jeden Schritt eng mit Ihnen ab." },
        { question: "Welche Unterlagen benötigen Sie von mir?", answer: "Idealerweise Ihre Anforderungen an das Labor, Gerätelisten und vorhandene Standortpläne. Alles Weitere erarbeiten wir gemeinsam." }
      ]
    }
  },

  "/services/construction": {
    title: "Modulbau & Fertigung | Planexus GmbH",
    description: "Hochwertige Laborcontainer Made in Germany. Präzise Fertigung, robuste Stahlrahmenkonstruktion und labortaugliche Oberflächen.",
    keywords: "Modulbau Labor, Laborcontainer Fertigung, Containerbau, Made in Germany",
    canonical: "https://www.planexus.de/services/construction",
    ogType: "website",
    robots: "index, follow",
    ssrContent: {
      h1: "Modulbau & Fertigung - Laborcontainer Made in Germany",
      intro: "Hochwertige Laborcontainer aus deutscher Fertigung. Präzise Verarbeitung, robuste Konstruktion und durchdachte Details für langlebige Qualität.",
      sections: [
        { heading: "Stahlrahmenkonstruktion", content: "Unsere Container basieren auf einer robusten Stahlrahmenkonstruktion, die höchste Stabilität und Langlebigkeit garantiert." },
        { heading: "Labortaugliche Oberflächen", content: "Alle Oberflächen sind chemikalienbeständig, leicht zu reinigen und erfüllen die Anforderungen moderner Laboratorien." },
        { heading: "Qualitätskontrolle", content: "Jeder Fertigungsschritt wird dokumentiert und geprüft. So stellen wir sicher, dass nur einwandfreie Produkte unser Werk verlassen." }
      ]
    }
  },

  "/services/logistics": {
    title: "Logistik & Montage | Planexus GmbH",
    description: "Weltweiter Transport und fachgerechte Montage Ihres Laborcontainers. Schlüsselfertige Übergabe und Inbetriebnahme.",
    keywords: "Laborcontainer Transport, Container Montage, Plug and Play Labor",
    canonical: "https://www.planexus.de/services/logistics",
    ogType: "website",
    robots: "index, follow",
    ssrContent: {
      h1: "Logistik & Montage - Weltweit für Sie im Einsatz",
      intro: "Von der Werkhalle bis zum Einsatzort: Wir organisieren den sicheren Transport Ihres Laborcontainers und übernehmen die fachgerechte Aufstellung und Inbetriebnahme.",
      sections: [
        { heading: "Weltweiter Transport", content: "Ob per LKW, Schiff oder sogar Helikopter – wir bringen Ihren Laborcontainer sicher an jeden Ort der Welt." },
        { heading: "Schnelle Montage", content: "Dank der modularen Bauweise ist Ihr Labor innerhalb weniger Tage aufgestellt und einsatzbereit." },
        { heading: "Schlüsselfertige Übergabe", content: "Wir übergeben Ihnen ein vollständig funktionsfähiges Labor – inklusive aller Medienanschlüsse und Inbetriebnahme." }
      ]
    }
  },

  "/services/equipment": {
    title: "Laborausstattung | Planexus GmbH",
    description: "Komplette Laborausstattung für Ihren Container. Labormöbel, Abzüge, Sicherheitseinrichtungen und Geräteintegration.",
    keywords: "Laborausstattung, Labormöbel, Laborabzug, Sicherheitseinrichtungen Labor",
    canonical: "https://www.planexus.de/services/equipment",
    ogType: "website",
    robots: "index, follow",
    ssrContent: {
      h1: "Laborausstattung - Alles aus einer Hand",
      intro: "Vom Labortisch bis zur Sicherheitseinrichtung: Wir statten Ihren Laborcontainer mit allem aus, was Sie für effizientes und sicheres Arbeiten benötigen.",
      sections: [
        { heading: "Labormöbel nach Maß", content: "Ergonomische Arbeitstische, Unterschränke und Regale – perfekt auf Ihre Anforderungen zugeschnitten." },
        { heading: "Abzugssysteme", content: "Moderne Laborabzüge mit effizienter Absaugung für sicheres Arbeiten mit Gefahrstoffen." },
        { heading: "Sicherheitsausstattung", content: "Augenduschen, Notduschen, Feuerlöscher und Erste-Hilfe-Einrichtungen nach aktuellen Vorschriften." }
      ]
    }
  },

  "/services/consulting": {
    title: "Beratung & Genehmigung | Planexus GmbH",
    description: "Expertenberatung für Laborcontainer-Projekte. Unterstützung bei Genehmigungsverfahren, Baurecht und Arbeitsschutz.",
    keywords: "Laborcontainer Beratung, Baugenehmigung Labor, Arbeitsschutz Labor",
    canonical: "https://www.planexus.de/services/consulting",
    ogType: "website",
    robots: "index, follow",
    ssrContent: {
      h1: "Beratung & Genehmigung - Sicher durch den Behördendschungel",
      intro: "Wir navigieren Sie sicher durch den Dschungel der Vorschriften und Genehmigungsverfahren. Mit unserer Expertise wird Ihr Laborprojekt zum Erfolg.",
      sections: [
        { heading: "Baurechtliche Beratung", content: "Wir klären alle baurechtlichen Fragen und unterstützen Sie bei der Beantragung von Baugenehmigungen." },
        { heading: "Arbeitsschutz", content: "Sicherheit hat oberste Priorität. Wir sorgen dafür, dass Ihr Labor alle Arbeitsschutzvorschriften erfüllt." },
        { heading: "Brandschutzkonzepte", content: "Individuelle Brandschutzkonzepte für Ihren Laborcontainer, abgestimmt auf die örtlichen Anforderungen." }
      ]
    }
  },

  "/services/smart-lab": {
    title: "Smart Lab Integration | Planexus GmbH",
    description: "Intelligente Laborvernetzung mit IoT-Sensoren, Raumklima-Monitoring, Zugangskontrolle und Cloud-Anbindung.",
    keywords: "Smart Lab, IoT Labor, Labormonitoring, Digitales Labor",
    canonical: "https://www.planexus.de/services/smart-lab",
    ogType: "website",
    robots: "index, follow",
    ssrContent: {
      h1: "Smart Lab Integration - Das Labor der Zukunft",
      intro: "Die Zukunft des Labors ist digital. Wir vernetzen Ihren Laborcontainer intelligent und schaffen eine Umgebung, die mitdenkt.",
      sections: [
        { heading: "Raumklima-Monitoring", content: "Permanente Überwachung von Temperatur, Luftfeuchtigkeit und Luftqualität mit automatischer Alarmierung bei Abweichungen." },
        { heading: "Zugangskontrolle", content: "Elektronische Zutrittssysteme mit Protokollierung für maximale Sicherheit und Compliance." },
        { heading: "Cloud-Anbindung", content: "Alle Daten in Echtzeit verfügbar – von überall auf der Welt. Perfekt für verteilte Forscherteams." }
      ],
      faqs: [
        { question: "Können bestehende Geräte integriert werden?", answer: "Ja, wir integrieren Ihre vorhandenen Laborgeräte in das Smart Lab System, sofern diese über entsprechende Schnittstellen verfügen." },
        { question: "Wie sicher sind die Daten?", answer: "Alle Daten werden verschlüsselt übertragen und auf deutschen Servern gespeichert. Wir erfüllen alle Anforderungen der DSGVO." }
      ]
    }
  },

  "/team": {
    title: "Team - Experten für Laborcontainer | Planexus GmbH",
    description: "Das Planexus Team: Sven Biewald und Thomas Boss - Experten für Laborcontainer und Modulbau mit über 10 Jahren Erfahrung.",
    keywords: "Planexus Team, Sven Biewald, Thomas Boss, Laborcontainer Experten",
    canonical: "https://www.planexus.de/team",
    ogType: "website",
    robots: "index, follow",
    ssrContent: {
      h1: "Das Planexus Team - Erfahrung trifft Innovation",
      intro: "Hinter Planexus stehen erfahrene Experten mit Leidenschaft für den Laborbau. Lernen Sie die Menschen kennen, die Ihre Laborträume verwirklichen.",
      sections: [
        { heading: "Sven Biewald - Gesellschafter & Visionär", content: "Der Pionier der modernen Laborcontainer. Mit über einem Jahrzehnt Erfahrung und einem unbändigen Willen zur Innovation treibt er die Vision von Planexus voran." },
        { heading: "Thomas Boss - Gesellschafter & Technik", content: "Der technische Kopf hinter den Kulissen. Seine Expertise garantiert, dass visionäre Ideen in funktionale, robuste Realität umgesetzt werden." }
      ]
    }
  },

  "/contact": {
    title: "Kontakt - Laborcontainer Anfrage | Planexus GmbH",
    description: "Kontaktieren Sie Planexus für Ihr Laborcontainer-Projekt. Beratung, Angebote und Projektstart.",
    keywords: "Planexus Kontakt, Laborcontainer Anfrage, Angebot anfordern",
    canonical: "https://www.planexus.de/contact",
    ogType: "website",
    robots: "index, follow",
    ssrContent: {
      h1: "Kontaktieren Sie uns - Starten Sie Ihr Laborprojekt",
      intro: "Haben Sie Fragen oder möchten Sie ein unverbindliches Angebot? Unser Team freut sich auf Ihre Anfrage und steht Ihnen für alle Fragen rund um Laborcontainer zur Verfügung.",
      sections: [
        { heading: "So erreichen Sie uns", content: "Planexus GmbH, Am Steinbach 8, 72459 Albstadt. Telefon: +49 7435 7519 700, E-Mail: info@planexus.de" },
        { heading: "Schnelle Antwort garantiert", content: "Wir antworten in der Regel innerhalb von 24 Stunden auf Ihre Anfrage. Bei dringenden Projekten erreichen Sie uns auch telefonisch." }
      ],
      localBusiness: {
        name: "Planexus GmbH",
        city: "Albstadt",
        services: ["Laborcontainer", "Modulbau", "Laborplanung", "Beratung"]
      }
    }
  },

  "/magazine": {
    title: "Magazin - Fachwissen Laborcontainer & Modulbau | Planexus GmbH",
    description: "Das Planexus Magazin: Aktuelle Artikel, Fachwissen und Trends zu Laborcontainern, Modulbau und nachhaltiger Laborplanung.",
    keywords: "Laborcontainer Magazin, Fachwissen Modulbau, Labortrends",
    canonical: "https://www.planexus.de/magazine",
    ogType: "website",
    robots: "index, follow",
    ssrContent: {
      h1: "Planexus Magazin - Fachwissen für Laborprofis",
      intro: "Aktuelle Einblicke, Trends und Fachwissen rund um Laborcontainer und Modulbau. Bleiben Sie informiert über die neuesten Entwicklungen im mobilen Laborbau.",
      sections: [
        { heading: "Innovation im Modulbau", content: "Erfahren Sie, wie modulare Bauweisen die Flexibilität in der Forschung erhöhen und warum Containerlabore eine echte Alternative zum Massivbau sind." },
        { heading: "Nachhaltigkeit im Laborbau", content: "Moderne Laborcontainer setzen neue Maßstäbe in Sachen Energieeffizienz. Entdecken Sie nachhaltige Materialien und smarte Klimatechnik." },
        { heading: "BSL-Sicherheitslabore", content: "Sicherheitsstufen im Containerbau sind kein Problem. Wir zeigen, wie BSL-2 und BSL-3 Anforderungen in mobilen Einheiten realisiert werden." }
      ]
    }
  },

  "/magazine/1": {
    title: "Innovation im Modulbau: Die Zukunft des mobilen Labors | Planexus",
    description: "Wie modulare Bauweisen die Flexibilität in der Forschung erhöhen und warum Containerlabore eine echte Alternative zum Massivbau sind.",
    keywords: "Modulbau Labor, mobiles Labor, Containerlabor, Laborinnovation",
    canonical: "https://www.planexus.de/magazine/1",
    ogType: "article",
    robots: "index, follow",
    ssrContent: {
      h1: "Innovation im Modulbau: Die Zukunft des mobilen Labors",
      intro: "Die Forschungslandschaft verändert sich rasant. Flexible, mobile Laborlösungen sind gefragter denn je. Containerlabore bieten eine echte Alternative zum traditionellen Massivbau.",
      sections: [
        { heading: "Warum Modulbau die Zukunft ist", content: "Modulare Labore können in wenigen Wochen errichtet werden, während konventionelle Bauten Monate bis Jahre benötigen. Diese Zeitersparnis ist für dynamische Forschungsprojekte entscheidend." },
        { heading: "Flexibilität als Wettbewerbsvorteil", content: "Laborcontainer können erweitert, umgebaut oder an einen neuen Standort versetzt werden. Diese Flexibilität macht sie ideal für wachsende Unternehmen und temporäre Projekte." }
      ]
    }
  },

  "/magazine/2": {
    title: "Nachhaltigkeit im Laborbau: Energieeffizienz trifft High-Tech | Planexus",
    description: "Moderne Laborcontainer setzen neue Maßstäbe in Sachen Energieeffizienz. Nachhaltige Materialien und smarte Klimatechnik senken den CO2-Fußabdruck.",
    keywords: "Nachhaltigkeit Labor, Energieeffizienz Laborcontainer, grünes Labor",
    canonical: "https://www.planexus.de/magazine/2",
    ogType: "article",
    robots: "index, follow",
    ssrContent: {
      h1: "Nachhaltigkeit im Laborbau: Energieeffizienz trifft High-Tech",
      intro: "Moderne Laborcontainer setzen neue Maßstäbe in Sachen Energieeffizienz. Erfahren Sie, wie nachhaltige Materialien und smarte Klimatechnik den CO2-Fußabdruck senken.",
      sections: [
        { heading: "Energieeffiziente Isolierung", content: "Hochwertige Dämmung reduziert den Energiebedarf für Heizung und Kühlung um bis zu 40%. Das spart Kosten und schont die Umwelt." },
        { heading: "Smarte Klimatechnik", content: "Intelligente Regelungssysteme passen Temperatur und Luftfeuchtigkeit automatisch an – nur so viel Energie wie wirklich nötig." }
      ]
    }
  },

  "/magazine/3": {
    title: "BSL-2 und BSL-3 im Container: Geht das? | Planexus",
    description: "Sicherheitsstufen im Containerbau sind kein Problem mehr. Erfahren Sie, wie höchste Sicherheitsanforderungen in mobilen Einheiten realisiert werden.",
    keywords: "BSL-2 Labor, BSL-3 Labor, Sicherheitslabor Container, Biosafety",
    canonical: "https://www.planexus.de/magazine/3",
    ogType: "article",
    robots: "index, follow",
    ssrContent: {
      h1: "BSL-2 und BSL-3 im Container: Geht das?",
      intro: "Sicherheitsstufen im Containerbau sind kein Problem mehr. Erfahren Sie, wie wir höchste Sicherheitsanforderungen für BSL-2 und BSL-3 Labore in mobilen Einheiten realisieren.",
      sections: [
        { heading: "Was bedeutet BSL-2 und BSL-3?", content: "Biosafety Level 2 und 3 sind internationale Sicherheitsstandards für den Umgang mit Krankheitserregern. Sie definieren strenge Anforderungen an Raumluft, Zugangskontrolle und Dekontamination." },
        { heading: "Technische Umsetzung im Container", content: "Spezielle HEPA-Filter, Unterdrucksysteme und automatische Dekontamination ermöglichen BSL-konforme Labore auch in mobilen Einheiten." }
      ]
    }
  },

  "/impressum": {
    title: "Impressum | Planexus GmbH",
    description: "Impressum der Planexus GmbH - Angaben gemäß § 5 TMG. Laborcontainer und Modulbau Spezialist aus Albstadt.",
    keywords: "Impressum Planexus, Kontaktdaten, Handelsregister",
    canonical: "https://www.planexus.de/impressum",
    ogType: "website",
    robots: "index, follow",
    ssrContent: {
      h1: "Impressum",
      intro: "Angaben gemäß § 5 TMG. Planexus GmbH, Am Steinbach 8, 72459 Albstadt. Vertreten durch: Sven Biewald & Thomas Boss. Handelsregister: HRB 799338, Amtsgericht Stuttgart. USt-IdNr.: DE454507127."
    }
  },

  "/datenschutz": {
    title: "Datenschutzerklärung | Planexus GmbH",
    description: "Datenschutzerklärung der Planexus GmbH - Informationen zum Umgang mit Ihren personenbezogenen Daten gemäß DSGVO.",
    keywords: "Datenschutz Planexus, DSGVO, Datenschutzerklärung",
    canonical: "https://www.planexus.de/datenschutz",
    ogType: "website",
    robots: "index, follow",
    ssrContent: {
      h1: "Datenschutzerklärung",
      intro: "Informationen zum Umgang mit Ihren personenbezogenen Daten gemäß DSGVO. Verantwortliche Stelle: Planexus GmbH, Am Steinbach 8, 72459 Albstadt."
    }
  }
};

export function getMetaForPath(path: string): PageMeta | undefined {
  return metaRegistry[path];
}
