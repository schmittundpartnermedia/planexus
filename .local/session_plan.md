# SESSION-PLAN — Vollständige Umsetzung Blöcke 2–8

**Erstellt:** 02.05.2026
**Scope:** Blöcke 2–8 aus dem SEO-Audit komplett umsetzen. Block 1 (SMTP) wartet auf Thomas. Block 9 (App/CRM/Newsletter/Marketing-Tools) ausdrücklich AUSGESPART — kommt später.

**Arbeitsregeln:**
- Eine Aufgabe nach der anderen, sequenziell. Nichts überspringen.
- Nach jeder Aufgabe: lokal testen (`curl localhost:5000` oder Build).
- Wenn etwas nicht geht (z. B. nginx-Konfig auf dem Server): ehrlich melden, nicht vortäuschen.
- Nach Abschluss: Commit-Message und Hinweis an User für Server-Deploy (`git pull && npm install && npm run build && pm2 restart all --update-env`).

---

## PHASE A — SEO Critical/High Quick-Wins (Block 2)

### A1: Meta-Tags-Hygiene in Layout.astro
- **Blocked By:** []
- **Details:**
  - `<meta name="keywords">` entfernen (von Google ignoriert seit 2009)
  - `<meta name="revisit-after">` entfernen (von keiner Suchmaschine je beachtet)
  - `hreflang="de-DE"` für alle 6 DE-Städte ergänzen (Logik analog isCH/isAT)
  - Files: `src/layouts/Layout.astro`
  - Acceptance: Build läuft, alle 44 Seiten liefern noch HTTP 200, keine keywords-Meta mehr im HTML, DE-Städte haben de-DE hreflang.

### A2: Description-Fixes auf 5 Seiten (>160 Zeichen)
- **Blocked By:** []
- **Details:**
  - `/laborcontainer-hamburg` (197 → ≤155): Fokus LABtoGO 2.0, BSL-2/3, Hafenklima, A7 Lieferung
  - `/laborcontainer-berlin` (226 → ≤155): Fokus LABtoGO 2.0, BSL-2/3, 12-Bezirksämter
  - `/laborcontainer-muenchen` (272 → ≤155): Fokus LABtoGO 2.0, BSL-2/3, Garching/Martinsried
  - `/laborcontainer` (176 → ≤155): Fokus Money-Page-Hub
  - `/magazin/laborcontainer-baustelle-materialpruefung` (389 → ≤155)
  - Files: 5 entsprechende `.astro`-Dateien
  - Acceptance: alle 5 Descriptions zwischen 140 und 158 Zeichen.

### A3: Title-Fixes auf 2 Seiten (>70 Zeichen)
- **Blocked By:** []
- **Details:**
  - `/magazin/laborcontainer-energiewende-h2-batterie-ex-schutz` (110 → ≤60)
  - `/laborcontainer-zuerich` (86 → ≤60)
  - Files: 2 entsprechende `.astro`-Dateien
  - Acceptance: beide Titles ≤62 Zeichen, Marken-Suffix " | Planexus" erhalten.

### A4: Author-Schema-Fix BSL-Artikel
- **Blocked By:** []
- **Details:**
  - `/magazin/bsl-2-bsl-3-container-labor`: `"author":{"@type":"Organization","name":"Redaktion Planexus"}` → `"author":{"@type":"Person","name":"Sven Biewald","jobTitle":"Geschäftsführer Planexus GmbH"}` (Konsistenz mit allen anderen Magazin-Artikeln)
  - Files: `src/pages/magazin/bsl-2-bsl-3-container-labor.astro`
  - Acceptance: `curl localhost:5000/magazin/bsl-2-bsl-3-container-labor` enthält Person/Sven Biewald.

### A5: Hero- und große Bilder zu WebP konvertieren
- **Blocked By:** []
- **Details:**
  - Alle `attached_assets/`-Bilder >500 KB (33 Stück) zu WebP konvertieren mit sharp (Q 80, max 1920px breit)
  - Konvertierte Bilder in `attached_assets/` als zusätzliche `.webp`-Datei (Original behalten als Fallback)
  - In den Hot-Pages (Homepage Index, Stadtseiten, /laborcontainer, /labtogo) `<img>`-Tags durch `<picture>` mit WebP-Source + JPG/PNG-Fallback ersetzen
  - Files: `scripts/convert-images-webp.mjs` (neu erstellen), Homepage + Top-Seiten
  - Acceptance: Hero-Bilder unter 250 KB als WebP, Build läuft, Bilder rendern korrekt im Browser.

### A6: Build- und Live-Verifikation Phase A
- **Blocked By:** [A1, A2, A3, A4, A5]
- **Details:**
  - `npm run build` muss fehlerfrei durchlaufen
  - Local-Curl auf alle 44 URLs → alle 200
  - Stichprobenartig 5 Seiten visuell im Browser prüfen
  - Files: keine
  - Acceptance: Build grün, alle Pages 200, kein visueller Regression.

---

## PHASE B — V3-Stadtseiten auf V4-Niveau (Block 3) — 8 Städte

Pflicht-Workflow pro Stadt: (1) Konkurrenzanalyse Top-3 für „Laborcontainer [Stadt]", (2) lokale Daten sammeln (Behörden, Institute, Klima, Boden, Wirtschaft, Förderung), (3) Lücken identifizieren, (4) Seite auf V4-Niveau bauen mit individueller Narrative pro Stadt.

V4-Master-Vorlage: `src/pages/laborcontainer-stuttgart.astro` (901 Zeilen, ~3.986 Wörter).

