# SEO-Umsetzung aus der Analyse vom 18.11.2026 – Plan

> Ausführung: nativ in dieser Sitzung (executing-plans), Prüfung per Skript gegen `dist/` und lokalen Server.

**Ziel:** Alle Maßnahmen aus `docs/BERICHT-seo-analyse-2026-11-18.md` umsetzen, außer G1 (Bewertungen anfragen – Kunde möchte das nicht).
**Aufbau:** Astro 5 (SSG + Node-Adapter). Änderungen in `src/pages`, `src/layouts/Layout.astro`, `src/components`. Prüfskript `scripts/check-seo-abnahme.mjs` prüft gebaute Dateien und einen lokal gestarteten Server.
**Spec:** `docs/BERICHT-seo-analyse-2026-11-18.md`, Abnahme: `docs/ABNAHME-seo-umsetzung.md`.

## Feste Regeln (aus CLAUDE.md)

- Startseiten-Hero (Bild, Animation, Logo-PNG, Alt-Texte, Größen, Ladeverhalten) bleibt unverändert.
- Keine Preise/€-Beträge, keine erfundenen Referenzen/Fakten, keine Firmennamen auf der Projekte-Seite.
- Title ≤ 60 Zeichen (ohne „ | Planexus“, das hängt das Layout an), Description ≤ 155, genau eine H1.
- FAQ-Schema-`name` = sichtbare Frage wörtlich.
- Grüner Kleintext auf Hell: `#5c7300`.
- Bauen/Prüfen nur mit `lockf -t 3600 /tmp/elevum-bau.lock …`.
- Kein Push/Live ohne Joachims Ja.

## Prüf-Schwerpunkte

1. EN-Gegenstücke: jede Änderung an einer DE-Seite mit EN-Pendant wird dort ebenfalls gemacht.
2. Schema bleibt gültiges JSON auf allen 142 Seiten.
3. Keine neue Seite ohne Eintrag in Sitemap/hreflang; keine entfernte Seite ohne 301.
4. Handy 375 px: kein Überlauf durch neue Blöcke (Kontakt-Schritte, Ansprechpartner).
5. Unbekannte Adressen liefern weiterhin 404 mit noindex.

---

## Phase 1 – ohne Kundendaten, ohne Recherche

### Aufgabe 1: /404 liefert 404 (A3)
- Ändern: `src/pages/404.astro` → `export const prerender = false;`
- Gegenprobe: Prüfskript ruft `/404` am lokalen Server auf; vorher 500, nachher 404.

### Aufgabe 2: Schema bereinigen (C1, C2, C3, C4)
- `src/layouts/Layout.astro`: Organization und LocalBusiness bekommen dieselbe `@id` `https://planexus.de/#organization`; Organization erhält `parentOrganization: {"@type":"Organization","name":"Wesemann Holding GmbH"}`.
- 16 Städteseiten DE/EN: `"offers": {AggregateOffer…}` entfernen.
- 24 Städteseiten DE/EN: `localBusinessSchema` und dessen `<script>` entfernen; im `serviceSchema.provider` `"@id": "https://planexus.de/#organization"` ergänzen.
- Gegenprobe: Prüfskript zählt in `dist/client` 0× `AggregateOffer`, 0× `"Planexus GmbH – Laborcontainer`/`Lab containers` als LocalBusiness-Name, Organisation mit `@id` und `parentOrganization` auf jeder Seite.

### Aufgabe 3: Analytica-Vorbericht (D5a, C4)
- DE `/magazin/planexus-analytica-2026-muenchen` → 301 auf `/magazin/analytica-2026-rueckblick-labtogo-premiere`; EN `/en/magazine/planexus-analytica-2026-munich` → `/en/magazine/analytica-2026-review-labtogo-premiere`.
- Quelldateien entfernen, Einträge aus `magazinPosts`/`magazinEn`, `DE_TO_EN`, `llms.txt` und internen Links nehmen, Redirect in `astro.config.mjs` + `SITEMAP_EXCLUDE`.
- Gegenprobe: alte Adresse 301 auf Rückblick, nicht in Sitemap, 0 interne Links auf die alte Adresse.

### Aufgabe 4: Hub-Hero-Bild (A2)
- `src/pages/laborcontainer/index.astro` und EN-Pendant: CSS-Hintergrund → `<img>` mit `srcset` (800 w / 1600 w WebP), `fetchpriority="high"`, `decoding="async"`, gleiche Optik (absolute, object-cover, opacity-30).
- 800-px-Variante per sharp erzeugen und unter `public/attached_assets/` ablegen.
- Gegenprobe: Lighthouse mobil /laborcontainer, LCP vorher 6,3 s.

### Aufgabe 5: Titel, Beschreibungen, H1 (B1–B4, H4)
- B1: 2 Titel ≤ 60; B2: 5 Descriptions ≤ 155; B3: H1/Titel mit Suchbegriff auf Kontakt, Team, Über uns, Projekte, Partner, Magazin (DE+EN); B4: LABtoGO-H1 mit Produktname + Gattung; H4: Titel/Description für EN-Zürich, Zürich, EN-Brandschutz, EN-Laborabzug, EN-Digitalisierung, Über uns, Kontakt.
- Gegenprobe: Prüfskript – alle Titel ≤ 60 (ohne Suffix), alle Descriptions ≤ 155, H1 der genannten Seiten enthält Suchbegriff.

