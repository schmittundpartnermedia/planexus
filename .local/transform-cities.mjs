import { readFileSync, writeFileSync } from 'fs';

const cities = {
  berlin: {
    title: 'Forschungslabore Berlin – Hightech-Module | Planexus GmbH',
    description: 'Containerlabore für Berlins Forschungslandschaft: Charité, MDC, BIH, Adlershof. BSL-2/BSL-3, modulare Reinräume. Jetzt Projekt besprechen.',
    leistungenH2: 'Von der Planung bis zur betriebsfertigen Übergabe',
    leistungenText: 'Projekte in Berlin betreuen wir von der Fachplanung über die Fertigung bis zur Aufstellung auf dem Campus. Ob Charité-Gelände, Adlershof oder Buch – wir stimmen jedes Detail auf Ihren Standort ab. Transport per Tieflader über die A9, Kranaufstellung auch auf beengten Klinikarealen, Laborausstattung eingebaut und betriebsbereit.',
    h2Map: {
      'Wo Laborcontainer in Berlin gebraucht werden': 'Forschung, Klinik, Industrie – vier Szenarien in Berlin',
      'Berlin als Laborstandort – Branchen und Forschung': 'Berlins Forschungsökosystem – Charité, Buch und Adlershof',
      'Baurecht und Genehmigung in Berlin': 'BauO Bln und Senatsverwaltung – Genehmigungswege in Berlin',
      'Warum Planexus für Berlin': 'Wesemann-Know-how für die Hauptstadtforschung',
      'Häufige Fragen zu Laborcontainern in Berlin': 'FAQ: Containerlabore für Berlin und Brandenburg',
    },
    ctaH2: 'Forschungsprojekt in Berlin? Sprechen wir darüber.',
    ctaText: 'Ob Charité-Erweiterung, Biotech-Labor in Buch oder Analytik in Adlershof – erzählen Sie uns, was Sie planen.',
    gutZuWissen: {
      h2: 'Berlin in Zahlen – Forschungshauptstadt mit Laborbedarf',
      subtitle: 'Sechs Fakten zur Berliner Forschungslandschaft und warum mobile Labore hier unverzichtbar sind.',
      facts: [
        { title: 'Charité: Europas größte Uniklinik', text: 'Über 100 Kliniken und Institute auf vier Campi – der Bedarf an Interims- und Erweiterungslaboren ist hier dauerhaft hoch.' },
        { title: 'Adlershof: Deutschlands größter Wissenschaftspark', text: 'Über 1.200 Unternehmen und 10 außeruniversitäre Forschungseinrichtungen auf 4,2 km² – Laborfläche ist permanent knapp.' },
        { title: 'Campus Buch: 80+ Biotech-Firmen', text: 'Das MDC und das BIH bilden zusammen mit Dutzenden Startups eines der dichtesten Biotech-Cluster Europas.' },
        { title: 'BauO Bln: Oft genehmigungsfrei', text: 'Temporäre bauliche Anlagen können nach Berliner Bauordnung ohne Baugenehmigung aufgestellt werden. Wir klären das mit dem Bezirksamt.' },
        { title: '280+ Biotech-Unternehmen', text: 'Berlin ist nach München der zweitgrößte Biotech-Standort Deutschlands. Drug Discovery, Diagnostik, Gentherapie – alles braucht Laborfläche.' },
        { title: 'Transport über die A9', text: 'Von unserem Werk nach Berlin per Tieflader in einem Tag. Aufstellung und Inbetriebnahme planen wir gemeinsam mit Ihnen.' },
      ]
    },
    crossLinks: [
      { href: '/laborcontainer-hamburg', label: 'Hamburg' },
      { href: '/laborcontainer-frankfurt', label: 'Frankfurt' },
      { href: '/laborcontainer-duesseldorf', label: 'Düsseldorf' },
    ],
  },
  muenchen: {
    title: 'Laborbau München – Reinräume & BSL-Labore | Planexus GmbH',
    description: 'Modulare Containerlabore für München: TUM, LMU, Helmholtz, Pharma-Cluster Martinsried. GMP-Reinräume, BSL-2/BSL-3. Jetzt anfragen.',
    leistungenH2: 'Von der Planung bis zur betriebsfertigen Übergabe',
    leistungenText: 'Für Projekte im Großraum München übernehmen wir den gesamten Prozess: Fachplanung mit GMP-Konzepten für Martinsried, Fertigung in unserem Werk, Transport über die A8 und Kranaufstellung auch auf engen Klinik- und Campusgeländen. Laborausstattung wird eingebaut und betriebsbereit übergeben.',
    h2Map: {
      'Wo Laborcontainer in München gebraucht werden': 'Zwischen Isar und Alpen – vier Laborszenarien für München',
      'München als Laborstandort – Branchen und Forschung': 'Pharma-Cluster Martinsried, TUM und LMU – Münchens Forschungslandschaft',
      'Baurecht und Genehmigung in München': 'BayBO und Lokalbaukommission – Genehmigungswege in München',
      'Warum Planexus für München': 'Wesemann-Qualität für Bayerns Forschungselite',
      'Häufige Fragen zu Laborcontainern in München': 'FAQ: Containerlabore für München und Oberbayern',
    },
    ctaH2: 'Laborprojekt in München? Lassen Sie uns planen.',
    ctaText: 'Ob GMP-Reinraum in Martinsried, BSL-3-Erweiterung am Klinikum oder Interimslabor an der TUM – wir hören zu.',
    gutZuWissen: {
      h2: 'München in Zahlen – Deutschlands Pharma-Hauptstadt',
      subtitle: 'Sechs Fakten, die erklären, warum München einer der laborintensivsten Standorte Europas ist.',
      facts: [
        { title: 'Martinsried: Europas dichtestes Biotech-Cluster', text: 'Über 350 Biotech- und Pharma-Unternehmen im Raum München, viele davon auf dem Campus Martinsried-Großhadern konzentriert.' },
        { title: 'TUM & LMU: Zwei Exzellenz-Universitäten', text: 'Beide zählen zu den forschungsstärksten Universitäten Europas. Chemie, Physik, Medizin – der Laborbedarf ist enorm.' },
        { title: 'Helmholtz Zentrum München', text: 'Das Zentrum für Gesundheitsforschung arbeitet an Diabetes, Lungenerkrankungen und Umweltmedizin – mit steigendem Bedarf an Spezialaboren.' },
        { title: 'BayBO: Verfahrensfreiheit möglich', text: 'Die Bayerische Bauordnung erlaubt temporäre Anlagen oft ohne Genehmigung. Wir klären die Details mit der Lokalbaukommission.' },
        { title: 'Klinikum rechts der Isar', text: 'Eines der größten Universitätskliniken Deutschlands mit permanentem Bedarf an klinischen Forschungslaboren.' },
        { title: 'Transport über die A8', text: 'Von unserem Werk nach München in wenigen Stunden. Kürzeste Lieferstrecke aller Großstädte – Aufstellung am selben Tag möglich.' },
      ]
    },
    crossLinks: [
      { href: '/laborcontainer-stuttgart', label: 'Stuttgart' },
      { href: '/laborcontainer-frankfurt', label: 'Frankfurt' },
      { href: '/laborcontainer-wien', label: 'Wien' },
    ],
  },
  stuttgart: {
    title: 'Containerlabore Stuttgart – Automotive & Engineering | Planexus GmbH',
    description: 'Laborcontainer für Stuttgart: Automotive-Analytik, Werkstoffprüfung, Uni-Forschung. BSL-2, Reinräume. Direkt aus dem Werk in Albstadt.',
    leistungenH2: 'Von der Planung bis zur betriebsfertigen Übergabe',
    leistungenText: 'Stuttgart ist unser Heimatmarkt – nur 80 km von unserem Werk in Albstadt. Das heißt: kurze Wege, schnelle Reaktionszeiten, persönliche Betreuung vor Ort. Fachplanung, Fertigung, Transport und Aufstellung aus einer Hand. Laborausstattung wird eingebaut und betriebsbereit übergeben.',
    h2Map: {
      'Wo Laborcontainer in Stuttgart gebraucht werden': 'Automobil, Werkstoffe, Forschung – Laborszenarien für Stuttgart',
      'Stuttgart als Laborstandort – Branchen und Forschung': 'Engineering-Hochburg Stuttgart – Fraunhofer, DLR und Automobilindustrie',
      'Baurecht und Genehmigung in Stuttgart': 'LBO Baden-Württemberg – kurze Wege zur Genehmigung',
      'Warum Planexus für Stuttgart': '80 km vom Werk – Stuttgarts Laborpartner vor der Haustür',
      'Häufige Fragen zu Laborcontainern in Stuttgart': 'FAQ: Containerlabore für Stuttgart und Baden-Württemberg',
    },
    ctaH2: 'Laborprojekt in Stuttgart? Wir sind um die Ecke.',
    ctaText: 'Automotive-Analytik, Werkstoffprüfung oder ein Forschungslabor an der Uni – 80 km von unserem Werk entfernt. Sprechen Sie mit uns.',
    gutZuWissen: {
      h2: 'Stuttgart in Zahlen – Engineering-Hauptstadt mit Laborbedarf',
      subtitle: 'Sechs Fakten zu Stuttgarts Industrie- und Forschungslandschaft.',
      facts: [
        { title: '80 km vom Planexus-Werk', text: 'Stuttgart ist unser nächstgelegener Großstandort. Transport, Aufstellung und Service – alles innerhalb eines Tages vor Ort.' },
        { title: 'Fraunhofer-Hochburg', text: 'Sechs Fraunhofer-Institute in Stuttgart – IPA, IAO, IBP, IGB, ICT, ISI. Werkstoffprüfung, Produktionstechnik und Bauphysik erzeugen ständig Laborbedarf.' },
        { title: 'Mercedes, Porsche, Bosch', text: 'Die Automobilindustrie braucht Analytiklabore für Werkstoffe, Emissionen und Batteriezellen – oft schneller als ein Neubau es erlaubt.' },
        { title: 'Universität Stuttgart & Vaihingen', text: 'Der Campus Vaihingen vereint Naturwissenschaften und Engineering. Interimslabore während Sanierungen sind hier Dauerthema.' },
        { title: 'LBO BW: Verfahrensfreiheit unter 5 m Höhe', text: 'Die Landesbauordnung Baden-Württemberg erlaubt temporäre Anlagen oft genehmigungsfrei. Wir kennen die Vorschriften im Detail.' },
        { title: 'DLR Stuttgart', text: 'Das Deutsche Zentrum für Luft- und Raumfahrt forscht hier an Verbundwerkstoffen und Antriebstechnologien – Speziallabore inklusive.' },
      ]
    },
    crossLinks: [
      { href: '/laborcontainer-muenchen', label: 'München' },
      { href: '/laborcontainer-frankfurt', label: 'Frankfurt' },
      { href: '/laborcontainer-zuerich', label: 'Zürich' },
    ],
  },
  duesseldorf: {
    title: 'Containerlabore Düsseldorf – Chemie & Material | Planexus GmbH',
    description: 'Laborcontainer für Düsseldorf: Chemie-Analytik, Materialprüfung, Pharma-QC. Henkel, Bayer-Nachbarn, Uni-Klinik. Jetzt Projekt besprechen.',
    leistungenH2: 'Von der Planung bis zur betriebsfertigen Übergabe',
    leistungenText: 'Projekte im Rheinland betreuen wir von der Fachplanung über die Fertigung bis zur Aufstellung. Transport über die A61, Kranaufstellung auch auf engen Industriegeländen entlang des Rheins. Laborausstattung – Abzüge, Sicherheitswerkbänke, Klimatechnik – wird eingebaut und betriebsbereit übergeben.',
    h2Map: {
      'Wo Laborcontainer in Düsseldorf gebraucht werden': 'Chemie, Pharma, Klinik – vier Laborszenarien am Rhein',
      'Düsseldorf als Laborstandort – Branchen und Forschung': 'Chemie-Achse Rheinland – Düsseldorfs Industrie und Forschung',
      'Baurecht und Genehmigung in Düsseldorf': 'BauO NRW und Bezirksregierung – Genehmigungswege in Düsseldorf',
      'Warum Planexus für Düsseldorf': 'Wesemann-Kompetenz für das Rheinland',
      'Häufige Fragen zu Laborcontainern in Düsseldorf': 'FAQ: Containerlabore für Düsseldorf und das Rheinland',
    },
    ctaH2: 'Laborprojekt am Rhein? Sprechen wir darüber.',
    ctaText: 'Ob Chemie-Analytik in Holthausen, Pharma-QC in Hilden oder Forschungslabor an der HHU – erzählen Sie uns, was Sie brauchen.',
    gutZuWissen: {
      h2: 'Düsseldorf in Zahlen – Chemie-Korridor am Rhein',
      subtitle: 'Sechs Fakten zu Düsseldorfs Industrie- und Forschungslandschaft.',
      facts: [
        { title: 'Henkel-Hauptsitz in Holthausen', text: 'Europas größter Klebstoffhersteller forscht und produziert in Düsseldorf. QC-Labore und Analytik sind Dauerbedarf.' },
        { title: 'Chemie-Achse Leverkusen–Dormagen–Krefeld', text: 'Im Umkreis von 40 km liegen Currenta, Lanxess, Covestro und Ineos. Jedes Werk braucht regelmäßig Erweiterungskapazität für Analytik.' },
        { title: 'Universitätsklinikum Düsseldorf', text: 'Eines der größten Klinikzentren in NRW. Klinische Forschung, Virologie und Pathologie erzeugen permanenten Laborbedarf.' },
        { title: 'BauO NRW: Verfahrensfreiheit für temporäre Anlagen', text: 'Die Bauordnung Nordrhein-Westfalens kennt Verfahrensfreiheit für nicht dauerhafte bauliche Anlagen. Wir klären die Details.' },
        { title: 'Heinrich-Heine-Universität', text: 'Medizin, Pharmazie, Chemie und Biologie – die HHU forscht intensiv und braucht regelmäßig flexible Laborfläche.' },
        { title: 'Transport über die A61', text: 'Von unserem Werk nach Düsseldorf in einem Tag. Aufstellung per Kran – auch auf beengten Industriegeländen am Rhein.' },
      ]
    },
    crossLinks: [
      { href: '/laborcontainer-frankfurt', label: 'Frankfurt' },
      { href: '/laborcontainer-hamburg', label: 'Hamburg' },
      { href: '/laborcontainer-berlin', label: 'Berlin' },
    ],
  },
  frankfurt: {
    title: 'Laborlösungen Frankfurt – Chemie & Analytik | Planexus GmbH',
    description: 'Containerlabore für Frankfurt: Pharma, Chemie-Analytik, Uni-Forschung. Industriepark Höchst, Goethe-Uni. BSL-2/BSL-3. Jetzt anfragen.',
    leistungenH2: 'Von der Planung bis zur betriebsfertigen Übergabe',
    leistungenText: 'Frankfurter Projekte betreuen wir von der Fachplanung bis zur Aufstellung. Transport über die A5/A81, Kranaufstellung auf Industriepark-Geländen und Uni-Campi. Laborausstattung – Abzüge, Werkbänke, Klimatechnik – eingebaut und betriebsbereit übergeben.',
    h2Map: {
      'Wo Laborcontainer in Frankfurt gebraucht werden': 'Pharma-Hub, Klinik, Campus – vier Laborszenarien in Frankfurt',
      'Frankfurt als Laborstandort – Branchen und Forschung': 'Industriepark Höchst, Goethe-Uni und Pharma – Frankfurts Laborlandschaft',
      'Baurecht und Genehmigung in Frankfurt': 'HBO Hessen und Bauaufsicht – Genehmigungswege in Frankfurt',
      'Warum Planexus für Frankfurt': 'Wesemann-Erfahrung für Frankfurts Industrie und Forschung',
      'Häufige Fragen zu Laborcontainern in Frankfurt': 'FAQ: Containerlabore für Frankfurt und Rhein-Main',
    },
    ctaH2: 'Laborprojekt in Frankfurt? Lassen Sie uns planen.',
    ctaText: 'Ob Pharma-Analytik im Industriepark Höchst, Forschungslabor an der Goethe-Uni oder BSL-2-Container am Klinikum – wir sind bereit.',
    gutZuWissen: {
      h2: 'Frankfurt in Zahlen – Pharma-Standort mit Tradition',
      subtitle: 'Sechs Fakten zu Frankfurts Chemie- und Pharmalandschaft.',
      facts: [
        { title: 'Industriepark Höchst: 90 Unternehmen', text: 'Einer der größten Pharma- und Chemiestandorte Europas. Sanofi, Infraserv und Dutzende Spezialisten auf 460 Hektar.' },
        { title: 'Goethe-Universität: 45.000 Studierende', text: 'Naturwissenschaftlicher Campus Riedberg mit Chemie, Physik, Biowissenschaften – permanenter Bedarf an Forschungslaboren.' },
        { title: 'Paul-Ehrlich-Institut in Langen', text: 'Das Bundesinstitut für Impfstoffe liegt direkt südlich von Frankfurt. Biosicherheitslabore und Prüfkapazität sind hier essenziell.' },
        { title: 'HBO Hessen: Schnelle Genehmigungswege', text: 'Die Hessische Bauordnung ermöglicht bei temporären Anlagen oft verfahrensfreie Aufstellung. Wir stimmen alles mit der Bauaufsicht ab.' },
        { title: 'Max-Planck-Institut für Biophysik', text: 'Grundlagenforschung auf höchstem Niveau. Speziallabore für Strukturbiologie und Membranbiochemie.' },
        { title: 'Transport über die A5', text: 'Von unserem Werk über die A81/A5 nach Frankfurt in wenigen Stunden. Aufstellung und Inbetriebnahme am selben Tag.' },
      ]
    },
    crossLinks: [
      { href: '/laborcontainer-stuttgart', label: 'Stuttgart' },
      { href: '/laborcontainer-duesseldorf', label: 'Düsseldorf' },
      { href: '/laborcontainer-muenchen', label: 'München' },
    ],
  },
  zuerich: {
    title: 'Zürich: Laborinfrastruktur für Biotech | Planexus GmbH',
    description: 'Mobile Laborcontainer für Zürich: ETH, Uni Zürich, Biotech-Cluster Schlieren. BSL-2, GMP-Reinräume. Zollabwicklung DE→CH inklusive.',
    leistungenH2: 'Von der Planung bis zur betriebsfertigen Übergabe',
    leistungenText: 'Projekte in Zürich betreuen wir inklusive Zollabwicklung an der Grenze bei Schaffhausen. Fachplanung nach SIA-Normen, Fertigung in unserem Werk, Transport über die A81 und Kranaufstellung auf Campusgeländen und in Industriearealen. Laborausstattung eingebaut und betriebsbereit übergeben.',
    h2Map: {
      'Wo Laborcontainer in Zürich gebraucht werden': 'ETH, Schlieren, Klinik – vier Laborszenarien für Zürich',
      'Zürich als Laborstandort – Branchen und Forschung': 'ETH, Bio-Technopark und Pharma – Zürichs Forschungsökosystem',
      'Einfuhr und Zollabwicklung für die Schweiz': 'Zoll, SIA-Normen und Baubewilligung – Genehmigungswege für Zürich',
      'Warum Planexus für Zürich': 'Wesemann-Qualität für die Schweizer Forschungselite',
      'Häufige Fragen zu Laborcontainern in Zürich': 'FAQ: Containerlabore für Zürich und die Deutschschweiz',
    },
    ctaH2: 'Laborprojekt in Zürich? Sprechen wir darüber.',
    ctaText: 'Ob ETH-Campus, Bio-Technopark Schlieren oder Interimslabor am USZ – wir übernehmen alles inklusive Zollabwicklung.',
    gutZuWissen: {
      h2: 'Zürich in Zahlen – Europas dichtestes Biotech-Netz',
      subtitle: 'Sechs Fakten zur Zürcher Forschungslandschaft und was sie für Laborcontainer bedeuten.',
      facts: [
        { title: 'ETH Zürich: Weltrang Platz 7', text: 'Die ETH gehört zu den besten technischen Hochschulen weltweit. Chemie, Materialwissenschaft, Biotechnologie – permanenter Laborbedarf.' },
        { title: 'Bio-Technopark Schlieren', text: 'Über 100 Biotech-Firmen auf einem Campus, darunter Molecular Partners, SOL Group und zahlreiche Startups.' },
        { title: 'Universitätsspital Zürich (USZ)', text: 'Eines der grössten Klinikzentren der Schweiz. Klinische Forschung und Diagnostik erzeugen permanenten Bedarf an Erweiterungskapazität.' },
        { title: 'Zollabwicklung inklusive', text: 'Wir kümmern uns um Einfuhr, Verzollung und alle Formalitäten an der Grenze bei Schaffhausen – Sie erhalten Ihr Labor zollfrei übergeben.' },
        { title: 'SIA-Normen statt DIN', text: 'In der Schweiz gelten SIA-Normen und Swissmedic-Anforderungen. Unsere Container werden entsprechend geplant und dokumentiert.' },
        { title: 'SUVA und EKAS-Richtlinien', text: 'Arbeitssicherheit in der Schweiz unterliegt SUVA und EKAS. Wir bauen und dokumentieren nach Schweizer Vorschriften.' },
      ]
    },
    crossLinks: [
      { href: '/laborcontainer-basel', label: 'Basel' },
      { href: '/laborcontainer-bern', label: 'Bern' },
      { href: '/laborcontainer-stuttgart', label: 'Stuttgart' },
    ],
  },
  basel: {
    title: 'Pharma-Laborcontainer Basel – Life Sciences | Planexus GmbH',
    description: 'Containerlabore für Basel: Roche, Novartis, Lonza, Biozentrum. GMP-Reinräume, BSL-2/BSL-3. Zollabwicklung DE→CH inklusive.',
    leistungenH2: 'Von der Planung bis zur betriebsfertigen Übergabe',
    leistungenText: 'Basler Projekte betreuen wir inklusive Zollabwicklung am Grenzübergang Weil am Rhein. Fachplanung nach SIA-Normen, GMP-konforme Ausstattung für Pharma, Transport über die A5 und Aufstellung auf Werksgeländen oder Uni-Campi. Alles betriebsbereit übergeben.',
    h2Map: {
      'Wo Laborcontainer in Basel gebraucht werden': 'Pharma, Biotech, Universität – vier Laborszenarien am Rheinknie',
      'Basel als Laborstandort – Branchen und Forschung': 'Roche, Novartis und die Startup-Szene – Basels Pharma-Ökosystem',
      'Einfuhr und Zollabwicklung für die Schweiz': 'Zoll, SIA-Normen und Baubewilligung – Genehmigungswege für Basel',
      'Warum Planexus für Basel': 'Wesemann-Qualität für Basels Pharma-Anspruch',
      'Häufige Fragen zu Laborcontainern in Basel': 'FAQ: Containerlabore für Basel und Nordwestschweiz',
    },
    ctaH2: 'Pharma-Labor in Basel? Lassen Sie uns reden.',
    ctaText: 'Ob GMP-Reinraum auf dem Roche-Campus, Biotech-Labor im Rosental oder Forschungscontainer am Biozentrum – wir sind bereit.',
    gutZuWissen: {
      h2: 'Basel in Zahlen – globales Epizentrum der Pharmaforschung',
      subtitle: 'Sechs Fakten zur Basler Life-Science-Industrie und zum Laborbedarf.',
      facts: [
        { title: 'Roche & Novartis: Zwei der Top-5 Pharmakonzerne', text: 'Beide Weltkonzerne haben ihren Hauptsitz in Basel. Forschung, Produktion und QC erzeugen permanenten Laborbedarf.' },
        { title: 'Lonza: Globaler CDMO-Leader', text: 'Lonza produziert in Basel Biologika und Zelltherapien. GMP-konforme Zusatzkapazität per Container ist hier bewährte Praxis.' },
        { title: 'Biozentrum der Universität Basel', text: 'Eines der führenden molekularbiologischen Forschungszentren Europas. Strukturbiologie, Genomik, Infektionsbiologie.' },
        { title: 'BaseLaunch: Biotech-Accelerator', text: 'Dutzende Startups wie Alentis, T3 Pharma und Bright Peak Therapeutics wachsen hier – und brauchen Labor ab Tag eins.' },
        { title: 'Grenzübergang Weil am Rhein', text: 'Nur 230 km von unserem Werk entfernt. Wir übernehmen die Zollabwicklung und liefern Ihr Labor direkt auf den Basler Campus.' },
        { title: 'FMI & D-BSSE der ETH', text: 'Das Friedrich Miescher Institute und der ETH-Ableger Basel forschen an Epigenetik und Biosystemen – Speziallabore inklusive.' },
      ]
    },
    crossLinks: [
      { href: '/laborcontainer-zuerich', label: 'Zürich' },
      { href: '/laborcontainer-bern', label: 'Bern' },
      { href: '/laborcontainer-frankfurt', label: 'Frankfurt' },
    ],
  },
  bern: {
    title: 'Laborcontainer Bern – Medizin & Forschung | Planexus GmbH',
    description: 'Containerlabore für Bern: Inselspital, sitem-insel, CSL Behring, Uni Bern. BSL-2, Reinräume. Zollabwicklung DE→CH inklusive.',
    leistungenH2: 'Von der Planung bis zur betriebsfertigen Übergabe',
    leistungenText: 'Berner Projekte betreuen wir inklusive Zollabwicklung an der Grenze. Fachplanung nach SIA-Normen, Fertigung in unserem Werk, Transport über die A81/A1 und Aufstellung auf Spital- und Campusgeländen. Laborausstattung eingebaut und betriebsbereit übergeben.',
    h2Map: {
      'Wo Laborcontainer in Bern gebraucht werden': 'Inselspital, Pharma, Bundesamt – vier Laborszenarien in Bern',
      'Bern als Laborstandort – Branchen und Forschung': 'Medizinstandort Bern – Inselspital, sitem-insel und CSL Behring',
      'Einfuhr und Zollabwicklung für die Schweiz': 'Zoll, SIA-Normen und Baubewilligung – Genehmigungswege für Bern',
      'Warum Planexus für Bern': 'Wesemann-Kompetenz für die Bundesstadt',
      'Häufige Fragen zu Laborcontainern in Bern': 'FAQ: Containerlabore für Bern und das Mittelland',
    },
    ctaH2: 'Laborprojekt in Bern? Sprechen wir darüber.',
    ctaText: 'Ob Inselspital-Erweiterung, Forschungslabor an der Uni Bern oder Pharma-Analytik bei CSL Behring – wir hören zu.',
    gutZuWissen: {
      h2: 'Bern in Zahlen – Medizinstandort und Bundeshauptstadt',
      subtitle: 'Sechs Fakten zur Berner Forschungslandschaft und zum Laborbedarf.',
      facts: [
        { title: 'Inselspital: Grösstes Schweizer Universitätsspital', text: 'Über 40 Kliniken und Institute. Klinische Forschung, Pathologie und Diagnostik erzeugen permanenten Laborbedarf.' },
        { title: 'sitem-insel: Swiss Institute for Translational Medicine', text: 'Das nationale Translationszentrum direkt neben dem Inselspital bringt Medizinforschung in die Praxis – mit wachsendem Raumbedarf.' },
        { title: 'CSL Behring in Bern', text: 'Der globale Plasmaprotein-Spezialist produziert und forscht in Bern. GMP-konforme Erweiterungslabore sind regelmässig gefragt.' },
        { title: 'Universität Bern: 19.000 Studierende', text: 'Medizin, Pharmazie, Chemie und Veterinärmedizin. Das DBMR (Biomedical Research) forscht auf Weltklasse-Niveau.' },
        { title: 'BewD Kanton Bern', text: 'Die Baubewilligungsdekrete des Kantons Bern regeln Aufstellung und Betrieb. Wir übernehmen die Abstimmung mit der Gemeinde.' },
        { title: 'Zollabwicklung inklusive', text: 'Transport über die A1 aus Deutschland. Wir kümmern uns um Einfuhr, Verzollung und alle Schweizer Formalitäten.' },
      ]
    },
    crossLinks: [
      { href: '/laborcontainer-zuerich', label: 'Zürich' },
      { href: '/laborcontainer-basel', label: 'Basel' },
      { href: '/laborcontainer-muenchen', label: 'München' },
    ],
  },
  wien: {
    title: 'Labore Wien – Biotech & Klinikforschung | Planexus GmbH',
    description: 'Containerlabore für Wien: Vienna BioCenter, AKH, MedUni, Boehringer. BSL-2/BSL-3, GMP-Reinräume. DACH-weite Lieferung. Jetzt anfragen.',
    leistungenH2: 'Von der Planung bis zur betriebsfertigen Übergabe',
    leistungenText: 'Wiener Projekte betreuen wir vom Werk bis zur Aufstellung auf dem Campus. Fachplanung nach ÖNORM-Standards, Fertigung in unserem Werk, Transport über die A8/A1 und Kranaufstellung auf Klinik- und Forschungsgeländen. Laborausstattung wird eingebaut und betriebsbereit übergeben.',
    h2Map: {
      'Wo Laborcontainer in Wien gebraucht werden': 'AKH, VBC, Pharma – vier Laborszenarien in Wien',
      'Wien als Laborstandort – Branchen und Forschung': 'Vienna BioCenter, MedUni und Pharma – Wiens Forschungslandschaft',
      'Baurecht und Genehmigung in Wien': 'Wiener Bauordnung und MA 37 – Genehmigungswege in der Bundeshauptstadt',
      'Warum Planexus für Wien': 'Wesemann-Qualität für Österreichs Forschungszentrum',
      'Häufige Fragen zu Laborcontainern in Wien': 'FAQ: Containerlabore für Wien und Ostösterreich',
    },
    ctaH2: 'Laborprojekt in Wien? Lassen Sie uns planen.',
    ctaText: 'Ob BSL-3-Erweiterung am Vienna BioCenter, Interimslabor am AKH oder Pharma-QC bei Boehringer – wir sind bereit.',
    gutZuWissen: {
      h2: 'Wien in Zahlen – Österreichs Biotech-Hauptstadt',
      subtitle: 'Sechs Fakten zur Wiener Forschungslandschaft und zum Laborbedarf.',
      facts: [
        { title: 'Vienna BioCenter: 1.800 Wissenschaftler', text: 'IMP, IMBA, GMI und Max Perutz Labs auf einem Campus. Molekularbiologie, Genomik und Strukturbiologie erzeugen permanenten Laborbedarf.' },
        { title: 'AKH Wien: Europas größtes Krankenhaus', text: 'Über 2.000 Betten und Dutzende Forschungsabteilungen. Klinische Studien brauchen regelmäßig zusätzliche Laborkapazität.' },
        { title: 'Boehringer Ingelheim in Wien', text: 'Der Pharmakonzern betreibt in Wien eines seiner größten Forschungszentren. Biopharmazeutische Produktion mit GMP-Anforderungen.' },
        { title: 'MedUni Wien: 6.000 Studierende', text: 'Österreichs größte medizinische Universität mit CeMM, dem Zentrum für Molekulare Medizin, als angeschlossenem Forschungsinstitut.' },
        { title: 'BO Wien und MA 37', text: 'Die Wiener Bauordnung regelt Aufstellung und Betrieb. Die MA 37 ist die zuständige Baubehörde. Wir übernehmen die gesamte Abstimmung.' },
        { title: 'Takeda, Octapharma, Marinomed', text: 'Drei weitere Pharma-Schwergewichte mit Standort Wien. Zusammen ein Ökosystem, das ständig flexible Laborkapazität braucht.' },
      ]
    },
    crossLinks: [
      { href: '/laborcontainer-graz', label: 'Graz' },
      { href: '/laborcontainer-linz', label: 'Linz' },
      { href: '/laborcontainer-muenchen', label: 'München' },
    ],
  },
  graz: {
    title: 'Laborcontainer Graz – Technik & Life Sciences | Planexus GmbH',
    description: 'Containerlabore für Graz: TU Graz, Med Uni, Joanneum Research. BSL-2, Werkstoffprüfung. DACH-weite Lieferung. Jetzt Projekt besprechen.',
    leistungenH2: 'Von der Planung bis zur betriebsfertigen Übergabe',
    leistungenText: 'Grazer Projekte betreuen wir von der Fachplanung nach ÖNORM-Standards über die Fertigung bis zur Aufstellung. Transport über die A8/A9, Kranaufstellung auf Uni-Campi und in Industriearealen. Laborausstattung wird eingebaut und betriebsbereit übergeben.',
    h2Map: {
      'Wo Laborcontainer in Graz gebraucht werden': 'TU, Klinik, Automotive – vier Laborszenarien in Graz',
      'Graz als Laborstandort – Branchen und Forschung': 'TU Graz, Joanneum Research und Automotive – Grazer Forschungslandschaft',
      'Baurecht und Genehmigung in Graz': 'Steiermärkisches Baugesetz – Genehmigungswege in Graz',
      'Warum Planexus für Graz': 'Wesemann-Know-how für die steirische Forschung',
      'Häufige Fragen zu Laborcontainern in Graz': 'FAQ: Containerlabore für Graz und die Steiermark',
    },
    ctaH2: 'Laborprojekt in Graz? Lassen Sie uns reden.',
    ctaText: 'Ob Werkstoffprüfung an der TU, Forschungslabor am LKH oder Automotive-Analytik bei Magna – erzählen Sie uns, was Sie brauchen.',
    gutZuWissen: {
      h2: 'Graz in Zahlen – Technik-Hochburg mit wachsendem Laborbedarf',
      subtitle: 'Sechs Fakten zur Grazer Forschungs- und Industrielandschaft.',
      facts: [
        { title: 'TU Graz: Vier Exzellenzfelder', text: 'Advanced Materials, Human & Biotechnology, Information & Communication, Mobility & Production – jedes Feld erzeugt Laborbedarf.' },
        { title: 'Joanneum Research: Angewandte Forschung', text: 'Steirische Landesforschungsgesellschaft mit Schwerpunkten in Materialwissenschaft, Sensorik und Gesundheitstechnologie.' },
        { title: 'Med Uni Graz und LKH-Uniklinikum', text: 'Gemeinsam eines der größten Medizinzentren Österreichs. Klinische Forschung und Diagnostik brauchen regelmäßig Zusatzkapazität.' },
        { title: 'Automotive-Cluster: Magna, AVL, Pankl', text: 'Die Steiermark ist Österreichs Automotive-Hochburg. Werkstoffprüfung, Emissionsanalytik und Batterieforschung erzeugen Laborbedarf.' },
        { title: 'Stmk. BauG: Landesgesetzgebung', text: 'Das Steiermärkische Baugesetz regelt Aufstellung und Betrieb. Wir übernehmen die Abstimmung mit der Baubehörde.' },
        { title: 'BioTechMed-Graz', text: 'Der Forschungsverbund aus TU, Med Uni und Uni Graz bündelt Life-Science-Kompetenz und generiert laufend Bedarf an Speziallaboren.' },
      ]
    },
    crossLinks: [
      { href: '/laborcontainer-wien', label: 'Wien' },
      { href: '/laborcontainer-linz', label: 'Linz' },
      { href: '/laborcontainer-muenchen', label: 'München' },
    ],
  },
  linz: {
    title: 'Labore Linz – Industrie & Werkstoffprüfung | Planexus GmbH',
    description: 'Containerlabore für Linz: voestalpine, JKU, Lenzing, LIT. Werkstoffanalytik, Chemielabore. DACH-weite Lieferung. Jetzt anfragen.',
    leistungenH2: 'Von der Planung bis zur betriebsfertigen Übergabe',
    leistungenText: 'Linzer Projekte betreuen wir von der Fachplanung nach ÖNORM-Standards über die Fertigung bis zur Aufstellung. Transport über die A8, Kranaufstellung auf Werksgeländen und Uni-Campi. Laborausstattung – Abzüge, Werkbänke, Klimatechnik – eingebaut und betriebsbereit übergeben.',
    h2Map: {
      'Wo Laborcontainer in Linz gebraucht werden': 'Stahl, Chemie, Universität – vier Laborszenarien in Linz',
      'Linz als Laborstandort – Branchen und Forschung': 'voestalpine, Lenzing und JKU – Linzer Industrie- und Forschungslandschaft',
      'Baurecht und Genehmigung in Linz': 'OÖ Bauordnung 1994 – Genehmigungswege in Linz',
      'Warum Planexus für Linz': 'Wesemann-Kompetenz für Oberösterreichs Industrie',
      'Häufige Fragen zu Laborcontainern in Linz': 'FAQ: Containerlabore für Linz und Oberösterreich',
    },
    ctaH2: 'Laborprojekt in Linz? Sprechen wir darüber.',
    ctaText: 'Ob Werkstoffanalytik bei voestalpine, Chemielabor an der JKU oder Faserprüfung bei Lenzing – erzählen Sie uns, was Sie brauchen.',
    gutZuWissen: {
      h2: 'Linz in Zahlen – Industriestadt mit hohem Analytikbedarf',
      subtitle: 'Sechs Fakten zur Linzer Industrie- und Forschungslandschaft.',
      facts: [
        { title: 'voestalpine: Weltmarktführer in Spezialstahl', text: 'Am Standort Linz wird geforscht, geprüft und produziert. Werkstoffanalytik und Qualitätssicherung brauchen regelmäßig Zusatzkapazität.' },
        { title: 'JKU und Linz Institute of Technology (LIT)', text: 'Die Johannes Kepler Universität forscht an Polymer-Chemie, Mechatronik und Medizintechnik. Das LIT bündelt Innovationsprojekte.' },
        { title: 'Lenzing AG: Faserforschung seit 1938', text: 'Der Weltmarktführer für Cellulosefasern betreibt in Lenzing intensive Forschung. Chemie- und Faserlabore sind Dauerbedarf.' },
        { title: 'Chemiepark Linz', text: 'Borealis, DSM und weitere Chemiefirmen auf dem ehemaligen Chemie-Linz-Gelände. Analytik- und QC-Labore werden regelmäßig erweitert.' },
        { title: 'OÖ BauO 1994', text: 'Die Oberösterreichische Bauordnung regelt Aufstellung und Betrieb. Wir übernehmen die Abstimmung mit der Baubehörde der Stadt Linz.' },
        { title: 'Kepler Universitätsklinikum', text: 'Oberösterreichs größtes Krankenhaus mit Forschungsabteilungen in Pathologie, Mikrobiologie und klinischer Chemie.' },
      ]
    },
    crossLinks: [
      { href: '/laborcontainer-wien', label: 'Wien' },
      { href: '/laborcontainer-graz', label: 'Graz' },
      { href: '/laborcontainer-muenchen', label: 'München' },
    ],
  },
};