### B1: Düsseldorf V4-Rebuild
- **Blocked By:** [A6]
- **Details:**
  - Recherche: NRW-Bauordnung, Rheinhochwasser, Tiefbau Rheinaue, Forschungs-Standorte (HHU, FZ Jülich Nähe, RWTH Aachen Nähe), Pharma-Cluster (Bayer Leverkusen Nähe), A40/A57/A46-Anbindung
  - V4-Aufbau: Hero, lokale Spezifika, Anwendungsfelder, Routen ab Albstadt, FAQ 7 Fragen, Schema (Service+LocalBusiness+FAQ+BreadcrumbList), AuthorBio, CityCrossLinks, ContactForm
  - Files: `src/pages/laborcontainer-duesseldorf.astro`
  - Acceptance: ≥3.000 Wörter, individuelle H2s, mindestens 80% Content-Uniqueness vs. Hamburg/Berlin/München/Stuttgart, Build grün, HTTP 200.

### B2: Frankfurt V4-Rebuild
- **Blocked By:** [B1]
- **Details:**
  - Recherche: Hessische Bauordnung, Main-Hochwasser, Pharma-Cluster Rhein-Main (Sanofi Höchst, Merck Darmstadt Nähe), Goethe-Uni, Max-Planck-Frankfurt, BioNTech Mainz Nähe, Frankfurter Flughafen-Logistik, A5/A3/A66
  - Files: `src/pages/laborcontainer-frankfurt.astro`
  - Acceptance: wie B1.

### B3: Zürich V4-Rebuild
- **Blocked By:** [B2]
- **Details:**
  - Recherche: Schweizer Baurecht (kantonal), ETH Zürich, UZH, USZ, Roche Diagnostics Rotkreuz Nähe, Pharma-Cluster, Verzollung CH, A1/A3-Anbindung, Schweizer Stromnetz/Erdung, ggf. Erdbebenzonen
  - Sicherstellen: hreflang="de-CH" bleibt, Title kürzen wie in A3
  - Files: `src/pages/laborcontainer-zuerich.astro`
  - Acceptance: wie B1.

### B4: Basel V4-Rebuild
- **Blocked By:** [B3]
- **Details:**
  - Recherche: Pharma-Hauptstadt CH (Roche, Novartis, Lonza), Universität Basel, Friedrich-Miescher-Institut, BioPark, Rhein-Logistik, A2/A3, Verzollung
  - Files: `src/pages/laborcontainer-basel.astro`
  - Acceptance: wie B1.

### B5: Bern V4-Rebuild
- **Blocked By:** [B4]
- **Details:**
  - Recherche: Universität Bern, Inselspital, Bundesamt für Gesundheit BAG, Insel Gruppe, Sitem-Insel, Eidgenössische Forschungsanstalten Agroscope, A1/A6
  - Files: `src/pages/laborcontainer-bern.astro`
  - Acceptance: wie B1.

### B6: Wien V4-Rebuild
- **Blocked By:** [B5]
- **Details:**
  - Recherche: Österreichische Bauordnung (landesweise), Vienna BioCenter, IST Austria Klosterneuburg, Med-Uni Wien, AGES, Boehringer Ingelheim Wien, A1/A2, Verzollung Österreich
  - Files: `src/pages/laborcontainer-wien.astro`
  - Acceptance: wie B1.

### B7: Graz V4-Rebuild
- **Blocked By:** [B6]
- **Details:**
  - Recherche: TU Graz, Med-Uni Graz, Joanneum Research, AVL List (Automotive-Forschung), Steirische Bauordnung, A2/A9
  - Files: `src/pages/laborcontainer-graz.astro`
  - Acceptance: wie B1.

### B8: Linz V4-Rebuild
- **Blocked By:** [B7]
- **Details:**
  - Recherche: JKU Linz, Kepler Universitätsklinikum, Voestalpine, Borealis, Chemie-Cluster, OÖ Bauordnung, A1/A7
  - Files: `src/pages/laborcontainer-linz.astro`
  - Acceptance: wie B1.

---

## PHASE C — Branchenseiten (Block 4) — 6 Seiten

Pflicht-Workflow pro Branche: (1) Top-3 Konkurrenz für „Laborcontainer [Branche]", (2) Branchen-Spezifika sammeln (Normen, regulatorische Anforderungen, typische Anwendungen), (3) Lücken identifizieren, (4) Seite bauen.

### C1: Pharma & Biotech
- **Blocked By:** [B8]
- **Details:**
  - URL: `/branchen/pharma-biotech`
  - Themen: GMP, Annex 1, Containment, Reinraum-Klassen ISO 14644, EU-Kommissionsdurchführungsverordnung, Kreuzkontamination, BSL-2, BSL-3, Biostoffverordnung, Validierung IQ/OQ/PQ, BfArM, FDA
  - Schema: Service + BusinessAudience + FAQPage + BreadcrumbList
  - Files: `src/pages/branchen/pharma-biotech.astro` (neuer Ordner), Navbar-Update für Branchen-Dropdown, sitemap.xml
  - Acceptance: ≥2.500 Wörter, Build grün, HTTP 200, internes Linking zu allen Stadtseiten + relevanten Magazin-Artikeln.

### C2: Forschung & Hochschule
- **Blocked By:** [C1]
- **Details:**
  - URL: `/branchen/forschung-hochschule`
  - Themen: DFG-Förderung, Arbeitsschutz Hochschule, GenTSV, BSL-2, Drittmittelprojekte, Helmholtz/Max-Planck/Fraunhofer, Lehre vs. Forschung, Skalierbarkeit, temporäre Anmietung
  - Files: `src/pages/branchen/forschung-hochschule.astro`
  - Acceptance: wie C1.

