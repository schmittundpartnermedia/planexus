# SEO-Analyse planexus.de – Stand 18.11.2026

Geprüft wurde die **Live-Seite** (so, wie Google sie sieht): alle 142 Adressen aus der Sitemap (71 DE, 71 EN), Weiterleitungen, Server-Kopfzeilen, Fehlerseiten, strukturierte Daten, Lighthouse (Handy) auf 6 Seiten, Textähnlichkeit der Städteseiten, Inhalte und Kundenführung von Startseite, Kontakt, Projekte.
Nicht geprüft werden konnte, was nur mit Google-Zugang oder bezahlten Werkzeugen geht (Abschnitt 8).

## 1. Kurzfazit

- **Technik: sehr gut.** Alle 142 Seiten liefern 200, keine Seite gesperrt, Canonical überall korrekt, hreflang DE/EN vollständig, Sitemap sauber, Weiterleitungen in einem Schritt, Lighthouse-SEO überall 100. Hier fehlt fast nichts.
- **Inhalt: stark bei Städteseiten, Branchen und Magazin – schwach genau dort, wo Kunden entscheiden.** Die Geldseiten Mieten/Kaufen haben je ~950 Wörter, die Städteseiten ~3.000. Über uns, Team, Projekte und Kontakt sind dünn (159–246 Wörter). Echte Referenzen fehlen.
- **Psychologie/Kundenführung: Vertrauen ist der Engpass.** Kein Kundenzitat, keine belegte Fallstudie, ein Projektbild mit unbelegter Zuschreibung, Werbeaussagen ohne Beleg, ein Abstimmungs-Aufruf auf der Startseite, der vom Anfragen ablenkt.
- **Strukturierte Daten: zwei echte Fehler** (Angebot ohne Preis auf 8 Städteseiten, 12 erfundene „Standort“-Firmen mit derselben Adresse).
- **Google-Daten (Nachtrag Search Console):** Die Kernbegriffe stehen auf Seite 3–4: „laborcontainer“ Position 37,9, „laborcontainer mieten“ 33,5, „laborcontainer kaufen“ 26,4. Für Mieten- und Kauf-Suchen zeigt Google lieber die Übersichtsseite als die Mieten-/Kaufen-Seiten. Zwei ältere Artikel haben in 3 Monaten keine Einblendung. Abschnitt 4a.
- **Unternehmensprofil (Nachtrag):** vorhanden und gepflegt, aber 0 Rezensionen und Hauptkategorie „Containeranbieter“. Abschnitt 4b.
- **Weiter unbekannt:** Backlinks.

## 2. Was schon gut ist (Ist-Stand, belegt)

| Bereich | Befund |
|---|---|
| Erreichbarkeit | 142/142 Seiten Status 200, keine `noindex`, kein `X-Robots-Tag` |
| robots.txt | Erlaubt alles außer `/admin` und `/api/`, verweist auf Sitemap; KI-Crawler nicht gesperrt |
| Sitemap | Index + 142 URLs, `lastmod` aus Git, hreflang-Paare in jeder URL |
| Canonical | 142/142 zeigen auf sich selbst |
| hreflang | Jede Seite: de-DE, en, x-default; `<html lang>` korrekt |
| Weiterleitungen | http→https, www→ohne www, Slash weg: je ein 301; alte Pfade (/about) 301 |
| Unbekannte Adressen | 404 mit `noindex` (DE und EN) |
| HTTPS/HSTS | HSTS 1 Jahr inkl. Subdomains, Referrer-Policy, X-Frame-Options |
| Titel | Keine Duplikate, 140/142 ≤ 60 Zeichen, Keyword vorn |
| Descriptions | Keine fehlt, keine doppelt, 137/142 ≤ 155 Zeichen |
| H1 | Genau eine H1 auf allen 142 Seiten |
| Bilder | 0 Bilder ohne Alt-Text, 0 ohne Maße |
| Schema | Jede Seite ≥ 3 Typen, 0 JSON-Fehler; Article mit Autor + Datum auf allen Magazinartikeln; Breadcrumbs auf 136 Seiten |
| Social | og:image und Twitter-Card auf allen Seiten |
| Lighthouse SEO | 100 auf allen 6 gemessenen Seiten; Best Practices 100 |
| Mobil | Aktionsleiste „Anrufen / Anfrage“ vorhanden, CLS überall 0 |
| KI-Suche | `llms.txt` vorhanden und aktuell, Autoren- und Datumsangaben, FAQ-Blöcke |
| Städteseiten | Kein Abklatsch: im Schnitt 24,5 % gleiche Textbausteine, höchstens 46,7 % (Graz/Linz) |