function buildLeistungenReplacement(city) {
  return `    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="bg-slate-50 border border-gray-100 rounded-2xl p-8">
            <h2 class="text-2xl font-heading font-bold mb-4 text-slate-900">${city.leistungenH2}</h2>
            <p class="text-gray-600 leading-relaxed mb-4">
              ${city.leistungenText}
            </p>
            <div class="flex flex-wrap gap-3">
              <a href="/leistungen/planung" class="text-primary font-medium hover:underline text-sm">Fachplanung →</a>
              <a href="/leistungen/modulbau" class="text-primary font-medium hover:underline text-sm">Modulbau →</a>
              <a href="/leistungen/logistik" class="text-primary font-medium hover:underline text-sm">Logistik →</a>
              <a href="/leistungen/ausstattung" class="text-primary font-medium hover:underline text-sm">Ausstattung →</a>
              <a href="/leistungen/beratung" class="text-primary font-medium hover:underline text-sm">Beratung →</a>
              <a href="/leistungen/smart-lab" class="text-primary font-medium hover:underline text-sm">Smart Lab →</a>
            </div>
          </div>
        </div>
      </div>
    </section>`;
}

function buildGutZuWissen(city) {
  const svgs = [
    '<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 18h8"/><path d="M3 22h18"/><path d="M14 22a7 7 0 1 0 0-14h-1"/><path d="M9 14h2"/><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"/><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 17 3.5s1.5 2.5-.8 6.5C20.7 11.5 21 14 21 14s-1.5-.5-2.5-.5c-.5 2-2 3.5-2 3.5s-.5-1-1-2.5c-1.5 1-4.5 2.5-4.5 5.5"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="m9 15 2 2 4-4"/></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>',
  ];
  
  const factsHtml = city.gutZuWissen.facts.map((f, i) => `
            <div class="flex items-start gap-4 p-6 rounded-xl border border-white/10 hover:border-primary/30 transition-colors">
              <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
                ${svgs[i]}
              </div>
              <div>
                <h3 class="font-bold text-lg mb-1">${f.title}</h3>
                <p class="text-gray-400 text-sm">${f.text}</p>
              </div>
            </div>`).join('\n');

  return `    <section class="py-20 bg-slate-900 text-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-heading font-bold mb-4">${city.gutZuWissen.h2}</h2>
          <p class="text-gray-400 text-lg mb-12">${city.gutZuWissen.subtitle}</p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">${factsHtml}
          </div>
        </div>
      </div>
    </section>`;
}