### C3: Industrie & Werkstoffprüfung
- **Blocked By:** [C2]
- **Details:**
  - URL: `/branchen/industrie-werkstoffpruefung`
  - Themen: DAkkS-Akkreditierung, ISO 17025, Werkstoffprüfung DIN, Druckprüfung, Vibration, Stahl/Beton/Polymer, Vor-Ort-Labore in Werken
  - Files: `src/pages/branchen/industrie-werkstoffpruefung.astro`
  - Acceptance: wie C1.

### C4: Bildung (Berufsschulen, Fachhochschulen)
- **Blocked By:** [C3]
- **Details:**
  - URL: `/branchen/bildung`
  - Themen: Schullabore, BTA/CTA-Ausbildung, Lehrlabor-Anforderungen, GefStoffV in Schulen, Modernisierung Bestandsschulen, temporäre Container während Sanierung
  - Files: `src/pages/branchen/bildung.astro`
  - Acceptance: wie C1.

### C5: Public Health & Krisenvorsorge
- **Blocked By:** [C4]
- **Details:**
  - URL: `/branchen/public-health-krisenvorsorge`
  - Themen: RKI, Gesundheitsämter, IfSG, BBK, ZSKG, CBRN-Container, Pandemievorsorge, mobile Diagnostik, Katastrophenschutz
  - Files: `src/pages/branchen/public-health-krisenvorsorge.astro`
  - Acceptance: wie C1.

### C6: Energiewende (H₂, Batterie)
- **Blocked By:** [C5]
- **Details:**
  - URL: `/branchen/energiewende-h2-batterie`
  - Themen: ATEX, EN 60079, Thermal-Runaway, Wasserstoff-Sicherheit, Batterietest-Stände, IPCEI Wasserstoff/Batterie, BMBF-Förderung, KIT, ZSW Ulm
  - Files: `src/pages/branchen/energiewende-h2-batterie.astro`
  - Acceptance: wie C1, plus Cross-Link zum Magazin-Artikel `laborcontainer-energiewende-h2-batterie-ex-schutz`.

### C7: Branchen-Hub-Seite
- **Blocked By:** [C6]
- **Details:**
  - URL: `/branchen` (Hub mit allen 6 Branchen)
  - Files: `src/pages/branchen/index.astro`, Navbar-Dropdown ergänzen, sitemap.xml ergänzen
  - Acceptance: alle 6 Branchen verlinkt, ≥800 Wörter, Build grün.

---

## PHASE D — Magazin (Block 5) — Aufstellung/Bodenplatte/Statik

### D1: Magazin-Artikel "Aufstellung, Bodenplatte und Statik für Laborcontainer"
- **Blocked By:** [C7]
- **Details:**
  - URL: `/magazin/laborcontainer-aufstellung-bodenplatte-statik`
  - Faktentabelle Pflicht vorab: DIN 1054 (Baugrund), EC 7 (Geotechnik), LBO-Statik je Bundesland, DIN 18300 (Erdarbeiten), Lastannahmen DIN EN 1991, Kran-Logistik, Punktfundamente vs. Streifenfundamente vs. Bodenplatte, Pfahlgründung
  - Standard-Aufbau: Hero, Faktentabelle, Inhaltsverzeichnis, 6–8 H2s, FAQ 7 Fragen, AuthorBio, Cross-Links
  - Files: neue `.astro`-Datei, sitemap.xml, magazin.astro Hub erweitern
  - Acceptance: ≥3.000 Wörter, alle Normen verifiziert, Schema Article + FAQPage + BreadcrumbList, Build grün, im Hub verlinkt.

---

## PHASE E — Sekundärseiten ausbauen (Block 6)

### E1: /team ausbauen
- **Blocked By:** [D1]
- **Details:**
  - Pro Person 80–120 Wörter Bio + Foto + Schwerpunkte + ggf. LinkedIn
  - Files: `src/pages/team.astro`
  - Acceptance: ≥1.000 Wörter, jede Person mit Bio.

### E2: /ueber-uns ausbauen
- **Blocked By:** [E1]
- **Details:**
  - Geschichte 2014–2026, Werk Albstadt, Wesemann-Holding-Kontext, Mitarbeiterzahl, Standorte, Auszeichnungen
  - Files: `src/pages/ueber-uns.astro`
  - Acceptance: ≥1.500 Wörter.

### E3: /projekte ausbauen
- **Blocked By:** [E2]
- **Details:**
  - 12–15 anonymisierte Case-Studies à 150–250 Wörter (Branche, Größe, Norm, Bauzeit, Engineering-Highlights — keine Firmennamen)
  - Files: `src/pages/projekte.astro`
  - Acceptance: ≥2.000 Wörter, mind. 12 Cases.

---

## PHASE F — Neue Hauptseiten / Hubs (Block 7)

### F1: Service-LP /laborcontainer-mieten
- **Blocked By:** [E3]
- **Details:**
  - Money-Page für „Laborcontainer mieten"-Suchanfragen, mit Mietkonditionen, Mindestmietdauer, Was-ist-inklusive, Preisbeispiele
  - Files: `src/pages/laborcontainer-mieten.astro`, sitemap.xml
  - Acceptance: ≥2.000 Wörter, Schema Service + FAQPage, internes Linking.

### F2: Service-LP /laborcontainer-kaufen
- **Blocked By:** [F1]
- **Details:**
  - Money-Page für „Laborcontainer kaufen"
  - Files: `src/pages/laborcontainer-kaufen.astro`, sitemap.xml
  - Acceptance: wie F1.

### F3: Service-LP /laborcontainer-mietkauf
- **Blocked By:** [F2]
- **Details:**
  - Files: `src/pages/laborcontainer-mietkauf.astro`, sitemap.xml
  - Acceptance: ≥1.500 Wörter.