## 3. Lighthouse (Handy, live, 18.11.2026, Playwright-Chromium)

| Seite | Leistung | Barrierefreiheit | SEO | LCP | Auffällig |
|---|---|---|---|---|---|
| Startseite | 75 | 98 | 100 | 12,7 s | Logo-PNG im Hero 1.534 KB; LCP-Element ist der Cookie-Banner-Text |
| /laborcontainer | 77 | 95 | 100 | 6,3 s | Hero-Hintergrund 449 KB als CSS-Hintergrund |
| /laborcontainer-mieten | 100 | 99 | 100 | 1,7 s | – |
| /laborcontainer-muenchen | 89 | 99 | 100 | 3,7 s | – |
| /magazin/anforderungen-laborraeume | 95 | 92 | 100 | 2,9 s | Farbkontrast, Link nur durch Farbe erkennbar |
| /kontakt | 86 | 99 | 100 | 4,2 s | – |

Überschriften-Reihenfolge (`heading-order`) wird auf allen 6 Seiten bemängelt. Echte Nutzerdaten (Chrome-Felddaten) fehlen, Googles PageSpeed-Schnittstelle war heute ausgeschöpft.

## 4a. Google-Daten aus der Search Console (21.08.–18.11.2026, über OpenRush)

**Gesamt:** 228 Klicks (+42 zum Vorzeitraum), 9.131 Einblendungen (+4.327, fast verdoppelt), Klickrate 2,5 % (−1,4 Punkte), Ø Position 23,5 (vorher 32,6 – besser). Länder: Deutschland 150 Klicks / Ø Pos. 33,2; Schweiz 20 / 11,6; Österreich 6 / 28,2. Viele Einblendungen aus Chile/USA kommen von der fremden Suche „planex zurich“ (693 Einblendungen, 0 Klicks) – kein Planexus-Thema.

**Kernbegriffe (Suchbegriff → Einblendungen, Klicks, Ø Position):**

| Suchbegriff | Einbl. | Klicks | Pos. | Welche Seite zeigt Google |
|---|---|---|---|---|
| planexus | 343 | 69 | 3,9 | Startseite (Pos. 4,2), Sitelinks auf Pos. 1 |
| laborcontainer | 318 | 2 | 37,9 | Über 20 Seiten verteilt; beste: /laborcontainer 37,3, Wien 22,9, Zürich 11,8 |
| laborcontainer mieten | 99 | 0 | 33,5 | /laborcontainer **27,8** vor /laborcontainer-mieten **41,9** |
| laborcontainer kaufen | 69 | 0 | 26,4 | /laborcontainer **19,7** vor /laborcontainer-kaufen **54,3** |
| labtogo | 198 | 3 | 7,0 | LABtoGO-Seite 7,0 |
| labor container / containerlabor / container labor | 31 / 19 / 17 | 0 | 48–62 | Städteseiten, Hub |
| mietcontainer labor | 9 | 0 | 34,6 | verteilt auf 8 Seiten |
| reinraumcontainer / reinraum container | 17 / 14 | 0 / 1 | 31 / 39 | – |
| modulbau labor / modularer laborbau | 27 / 3 | 0 | 43 / 42 | – |
| bsl-3 / bsl 3 / bsl 2 | 50 / 38 / 29 | 0 | 31–45 | BSL-Artikel |

**Themen mit Nachfrage, aber ohne passende Seite:** „laborabzug prüfung“ 246, „laborabzug“ 177, „din en 14175“ 137, „laborabzüge“ 64, „digestorium prüfung“ 57, „digestorien“ 53, „laborabzüge prüfen“ 44 usw. – zusammen über 1.000 Einblendungen, alle auf Position 50–75. Google zeigt dafür den Container-Artikel zum Laborabzug (1.282 Einblendungen, Pos. 50,2). Dazu „laborausstattung“ 95 (Pos. 52), „laborlüftung“ 36, „labor lüftungsanlage“ 28 (Pos. 66–75).

**Seiten mit vielen Einblendungen, guter Position, aber kaum Klicks (Titel/Beschreibung):** /en/lab-containers-zurich (304, Pos. 6,3, 0 Klicks), /en/magazine/lab-container-fire-protection (166, Pos. 8,5, 0), /en/magazine/lab-container-fume-hood-din-en-14175 (125, 8,5, 1), /en/magazine/lab-container-digitalization… (92, 9,5, 0), /laborcontainer-zuerich (271, 9,6, 2), /ueber-uns (241, 8,2, 2), /kontakt (123, 3,8, 0).