function buildCrossLinks(city) {
  const links = city.crossLinks.map(l => 
    `            <a href="${l.href}" class="px-4 py-2 bg-slate-50 border border-gray-200 rounded-lg text-sm text-slate-700 hover:border-primary hover:text-primary transition-colors">${l.label}</a>`
  ).join('\n');
  
  return `    <section class="py-12">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-xl font-heading font-bold mb-6 text-slate-900">Laborcontainer in weiteren Regionen</h2>
          <div class="flex flex-wrap gap-3">
${links}
          </div>
        </div>
      </div>
    </section>`;
}

function extractSection(content, startMarker, endTag = '</section>') {
  const startIdx = content.indexOf(startMarker);
  if (startIdx === -1) return null;
  
  let sectionStart = content.lastIndexOf('<section', startIdx);
  if (sectionStart === -1) return null;
  
  let depth = 0;
  let i = sectionStart;
  while (i < content.length) {
    if (content.substring(i, i + 8) === '<section') {
      depth++;
    }
    if (content.substring(i, i + 10) === '</section>') {
      depth--;
      if (depth === 0) {
        return { start: sectionStart, end: i + 10 };
      }
    }
    i++;
  }
  return null;
}

let processed = 0;
let errors = [];

for (const [slug, cityData] of Object.entries(cities)) {
  const filePath = `src/pages/laborcontainer-${slug}.astro`;
  let content;
  try {
    content = readFileSync(filePath, 'utf-8');
  } catch (e) {
    errors.push(`${slug}: File not found`);
    continue;
  }

  const oldTitle = content.match(/title="[^"]+"/);
  const oldDesc = content.match(/description="[^"]+"/);
  
  if (oldTitle) {
    content = content.replace(oldTitle[0], `title="${cityData.title}"`);
  }
  if (oldDesc) {
    content = content.replace(oldDesc[0], `description="${cityData.description}"`);
  }

  const leistungenSection = extractSection(content, 'Was wir für');
  if (leistungenSection) {
    const before = content.substring(0, leistungenSection.start);
    const after = content.substring(leistungenSection.end);
    content = before + buildLeistungenReplacement(cityData) + after;
  } else {
    errors.push(`${slug}: Leistungen section not found`);
  }

  const projektablaufSection = extractSection(content, 'so läuft es ab');
  if (projektablaufSection) {
    const before = content.substring(0, projektablaufSection.start);
    const after = content.substring(projektablaufSection.end);
    content = before + after;
  } else {
    errors.push(`${slug}: Projektablauf section not found`);
  }

  const gutZuWissenSection = extractSection(content, 'Gut zu wissen');
  if (gutZuWissenSection) {
    const before = content.substring(0, gutZuWissenSection.start);
    const after = content.substring(gutZuWissenSection.end);
    content = before + buildGutZuWissen(cityData) + after;
  } else {
    errors.push(`${slug}: Gut zu wissen section not found`);
  }

  for (const [oldH2, newH2] of Object.entries(cityData.h2Map)) {
    if (content.includes(oldH2)) {
      content = content.replace(oldH2, newH2);
    } else {
      errors.push(`${slug}: H2 not found: "${oldH2.substring(0, 40)}..."`);
    }
  }

  const ctaPatterns = [
    /Laborprojekt in [^?]+\? Sprechen Sie mit uns\./,
    /Laborprojekt in [^?]+\? Lassen Sie uns reden\./,
    /Laborprojekt in [^?]+\? Kontaktieren Sie uns\./,
  ];
  for (const pattern of ctaPatterns) {
    if (pattern.test(content)) {
      content = content.replace(pattern, cityData.ctaH2);
      break;
    }
  }

  const ctaTextPattern = /Erzählen Sie uns von Ihrem Vorhaben[^<]+/;
  if (ctaTextPattern.test(content)) {
    content = content.replace(ctaTextPattern, cityData.ctaText);
  }

  const ctaSectionIdx = content.lastIndexOf('<section class="py-24 bg-primary');
  if (ctaSectionIdx > -1 && !content.includes('Laborcontainer in weiteren Regionen')) {
    content = content.substring(0, ctaSectionIdx) + '\n' + buildCrossLinks(cityData) + '\n\n' + content.substring(ctaSectionIdx);
  }

  let sfCount = (content.match(/schlüsselfertig/gi) || []).length;
  if (sfCount > 2) {
    let replaced = 0;
    content = content.replace(/schlüsselfertig(e[rns]?)?/gi, (match) => {
      replaced++;
      if (replaced <= 2) return match;
      if (match.toLowerCase().startsWith('schlüsselfertige')) return 'betriebsfertige';
      if (match.toLowerCase() === 'schlüsselfertigen') return 'betriebsfertigen';
      if (match.toLowerCase() === 'schlüsselfertiger') return 'betriebsfertiger';
      return 'betriebsbereit';
    });
  }

  let albCount = 0;
  const lines = content.split('\n');
  const processedLines = lines.map(line => {
    if (line.includes('"addressLocality"') || line.includes('"streetAddress"') || line.includes('"postalCode"')) {
      return line;
    }
    if (line.includes('Albstadt')) {
      albCount++;
      if (albCount > 3) {
        return line.replace(/in Albstadt/g, 'in unserem Werk').replace(/Albstadt/g, 'unserem Werk');
      }
    }
    return line;
  });
  content = processedLines.join('\n');

  writeFileSync(filePath, content);
  processed++;
  console.log(`✅ ${slug}: transformed`);
}

console.log(`\n=== SUMMARY ===`);
console.log(`Processed: ${processed}/11`);
if (errors.length > 0) {
  console.log(`\nWarnings:`);
  errors.forEach(e => console.log(`  ⚠️ ${e}`));
}
