# Skill-Audit planexus.de – Was bringen die Skills? (20.10.2026)

Nur geprüft, nichts am Code geändert, nichts gepusht oder live gestellt.

## Wie geprüft wurde

- Frischer Build `npm run build`: Exit 0, „Complete!“ um 02:52:56 (hat wegen der vollen ELEVUM-Platte 37 Minuten gedauert). Alle 138 Seiten in `dist/client` per Skript ausgewertet (Title, Description, H1, Wortzahl).
- Live: 12 Seiten mit curl geladen und ausgewertet (Title, Description, H1/H2, Schema-Typen, interne Links, Bilder).
- Browser: Startseite, /laborcontainer-mieten, /laborcontainer/labtogo, /laborcontainer-hamburg, /branchen/pharma-biotech, /kontakt, /projekte angesehen, auf Desktop (1366 und 1440 px) und Handy (375 px).
- Lighthouse 12 lokal (Handy-Profil, simulierte Drosselung) gegen live: Start, Mieten, LABtoGO, Hamburg, Kontakt. Der Mac war stark ausgelastet, die Zeiten sind deshalb Richtwerte. Die Größen in KB sind genau.
- Maßstab war je Bereich der Skill aus der Rollenkarte. Dafür habe ich die SKILL.md-Dateien gelesen.

## Gesamturteil in drei Sätzen

Die technische SEO-Basis ist sehr gut: jede Seite hat genau eine H1, Canonical, hreflang, Breadcrumbs, 3+ Schema-Typen, Lighthouse-SEO 100 und keine erfundenen Bewertungen oder €-Beträge. Die Schwächen liegen bei Ladezeit, beim Kontaktformular, bei einigen unbelegbaren Werbeaussagen und beim Vertrauen (Projekte ohne Fakten). Mit den Skills lassen sich diese Lücken gezielt finden und schließen. Für Design und Texte taugen die Skills aber nur als Prüfer, nicht als Gestalter, weil mehrere ihrer Standardvorschläge gegen die Regeln in CLAUDE.md verstoßen.

## Messwerte (Lighthouse, Handy, live)

| Seite | Leistung | Barrierefreiheit | Best Practices | SEO | LCP | Seitengewicht |
|---|---|---|---|---|---|---|
| Startseite | 71 | 91 | 100 | 100 | 14,7 s | 2.706 KiB |
| /laborcontainer-mieten | 90 | 93 | 100 | 100 | 3,5 s | 1.708 KiB |
| /laborcontainer/labtogo | 78 | 83 | 100 | 100 | 5,3 s | 30.118 KiB |
| /laborcontainer-hamburg | 72 | 93 | 100 | 100 | 7,4 s | 1.293 KiB |
| /kontakt | 76 | 92 | 100 | 100 | 6,7 s | 1.238 KiB |

CLS war überall 0 und TBT überall 0 ms. Das ist gut.

---

## 1. Leistung (perf-astro, core-web-vitals, perf-lighthouse)

**Ist-Stand, Befunde:**
1. **CSS und JavaScript werden ungepackt ausgeliefert.** Mit curl geprüft: `/_astro/best-of-industry-award-2026.Dlz4di5n.css` (158 KB) kommt ohne `content-encoding`, die Startseite selbst dagegen mit gzip. Lighthouse nennt 360 KiB mögliche Ersparnis pro Seite. Ursache: In den nginx-Vorlagen (`docs/nginx/planexus.de.conf`) steht kein `gzip_types`. Ubuntu packt ohne diese Angabe nur HTML.
2. **LABtoGO lädt beim Öffnen 29 MB Video.** `laborcontainer-innenansicht.mp4` ist 27.103 KB groß und wird mit `preload="auto"` geladen, obwohl es erst nach Klick auf „Innenansicht erleben“ gebraucht wird (`src/pages/laborcontainer/labtogo.astro:29` und `:124`, genauso in der EN-Fassung).
3. **Große Bilder ohne WebP:** `Planexus_Home-…png` auf der Startseite ist 1.534 KB groß, das Hero-Hintergrundbild `Laborcontainer_001_….jpg` auf Mieten/Kaufen 680 KB, `Kopf_green-scaled….jpg` 288 KB. Das WebP-Skript greift erst ab 300 KB und nicht bei CSS-Hintergründen.
4. **LCP der Startseite ist der Cookie-Banner-Text** (`CookieConsent.tsx:82`). Er erscheint erst, wenn React geladen ist. Daher kommen die 14,7 s.
5. Auf allen Seiten wird ein 158-KB-CSS-Paket geladen, außerdem 178 KB + 110 KB JavaScript (React und framer-motion für Navbar und Globus).