**Kurz vor Seite 1 (Position 11–20):** /en/magazine/bsl-2-bsl-3-container-lab (769 Einbl., 20,2), /magazin/bsl-2-bsl-3-container-labor (372, 19,3), /magazin/laborcontainer-genehmigung-baurecht-vorschriften (150, 14,7), /laborcontainer-bern (99, 16,2), /laborcontainer-basel (75, 15,1), /magazin/laborcontainer-ausstattung-checkliste (57, 16,5), /en/magazine/lab-container-hvac-ventilation-standards (117, 11,4).

**Seiten ohne eine einzige Einblendung in 3 Monaten:** /magazin/gmp-reinraum-container-pharma-produktion (online seit 10.02.2026), /magazin/uebergangslabor-sanierung-mietcontainer (seit 21.05.2026), /magazin/pfas-analytik-labor-laborcontainer (seit 08.10.2026), /magazin/anforderungen-laborraeume (seit 13.11.2026, zu neu), dazu EN: innovation-modular-construction-mobile-lab, laboratory-room-requirements-germany. Bei GMP-Reinraum und Übergangslabor ist das nach 6–9 Monaten ein Hinweis, dass Google sie nicht aufgenommen hat.

**KI-Modus sichtbar:** Lange Fragen wie „which company specialises in turnkey laboratory fit out projects?“ (Pos. 4,4) oder „zeige mir unternehmen, die labore in modulbauweise bauen“ (Pos. 4,9) tauchen auf – das sind Anfragen aus Googles KI-Modus.

## 4b. Google-Unternehmensprofil (geprüft 18.11.2026)

| Feld | Ist | Bewertung |
|---|---|---|
| Name | Planexus GmbH | passt |
| Hauptkategorie | „Containeranbieter“ | passt schlecht: Planexus plant und liefert Labore; Creditreform führt „Ingenieurbüros für bautechnische Gesamtplanung“ |
| Adresse / Telefon | Am Steinbach 8, 72459 Albstadt / 07435 7519700 | stimmt mit Website und Schema überein |
| Öffnungszeiten | eingetragen (öffnet 08:00) | passt |
| Website-Link | https://planexus.de/ ohne Kennzeichnung | Klicks aus dem Profil sind in Analytics nicht von normalen Google-Klicks zu trennen |
| Beiträge | regelmäßig (28.07., 01.10.2026) | gut; letzter Beitrag 7 Wochen alt |
| Rezensionen | keine Sterne, keine Rezension sichtbar | größte Lücke |
| Beschreibung | „10 Jahre Erfahrung und mehr als 50 erfolgreiche Projekte“ | dieselbe unbelegte Aussage wie auf der Website (D6) |
| Werk Haigerloch | kein eigenes Profil gefunden | nur anlegen, wenn dort ein eigener, besetzter Planexus-Standort ist |
| Markenverwechslung | planexus.net (ERP-System einer anderen Firma) steht in der Markensuche direkt unter euch | erklärt, warum die Startseite für „planexus“ nur Ø Position 4 hat |

## 4. Befunde und Maßnahmen – vollständige Liste

Jeder Punkt: Befund mit Beleg → Ursache → Lösung. Keine Rangfolge; gruppiert nach Bereich.

### A. Technik

**A1 – Startseite lädt auf dem Handy langsam (LCP 12,7 s, Leistung 75).**
Ursache (korrigiert nach Fehlersuche am 18.11.): Das Hero-Logo `Planexus_Home-…png` (1.534 KB) ist auf dem Handy ausgeblendet (`hidden md:block`), wird aber trotzdem geladen und bremst die wichtigen Dateien. Die erste Vermutung, der Cookie-Banner erscheine zu spät, war falsch: Er wird bereits beim Laden eingeblendet.
Lösung: **Nur mit ausdrücklicher Freigabe von Joachim/Kunde:** Der Hero ist laut Kundenwunsch unantastbar. Möglich wäre dieselbe Grafik pixelgleich als WebP/AVIF (gleiches Aussehen, ein Bruchteil der Größe). Ohne Freigabe bleibt es so – dann ist der Preis rund 1,5 MB je Erstbesuch.

**A2 – Hub-Seite /laborcontainer: LCP 6,3 s.**
Ursache: Hero-Hintergrund `Laborcontainer_001…webp` (449 KB) ist als CSS-Hintergrund eingebunden – der Browser findet ihn spät, und Handys laden dieselbe große Datei wie Desktop.
Lösung: Als `<Picture>` mit `srcset` (Handy ~800 px), `fetchpriority="high"`, ohne `loading="lazy"`; Aussehen bleibt gleich.