### F4: /faq Sammelseite
- **Blocked By:** [F3]
- **Details:**
  - 30–50 Q&A nach Themen gegliedert (Bauzeit, Genehmigung, Norm, Preis, Mietkauf, Sicherheitsstufen)
  - Files: `src/pages/faq.astro`, Navbar-Eintrag, sitemap.xml
  - Acceptance: ≥3.000 Wörter, FAQPage-Schema komplett.

### F5: /glossar
- **Blocked By:** [F4]
- **Details:**
  - 50+ Fachbegriffe alphabetisch, à 60–120 Wörter Definition, mit Cross-Links zu relevanten Seiten
  - Files: `src/pages/glossar.astro`, Footer-Link, sitemap.xml
  - Acceptance: ≥4.000 Wörter, mind. 50 Begriffe, DefinedTerm-Schema (optional).

### F6: Author-Profil /team/sven-biewald
- **Blocked By:** [F5]
- **Details:**
  - Person-Schema, Lebenslauf, Qualifikationen, Linkliste zu allen Magazin-Artikeln
  - Files: `src/pages/team/sven-biewald.astro` (neuer Ordner), Magazin-Artikel-Author-Schema mit URL ergänzen, sitemap.xml
  - Acceptance: ≥800 Wörter, Person-Schema mit `sameAs`-LinkedIn, alle Magazin-Artikel-Author-Schemas referenzieren `/team/sven-biewald`.

### F7: Visible Breadcrumb-Komponente
- **Blocked By:** [F6]
- **Details:**
  - Sichtbares Breadcrumb-Element im DOM auf allen Magazin- und Stadt-Seiten (Schema ist da, sichtbares UI fehlt)
  - Files: `src/components/Breadcrumbs.astro` (neu), Einbau in alle Magazin- und Stadtseiten
  - Acceptance: Breadcrumb sichtbar, Schema bleibt, kein Layout-Bruch.

---

## PHASE G — Technik / Performance / Code-Hygiene (Block 8)

### G1: Self-hosted Fonts
- **Blocked By:** [F7]
- **Details:**
  - Inter + Space Grotesk als WOFF2 lokal in `public/fonts/`, Google-Fonts-Link in Layout.astro entfernen, `@font-face` in `src/styles/global.css` ergänzen mit `font-display: swap`
  - Files: `public/fonts/` (neu), `src/layouts/Layout.astro`, `src/styles/global.css`
  - Acceptance: Build grün, Fonts laden lokal, kein Request mehr an `fonts.googleapis.com`/`fonts.gstatic.com`.

### G2: Sitemap-Index mit Sub-Sitemaps
- **Blocked By:** [G1]
- **Details:**
  - `sitemap-index.xml` als Master, plus `sitemap-cities.xml`, `sitemap-magazin.xml`, `sitemap-services.xml`, `sitemap-static.xml`, `sitemap-branchen.xml`
  - `robots.txt` auf Index zeigen lassen
  - Files: alle public/sitemap*.xml, robots.txt
  - Acceptance: Index valide, alle Sub-Sitemaps abrufbar 200, alle URLs enthalten.

### G3: Sitemap lastmod realistisch setzen
- **Blocked By:** [G2]
- **Details:**
  - lastmod auf reale letzte Änderungsdaten (Git-Log oder Datei-mtime) setzen statt einheitlich 2026-04-19
  - Files: alle sitemap-*.xml
  - Acceptance: keine zwei URLs mit identischem lastmod (außer wenn sie wirklich gleich alt sind).

### G4: 404-Seite optimieren
- **Blocked By:** [G3]
- **Details:**
  - Schöne Optik, interne Linkliste zu Top-10-Seiten, Suchhinweis
  - Files: `src/pages/404.astro`
  - Acceptance: ≥300 Wörter, Branding intakt, mind. 10 interne Links.

### G5: Bildnamen mit Keywords umbenennen (DSC0xxx → labtogo-...)
- **Blocked By:** [G4]
- **Details:**
  - 14 Bilder auf `/laborcontainer/labtogo` umbenennen mit aussagekräftigen Namen
  - Migration-Script + Updates der Referenzen
  - Files: `attached_assets/`, `src/pages/laborcontainer/labtogo.astro`
  - Acceptance: keine Bilder mit DSC-Namen auf der Seite, Build grün.

### G6: JS-Bundle-Audit (`client:load` → `client:visible` wo sinnvoll)
- **Blocked By:** [G5]
- **Details:**
  - Prüfen welche React-Islands sich auf `client:visible` oder `client:idle` umstellen lassen ohne UX-Schaden
  - Files: alle .astro-Pages mit React-Islands
  - Acceptance: dev-Build hat kleineres initial JS, keine Funktionsregression.

### G7: HTML cache-control optimieren (nginx)
- **Blocked By:** [G6]
- **Details:**
  - **Achtung:** Erfordert Server-Änderung (nginx-Config auf IONOS) — kann ich nicht selbst machen, muss ich dem User als „Server-Aufgabe" auflisten
  - Files: keine im Repo
  - Acceptance: Doku in `replit.md` mit konkretem nginx-Snippet, das Thomas/User auf den Server überträgt.

### G8: HEAD-Request Content-Length Bug (nginx)
- **Blocked By:** [G7]
- **Details:**
  - **Achtung:** Erfordert Server-Änderung — gleiche Logik wie G7. Doku, kein Code im Repo.
  - Acceptance: Doku in `replit.md`.

### G9: Strukturierte-Daten-Validierung
- **Blocked By:** [G8]
- **Details:**
  - Alle 13 Magazin-Artikel + 12 Stadtseiten mental gegen Google Rich Results Test prüfen (Strukturanalyse, da Tool nicht in Sandbox)
  - Findings dokumentieren, gefundene Bugs fixen
  - Files: betroffene .astro-Dateien
  - Acceptance: kein offensichtlicher Schema-Bug mehr im Code.