**Was der Skill ändern würde:** gzip/Brotli für CSS/JS/SVG/JSON. Video nur bei Klick laden (`preload="none"`). Hero-Bilder als WebP mit `fetchpriority`. Cookie-Banner als statisches HTML, sodass es nicht mehr als LCP zählt. Navbar ohne framer-motion. Prüfen, ob das CSS kleiner werden kann.
**Erwartete Wirkung:** Pro Erstbesuch rund 0,4 MB weniger, auf LABtoGO rund 29 MB weniger. LCP auf Startseite und Städteseiten deutlich unter 4 s. Leistungswert voraussichtlich 85–95. Wie viel genau, zeigt erst eine neue Messung.
**Aufwand:** gzip S (eine nginx-Zeile, braucht dein Ja für Server-Änderung). Video S. Bilder S–M. Cookie-Banner M. Navbar M.
**Regelkonflikte:** keine. Die Rollenkarte sagt „Bewegung nur mit der vorhandenen GSAP-Einbindung“. GSAP steht zwar in `package.json`, wird im Code aber **nirgends benutzt**. Die Animationen laufen über framer-motion (`Navbar.tsx`, `AnimatedGlobe.tsx`). Die GSAP-Skills bringen deshalb im Moment nichts. Die Rollenkarte sollte das richtigstellen.

## 2. Design und UX (impeccable critique/audit, web-design-guidelines, design-taste-frontend)

**Ist-Stand, Befunde:**
1. **Navigation bricht auf normalen Laptops um.** Bei 1366 px und 1440 px steht „ÜBER UNS“ zweizeilig, und die Telefonnummer +49 7435 7519 700 ist in einem Kreis auf vier Zeilen umgebrochen (Screenshot Startseite und /projekte).
2. **Das Hero-Bild der Startseite ist ein KI-Kopf mit Platinenmuster** (`Kopf_green-scaled_1768306688943.jpg`), kein Laborcontainer. Alt-Text: „Moderner Laborcontainer Außenansicht“. Der Alt-Text ist also falsch, und das Bild passt nicht zur Vorgabe „konsistente Bildsprache (Laborcontainer, Module, Technik)“.
3. **Fast alle Heros sind dunkel** (Start, Mieten, LABtoGO, Hamburg, Pharma, Kontakt). Die Vorgabe sagt „weiß, clean“. Darüber solltest du entscheiden: Entweder ist dunkel so gewollt, dann gehört das in CLAUDE.md, oder die Heros sollen hell werden.
4. **Kontrastfehler** (Lighthouse `color-contrast`): Start 17, LABtoGO 41, Hamburg 29, Mieten 9, Kontakt 5 Elemente. Meist geht es um grünen oder grauen Text auf hellem oder dunklem Grund.
5. **Kontaktformular nicht barrierefrei:** Die Labels sind nicht mit den Feldern verbunden (kein `htmlFor`/`id`), die Felder haben kein `name` und kein `autocomplete` (im Browser-DOM geprüft, `ContactForm.tsx:129–176`). Bildschirmleser und Autofill funktionieren deshalb schlecht.
6. **LABtoGO auf dem Handy:** Die H1 steht erst bei 980 px, also unter dem ersten Bildschirm. Darüber liegen vier gleich große Buttons, die Broschüre und eine Award-Box. Die Seite ist 25.724 px lang.
7. **Städte- und Branchenseiten auf dem Handy:** Im ersten Bildschirm steht kein Button, nur eine lange H1 und ein Fachbegriff-Block (Pharma: „Reinraum-Container Klasse 8/7/6 (GMP D/C/B-Hintergrund), BSL-2/3 … HEPA-H14-Doppelfilterung“).
8. Weitere Lighthouse-Hinweise: Links ohne Namen (je 2), falsche Überschriften-Reihenfolge, ein Button ohne Namen auf LABtoGO.