**A3 – Adresse /404 liefert Status 500 (Serverfehler).**
Beleg: `curl https://planexus.de/404` → 500. Unbekannte Adressen liefern korrekt 404.
Ursache: Die Fehlerseite wird beim direkten Aufruf im Server-Modus nicht sauber ausgeliefert (Ursache im Code noch nicht eingegrenzt).
Lösung: Mit `systematic-debugging` eingrenzen; Ziel: /404 liefert 404 mit `noindex` wie /en/404.

**A4 – Zwei `Cache-Control`-Kopfzeilen gleichzeitig.**
Beleg: `public, max-age=0` und `public, max-age=0, s-maxage=300, stale-while-revalidate=86400`.
Ursache: App und nginx setzen beide den Header.
Lösung: Nur noch an einer Stelle setzen (nginx-Vorlage `docs/nginx/`), danach `nginx -t`.

**A5 – Nur gzip, kein Brotli.**
Lösung: Brotli-Modul in nginx aktivieren (spart ~15–20 % gegenüber gzip bei HTML/CSS/JS). Nur mit Server-Freigabe.

**A6 – Überschriften-Reihenfolge springt (alle 6 gemessenen Seiten).**
Ursache: Überschriften-Ebenen werden für Optik gewählt (z. B. H2 → H4).
Lösung: Ebenen korrigieren, Optik über Klassen; mit `web-design-guidelines`.

**A7 – Farbkontrast und Links nur über Farbe (Laborräume-Artikel, /laborcontainer).**
Lösung: Grüner Fließtext auf Hell nur `#5c7300`, Links im Text zusätzlich unterstreichen.

**A8 – Keine Content-Security-Policy, keine Permissions-Policy.**
Kein Rankingfaktor, aber Best Practice. Lösung: CSP im Report-Only-Modus einführen (GTM erlauben), dann scharf schalten.

### B. Onpage (Titel, Beschreibungen, Überschriften, Links)

**B1 – 2 Titel zu lang:** `/magazin/s1-s2-labor-anforderungen` (64), `/en/magazine/s1-s2-lab-requirements-germany` (61). Lösung: auf ≤ 60 kürzen.

**B2 – 5 Beschreibungen zu lang (> 155):** `/branchen` (156), `/branchen/energiewende-h2-batterie` (161), `/branchen/industrie-werkstoffpruefung` (159), `/en/industries` (160), `/leistungen/planung` (157). Lösung: kürzen.

**B3 – Allgemeine H1/Titel ohne Suchbegriff:** `/kontakt` („Kontaktieren Sie uns“), `/team` („Das Planexus Team“), `/ueber-uns` („Über Planexus“), `/projekte` („Unsere Projekte“), `/partner` („Unser Partner-Netzwerk“), `/magazin` („Planexus Magazin“). Gleiches in EN. Lösung: Begriff ergänzen, z. B. „Laborcontainer anfragen“, „Laborcontainer-Projekte“, „Magazin: Fachwissen Laborcontainer“.

**B4 – LABtoGO-H1** „Ein normaler Laborcontainer passt in den LABtoGO rein.“ ist ein Werbesatz. Lösung: H1 mit Produktname und Gattung („LABtoGO – Laborcontainer mit 2.750 mm Raumhöhe“), Werbesatz als Unterzeile.

**B5 – Seiten mit weniger als 10 internen Links im Inhalt** (Projektregel ≥ 10): `/laborcontainer-mieten` (8), `/laborcontainer-kaufen` (8), `/kontakt` (8), `/projekte` (8), `/ueber-uns` (8), `/team` (9), `/partner` (7), `/ueber-uns/auszeichnungen` (4), `/team/thomas-boss` (3), `/best-of-industry-award-2026` (2), `/magazin/laborcontainer-baustelle-materialpruefung` (7), `/magazin/laborcontainer-aufstellung-bodenplatte-statik` (8), `/magazin/wenn-das-neue-labor-zu-spaet-kommt-5-planungsfehler` (9) und die EN-Gegenstücke. Lösung: passende Links im Fließtext ergänzen (v. a. Mieten/Kaufen → Branchen, Städte, Fachartikel).