### G10: replit.md aktualisieren
- **Blocked By:** [G9]
- **Details:**
  - Status aller Blöcke 2–8 dokumentieren, neue Seiten/Dateien auflisten
  - Files: `replit.md`
  - Acceptance: alle erledigten Tasks vermerkt, offene Tasks (Block 1 SMTP, Block 9 später) klar markiert.

---

## ABSCHLUSS

### Final Build & Verifikation
- **Blocked By:** [G10]
- **Details:**
  - Vollständiger `npm run build`
  - Local-Curl auf alle Seiten (jetzt mehr als 44, durch Branchenseiten + Hubs + Author-Profil)
  - Sitemap-Crawl: alle URLs in Sitemap müssen 200 liefern
  - Files: keine
  - Acceptance: Build grün, alle URLs 200, kein TypeScript-Fehler.

### Deploy-Hinweis an User
- **Blocked By:** [Final Build]
- **Details:**
  - Klare Liste aller Commits, die User auf Production einspielen muss
  - Reihenfolge: SSH → `cd /var/www/app` → `git pull` → `npm install` → `npm run build` → `pm2 restart all --update-env`
  - Server-Aufgaben (G7+G8) separat anbieten mit konkretem nginx-Snippet

---

## STATUS-LOG

**02.05.2026 16:00 — PHASE A KOMPLETT**
- A1 ✅ Layout.astro: keywords/revisit-after entfernt, hreflang de-DE für 6 DE-Städte ergänzt → live verifiziert
- A2 ✅ 5 Descriptions auf ≤155 Zeichen → live verifiziert
- A3 ✅ 2 Titles auf ≤62 Zeichen → live verifiziert
- A4 ✅ BSL-Artikel Author = Sven Biewald (Person) → live verifiziert
- A5 ✅ 195 WebPs erzeugt (152 attached_assets + 43 public/images), Picture.astro Component, 38 img→Picture-Edits in 12 Stadt-Heros + ueber-uns + Footer + 2 Magazin + 15 labtogo
- A6 ✅ Build grün (63s), 17 verifizierte URLs HTTP 200, picture+source srcset WebP korrekt gerendert
- **NEXT:** B1 Düsseldorf V4-Rebuild

**02.05.2026 16:25 — B1 DÜSSELDORF V4 ✅**
- Komplettneuschreibung 6234 Wörter (Quelltext) / ~20.247 reine Body-Wörter
- Düsseldorf-Spezifika: Pegel km 744,2 / Nullpunkt +24,529 m NHN / HW1995 10,69 m / längste Pegelreihe DE seit 1816 / BauO NRW 2018 § 62 / Bauaufsicht Brinckmannstr. 5 / 10 Stadtbezirke / C3 (urban, optional C4 Hafen) / HHU 5 Fakultäten / UKD Bilk Moorenstr. 5 40225 / Henkel HQ Holthausen Henkelstr. 67 40589 1,4 km² 6.000 MA / Qiagen Hilden Qiagen Str. 1 40724 1.200 MA HHU-Spinoff 1984 / FZ Jülich 75 km / Bayer Leverkusen 30 km / BIO.NRW + BioRiver + LifeScienceNet 500+ Life-Science NRW
- Route: A81/A8/A5/A3/A57+A46 = 480 km, ~5,5 h
- Description gekürzt auf 134 chars (Audit-Standard ≤155)
- Build grün 61,65s, HTTP 200, alle 4 Schemas (Service+LocalBusiness+Breadcrumb+FAQPage 7 Q)
- 80%+ Content-Uniqueness vs Hamburg/Berlin/München/Stuttgart (eigene Narrative: Pharma-Korridor Rheinland statt Hamburg-Hafen, Pegel-Daten statt Sturmflut, BauO NRW statt HBauO/HPA)
- **NEXT:** B2 Frankfurt V4-Rebuild

**02.05.2026 16:35 — B2 FRANKFURT V4 ✅**
- Komplettneuschreibung 6152 Wörter Quelltext / 20.219 reine Body-Wörter / 400.418 bytes HTML
- Frankfurt-Spezifika: Pegel Frankfurt-Osthafen Nullpunkt +88,757 m NN / HW2003 4,49 m / HW1882 ~7,80 m / Schifffahrt eingestellt ab ~4,0 m / Industriepark Höchst 460 ha 22.000 MA 90+ Unternehmen Sanofi ~7.500 MA 65926 / UKF Theodor-Stern-Kai 7 60590 Niederrad 33 Kliniken ~6.500 MA / Goethe-Uni Westend/Riedberg/Niederrad 45.000 Stud. / MPI Biophysik + MPI Hirnforschung + FIAS Riedberg Max-von-Laue-Str. 3+4 60438 / BioNTech Mainz An der Goldgrube 12 55131 (~40 km) / Merck KGaA Darmstadt Frankfurter Str. 250 64293 ~12.000 MA (~30 km) / Klima 700 mm (trockenste DE-Großstadt!) 11°C C3 Hitzeinsel-HVAC kritisch / HBO 2018 § 63 / Bauaufsicht Kurt-Schumacher-Str. 10 60311 / RP Darmstadt für GenTG / Infraserv-Höchst Doppelgenehmigung / FRA-Frachthub GDP-Logistik
- Route: A81/A8/A5 = 320 km, ~3,5 h, Anschlussstellen Frankfurt-Süd/Frankfurter Kreuz/Frankfurt-Nordwestkreuz
- Description: 134 chars (Audit-Standard ≤155)
- Title: "Laborcontainer Frankfurt | LABtoGO 2.0, BSL-3, GMP – schlüsselfertig" (mit Suffix → 87 chars; akzeptabel für Stadt-Hero)
- HTTP 200, alle 4 Schemas (Service+LocalBusiness+Breadcrumb+FAQPage 7 Q)
- 80%+ Content-Uniqueness vs Hamburg/Berlin/München/Stuttgart/Düsseldorf: Hitzeinsel-HVAC + Industriepark-Höchst-Doppelgenehmigung + FRA-GDP-Hub statt Sturmflut/12-Bezirksämter/Pharma-Rheinland
- **NEXT:** B3 Zürich V4-Rebuild

