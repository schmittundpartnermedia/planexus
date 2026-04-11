# Städteseiten-Blaupause – Landing Pages für Local SEO

## Verbindliche Regeln für jede Stadtseite

### Einzigartigkeit
- **Mindestens 40% des Textinhalts ist regionaler, einzigartiger Content**
- Kein Copy-Paste zwischen Städten
- Jede Stadt hat eigene lokale Unternehmen, Institute, Baurecht-Infos
- Jede Stadt hat 6 eigene FAQ-Fragen (keine Dopplungen)

### Keyword-Strategie

#### Focus Keyword
- Format: "Laborcontainer [Stadt]"
- Muss in H1, Title, Description, URL, erstem Absatz vorkommen

#### Keyword-Cluster (7 Cluster pro Seite, 15-20 Longtails)
1. **Hauptkeyword**: Laborcontainer [Stadt]
2. **Mieten/Kaufen**: Laborcontainer mieten [Stadt], Containerlabor kaufen [Stadt]
3. **Branche**: Laborcontainer Pharma [Stadt], Mobiles Labor Chemie [Stadt]
4. **Sicherheit**: BSL-2 Labor [Stadt], BSL-3 Container [Stadt]
5. **Baurecht**: Laborcontainer Genehmigung [Stadt/Bundesland], Baugenehmigung Container [Stadt]
6. **Modulbau**: Modulbau Labor [Stadt], Mobiles Labor [Stadt]
7. **Service**: Laborcontainer Planung [Stadt], Laborcontainer Ausstattung [Stadt]

### SEO-Technik

| Element | Vorgabe |
|---------|---------|
| Title | ≤60 Zeichen (inkl. " \| Planexus GmbH"), Keyword vorne |
| Description | ≤155 Zeichen, CTA am Ende, Keyword enthalten |
| H1 | Genau eine, enthält "Laborcontainer [Stadt]" |
| Canonical | Self-referencing, Format: /laborcontainer-[stadt] |
| URL | /laborcontainer-[stadt] (lowercase, Bindestriche) |
| Interne Links | Mindestens 12 kontextbezogene Links |
| Bilder | Alt-Text mit Stadtname, loading="lazy" |

### Schema.org (4 Typen pro Seite)
1. **Service** – areaServed: [Stadt + Bundesland/Kanton/Bundesland AT]
2. **BreadcrumbList** – Start > Laborcontainer [Stadt]
3. **FAQPage** – 6 Fragen mit Antworten
4. **LocalBusiness** – Planexus GmbH, serviceArea = Stadt

### Seitenstruktur (Pflicht-Sektionen)

#### 1. Hero-Sektion
- H1: "Laborcontainer für [Stadt]"
- Subheadline mit regionalem Bezug (1-2 Sätze)
- CTA-Button: "Jetzt Beratung anfragen" → /kontakt

#### 2. Leistungsübersicht (6 Karten)
- Planung, Modulbau, Logistik, Ausstattung, Beratung, Smart Lab
- Jede Karte: Icon + Titel + 2-3 Sätze mit regionalem Bezug
- Interne Links zu /leistungen/[slug]

#### 3. Regionaler Kontext (EINZIGARTIG – min. 40% des Contents)

**a) Lokale Branchen & Arbeitgeber**
- 5-8 konkrete Unternehmen/Institute der Region die Labore brauchen
- Pharma, Chemie, Biotech, Forschung, Uni – je nach Stadt
- Warum gerade dort Laborcontainer gebraucht werden

**b) Lokales Baurecht & Besonderheiten**
- Welche Landesbauordnung gilt (LBO, HBO, BauO NRW, BayBO etc.)
- Bei CH: Kantonale Bauverordnung + SIA-Normen
- Bei AT: Landesbauordnung + ÖNORM
- Zuständige Genehmigungsbehörde benennen
- Besondere Auflagen (Hafen, Denkmalschutz, Industriegebiet)

**c) Logistik & Anlieferung**
- Entfernung von Albstadt (Firmensitz) zur Stadt
- Transportwege (Autobahn, Route)
- Geschätzte Lieferzeit
- Lokale Aufstellmöglichkeiten

**d) Regionale Referenzen**
- Wenn Projekte in der Region: konkret benennen
- Wenn nicht: "Deutschlandweit über X Projekte realisiert" + nächstgelegenes

#### 4. Vorteile Container vs. Massivbau
- 4-6 Vorteile mit regionalem Beispiel
- Zeitvergleich, Kosteneffizienz, Flexibilität, Standortwechsel

#### 5. FAQ-Sektion (6 Fragen, EINZIGARTIG pro Stadt)
- Aufklappbare Details-Elemente
- FAQPage-Schema im JSON-LD
- Fragentypen:
  1. Kosten: "Was kostet ein Laborcontainer in [Stadt]?"
  2. Genehmigung: "Brauche ich eine Baugenehmigung in [Bundesland]?"
  3. Lieferzeit: "Wie schnell kann ein Laborcontainer nach [Stadt] geliefert werden?"
  4. Mieten: "Kann ich einen Laborcontainer in [Stadt] auch mieten?"
  5. BSL: "Gibt es BSL-2/BSL-3 Containerlabore für [Stadt]?"
  6. Regional: Stadtspezifische Frage (z.B. Hafen, Klima, Uni-Nähe)

#### 6. CTA-Sektion
- "Laborcontainer für [Stadt]? Wir beraten Sie."
- Kontakt-Link + Telefonnummer
- Vertrauenselemente (Erfahrung, Made in Germany, Wesemann Holding)

### Differenzierungsfaktoren pro Stadt

| Faktor | Was sich unterscheidet |
|--------|----------------------|
| Lokale Unternehmen | Konkrete Firmen/Institute der Region |
| Landesbauordnung | LBO des jeweiligen Bundeslandes |
| Branchenfokus | Dominante Industrie der Region |
| Transportlogistik | Route ab Albstadt, Entfernung, Lieferzeit |
| Klimatische Besonderheiten | Küste, Hochlage, Kontinental etc. |
| FAQs | 6 komplett unterschiedliche Fragen |
| Subheadline | Einzigartiger Einstieg pro Stadt |

### Erstellungsreihenfolge

**Runde 1**: Hamburg, Düsseldorf, Frankfurt
**Runde 2**: Hannover, Dresden, Zürich, Basel
**Runde 3**: Wien, Bremen, Mainz
**Runde 4**: Kiel, Erfurt, Potsdam, Bern
**Runde 5**: Graz, Linz, Magdeburg, Schwerin, Saarbrücken

### Checkliste vor Veröffentlichung
- [ ] Title ≤60 Zeichen (mit Suffix)
- [ ] Description ≤155 Zeichen mit CTA
- [ ] H1 enthält "Laborcontainer [Stadt]"
- [ ] Canonical gesetzt
- [ ] 4 Schema-Typen (Service, BreadcrumbList, FAQPage, LocalBusiness)
- [ ] 6 FAQs (einzigartig, keine Dopplungen mit anderen Städten)
- [ ] 12+ interne Links
- [ ] 40%+ regionaler einzigartiger Content
- [ ] Alt-Texte auf allen Bildern mit Stadtname
- [ ] In Sitemap eingetragen
- [ ] Kein Copy-Paste von anderen Städteseiten