**B6 – Fachartikel bekommen kaum Links von anderen Seiten.** Eingehende Links (alle Seiten zusammen): made-in-germany 2, katastropheneinsatz 3, analytica-Artikel je 4, pfas-analytik 4, anforderungen-laborraeume 5, 5-planungsfehler 5, s1-s2-labor 6, uebergangslabor 6, brandschutz 7, digitalisierung 7, laborabzug 7, baustelle 7, kosten 8; Teamseite Sven Biewald 2. Lösung: Von Geldseiten, Branchen- und Städteseiten im Text auf das jeweils passende Fachthema verlinken (z. B. Pharma → GMP-Reinraum, Mieten → Übergangslabor, Kosten); Autorenzeile auf Artikeln zur Teamseite.

**B7 – 26 Seiten nutzen das Standard-Vorschaubild** `opengraph.jpg`. Lösung: Je Seite ein passendes Bild (beim Teilen in LinkedIn sichtbar).

**B8 – Startseite und /laborcontainer zielen beide auf „Laborcontainer“.** Mögliche Konkurrenz im eigenen Haus. Ob Google das verwechselt, zeigt nur Search Console (Abschnitt 8). Lösung nach Prüfung: Startseite = Marke + „Laborcontainer & modularer Laborbau“, Hub = „Laborcontainer“ allgemein; Startseite verlinkt den Hub mit dem Wort „Laborcontainer“.

### C. Strukturierte Daten (Schema)

**C1 – `AggregateOffer` ohne Preis auf 8 Städteseiten** (Basel, Bern, Düsseldorf, Frankfurt, Graz, Linz, Wien, Zürich). Beleg: `{"@type":"AggregateOffer","priceCurrency":"EUR","availability":"InStock"}`. Ein Angebot ohne `lowPrice` ist für Google unvollständig; Preise sind laut Projektregel verboten. Lösung: Block entfernen.

**C2 – 12 zusätzliche „LocalBusiness“-Firmen** („Planexus GmbH – Laborcontainer Wien“ usw.), alle mit der Albstadt-Adresse. Google erlaubt LocalBusiness nur für echte Standorte; zwölf Firmen gleicher Adresse verwässern die Firmen-Identität. Lösung: Eine Firma mit fester `@id` (`https://planexus.de/#organization`), Städteseiten nur `Service` mit `areaServed` = Stadt und `provider` → diese `@id`.

**C3 – Firmen-Schema unvollständig.** `parentOrganization` (Wesemann Holding GmbH) fehlt; `sameAs` nur Facebook und LinkedIn. Lösung: Holding ergänzen; `sameAs` um belegte Profile erweitern (Google-Unternehmensprofil, Wesemann-Seite, Messe-/Verbandsprofile, später Wikidata).

**C4 – `Event` für die analytica (24.03.2026) steht noch auf einer Vorbericht-Seite.** Lösung: siehe D5.

**C5 – FAQPage auf 116 Seiten.** Google zeigt seit Mai 2026 keine FAQ-Ergebnisse mehr. Nicht falsch (beschreibt sichtbare FAQ, hilft KI-Suchen), aber keine weitere Arbeit für Google hineinstecken.

**C6 – Projekte-Seite ohne passendes Schema.** Lösung: Nach Aufbau der Fallstudien (D2) `ItemList` mit `CreativeWork`/`Article` je Projekt.

### D. Inhalt

**D1 – Geldseiten Mieten und Kaufen sind die dünnsten Verkaufsseiten.** Je ~950 Wörter, 8 interne Links; untereinander 52 % gleiche Textbausteine. Städteseiten haben 2.750–3.200 Wörter, Branchenseiten ~1.800. Ursache: Seiten wurden früh gebaut, nicht nachgezogen. Lösung: Nach Pflicht-Workflow (Top-3 googeln, Fakten, Lücken) ausbauen – Mieten: Mindestmietdauer, Ablauf bis Rückbau, Mietkauf, Verlängerung, was inklusive ist, Genehmigung bei Miete; Kaufen: Abschreibungs-Logik (ohne Beträge), Wiederverkauf/Umsetzen, Erweiterung, Wartung. Eigene Texte statt gemeinsamer Bausteine.

**D2 – Keine belegten Referenzen.** Projekte-Seite: 201 Wörter, nur Bildkarten. Ursache: Es liegen keine freigegebenen Projektangaben vor. Lösung: Vom Kunden 4–6 Projekte mit Fakten (Branche, Region, Fläche, Sicherheitsstufe, Bauzeit, Besonderheit) – ohne Firmennamen (Projektregel) – als kurze Fallstudien. Fehlt das: im STAND als fehlend führen, nichts erfinden.