**Was der Skill ändern würde:** impeccable/web-design-guidelines liefern genau diese Liste als Datei:Zeile und danach den Feinschliff: Navigation umbauen (Telefon als Icon-Button, kürzere Punkte), Kontraste mit dem vorhandenen dunklen Grün `#7a9900` beheben, Formular reparieren, LABtoGO-Hero entschlacken (ein Hauptbutton, H1 nach oben), Handy-Hero mit Button.
**Erwartete Wirkung:** professionellerer erster Eindruck auf Laptops, Barrierefreiheit über 95, weniger Absprünge auf dem Handy.
**Aufwand:** Navigation S, Kontraste M (viele Stellen), Formular S, LABtoGO-Hero S–M, Hero-Bild Startseite S (braucht ein echtes Foto, davon gibt es genug).
**Regelkonflikte (wichtig):**
- ⚠️ **design-taste-frontend** und **high-end-visual-design** schreiben eigene Schriften, Farbwelten und „Art Direction“ vor. **Das verstößt gegen CLAUDE.md** (Inter/Space Grotesk, #bbd700, weißer Grundstil). Diese Skills nur als Kritiker einsetzen, ihre Gestaltungsvorgaben nicht übernehmen.
- ⚠️ **web-design-guidelines** lädt seine Regeln bei jedem Lauf von GitHub (Vercel). Das habe ich nicht gemacht, deshalb ist ein voller Lauf **offen**. Die Befunde oben stammen aus Lighthouse und meiner DOM-Prüfung.
- impeccable: Das Live-Hilfsprogramm wurde laut CLAUDE.md bewusst nicht installiert. Die Kriterien aus `critique.md`/`audit.md` habe ich von Hand angewendet.

## 3. SEO (seo-audit)

**Ist-Stand, Befunde:**
1. **Sehr solide Basis:** Alle 138 Seiten im Build haben genau eine H1. Lighthouse-SEO steht überall bei 100. 44–50 verschiedene interne Links pro Seite. Kein Bild ohne Alt-Text (live geprüft). robots.txt und Sitemap sind in Ordnung.
2. **Title über 60 Zeichen: 60 Seiten. Description über 155 Zeichen: 59 Seiten** (Build ausgewertet). Am meisten betroffen ist Englisch, z. B. `/en/industries/education` mit Title 87 und Description 178. Im Deutschen u. a. Startseite (61/163), `/laborcontainer` (68), LABtoGO (65/187), `/magazin/laborcontainer-mieten-oder-kaufen` (76), alle `/leistungen/*` (64–70).
3. **Startseite:** Der Title beginnt mit „Planexus –“, das Keyword steht also nicht vorne. Das widerspricht der eigenen Regel.
4. **Dünne Seiten** (Wörter ohne Navigation/Footer): /kontakt 110, /projekte 210, /ueber-uns 252, /team 174.
5. **Mieten und Kaufen haben nur rund 950 Wörter** (live, mit Navigation). Die Blaupause verlangt Tiefe. Die Branchenseite hat 2.382 Wörter, die Hamburg-Seite 2.821.
6. **Konkurrenzvergleich und Rankings: offen.** Meine Websuche liefert nur US-Ergebnisse, keine Google-DE-Treffer. Search-Console-Daten habe ich nicht. Welche Position planexus.de für „Laborcontainer mieten“ hat, kann ich nicht belegen.

**Was der Skill ändern würde:** Titles und Descriptions kürzen (Keyword nach vorne). Mieten und Kaufen mit echten Entscheidungsinhalten ausbauen (Mietlaufzeiten, was im Mietpreis steckt – ohne €, Rückbau, Mietkauf-Logik). Projekte und Über-uns mit Fakten füllen. Die Konkurrenzanalyse aus der Blaupause mit echten Google-DE-Daten nachholen.
**Erwartete Wirkung:** Titel werden in Google nicht mehr abgeschnitten, bessere Klickrate. Mehr Tiefe auf den zwei wichtigsten Money-Pages ist der größte Ranking-Hebel. Wie stark, lässt sich ohne Ranking-Daten nicht beziffern.
**Aufwand:** Titles/Descriptions M (mechanisch, 119 Stellen). Mieten/Kaufen ausbauen L (Recherche-Pflicht laut Blaupause).
**Regelkonflikte:** keine, solange der Ausbau ohne €-Beträge auskommt. ⚠️ Die Blaupause verlangt für Städteseiten „Keyword-Dichte 1,8–2,2 %“. Der Skill **ai-seo** nennt Keyword-Stuffing ausdrücklich schädlich (−10 % Sichtbarkeit laut Princeton-GEO-Studie), seo-audit sieht das genauso. Diese Vorgabe würde ich streichen. Das ist deine Entscheidung.

## 4. KI-Suche (ai-seo)

**Ist-Stand, Befunde:**
1. robots.txt erlaubt allen Bots alles (live geprüft), also auch ChatGPT, Claude und Perplexity. Gut.
2. Die Inhalte sind serverseitig gerendert und ohne JavaScript lesbar. Viele FAQ-Blöcke, Vergleichstabellen („Festbau vs. Standard-Container vs. LABtoGO“), Autor im Schema (Sven Biewald, Geschäftsführer). Das ist eine gute Grundlage.
3. **Keine sichtbaren Aktualisierungsdaten:** Der Genehmigungs-Artikel zeigt nur „26. Februar 2026“, im Schema steht `dateModified` 2026-02-26. Andere Seiten haben kein Datum.
4. **Quellen fehlen meist:** Normen werden genannt, aber selten verlinkt. Laut Skill bringen zitierte Quellen am meisten (+40 %).
5. **Keine `llms.txt`** (nicht in `public/`).
6. **Präsenz außerhalb der eigenen Seite:** Im Verzeichnis chemie.de „Laborcontainer: Unternehmen aus Deutschland“ stehen 4 Firmen (Kautex, acker, ConRail, WALDNER), Planexus nicht (live abgerufen).
7. Ob ChatGPT/Perplexity Planexus heute nennen: **offen**, nicht prüfbar ohne Zugang zu diesen Diensten.

**Was der Skill ändern würde:** „Zuletzt geprüft am …“ sichtbar auf Fachartikeln und Money-Pages. Normen und Behörden als Quelle verlinken. Jeden Abschnitt mit einem direkten Antwortsatz von 40–60 Wörtern beginnen. llms.txt mit Kurzprofil und den wichtigsten Seiten. Einträge in Fachverzeichnissen und Branchenportalen.
**Erwartete Wirkung:** höhere Chance, in Google-KI-Übersichten und ChatGPT als Quelle genannt zu werden. Die Wirkung ist schwer messbar.
**Aufwand:** Datum S, Quellen M, llms.txt S, Verzeichnisse M (Verzeichniseinträge können Geld kosten, vorher prüfen).
**Regelkonflikte:** ⚠️ Die llms.txt-Vorlage im Skill hat einen Abschnitt „Pricing“ mit Preisen. **Das verstößt gegen die Regel „keine Preise“**, den Abschnitt weglassen. ⚠️ Der Skill empfiehlt Reddit, Quora und Wikipedia. Dort nur echte Beiträge, keine selbst angelegten „unabhängigen“ Bewertungen. Das sagt der Skill selbst auch.

## 5. Strukturierte Daten (schema)

**Ist-Stand, Befunde:**
1. Jede geprüfte Seite hat 3 oder mehr Typen (LocalBusiness, Organization, BreadcrumbList, FAQPage, Service, Article). Keine `aggregateRating`, kein `Review`, keine €-Preise (alle 12 Live-Seiten geprüft). Alle JSON-LD-Blöcke ließen sich fehlerfrei einlesen.
2. **LABtoGO hat kein FAQPage-Schema** und keinen sichtbaren FAQ-Block. Alle anderen Money-Pages haben beides.
3. **Organization-Logo ist das Favicon** (`android-chrome-512x512.png`) statt `planexus-logo.png`.
4. `priceRange: "€€€"` im LocalBusiness: kein Betrag, aber eine Preisaussage.
5. Projekte, Über uns und Kontakt haben nur die Standard-Schemas (kein `AboutPage`/`ContactPage`).

**Was der Skill ändern würde:** FAQ auf LABtoGO, echtes Logo im Organization-Schema, `AboutPage`/`ContactPage`, das Schema als verknüpfter `@graph` mit `@id`, damit Google Organisation, Seite und Autor als eine Einheit erkennt.
**Erwartete Wirkung:** klein bis mittel. Das Fundament steht schon, das sind Feinheiten.
**Aufwand:** S.
**Regelkonflikte:** ⚠️ Der Skill bietet `Product` mit `offers`/`price` und `AggregateRating`/`Review` an. **Beides verstößt gegen CLAUDE.md** (keine Preise, keine erfundenen Bewertungen). Nicht verwenden, solange es keine echten, belegbaren Bewertungen gibt. `priceRange "€€€"` würde ich vorsichtshalber entfernen. Das ist deine Entscheidung.

## 6. Conversion (cro, landing-page-conversion-audit)

**Ist-Stand, Befunde:**
1. **Money-Pages Mieten/Kaufen sind gut gebaut:** klare H1, Hauptbutton „Mietangebot anfordern“ oben, Kennzahlen (2–3 Wochen, 8–14 Wochen, 12–24 Monate), Zusage „schriftliche Indikation innerhalb von 48 Stunden – ohne Verpflichtung“, Ansprechpartner Sven Biewald mit Telefonnummer, Formular eingebettet.
2. **Widerspruch:** Der Text sagt „Senden Sie uns Ihr Lastenheft“, das Formular hat aber kein Datei-Feld. Es hat nur Name, E-Mail, Betreff und Nachricht.
3. **Formular ohne Hinweise:** Es fragt nicht nach Miete/Kauf/LABtoGO, Standort oder Zeitraum. Kein Telefon- oder Firmenfeld (beides optional wäre üblich). Kein Datenschutz-Hinweis am Formular (`ContactForm.tsx`, kein Link). Der Button heißt „Nachricht senden“ statt z. B. „Indikation anfordern“.
4. **/kontakt auf dem Handy:** Das Formular beginnt erst bei 1.708 px, nach Adresse und Karte. Auf der Seite gibt es keine Antwortzeit-Zusage (die 48 Stunden stehen nur auf den Money-Pages).
5. **Keine Messung der Anfragen im Code:** Nach erfolgreichem Absenden gibt es keinen `dataLayer`-Eintrag (`ContactForm.tsx:64–68`). Ob GTM das anders erfasst: **offen**, den GTM-Container kann ich nicht einsehen.
6. **Vertrauen:** „Projekte“ zeigt 7 Karten mit Foto und je einem Satz (z. B. „Industrielabor“, „Pharmalabor“), ohne Jahr, Region, Größe, Bauzeit oder Aufgabe. Das ist der schwächste Punkt für Entscheider.
7. **Award-Hinweise sind dreifach vorhanden** (CEO Excellence Award, Best of Industry Nominierung, „Award Winner 2026“-Box auf LABtoGO) und drängen auf der Startseite die Leistung nach unten.

**Was der Skill ändern würde:** Formular mit Auswahl „Miete / Kauf / LABtoGO / noch offen“, optional Firma, Telefon, Standort und Datei-Upload. Datenschutz-Satz unter dem Button. Button-Text mit Nutzen. Auf /kontakt das Formular nach oben und die 48-Stunden-Zusage dazu. Ein Messereignis „anfrage_gesendet“. Projekte als anonymisierte Fallbeispiele: Branche, Region, Fläche, Sicherheitsstufe, Bauzeit, Aufgabe und Lösung.
**Erwartete Wirkung:** mehr und bessere Anfragen (Vertriebsinfos sind schon im Formular). Ohne Messereignis lässt sich keine Änderung bewerten. Zahlen kann ich nicht versprechen, der Skill verbietet das ausdrücklich, und Besucher- und Anfragezahlen habe ich nicht.
**Aufwand:** Formularfelder und Texte S–M. Datei-Upload L (Backend, Mail-Anhang, Speicher). Messereignis S. Fallbeispiele M (braucht deine echten Projektdaten).
**Regelkonflikte:**
- ⚠️ landing-page-conversion-audit verlangt „Preis sichtbar“. **Verstößt gegen „keine Preise“.** Ersatz: die 48-Stunden-Indikation und die Faustformel.
- ⚠️ cro und landing-page-conversion-audit empfehlen Kundenlogos, Testimonials und Bewertungen. **Nur mit echten, freigegebenen Stimmen. Keine Firmennamen auf der Projekte-Seite.**
- Der Skill landing-page-conversion-audit wirbt am Ende für ein Funnel-Tool (Autonnel). Für Planexus ist das nicht relevant, nicht nutzen.

## 7. Lead-Magnet (lead-magnets)

**Ist-Stand, Befunde:**
1. Es gibt genau einen Download: die LABtoGO-Broschüre (`public/downloads/labtogo-laborcontainer-broschuere.pdf`, 8,3 MB). Sie ist frei herunterladbar, ohne E-Mail, und es gibt im Code kein Messereignis dafür.
2. Es gibt keine einzige Stelle, an der man seine E-Mail für Material hinterlassen kann.
3. Gutes Rohmaterial ist schon da: Magazin-Artikel „Laborcontainer Ausstattung – Checkliste“, „Ausschreibung & Lastenheft“, „Genehmigung & Baurecht“ (mit Checkliste der Bauantrags-Unterlagen), „Mieten oder kaufen“ (mit Break-Even-Faustformel).

**Was der Skill ändern würde:** Für die Entscheidungsphase (Einkauf/Laborleitung) zum Beispiel:
- **„Lastenheft-Vorlage Laborcontainer“** (Word/PDF zum Ausfüllen). Passt genau zum Angebotsprozess, denn ein ausgefülltes Lastenheft ist schon eine halbe Anfrage.
- **„Genehmigungs-Checkliste DE/CH/AT“** als PDF.
- **„Mieten oder kaufen – Entscheidungsblatt“** mit der Faustformel, ohne €.
Ausgeliefert mit E-Mail-Feld, Einwilligungs-Häkchen und Mail mit Link. Die Broschüre bleibt frei (KI-Suche braucht offene Inhalte), bekommt aber ein Messereignis.
**Erwartete Wirkung:** Kontakte aus der Recherche-Phase, die heute ohne Spur gehen. Die Lastenheft-Vorlage erzeugt die Anfragen mit der besten Qualität.
**Aufwand:** Vorlage erstellen M (Inhalt aus Artikeln vorhanden, Fakten müssen von euch kommen). Erfassung mit Mail-Versand und Double-Opt-in L (DSGVO). Ohne Newsletter reicht ein einfacher Versand per vorhandenem SMTP.
**Regelkonflikte:** ⚠️ Der Skill schlägt Kostenrechner und Preislisten vor. **Verstößt gegen „keine Preise“**, nur als Logik/Faustformel umsetzbar. Die Mail-Erfassung braucht eine Ergänzung der Datenschutzerklärung.

## 8. Texte (marketing-psychology, copywriting)

**Ist-Stand, Befunde:**
1. **Interner Arbeitsbegriff steht sichtbar auf 12 Städteseiten:** „Pattern-Interrupt · Weltpremiere analytica 2026“ (z. B. `src/pages/laborcontainer-hamburg.astro:250`, gleiche Zeile in allen 12 Städte-Dateien).
2. **Unbelegbare Aussage „100 % Kundenzufriedenheit“** auf der Startseite (`src/pages/index.astro:196`) und unter `/leistungen` (`src/pages/leistungen/index.astro:75`). Gibt es dafür keine Erhebung, ist das ein UWG-Risiko und widerspricht „alles belegbar“.
3. **Überschrift „Ausgezeichnet: LABtoGO ist nominiert“** (Startseite). Nominiert heißt nicht ausgezeichnet, die Überschrift widerspricht sich selbst.
4. **Widersprüchliche Erfahrungsangaben:** „10+ Jahre Erfahrung der Geschäftsführung“ und „Was 2016 als Vision begann“ gegenüber „aus 15 Jahren spezialisierter Engineering-Praxis“ (alles Startseite). Im Schema steht `foundingDate` 2025.
5. **Superlativ ohne Beleg** (Hamburg): „Vier Säulen, die kein Wettbewerber im DACH-Raum so kombiniert.“
6. Projekte: „Laborcontainer-Projekte für namhafte Kunden“, ohne dass etwas davon gezeigt wird.
7. Stark: Die Money-Pages sind sachlich, konkret und ohne Marketing-Ton geschrieben.

**Was der Skill ändern würde:** copywriting prüft jede Aussage auf Belegbarkeit und nennt, welcher Beleg sie freischalten würde. Dazu Überschriften, die Nutzen sagen, und Handy-Heros mit einem Satz statt Fachbegriff-Kette.
**Erwartete Wirkung:** weniger Rechtsrisiko, mehr Glaubwürdigkeit bei Ingenieuren und Einkäufern.
**Aufwand:** Punkte 1–6 S (Textänderungen, für 2 und 4 brauche ich deine richtigen Zahlen).
**Regelkonflikte:** ⚠️ marketing-psychology bietet Verknappung, Dringlichkeit und Social-Proof-Zahlen an („Join 10.000+“). **Nur mit echten Zahlen, keine künstliche Dringlichkeit** (Regel „keine Übertreibungen“).

---

## Priorisierte Maßnahmen (die lohnendsten 10)

| # | Maßnahme | Skill | Wirkung | Aufwand | Braucht von dir |
|---|---|---|---|---|---|
| 1 | Unbelegbare/falsche Aussagen raus: „Pattern-Interrupt“ (12 Seiten), „100 % Kundenzufriedenheit“, „Ausgezeichnet … nominiert“, Jahre-Widerspruch, „kein Wettbewerber“ | copywriting | Rechtsrisiko weg, Glaubwürdigkeit | S | richtige Jahreszahl, Beleg oder Streichung 100 % |
| 2 | nginx: gzip für CSS/JS/SVG/JSON einschalten | perf-astro | ca. 360 KiB weniger pro Erstbesuch, alle Seiten | S | Ja für nginx-Änderung |
| 3 | LABtoGO-Video erst bei Klick laden | core-web-vitals | 29 MB weniger pro Besuch der LABtoGO-Seite | S | – |
| 4 | Kontaktformular: Labels/Autofill reparieren, Auswahl Miete/Kauf/LABtoGO, Firma/Telefon optional, Datenschutz-Satz, besserer Button, Messereignis „anfrage_gesendet“ | cro, web-design-guidelines | mehr und besser vorqualifizierte Anfragen, Erfolg wird messbar | S–M | – |
| 5 | Projekte als anonymisierte Fallbeispiele (Branche, Region, Fläche, Stufe, Bauzeit, Aufgabe/Lösung) | cro, copywriting | stärkstes Vertrauenssignal, regelkonform ohne Firmennamen | M | echte Projektdaten |
| 6 | Bilder: Home-PNG 1,5 MB, Mieten/Kaufen-Hero 680 KB als WebP; Cookie-Banner statisch rendern | perf-astro, core-web-vitals | LCP Startseite von 14,7 s auf unter 4 s | S–M | – |
| 7 | Navigation 1280–1440 px reparieren, Startseiten-Hero mit echtem Containerfoto und richtigem Alt-Text | impeccable | professioneller erster Eindruck | S | Bildwahl |
| 8 | Lead-Magnet „Lastenheft-Vorlage Laborcontainer“ mit E-Mail-Erfassung | lead-magnets | neue Kontakte aus der Recherche-Phase | M–L | fachliche Freigabe, Datenschutz-Text |
| 9 | Kontrastfehler beheben (bis 41 je Seite) mit vorhandenem `#7a9900` | impeccable audit | Barrierefreiheit über 95 | M | – |
| 10 | 60 Titles und 59 Descriptions kürzen, v. a. EN; Startseiten-Title mit Keyword vorne | seo-audit | sauberere Suchergebnisse, bessere Klickrate | M | – |

Danach (nicht in der Top 10): Mieten/Kaufen inhaltlich vertiefen (L, mit Konkurrenzanalyse), sichtbare Aktualisierungsdaten und Quellen (ai-seo), FAQ auf LABtoGO und echtes Logo im Schema (schema), llms.txt ohne Preise.

## Was die Skills nicht dürfen (Zusammenfassung der Konflikte)

- design-taste-frontend, high-end-visual-design, brandkit: eigene Schriften, Farben, Stil → **verboten**, nur als Kritiker.
- landing-page-conversion-audit: „Preis zeigen“ → **verboten**.
- schema: Product/Offer mit Preis, AggregateRating/Review → **verboten** ohne echte Bewertungen.
- ai-seo: llms.txt-Abschnitt „Pricing“ → **verboten**.
- lead-magnets: Kostenrechner mit € → **verboten**, nur Faustformel.
- marketing-psychology: Verknappung/Dringlichkeit, erfundene Zahlen → **verboten**.
- cro: Kundenlogos/Testimonials → nur echt und freigegeben, keine Firmennamen auf /projekte.

## Offen (nicht prüfbar)

- Google-Rankings und Konkurrenz-Top-3 für die Ziel-Keywords: Die Websuche liefert nur US-Ergebnisse, Search Console habe ich nicht.
- Ob ChatGPT/Perplexity/Google-KI Planexus heute nennen.
- Inhalt des GTM-Containers (ob Anfragen schon anders gemessen werden).
- Besucher- und Anfragezahlen: Ohne diese lassen sich Wirkungen nur der Richtung nach einschätzen.
- Voller web-design-guidelines-Lauf (Regeln werden von GitHub geladen, nicht gemacht).
- Lighthouse-Zeiten unter Last gemessen, deshalb Richtwerte. Die Größen in KB sind genau.

## Nebenbefund

- Die Rollenkarte in CLAUDE.md sagt, die Seite nutze GSAP. Tatsächlich ist GSAP nicht eingebunden, Bewegung läuft über framer-motion.
- Antwort-Header: `cache-control` kommt doppelt (einmal `max-age=0`, einmal mit `s-maxage=300`), ohne erkennbaren Schaden.