### Aufgabe 6: Kontakt und Anfrage-Führung (E3–E6)
- `src/components/ContactForm.tsx`: Pflichtfeld „Betreff“ entfernen (API `src/pages/api/contact.ts` darf ohne Betreff nicht scheitern; Betreff wird aus „Anliegen“ abgeleitet), Knopf „Unverbindlich anfragen“ (EN „Send enquiry – no obligation“).
- Kontaktseite DE/EN: drei Schritte nach der Anfrage (nur belegte Angaben: Antwort in der Regel innerhalb 48 h werktags; Bedarfsgespräch; schriftliche Indikation) und Ansprechpartner Sven Biewald mit vorhandenem Foto aus `public/team/`.
- E3: Satz „Antwort in der Regel innerhalb von 48 Stunden (werktags) – unverbindlich und kostenfrei“ an den Anfrage-Knöpfen der Geldseiten (Hub, Mieten, Kaufen, LABtoGO) DE/EN.
- Gegenprobe: Formular-Durchlauf lokal ohne Betreff → 200 und DB/Mail-Pfad unverändert; Prüfskript findet den 48-h-Satz auf den Geldseiten.

### Aufgabe 7: Interne Links (B5, B6, H1, H2, H6)
- Hub `/laborcontainer`: Abschnitte Mieten/Kaufen verlinken mit Ankertext „Laborcontainer mieten“/„Laborcontainer kaufen“.
- Startseite (außerhalb des Heros): Verweis „Laborcontainer“ auf den Hub.
- Mieten/Kaufen und weitere Seiten < 10 Links: kontextuelle Links auf Branchen, Städte, Fachartikel (Übergangslabor, GMP-Reinraum, Kosten, Genehmigung, BSL).
- Schwach verlinkte Artikel (made-in-germany, katastropheneinsatz, pfas, anforderungen-laborraeume, 5-planungsfehler, s1-s2, uebergangslabor, gmp-reinraum) bekommen je ≥ 2 neue Links aus thematisch passenden Seiten.
- Gegenprobe: Prüfskript zählt eingehende Links aus `dist`.

### Aufgabe 8: Barrierefreiheit (A6, A7)
- Überschriften-Reihenfolge auf Start, Hub, Mieten, München, Laborräume, Kontakt (Ebenen ohne Sprung; Optik über Klassen). Hero der Startseite bleibt unberührt.
- Links im Fließtext unterstrichen, grüner Kleintext `#5c7300`.
- Gegenprobe: Lighthouse `heading-order`, `link-in-text-block`, `color-contrast` grün auf den 6 Seiten.

### Aufgabe 9: Vorschaubilder (B7)
- Die 26 Seiten mit `opengraph.jpg` bekommen ein vorhandenes, thematisch passendes Bild aus `public/` (nur Bilder, deren Inhalt zur Seite passt; keine Zuschreibungen).
- Gegenprobe: Prüfskript – 0 Seiten mit Standardbild außer Impressum/Datenschutz.

### Aufgabe 10: Doppelter Cache-Control (A4)
- Ursache ermitteln (App vs. nginx), an einer Stelle setzen; nginx-Vorlage in `docs/nginx/` anpassen. Live-Teil nur über Joachims SSH.

## Phase 2 – Inhalte mit Pflicht-Recherche (Blaupause.md)

- Aufgabe 11: `/laborcontainer-mieten` und `/laborcontainer-kaufen` ausbauen (D1, H1), DE + EN.
- Aufgabe 12: Hub `/laborcontainer` als Seite für „Laborcontainer“ ausbauen (H2, B8), DE + EN.
- Aufgabe 13: Neuer Fachartikel „Laborabzug prüfen“ (H3), DE + EN, nach Rhythmus-Regel abstimmen.
- Aufgabe 14: Seiten auf Position 11–20 nachschärfen (H5).
Jede Aufgabe: Ziel-Keyword suchen, Top 3 lesen, Fakten mit Quelle, Lücken, dann schreiben; Gegenprobe Prüfskript + Lighthouse.

## Phase 3 – wartet auf Angaben des Kunden (nichts erfinden)

D2 Fallstudien, D3 Herkunft „Mehrgeschossiges Pharmalabor“ (bis dahin Text auf Sichtbares reduzieren – das wird in Phase 1 erledigt), D4 Über uns/Team, D6 Belege „50+ Projekte“/„10+ Jahre“, D7 Auswahlverfahren Award, E2 Kundenzitate, D9 EN-Pendants, G1b Profilbeschreibung, A1a Logo-PNG (nur mit Freigabe).

## Phase 4 – braucht Joachims Zugang oder Ja

G1a/c/d/e Unternehmensprofil, H6 URL-Prüfung + Indexierung beantragen, G2 Bing Webmaster Tools, E8 Anfrage als Ziel in GTM/GA4, A5 Brotli, A8 CSP, F2 KI-Messung, F3 Verzeichnisse/Presse, D5b Award-Schalter am 01.12.2026, D10 Quartalsprüfung, H7 monatliche Search-Console-Abfrage.