**D3 – Projektbild mit unbelegter Zuschreibung noch auf Startseite und Projekte-Seite.** „Mehrgeschossiger Laborcontainer mit Holzfassade“ (Startseite, Kategorie Pharma) und „Mehrgeschossiges Pharmalabor“ (Projekte). Am 17.11. hast du festgestellt, dass die Herkunft dieses Bildes nicht belegt ist. Lösung: Beim Kunden klären; bis dahin Text auf das Sichtbare reduzieren.

**D4 – Vertrauensseiten dünn:** Über uns 246 Wörter, Team 167, Thomas Boss 474, Sven Biewald 594, Kontakt 159, Auszeichnungen 376. Für Google (Erfahrung, Fachwissen, Vertrauen) und für Kunden wichtig. Lösung: Mit belegten Fakten ausbauen – Werk Haigerloch (Fotos, Fertigungsschritte), Beziehung zur Wesemann-Holding, Qualifikationen und Laufbahn der Köpfe, Ansprechpartner je Thema. Angaben kommen vom Kunden.

**D5 – Veraltete Inhalte.** (a) `/magazin/planexus-analytica-2026-muenchen` lädt zum Besuch einer Messe ein, die im März 2026 war („Warum Ihr Besuch unverzichtbar ist“). Lösung: 301 auf den Rückblick-Artikel oder Text auf Vergangenheit umstellen, Event-Schema entfernen. (b) Best-of-Industry-Abstimmung auf der Startseite: Schalter `showBestOfIndustryBanner` laut Plan am 01.12.2026 auf `false`, Award-Seite auf Ergebnis umschreiben. (c) Ältere Artikel (z. B. Innovation im Modulbau, Stand 12.01.2026) auf Aktualität prüfen.

**D6 – Werbeaussagen ohne sichtbaren Beleg** (Projektregel „alles belegbar“): „50+ realisierte Labor-Projekte“, „10+ Jahre Erfahrung der Geschäftsführung“, „setzen neue Standards“, „Branchenpionier“, „Stand der Technik“, „Weltweiter Transport“ (sonst überall DACH). Lösung: Belege vom Kunden holen und nennen, sonst umformulieren oder streichen.

**D7 – Auszeichnung „German CEO Excellence Awards 2026“ (EU Business News).** Die Seite erklärt nicht, wie ausgewählt wurde. Fachpublikum (Laborleiter, Einkauf öffentlicher Hand) prüft so etwas. Lösung: Auswahlverfahren nach Angabe des Veranstalters nennen; prominente Platzierung auf der Startseite überdenken.

**D8 – Themenlücken.** Kandidaten (Suchvolumen noch nicht geprüft, Pflicht-Workflow vor jedem Bau): geplant B „Laborfläche erweitern: Umbau, Neubau oder Modul?“ (30.11.) und C „Notdusche und Augendusche im Labor“ (14.12.); weitere Kandidaten: „Containerlabor“/„mobiles Labor“ (Begriffsvarianten), „S3-Labor Anforderungen“, „Reinraumcontainer“, „Laborcontainer gebraucht/Rückkauf“, „Förderung Laborausbau“, „Laborgebäude in Modulbauweise“.

**D9 – Englische Seiten genauso dünn** bei About (248), Contact (167), Team (186), Projects (247). Lösung: zusammen mit D2/D4 übersetzen.

**D10 – Aktualität sichtbar machen.** 134 von 142 Seiten zuletzt im Oktober geändert. Lösung: Feste Prüfrunde je Quartal für Geldseiten und Top-Artikel, „Stand“-Datum sichtbar (bei Artikeln schon vorhanden).

### E. Psychologie und Kundenführung

**E1 – Ablenkung auf der Startseite.** Gleich nach dem Hero: Award-Block und „Jetzt abstimmen“ (führt von der Seite weg). Hick-Gesetz: jede zusätzliche Wahl verzögert die Entscheidung. Lösung: Ab 01.12. entfernen (Schalter), danach eine klare Reihenfolge: Nutzen → Belege → Anfrage.

**E2 – Kein sozialer Beweis außer Auszeichnungen.** Keine Kundenstimmen, keine Zahlen aus echten Projekten. Lösung: Wörtliche, freigegebene Kundenzitate (Funktion + Branche statt Firma), Fallstudien aus D2 neben die Anfrage-Knöpfe.

**E3 – Risiko-Senker nur auf der Kontaktseite.** „Antwort in 48 Stunden, unverbindlich, kostenfrei“ steht nur auf /kontakt. Lösung: Denselben Satz direkt an jeden Anfrage-Knopf auf Startseite, Hub, Mieten, Kaufen, LABtoGO, Städte- und Branchenseiten.

