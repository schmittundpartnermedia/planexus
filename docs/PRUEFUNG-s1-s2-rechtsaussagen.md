# Prüfprotokoll: Falsche S1/S2-Rechtsaussagen korrigiert (DE/EN)

Grundlage: `docs/ABNAHME-s1-s2-rechtsaussagen.md`. Korrektur-Commit: **41d2001** (42 Ersetzungen in 12 Dateien).
Lokaler Build: `lockf … npm run build`, Exit 0, „Complete!“ (18:48 Uhr, nach dem Commit von 18:39).
Server-Deploy durch Joachim (22.10.2026, 19:44 Uhr): Build „Complete!“, `pm2` Prozess `planexus` online.

## Prüfmethode

Textsuche (`grep -E`) nach den alten, falschen Formulierungen in den gerenderten HTML-Seiten, ohne den neuen S2-Artikel:
`S2-S4 genehmigungspflichtig | S2–S4 require authorisation | S2-Anlagen nach GenTSV sind genehmigungspflichtig | S2 facilities under GenTSV require authorisation | ZKBS-Anzeige | ZKBS notification | ZKBS-Sekretariat | ZKBS secretariat | Personal- und Materialschleusen | personnel and material airlocks | Standard-S1-Labor rechnen Sie mit 8 bis 12 Wochen | standard S1 laboratory, allow 8 to 12 weeks | S1-Anlagen: nur Anzeige | S1 facilities: notification only | ZKBS-Stellungnahme | containers with ZKBS opinion | Risikogruppe 3 (SARS-CoV-2, MERS-CoV, virale | risk group 3 pathogens (SARS-CoV-2, MERS-CoV, viral`

Geprüft wurden dieselben 12 Seiten live vor dem Deploy (Gegenprobe), im lokalen Build und live nach dem Deploy.

| Nr. | Satz der Abnahmeliste | Geprüft wie | Ergebnis |
|---|---|---|---|
| 1 | Keine „S2 genehmigungspflichtig“-Aussagen mehr | Textsuche live nachher | 0 Treffer (vorher live: 2× „S2-S4 genehmigungspflichtig“, 1× „S2-Anlagen … genehmigungspflichtig“, 2× „S2–S4 require authorisation“, 1× „S2 facilities … require authorisation“) ✓ |
| 2 | Keine ZKBS als Antragsempfänger | Textsuche live nachher | 0 Treffer (vorher live: 13× „ZKBS-Anzeige“/„ZKBS notification“, 10× „ZKBS-Sekretariat“/„ZKBS secretariat“, 2× „ZKBS-Stellungnahme“/„ZKBS opinion“ bei BioStoffV). Verbleibende ZKBS-Nennungen beschreiben eine Stellungnahme bei gentechnischen Arbeiten ✓ |
| 3 | Keine Schleuse für S2 | Textsuche live nachher | 0 Treffer (vorher 4) ✓ |
| 4 | S1/S2-Fristen richtig | Textsuche live nachher; neuer Satz live gefunden: „S2-Labor wird angemeldet und darf 45 Tage nach Eingang starten“ | 0 alte Treffer (vorher 4); neuer Text vorhanden ✓ |
| 5 | BSL-3 = Erlaubnis § 15 BioStoffV bei der Landesbehörde | Pharma & Biotech, Krisenvorsorge, Beratung (DE/EN) gelesen | ✓ |
| 6 | Keine Risikogruppe-4-Erreger unter „Risikogruppe 3“ | Textsuche „Pocken“/„smallpox“ in `src/pages` | 0 Treffer außerhalb des S2-Artikels; live „z. B. SARS-CoV-2, MERS-CoV, Mycobacterium tuberculosis“ ✓ |
| 7 | FAQ-Fragen unverändert, Daten gültig | JSON-LD aller 12 Seiten live mit `json.loads` geparst; Frage- und Antworttext im sichtbaren Seitentext gesucht | 0 ungültige Blöcke; Fragen und Antworten vorher und nachher vollständig sichtbar (z. B. Forschung & Hochschule 7/7, Beratung 6/6, Standorte 5/5) ✓ |
| 8 | Gegenprobe vor der Korrektur | gleiche Textsuche auf dem Live-Stand vor dem Deploy | **50 Treffer** auf 12 Seiten ✓ |
| 9 | Build fehlerfrei, live 0 Treffer | lokaler Build Exit 0; Server-Build „Complete!“; Textsuche live nachher | alle 12 Seiten Status 200, **0 Treffer** ✓ |
| 10 | Nichts Unbelegtes neu eingefügt | Diff gelesen: neue Aussagen nur aus GenTG §§ 8, 12; BioStoffV § 15, Anhang II; Risikogruppen aus TRBA-Einstufung (SARS-CoV-2, MERS-CoV, M. tuberculosis = RG 3) | ✓ Unbelegte Wochenzahlen („8 bis 12 / 12 bis 16 / 16 bis 24 Wochen“, „14–22 Wochen“, „4–8 Wochen“) entfernt |

## Offene Befunde (nicht Teil dieses Auftrags, nicht geändert)

- Unbelegte Bearbeitungszeiten für BSL-3: Genehmigungs-Artikel „Erfahrungsgemäß dauert dieser Prozess 8 bis 16 Wochen“, Krisenvorsorge „Bearbeitungsdauer: 12-20 Wochen“ (DE/EN). Ursache: frühere Texte ohne Quelle. Lösung: gegen Behördenangaben prüfen oder streichen.
- Forschung & Hochschule: „jährliche DGUV-V3-Prüfung Sicherheitswerkbank“. DGUV Vorschrift 3 betrifft elektrische Anlagen; die Leistungsprüfung der Werkbank folgt DIN EN 12469. Lösung: Formulierung mit Quelle prüfen und anpassen.
