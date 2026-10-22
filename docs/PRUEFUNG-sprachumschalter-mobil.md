# Prüfung: Sprachumschalter mobil (22.10.2026)

Abnahmeliste: `docs/ABNAHME-sprachumschalter-mobil.md`. Änderung: nur `src/components/Navbar.tsx` (`LanguageSwitch`).

## Vorher (Dev-Server, eingebauter Browser der Claude-App)

| Seite | Breite | Menü-Button rechte Kante | Ergebnis |
|---|---|---|---|
| `/` | 375 px | 387 px | 12 px abgeschnitten |
| `/en` | 320 px | 387 px | Button komplett außerhalb, Menü nicht erreichbar |

Umschalter-Breite vorher: 152 px („DEUTSCH | ENGLISH“).

## Nachher

| Nr. | Satz | Geprüft wie | Ergebnis |
|---|---|---|---|
| 1 | „DE \| EN“ statt „Deutsch \| English“ | Screenshot 320 px `/en`, Umschalter-Breite per JS | sichtbar „DE \| EN“, Breite 70 px ✅ |
| 2 | Menü-Button im Fenster | JS `getBoundingClientRect().right` | `/` 320 px: 306 ≤ 320; `/` 375 px: 359 ≤ 375; `/en` 320 px: 306; `/en` 375 px: 359 ✅ |
| 3 | Menü klappt auf | JS-Klick auf Button, danach `aria-label` = „Close menu“ und weißes Menü vorhanden | auf allen vier Fällen offen ✅ |
| 4 | Kein waagrechtes Scrollen | `document.documentElement.scrollWidth` | 320 = 320, 375 = 375 ✅ |
| 5 | Aktive Sprache grün | gebautes HTML: aktiver Eintrag `<span class="text-primary" aria-current="true">` | `/` → DE aktiv, `/en` → EN aktiv ✅ |
| 6 | Screenreader-Name, lang/hreflang | gebautes HTML: `<span class="sr-only">Deutsch</span>` bzw. `English`, Link mit `lang`, `hrefLang`, `title`; `.sr-only` steht im gemeinsamen CSS | ✅ |
| 7 | Desktop 1440 px | JS: Navigationszeile Höhe 38 px (eine Zeile), `scrollWidth` 1440 | „DE \| EN“, eine Zeile ✅ |
| 8 | Hero, Farben, Schriften unverändert | `git diff --stat` auf `index.astro`, `en/index.astro`, `global.css` | keine Änderung ✅ |
| 9 | Build | `lockf -t 3600 /tmp/elevum-bau.lock npm run build` | Exit 0, „Complete!“; Umschalter mit DE/EN in `dist/client/index.html` und `dist/client/en/index.html` ✅ |

Commit: `313ed1d` – „Sprachumschalter: DE/EN statt Deutsch/English (Handy-Menü erreichbar)“.

## Live (22.10.2026, nach Push `a021ba0` und Deploy durch Joachim)

| Seite | Breite | Umschalter-Breite | Menü-Button rechte Kante | Menü geht auf | `scrollWidth` |
|---|---|---|---|---|---|
| https://planexus.de/ | 320 px | 70 px | 306 px | ja | 320 |
| https://planexus.de/en | 375 px | 70 px | 359 px | ja | 375 |

Screenshot 375 px `/en`: Logo, „DE | EN“ (EN grün) und Menü-Button vollständig sichtbar.