**E4 – Formular hat ein unnötiges Pflichtfeld.** „Betreff“ ist Pflicht, obwohl „Ihr Anliegen“ schon abgefragt wird. Lösung: Betreff entfernen oder optional; Knopf statt „Anfrage senden“ z. B. „Unverbindlich anfragen“.

**E5 – Was nach der Anfrage passiert, steht nirgends.** Lösung: Drei Schritte neben dem Formular (1. Rückmeldung, 2. Bedarfsgespräch, 3. schriftliche Indikation) – baut Unsicherheit ab.

**E6 – Kein Gesicht am Formular.** Lösung: Ansprechpartner mit Foto, Name, Funktion und Direktnummer neben dem Formular (Sympathie, Autorität).

**E7 – Kein Angebot für Frühphasen-Besucher.** Wer noch recherchiert, hat nur „Anfrage“. Lösung: Lastenheft-Vorlage oder Ausstattungs-Checkliste als PDF zum Herunterladen (Inhalt existiert als Artikel) – Entscheidung, ob mit oder ohne E-Mail-Angabe.

**E8 – Erfolg der Anfragen messen.** GTM ist eingebunden; ob das Absenden des Formulars als Ziel in GA4/Ads gezählt wird, ist nicht geprüft. Lösung: Ereignis „Anfrage gesendet“ einrichten und prüfen.

### F. KI-Suche (ChatGPT, Gemini, Copilot, Perplexity)

**F1 – Grundlage steht** (llms.txt, KI-Crawler erlaubt, Autor/Datum, FAQ, Kurz-gesagt-Kästen in neuen Artikeln).

**F2 – Neumessung offen.** Etappen A–C der KI-Neumessung (Plan vom 04.11.) sind nicht durchgeführt; für Perplexity fehlt deine Entscheidung (Konto). Lösung: Messung durchführen, Vergleich zu 23.10.

**F3 – Präsenz außerhalb der eigenen Seite.** KI-Antworten stützen Empfehlungen auf fremde Quellen. Lösung: Einträge in Branchenverzeichnissen und Labor-Fachportalen, Fachbeiträge/Pressemitteilungen (z. B. LABtoGO), LinkedIn regelmäßig (läuft), später Wikidata-Eintrag. Alle Profile mit derselben Beschreibung wie „Über uns“.

**F4 – Ältere Artikel nachrüsten** mit Kurz-gesagt-Kasten und Quellenangaben wie im Laborräume-Artikel.

### G. Außerhalb der Seite

**G1 – Google-Unternehmensprofil: 0 Rezensionen.** Lösung: Zufriedene und auch alle anderen echten Kunden neutral um eine ehrliche Bewertung bitten (Link aus dem Profil), ohne Gegenleistung; jede Bewertung beantworten.

**G1a – Hauptkategorie „Containeranbieter“.** Lösung: Im Profil die Kategorienliste durchsehen und die zutreffendste wählen (Planung/Lieferung von Laboren); „Containeranbieter“ höchstens als Zusatzkategorie. Die genauen Namen zeigt nur die Kategorieauswahl im Profil.

**G1b – Profilbeschreibung** enthält „10 Jahre Erfahrung“ und „mehr als 50 Projekte“ ohne Beleg. Lösung: wie D6 – belegen oder umformulieren; Website, Profil, LinkedIn und Facebook gleichlautend.

**G1c – Website-Link ohne Kennzeichnung.** Lösung: `https://planexus.de/?utm_source=google&utm_medium=organic&utm_campaign=gbp` (Canonical fängt den Zusatz ab).

**G1d – Leistungen, Produkte (LABtoGO), Fotos (Werk, Montage, Innenausbau) im Profil** ergänzen; Beiträge alle 2 Wochen mit jedem neuen Magazinartikel.

**G1e – Markenverwechslung mit planexus.net.** Lösung: Firmenangaben im Schema vervollständigen (C2/C3), überall gleicher Name „Planexus GmbH“ mit „Laborcontainer“ im Zusatz, Erwähnungen auf Fremdseiten (F3).

### H. Aus den Search-Console-Daten

**H1 – Mieten- und Kaufen-Seiten verlieren gegen die eigene Übersichtsseite.** Für „laborcontainer kaufen“ steht /laborcontainer auf 19,7, /laborcontainer-kaufen auf 54,3; für „mieten“ 27,8 gegen 41,9. Ursache: Die Unterseiten sind dünner (D1) und die Übersichtsseite behandelt Mieten und Kaufen selbst ausführlich. Lösung: D1 umsetzen; auf /laborcontainer Mieten/Kaufen nur kurz anreißen und mit „Laborcontainer mieten“ / „Laborcontainer kaufen“ deutlich auf die Unterseiten verlinken.