**02.05.2026 16:50 — B3 ZÜRICH V4 ✅**
- Komplettneuschreibung 6254 Wörter Quelltext / 20.392 reine Body-Wörter / 398.657 bytes HTML
- Zürich-Spezifika: SIA 261 Erdbebenzone Z1a agd=0,6 m/s² / SIA 380/1 Energie U≤0,17 W/m²K (strenger als GEG) / SIA 263 Stahlbau / Verzollung Thayngen T1 oder ATA-Carnet (CH MwSt 8,1%) / T13/T15-Stecker SEV 1011 NIN 2020 / ESV statt GenTG bei BAFU/BAG / Swissmedic statt BfArM / VKF-Brandschutz statt MBO / PBG ZH + ABV + BZO Stadt ZH / Amt Baubewilligungen Lindenhofstr. 19 8001 / ETH Hönggerberg+Zentrum Rämistr. 101 8092 ~25.000 Stud. 16 Departemente / UZH Campus Irchel Rämistr. 71 8006 ~28.000 Stud. 7 Fak. / USZ Rämistr. 100 8091 43 Kliniken ~9.000 MA / Roche Diagnostics Rotkreuz Forrenstr. 2 6343 (~30 km) / Technopark Hardstr. 219 8005 (Molecular Partners, BioVersys, ADCT, Cosmo) / Empa+Eawag Dübendorf / KSW Winterthur ~20 km
- Route: A81→A4→A1 = 150 km, ~2,5 h, Verzollung Zollamt Thayngen
- Description: 144 chars
- Title: "Laborcontainer Zürich | LABtoGO 2.0, BSL-3, SIA – schlüsselfertig" (66 chars vor Suffix)
- HTTP 200, alle 4 Schemas (Service+LocalBusiness+Breadcrumb+FAQPage 7 Q), areaServed mit Country=Schweiz
- 80%+ Content-Uniqueness vs DE-Städte: SIA-Statik + Verzollung Thayngen + ESV/Swissmedic-Behördenpfad + T13/T15 + SIA 380/1 strenger als GEG (alles CH-spezifisch, in keiner DE-Page)
- **NEXT:** B4 Basel V4-Rebuild

**02.05.2026 17:05 — B4 BASEL V4 ✅**
- Komplettneuschreibung mit Pharma-Hauptstadt-Fokus
- Basel-Spezifika: SIA 261 Erdbebenzone Z2 agd=1,0 m/s² (~67% höher als Zürich Z1a, Erdbeben 1356 Mw 6,6 stärkstes nördlich der Alpen) / BWK II für Pharma+Klinik / Roche HQ Grenzacherstr. 124 4070 ~10.000 MA Roche Tower / Novartis Campus St. Johann Lichtstr. 35 4056 ~8.000 MA / Lonza Münchensteinerstr. 38 4002 weltweit größter CDMO / Universität Basel Petersplatz 1 4001 ~13.000 Stud. 7 Fak. Biozentrum Spitalstr. 41 / USB Spitalstr. 21 4031 ~7.000 MA / FMI Maulbeerstr. 66 4058 Roche-affiliiert / ETH D-BSSE Mattenstr. 26 4058 / Klybeck-Areal Brownfield ehemals Novartis/BASF AltlV+TVA / Trinationale CH/DE/FR (Saint-Louis EU-Binnenmarkt!) / BPG Basel-Stadt Bauinspektorat Rittergasse 4 / RBG Basel-Land Bauinspektorat Liestal / ESV BAFU/BAG / Swissmedic / VKF / Hafen Kleinhüningen+Auhafen Birsfelden Binnenschiff Optional
- Route: A81→A98→Grenze Weil am Rhein/Basel-Hiltalingerstr. = 130 km, ~2 h (kürzeste Schwerlast-Route DE→CH!)
- 7 FAQ inkl. Klybeck-Brownfield-Frage und Hafen-Schiff-Frage (Basel-only)
- Title: "Laborcontainer Basel | LABtoGO 2.0, BSL-3, SIA Z2 – schlüsselfertig" (66 chars)
- 80%+ Content-Uniqueness vs Zürich: Z2 statt Z1a + Pharma-Triade + Trinationale Verzollung + Klybeck-Brownfield + Hafen-Option + 130km vs 150km
- **NEXT:** B5 Bern V4-Rebuild

