# Skill-Lotse – Übersetzungstabelle Webseite (Stand 27.10.2026)

Joachim redet frei. Diese Tabelle übersetzt seine Worte in die zuständigen Skills. Mehrere Zeilen können
gleichzeitig passen; dann alle genannten Skills laden. Die Rollenkarte in der CLAUDE.md legt die Grenzen fest.

| Joachim sagt (sinngemäß) | Skills laden |
|---|---|
| Texte, Überschrift, Hook, Slogan, verkaufen, Anfragen holen | `copywriting` + `marketing-psychology` (+ `offers`, wenn ein Angebot, Preis oder eine Garantie dabei ist) |
| Text schärfen, kürzen, klingt nach KI | `copy-editing` |
| Angebot, Paket, Preis, Garantie, Bonus | `offers` |
| Aufbau, Reihenfolge, Menü, wo klickt der Kunde hin | `site-architecture` + `cro` |
| Warum kauft keiner, niemand fragt an, läuft nicht | `landing-page-conversion-audit` + `cro` |
| Design, schöner machen, sieht billig / nach KI / nach Baukasten aus, High-End, mach es hochwertig | `frontend-design` (bestehende Seite nur auf ausdrückliche Anweisung umgestalten) |
| Landingpage bauen, neue Seite gestalten | `frontend-design` |
| Startseite neu gestalten | `frontend-design` – bestehende Startseite nur auf ausdrückliche Anweisung |
| Prüf das Design, Feinschliff, Designfehler | `web-design-guidelines` – nur auf ausdrückliche Anweisung, nur Bericht |
| Bewegung, Animation, Scroll-Effekt | `gsap-core` + `gsap-scrolltrigger` + `animation-performance` |
| Schnell, Lighthouse, lädt langsam | `perf-astro` / `core-web-vitals` / `perf-lighthouse` |
| Bei Google gefunden werden, Ranking, Maps | `seo-audit` + `schema` |
| Bei ChatGPT / KI gefunden werden | `ai-seo` |
| Download, Checkliste, Gratis-Ding für E-Mail | `lead-magnets` |
| Handy, Barrierefreiheit, Tastatur | `web-design-guidelines` |
| Marke, Logo, Farben | `brandkit` (nur aus Kundenangaben) |
| Zielgruppe, Kunde verstehen | `customer-research` |
| Konkurrenz, Mitbewerber | `competitor-profiling` |
| Neue Seite bauen, Seite umbauen | `writing-plans` zuerst, dann `frontend-design` + `high-end-website` + `astro`, am Ende `verification-before-completion` |
| Fehler, geht nicht, kaputt | `systematic-debugging` |

**Design (16.11.2026, Entscheidung Joachim):** Hallmark ist entfernt. Neue Seiten gestaltet `frontend-design`, geprüft wird mit `web-design-guidelines`. Bestehende Seiten werden nur auf ausdrückliche Anweisung umgestaltet. Es wird nichts erfunden – fehlende Fotos, Zahlen oder Texte werden im STAND als fehlend gemeldet, nicht ausgedacht.

**Immer dazu:** `high-end-website` (Maßstab), `full-output-enforcement`, `web-design-guidelines` (Korrektheit).
**Bei jeder Bauaufgabe:** zuerst `writing-plans`, am Ende `verification-before-completion`, dann eine Zeile
„Skill-Protokoll: …“ in der Antwort und in `docs/STAND.md`.
Passt keine Zeile: offen sagen, mit `find-skills` (`npx skills find`) suchen, vorschlagen, nichts ohne Joachims Ja installieren.