**H2 – „Laborcontainer“ selbst auf Pos. 37,9, verteilt auf über 20 Seiten.** Lösung: Die Übersichtsseite als einzige Seite für das Wort aufbauen (deutlich mehr Inhalt: Typen, Größen, Normen, Ablauf, Vergleich Festbau), alle anderen Seiten verlinken sie mit genau diesem Wort; Startseite verweist prominent darauf (B8).

**H3 – Neues Thema „Laborabzug prüfen“** (über 1.000 Einblendungen ohne passende Seite). Lösung: eigener Fachartikel zur Prüfung von Laborabzügen (Prüfpflicht, Fristen, DIN EN 14175, Ablauf) nach Pflicht-Workflow; der bestehende Container-Artikel verlinkt darauf. Ebenso prüfen: „Laborausstattung“, „Laborlüftung“.

**H4 – Gute Positionen, keine Klicks.** /en/lab-containers-zurich, EN-Artikel Brandschutz, Laborabzug, Digitalisierung, /laborcontainer-zuerich, /ueber-uns, /kontakt. Lösung: Titel und Beschreibung dieser Seiten auf das ausrichten, was gesucht wird, mit klarem Nutzen; nach 4 Wochen Klickrate vergleichen.

**H5 – Seiten auf Position 11–20 nach vorn holen:** BSL-Artikel DE/EN, Genehmigung, Bern, Basel, Ausstattungs-Checkliste, EN HVAC. Lösung: je Seite die Suchbegriffe aus der Search Console ansehen, fehlende Unterfragen ergänzen, mehr interne Links darauf (B6).

**H6 – GMP-Reinraum- und Übergangslabor-Artikel ohne Einblendung.** Lösung: In der Search Console „URL-Prüfung“ für beide Adressen ausführen (zeigt, ob und warum nicht aufgenommen), danach „Indexierung beantragen“; zusätzlich von passenden Seiten verlinken (Pharma → GMP-Reinraum, Mieten → Übergangslabor). Das kann nur jemand mit Search-Console-Zugang im Browser machen.

**H7 – Messung fortführen.** Diese Search-Console-Abfrage monatlich wiederholen (3 Credits je Abruf), um H1–H6 zu prüfen.

**G2 – Bing Webmaster Tools:** Copilot und ChatGPT-Suche nutzen den Bing-Index. Lösung: Seite anmelden, Sitemap einreichen (kostenlos).

**G3 – Backlinks:** unbekannt (Abschnitt 8). Lösung nach Messung: Wesemann-Holding-Seite, Messeveranstalter, Partner, Verbände, Fachpresse.

## 5. Was nicht geprüft werden konnte – und was es braucht

| Was | Warum wichtig | Kostenloser Weg | Bezahlter Weg |
|---|---|---|---|
| Rankings und Klickraten | erledigt (Abschnitt 4a, 4 Abrufe à 3 Credits = 12 Credits) | – | – |
| Unternehmensprofil | erledigt (Abschnitt 4b) | – | – |
| Indexierungsbericht und URL-Prüfung | Welche Seiten Google nicht aufgenommen hat (H6) | Search Console im Browser („Seiten“, „URL-Prüfung“) | über OpenRush nicht verfügbar |
| Backlinks | Autorität, Lücke zu Wettbewerbern | Search Console „Links“ | OpenRush `inspect_backlinks` 15 Credits, Lückenvergleich 60 Credits |
| Echte Ladezeiten der Nutzer | Rankingfaktor Core Web Vitals | Search Console „Core Web Vitals“; PageSpeed morgen erneut | – |
| Suchvolumen der Themenkandidaten (D8, H3) | Welche Artikel lohnen | Google Ads Keyword-Planer | OpenRush `research_keywords` 4 Credits je Begriff |

## 6. Skill-Protokoll

seo-audit (Technik, Indexierung, Onpage, Inhalt, international), schema (Prüfung gegen Googles Funktionsliste, FAQ-Ende 05/2026), ai-seo (Crawler, llms.txt, Präsenz), cro + marketing-psychology (Startseite, Kontakt, Formular, Vertrauen), high-end-website (nur Belegtes, Lighthouse), full-output-enforcement (alle Befunde, keine Kürzung). Kein Bauauftrag, daher kein writing-plans/verification-Durchlauf für Code.