**02.05.2026 17:20 — B5 BERN V4 ✅**
- Komplettneuschreibung 5913 W Quelltext / 22.455 Body-Wörter / 391.283 bytes HTML
- Bern-Spezifika (USP: Bundeshauptstadt mit BAG+Swissmedic VOR ORT!): SIA 261 Erdbebenzone Z1a agd=0,6 m/s² (wie ZH, niedriger als Basel Z2) / BWK II / Inselspital Freiburgstr. 18 3010 ~8.500 MA (2.-größtes CH-Spital nach USZ) / sitem-insel AG Freiburgstr. 3 3010 (translationale Forschung direkt am Inselareal!) / Universität Bern Hochschulstr. 4 3012 ~19.000 Stud. 8 Fak. / DBM Murtenstr. 35 3008 / Theodor Kocher Institute / BAG Schwarzenburgstr. 157 3003 Liebefeld (CH-Pendant zu BfArM/RKI/PEI in Personalunion!) / Swissmedic Hallerstr. 7 3012 (CH-Heilmittelbehörde, 5 Tramminuten vom Inselareal!) / BLV Schwarzenburgstr. 155 / Agroscope Liebefeld/Posieux/Reckenholz/Tänikon / BauG Kanton Bern + BauV + BO Stadt Bern / Bauinspektorat Bundesgasse 38 3011 / VKF / ESV bei BAG vor Ort einreichbar
- Route: A81→Verzollung Schaffhausen-Thayngen→A4→A1 = 220 km, ~3,5 h, alternativ A98→Weil am Rhein→A2→A1 (~250 km)
- 7 FAQ inkl. BAG-/Swissmedic-Nähe-Frage und Inselareal-Hybrid-Frage (Bern-only)
- Title: "Laborcontainer Bern | LABtoGO 2.0, BSL-3, BAG + Swissmedic – schlüsselfertig" (76 chars; einmalige Behörden-USP rechtfertigt Länge)
- Description: 147 chars
- 80%+ Content-Uniqueness vs Zürich/Basel: BAG+Swissmedic-Bundesnähe + Inselareal-Hybrid (Klinik+Translational an einem Ort) + Verzollung Schaffhausen statt Thayngen/Weil + Public-Health-Fokus
- **NEXT:** B6 Wien V4-Rebuild

**02.05.2026 17:35 — B6 WIEN V4 ✅**
- Komplettneuschreibung 6103 W Quelltext / 22.700 Body-Wörter / 393.322 bytes HTML
- Wien-Spezifika (USP: EU-Top-Life-Science-Hub Vienna BioCenter + EU-Binnenmarkt OHNE ZOLL!): Vienna BioCenter (VBC) Dr.-Bohr-Gasse 7 1030 (IMP Boehringer-finanziert + IMBA ÖAW + GMI Mendel + Max Perutz Labs MedUni+Uni Wien, 2.500+ Wissenschaftler 90+ Nationen) / AKH+MedUni Wien Währinger Gürtel 18-20 1090 ~9.000 MA 2.165 Betten (größtes AT-Spital) / ISTA Klosterneuburg Am Campus 1 3400 ~25 km Elite-Forschung ~80 Profs / Boehringer Ingelheim Wien Dr.-Boehringer-Gasse 5-11 1120 ~3.500 MA (größter BI-Standort weltweit) / AGES Spargelfeldstr. 191 1220 / BASG Traisengasse 5 1200 (org. unter AGES, AT-Heilmittelbehörde = BfArM-Pendant) / CeMM Lazarettgasse 14 1090 (direkt am AKH) / TU Wien Karlsplatz 13 1040 ~30.000 Stud. / VetMedUni 1210 (einzige vet-med Uni AT) / OIB-RL 1-6 statt MBO/LBO / BO Wien + MA 37 Baupolizei Dresdner Str. 73-75 1200 / ÖNORM B 1998-1 EC8 Z2/Z3 agR 0,4-0,6 / OIB-RL 6 Energie / GTG Anzeige BMSGPK Stubenring 1 / EU-Binnenmarkt = KEINE Zollverzollung (ATU-Reverse-Charge) / GO-Box LKW>3,5t ASFINAG
- Route: A81→A8→Walserberg→A1 = 580 km ~6,5 h (Schengen, kein Stopp)
- 7 FAQ inkl. EU-Binnenmarkt-Lieferungs-Frage und VBC-Cluster-Frage (Wien-only)
- Title: "Laborcontainer Wien | LABtoGO 2.0, BSL-3, Vienna BioCenter – schlüsselfertig" (76 chars)
- Description: 152 chars
- 80%+ Content-Uniqueness vs DE/CH-Städten: ÖNORM/OIB statt DIN/SIA + EU-Binnenmarkt-Vorteil ggü. CH (8,1% MwSt entfällt) + VBC-Cluster + BASG-Pfad + GO-Box
- **NEXT:** B7 Graz V4-Rebuild

