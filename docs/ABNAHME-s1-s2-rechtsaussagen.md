# Abnahmeliste: Falsche S1/S2-Rechtsaussagen auf älteren Seiten korrigieren (DE/EN)

Auftrag (Joachim, 22.10.2026): „Korrigiere die falschen S1/S2-Aussagen auf den älteren Seiten (DE und EN).“
Maßstab sind die Primärquellen aus `docs/PRUEFUNG-magazin-s1-s2-labor.md`: GenTG §§ 6, 7, 8, 9, 12; BioStoffV §§ 15, 16, Anhang II.

Fertig, wenn jeder Satz belegt ist (Nachweis in `docs/PRUEFUNG-s1-s2-rechtsaussagen.md`):

1. In keiner gebauten Seite (DE und EN, ohne den neuen S2-Artikel) steht mehr, dass S2-Anlagen genehmigungspflichtig sind („S2-S4 genehmigungspflichtig“, „S2-Anlagen … genehmigungspflichtig“, „S2–S4 require authorisation“, „S2 facilities … require authorisation“).
2. Nirgends steht mehr „ZKBS-Anzeige“, „ZKBS notification“, „ZKBS-Sekretariat“ oder „ZKBS secretariat“ als Empfänger von Anträgen. Wo die ZKBS vorkommt, gibt sie eine Stellungnahme ab, und nur bei gentechnischen Arbeiten.
3. Nirgends steht mehr, dass S2 eine Personal- oder Materialschleuse braucht.
4. Nirgends steht mehr „S1 … 8 bis 12 Wochen für die Genehmigung“ oder „S1: nur Anzeige, 4–8 Wochen“. Stattdessen: S1 Anzeige, Beginn sofort nach Eingang; S2 Anmeldung, Beginn nach 45 Tagen.
5. Die BSL-3-Aussagen nennen die Erlaubnis nach § 15 BioStoffV bei der Landesbehörde, nicht die ZKBS.
6. Auf der Krisenvorsorge-Seite stehen unter „Risikogruppe 3“ keine Erreger der Risikogruppe 4 mehr (Pockenvirus, virale hämorrhagische Fieber).
7. Jede geänderte FAQ: `name` im JSON-LD = sichtbare Frage (Fragen bleiben unverändert, nur Antworten werden korrigiert).
8. Gegenprobe: Dieselbe Textsuche auf dem Build vor der Korrektur (Live-Stand) findet die alten Formulierungen.
9. `npm run build` läuft fehlerfrei; danach live auf planexus.de dieselbe Textsuche mit 0 Treffern.
10. Keine Preise, keine erfundenen Fristen oder Behördennamen ohne Beleg werden neu eingefügt.
