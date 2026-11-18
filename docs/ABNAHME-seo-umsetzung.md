# Abnahme SEO-Umsetzung (Phase 1) – 18.11.2026

Jeder Satz ist prüfbar. Belege stehen in `docs/PRUEFUNG-seo-umsetzung.md`. Automatisch geprüft durch `node scripts/check-seo-abnahme.mjs`.

1. Wenn man `/404` aufruft, antwortet der Server mit 404 (nicht 500) und die Seite trägt `noindex`.
2. Wenn man eine unbekannte Adresse aufruft (DE und EN), kommt weiterhin 404 mit `noindex`.
3. In keiner gebauten Seite steht `AggregateOffer`.
4. Keine Seite enthält ein LocalBusiness mit Namen „Planexus GmbH – Laborcontainer …“ oder „Planexus GmbH – Lab containers …“.
5. Jede Seite enthält genau eine Firmen-Identität mit `@id` `https://planexus.de/#organization` und `parentOrganization` „Wesemann Holding GmbH“.
6. Jedes JSON-LD auf allen Seiten ist gültiges JSON; jede Seite hat ≥ 3 Schema-Typen.
7. `/magazin/planexus-analytica-2026-muenchen` und `/en/magazine/planexus-analytica-2026-munich` leiten per 301 auf den jeweiligen Rückblick; beide stehen nicht in der Sitemap; keine interne Verlinkung zeigt mehr darauf; kein `Event`-Schema mehr im Build.
8. Auf `/laborcontainer` (DE/EN) ist das Hero-Bild ein `<img>` mit `srcset` und `fetchpriority="high"`; die Handy-Variante ist ≤ 150 KB.
9. Kein Seitentitel ist inklusive „ | Planexus“ länger als 60 Zeichen; keine Description länger als 155 Zeichen.
10. Die H1 von Kontakt, Team, Über uns, Projekte, Partner, Magazin (DE/EN) enthält den Suchbegriff (Laborcontainer/lab container bzw. Magazin-Fachbegriff); die LABtoGO-H1 enthält „LABtoGO“ und „Laborcontainer“.
11. Titel und Description von `/en/lab-containers-zurich`, `/laborcontainer-zuerich`, `/ueber-uns`, `/kontakt` und den EN-Artikeln Brandschutz, Laborabzug, Digitalisierung sind neu gefasst (Diff belegt).
12. Das Kontaktformular hat kein Pflichtfeld „Betreff“ mehr; eine Anfrage ohne Betreff wird lokal angenommen (Status 200) und mit einem aus dem Anliegen gebildeten Betreff gespeichert.
13. Die Kontaktseite (DE/EN) zeigt drei Schritte „Was nach Ihrer Anfrage passiert“ und einen Ansprechpartner mit Foto, Name, Funktion, Telefon.
14. Auf Hub, Mieten, Kaufen, LABtoGO (DE/EN) steht direkt am Anfrage-Knopf (Element mit data-cta-response) der 48-Stunden-Satz.
15. Der Hub verlinkt mit Ankertext „Laborcontainer mieten“ und „Laborcontainer kaufen“ auf die Unterseiten; die Startseite verlinkt außerhalb des Heros mit „Laborcontainer“ auf den Hub.
16. Mieten und Kaufen (DE/EN) haben ≥ 10 interne Links im Inhalt.
17. Jeder der Artikel made-in-germany, katastropheneinsatz, pfas-analytik, anforderungen-laborraeume, 5-planungsfehler, s1-s2, uebergangslabor, gmp-reinraum hat ≥ 2 eingehende Links mehr als am 18.11. (Crawl-Wert).
18. Startseite und Projekte-Seite (DE/EN) beschreiben die beiden Bilder nur noch mit Sichtbarem: kein „Mehrgeschossiges Pharmalabor“/„Multi-storey pharma laboratory“, kein „Mehrgeschossiger Laborcontainer“, kein „Pharma“-Etikett auf der Startseitenkarte. (Galerie-Filterkategorien stammen aus Kundendaten und werden in Phase 3 mit dem Kunden geklärt.)
19. Lighthouse mobil meldet auf Hub, Mieten, München, Laborräume, Kontakt keine Fehler bei `heading-order`, `link-in-text-block`, `color-contrast`.
20. Höchstens 2 Seiten (Impressum/Datenschutz je Sprache ausgenommen) nutzen noch `opengraph.jpg`.
21. Live-Abruf liefert nur noch eine `Cache-Control`-Zeile (erst nach Deploy prüfbar; nginx-Teil braucht Joachims SSH).
22. `npm run build` läuft ohne Fehler; Startseiten-Hero ist bytegleich zum Stand vor der Änderung (Diff des Hero-Abschnitts leer).