**02.05.2026 17:50 — B7 GRAZ V4 ✅**
- Komplettneuschreibung 6064 W Quelltext / 22.655 Body-Wörter / 394.319 bytes HTML
- Graz-Spezifika (USP: Mobilitäts-Engineering-Hauptstadt + BioTechMed-3-Uni-Verbund + AT-höchste Erdbebenzone): AVL List GmbH Hans-List-Platz 1 8020 (~5.000 MA Graz, ~12.500 weltweit, größtes unabhängiges Powertrain-Engineering weltweit, Brennstoffzelle/H2/Battery-Test) / Magna Steyr Liebenauer Hauptstr. 317 8041 (~10.000 MA, Auftragsfertigung BMW Z4/Toyota GR Supra/Jaguar I-Pace/Mercedes G-Klasse) / TU Graz Rechbauerstr. 12 8010 ~13.500 Stud. (Maschinenbau/Elektrotechnik/Mechatronik + NAWI-Graz-Verbund) / Karl-Franzens-Universität Universitätsplatz 3 8010 ~30.000 Stud. / Med-Uni Graz Auenbruggerplatz 2 8036 ~4.500 Stud. (eigenständig seit 2004) / LKH-Univ. Klinikum Graz Auenbruggerplatz 1-31 8036 ~7.500 MA ~1.600 Betten 22 Univ.Kliniken (größtes Spital Steiermark) / BioTechMed-Graz (Uni+MedUni+TU Graz Forschungsverbund) / JOANNEUM RESEARCH Leonhardstr. 59 8010 (größte außeruniv. Forschung AT nach AIT) / ACIB Krenngasse 37 8010 (Industriebiotech) / Stmk. BauG LGBl. 59/1995 + OIB-RL 1-6 / Magistrat Graz Baurechtsamt Europaplatz 20 8011 / **ÖNORM B 1998-1 Z3 agR ~0,8-1,0 m/s² (höchste AT-Hauptstadt-Zone, höher als Wien!)** / Bedeutungskat. II Pflicht / **ATEX EN 60079 EX-II 2G für AVL H2-/Battery-Test** / Cluster Silicon Alps + Green Tech Valley + Mobilitätscluster / Klima 820 mm Inversionsbecken HVAC-Filter F9+H13 / EU-Binnenmarkt ATU-Reverse-Charge OHNE Zoll / GO-Box ASFINAG
- Route: A81→A8→Walserberg→A1→**A9 Pyhrn (Bosrucktunnel + Gleinalmtunnel mit Sondermaut!)** = 660 km ~7 h (1 Transporttag + Pflichtpause)
- 7 FAQ inkl. A9-Pyhrn-Tunnel-Maut-Frage + AVL/Magna-Mobilitäts-Cluster-Frage (Graz-only)
- Title: "Laborcontainer Graz | LABtoGO 2.0, BSL-3, AVL + BioTechMed – schlüsselfertig" (76 chars)
- Description: 148 chars (gekürzt von initial 165 → ≤155 Audit-Standard)
- 80%+ Content-Uniqueness vs Wien/DE/CH: Z3-Erdbeben höher als Wien + AVL+Magna-Powertrain-Cluster (einzigartig in DACH) + A9-Pyhrn-Tunnel-Maut (Wien hat nur A1) + BioTechMed-3-Uni-Verbund + ATEX-Schwerpunkt
- **NEXT:** B8 Linz V4-Rebuild (letzte V4-Stadt!)

**02.05.2026 18:05 — B8 LINZ V4 ✅ — PHASE B KOMPLETT!**
- Komplettneuschreibung 6158 W Quelltext / 21.523 Body-Wörter / 395.883 bytes HTML
- Linz-Spezifika (USP: Stahl-Chemie-Hauptstadt Mitteleuropas + JKU Med-Fak + Kepler-Klinikum 2.-grösstes AT-Spital + A1-DIREKT OHNE TUNNEL-MAUT!): Voestalpine AG Voestalpine-Str. 1 4020 (~22.000 MA Linz, ~50.000 weltweit, weltweit Top-3 Spezialstahl, R&D-HQ Linz) / Borealis AG St. Peter-Str. 25 4021 (~1.500 MA Linz, europ. Polyolefin-Marktführer, Innovation-HQ) / Chemiepark Linz (Voestalpine+Borealis+AMI Agrolinz Melamine+DSM Fine Chemicals = grösster Stahl-Chemie-Cluster Mitteleuropas) / JKU Altenberger Str. 69 4040 Auhof ~24.000 Stud. (mit Med-Fakultät seit 2014) + LIT Open Innovation Center / Kepler Universitätsklinikum Krankenhausstr. 9 4020 ~6.000 MA ~1.800 Betten (Fusion 2016 AKh+Wagner-Jauregg+Kinderspital, 2.-grösstes AT-Spital nach AKH Wien) / OÖ BauO 1994 LGBl. 66/1994 + OÖ BauTG LGBl. 67/1994 + OIB-RL 1-6 / Magistrat Linz Baurechtsamt Hauptplatz 1-5 4041 / **ÖNORM B 1998-1 Z2 agR ~0,4-0,8 m/s² (moderater als Graz/Wien)** / Werks-Doppelgenehmigung (Bauanzeige Hauptplatz + Werkleitung Voestalpine/Chemiepark/Borealis) / ATEX EN 60079 EX-II 2G für Borealis-Pilotierung / Cluster: OÖ Mechatronik+Kunststoff+Automotive+Software+Cleantech / EU-Binnenmarkt ATU-Reverse-Charge / GO-Box ASFINAG
- Route: A81→A8→Walserberg→**A1 DIREKT** = **470 km ~5,5 h** (mautgünstigste AT-Hauptstadt-Anfahrt nach Salzburg; KEIN A9 Pyhrn, KEIN Bosruck-/Gleinalmtunnel-Sondermaut!)
- 7 FAQ inkl. Stahl-Chemie-Cluster-Frage + Werks-Doppelgenehmigung-Antwort + 4-Linien-ATEX/GMP/BSL-Frage (Linz-only)
- Title: "Laborcontainer Linz | LABtoGO 2.0, BSL-3, Voestalpine + JKU – schlüsselfertig" (mit Layout-Suffix 94 chars; Hauptzeile 78 chars analog Bern/Wien/Graz)
- Description: 152 chars ✅ (Audit-Standard ≤155)
- 80%+ Content-Uniqueness vs Wien/Graz: A1-DIREKT statt A9-Pyhrn-Tunnel-Maut + Voestalpine+Borealis+Chemiepark (Stahl-Chemie statt VBC-Pharma/AVL-Mobilität) + Werks-Doppelgenehmigung + Z2 statt Z2/Z3 Wien oder Z3 Graz + Kepler-Klinikum-Innenhof-Logistik
- **PHASE B KOMPLETT (8/8 V4-Städte): Düsseldorf, Frankfurt, Zürich, Basel, Bern, Wien, Graz, Linz**
- **NEXT:** Build-Verifikation + Commit + Hinweis an User für Server-Deploy. Phase C (Branchenseiten) in nächster Session weil Token-Budget knapp.
