# Prüfprotokoll: Ist-Stand KI- und Google-Sichtbarkeit (23.10.2026)

Grundlage: `docs/ABNAHME-ki-sichtbarkeit-messung.md`. Gemessen am 23.10.2026 mit dem eingebauten Browser der Claude-App,
nicht angemeldet, ohne bezahlte Werkzeuge. **Jede Frage wurde einmal gestellt.** KI-Antworten schwanken von Durchlauf
zu Durchlauf. Das hier ist eine Momentaufnahme und keine Quote. Für einen belastbaren Vergleich sollte man die Messung
monatlich wiederholen, jede Frage drei- bis fünfmal.

- **Google:** google.de, `hl=de&gl=de`; Österreich über google.at (`gl=at`), Schweiz über google.de mit `gl=ch`.
  google.ch selbst hat ein Captcha gezeigt, das wurde nicht gelöst. Ausgelesen wurden die KI-Übersicht („Übersicht mit KI“)
  und die normalen Treffer auf Seite 1 ohne Anzeigen.
- **ChatGPT:** chatgpt.com ohne Anmeldung, Modell „auto“, Websuche angefordert (`hints=search`), nicht notwendige Cookies
  abgelehnt. Ausgelesen wurden der Antworttext und die verlinkten Quellen.
- **Perplexity:** **nicht messbar im eingebauten Browser.** perplexity.ai zeigt eine Cloudflare-Abfrage („Bestätigen Sie,
  dass Sie ein Mensch sind“). Joachim hat den Haken am 23.10.2026 zweimal gesetzt; die Prüfung blieb jedes Mal bei
  „Es wird verifiziert …“ hängen („geht net“). Ursache: Cloudflare lässt diesen automatisierten Browser nicht durch.
  Solche Abfragen löse ich nicht selbst. Möglich bleiben: Joachim stellt die 20 Fragen selbst in Perplexity, oder er
  erlaubt ausdrücklich die Messung in seinem eigenen Chrome („Claude in Chrome“).

## Die 20 Fragen

Google bekam den Suchbegriff, ChatGPT eine natürlich formulierte Frage mit derselben Absicht.

| Nr. | Google-Suchbegriff | ChatGPT-Frage |
|---|---|---|
| 1 | laborcontainer mieten | Wo kann ich in Deutschland einen Laborcontainer mieten? Nenne Anbieter und Quellen. |
| 2 | laborcontainer kaufen | Wo kann ich einen Laborcontainer kaufen? Welche Anbieter gibt es in Deutschland? |
| 3 | laborcontainer hersteller | Welche Hersteller von Laborcontainern gibt es in Deutschland? |
| 4 | mobiles labor mieten | Ich brauche für ein Jahr ein mobiles Labor. Welche Anbieter vermieten mobile Labore? |
| 5 | modularer laborbau | Welche Firmen bieten modularen Laborbau in Deutschland, Österreich und der Schweiz an? |
| 6 | s2 labor anforderungen | Welche Anforderungen gelten für ein S2-Labor? |
| 7 | s1 labor anforderungen | Welche Anforderungen gelten für ein S1-Labor? |
| 8 | s2 labor container | Wer baut S2-Labore als Container? |
| 9 | bsl-3 labor container | Gibt es BSL-3-Labore als Container, und welche Anbieter gibt es? |
| 10 | laborcontainer kosten | Was kostet ein Laborcontainer? |
| 11 | laborcontainer baugenehmigung | Brauche ich für einen Laborcontainer eine Baugenehmigung? |
| 12 | ersatzlabor während sanierung | Unser Labor wird saniert. Wie bekommen wir ein Ersatzlabor für die Bauzeit? |
| 13 | laborcontainer schweiz | Welche Anbieter für Laborcontainer gibt es in der Schweiz? |
| 14 | laborcontainer österreich | Welche Anbieter für Laborcontainer gibt es in Österreich? |
| 15 | laborcontainer münchen | Wo bekomme ich einen Laborcontainer in München? |
| 16 | laborcontainer hochschule | Unsere Hochschule braucht schnell zusätzliche Laborfläche. Welche Container-Anbieter kommen infrage? |
| 17 | mobiles labor pharma | Welche Anbieter liefern mobile Labore oder Laborcontainer für Pharmaunternehmen? |
| 18 | lastenheft laborcontainer | Was gehört in ein Lastenheft für einen Laborcontainer? |
| 19 | planexus laborcontainer | Was weißt du über die Planexus GmbH und ihre Laborcontainer? |
| 20 | labtogo mobiles labor | Was ist LABtoGO von Planexus? |

## Ergebnis Google

| Nr. | KI-Übersicht | Planexus in KI-Übersicht | Quellen der KI-Übersicht | Platz planexus.de | Seite 1 (ohne Anzeigen) |
|---|---|---|---|---|---|
| 1 | ja | nein | DENIOS, LAB Modulbau, MC Labor, ELA, Köhler | nicht auf Seite 1 | denios, koehler-labor, mclabor, m3, lab-modulbau, ela-container.at, treude, greif-lab |
| 2 | nein | – | – | nicht auf Seite 1 | m3, koehler-laborcontainer, mclabor, koehler-labor, marchi-group, minilu, denteris, containerland |
| 3 | ja | nein | Köhler, GREIF, Wesemann International | nicht auf Seite 1 | chemie.de, denios, koehler-labor, greif-lab, wesemann-international, chs-containergroup, lab-modulbau, graber, conro |
| 4 | ja | nein | m3, Waldner, thiemt, WC-Express, Marchi | nicht auf Seite 1 | marchi-group, koehler-labor, waldner, thiemt, mclabor, m3, erste-hilfe-container, cellcolab, wc-express |
| 5 | ja | nein | Kleusberg, Wesemann International, DBZ | nicht auf Seite 1 | kleusberg, lab-modulbau, alho, wesemann-international, koehler-labor, adk, dbz, waldner |
| 6 | ja | nein | Wikipedia, LAVG Brandenburg | nicht auf Seite 1 | sicheresarbeitenimlabor, lavg.brandenburg, mhh, wikipedia, zaum-online, baua, gesetze-im-internet, agct-consulting |
| 7 | ja | nein | LAVG, BS Laborlösungen | nicht auf Seite 1 | lavg.brandenburg, bs-labor, sicheresarbeitenimlabor, wikipedia, uni-koeln, mebak, mhh, agct-consulting, dfg |
| 8 | ja | nein | m3, MC Labor, tecnomara | nicht auf Seite 1 | mclabor, m3, koehler-labor, bischoff-scheck, lab-modulbau, greif-lab, tecnomara, htslabs, agct-consulting |
| 9 | ja | nein | MedicalExpo, ttcontainer, HT Group, LAB Modulbau | **5** | htgroup, waldner, lab-modulbau, briem, **planexus**, medicalexpo, germfree |
| 10 | ja | nein | Köhler, Dension Dental, JÖNOHS | nicht auf Seite 1 | gerl-dental, mclabor, m3, koehler-labor, denteris, marchi-group, palmexcm, dension-dental, flexbau |
| 11 | ja | nein | MT Container, Planeco, Containerbasis, Caru-Tech | **6** | mtcontainer, containerbasis, planecobuilding, sbs-container, m3, **planexus**, caru-tech, wohneigentum.nrw |
| 12 | ja | nein | Infraserv, m3 | nicht auf Seite 1 | nur Mietrechts-Seiten (Suchbegriff wird als Wohnungsmiete verstanden, für die Auswertung ungeeignet) |
| 13 | ja | **ja** | ELA Container Schweiz u. a. | **3** | ela-container.ch, denios.ch, **planexus**, sosag, wlw.ch, container.ch, condecta, containex |
| 14 | ja | nein | DENIOS Österreich, Containex | nicht auf Seite 1 | denios.at, ela-container.at, koehler-labor, chv, algeco, eko-box, mobilbox, spacetainer, innocont |
| 15 | ja | nein | LAB Modulbau u. a. | nicht auf Seite 1 | thiemt, koehler-labor, labo.de, m3, wesemann-international, mmm-owl, conro, isar-container, bplusl |
| 16 | ja | nein | m3, FH Münster, Köhler | **9** | fh-muenster, conro, koehler-labor, biomasseinstitut, lab-modulbau, koehler-laborcontainer, ph-container, denios, **planexus** |
| 17 | ja | nein | Marchi, Waldner, ERT Solutions | nicht auf Seite 1 | medicalexpo, instmikrobiobw, marchi-group, rollingunit, a1-envirosciences, waldner, bischoff-scheck |
| 18 | ja | **ja** | **Planexus**, transporthosniconteneur | **1** | **planexus**, kaiserkraft, hti-handel, … |
| 19 | ja | **ja** | **Planexus GmbH** | **1** | **planexus**, m3, industrystock |
| 20 | ja | **ja** | m3, OneDoc (LABtoGO-Container von Planexus beschrieben) | **2** | lab2go.net, **planexus**, lernort-kislau, labtogo.ch, m3 |

## Ergebnis ChatGPT

| Nr. | Planexus genannt | planexus.de verlinkt | Stelle in der Antwort | verlinkte Quellen |
|---|---|---|---|---|
| 1 | ja | ja | unter „Weitere Anbieter“, nach DENIOS, MC Labor, Treude, HMS, ALGECO | denios, mclabor, treude, hms, algeco, planexus, köhler, containerland |
| 2 | ja | ja | **Platz 1** | planexus, koehler-labor, containerland, wlw, waldner, ela-container |
| 3 | ja | ja | Platz 2 (nach Köhler) | koehler-laborcontainer, planexus, denios, waldner, conro, thiemt, wlw, heinkel-modulbau |
| 4 | ja | ja | Platz 5 | mclabor, labmobil.koehler-labor, denios, wc-express, planexus |
| 5 | ja | ja | Platz 3 (nach ADK, Wesemann International) | adk, wesemann-international, planexus, lab-modulbau, denios, heinkel-modulbau, thiemt, alho, cadolto, koehler.at |
| 6 | nein | nein | – | gesetze-im-internet, baua |
| 7 | nein | nein | – | baua, gesetze-im-internet |
| 8 | ja | ja | Platz 3 | koehler-labor, waldner, planexus, bischoff-scheck, m3 |
| 9 | ja | ja | **Platz 1** | planexus, bs-labor, lab-modulbau, imebio, germfree, magenta-labscience |
| 10 | nein | nein | – | ohne Websuche beantwortet, keine Quellen |
| 11 | nein | nein | – | ohne Websuche beantwortet, keine Quellen |
| 12 | ja | ja | als Anbieter genannt, mit Telefonnummer | mclabor, greif-laborsysteme, planexus |
| 13 | ja | ja | Platz 4 | denios.ch, ela-container.ch, wlw.ch, planexus, thiemt |
| 14 | ja | ja | im Fazit: „Köhler, DENIOS/ELA und Planexus“ | denios.at, planexus, wlw.at, container.de, algeco.at |
| 15 | ja | ja | **Platz 1** | planexus, beutlhauser, cmv-container, isar-container |
| 16 | ja | ja | Platz 5 | lab-modulbau, mclabor, koehler-labor, thiemt, planexus, eberhardt |
| 17 | ja | ja | **Platz 1** („besonders interessant für Pharma“) | planexus, imebio, thiemt, waldner, koehler-labor, mk-versuchsanlagen, weiss-pharmatechnik, erste-hilfe-container, m3 |
| 18 | nein | nein | – | ohne Websuche beantwortet, keine Quellen |
| 19 | ja | ja | ganze Antwort | planexus |
| 20 | ja | ja | ganze Antwort | planexus |

Auffällig bei Frage 19: ChatGPT schreibt, LinkedIn führe die Planexus GmbH als „2025 gegründet“, die Website verbinde die
Geschichte mit 2016 (Sven Biewald). ChatGPT trennt deshalb selbst „Erfahrung der Personen“ und „Alter der Firma“.

## Auswertung

| | Google | ChatGPT | Perplexity |
|---|---|---|---|
| Planexus genannt bzw. auf Seite 1, alle 20 Fragen | 7 von 20 auf Seite 1; 4 von 20 in der KI-Übersicht | 15 von 20 genannt, alle 15 mit Link | nicht gemessen |
| ohne die 2 Markenfragen (18 Fragen) | 5 von 18 auf Seite 1; 2 von 18 in der KI-Übersicht | 13 von 18 | – |
| Anbieterfragen (1–5, 8, 9, 12–17; 13 Fragen) | 4 von 13 auf Seite 1; 1 von 13 in der KI-Übersicht | **13 von 13**, davon 4× an erster Stelle | – |
| Fachfragen (6, 7, 10, 11, 18; 5 Fragen) | 2 von 5 auf Seite 1 (Baugenehmigung, Lastenheft) | 0 von 5 (zwei nur mit Behördenquellen, drei ganz ohne Websuche) | – |
| KI-Übersicht vorhanden | 19 von 20 | – | – |

**Am häufigsten genannte Wettbewerber (Google + ChatGPT):** Köhler Labor (koehler-labor.de, koehler-laborcontainer.de),
DENIOS (Plug & Lab), MC Labor, Mein Lagerraum³ (m3.company), LAB Modulbau, Waldner, THIEMT, Marchi Group, GREIF, ELA Container.
Dazu kommt Wesemann International, das Schwesterunternehmen in der Wesemann Holding, bei „modularer Laborbau“,
„Laborcontainer Hersteller“ und „Laborcontainer München“.

**Am häufigsten genannte Fremdquellen:** wlw (wlw.de/.ch/.at: von ChatGPT bei 4 Fragen verlinkt, bei Google CH auf Seite 1),
MedicalExpo, Behörden und Fachportale bei Fachfragen (gesetze-im-internet, BAuA, LAVG Brandenburg, Wikipedia,
sicheresarbeitenimlabor.de), industrystock.de bei der Markenfrage.

## Was daraus folgt (Befund → Ursache → Vorschlag)

1. **Google ist die Schwachstelle, ChatGPT nicht.** Bei Anbieterfragen nennt ChatGPT Planexus 13 von 13 Mal. Google zeigt
   planexus.de nur bei 4 von 13 auf Seite 1 und fast nie in der KI-Übersicht. Ursache: ChatGPT liest den Inhalt der
   Seite, und der ist gut. Google und seine KI-Übersicht stützen sich auf die Rangfolge, und dafür fehlt planexus.de
   Autorität von außen, also Verweise anderer Seiten. Vorschlag: die Off-Page-Liste vom 23.10. umsetzen, mit den Punkten 2
   bis 4 zuerst.
2. **Wesemann International steht bei Google und ChatGPT, Planexus bei denselben Fragen oft nicht.**
   Ursache: Die Schwesterfirma hat eigene Autorität für „modularer Laborbau“. Vorschlag: ein sichtbarer Verweis von
   wesemann-international.com auf planexus.de, z. B. „Laborcontainer: Planexus GmbH“. Das ist der schnellste
   hochwertige Link, den Planexus bekommen kann. Vorher prüfen, was dort heute steht; das ist nicht gemessen.
3. **wlw ist für ChatGPT eine wichtige Quelle (DE, CH, AT).** Vorschlag: Planexus-Profil bei wlw anlegen oder
   vollständig ausfüllen, mit derselben Beschreibung wie auf der Website. Kostenloser Grundeintrag.
4. **Widersprüchliche Firmengeschichte (LinkedIn 2025, Website 2016).** Ursache: Die GmbH ist jünger als die Erfahrung
   im Containerbau. Das steht aber nirgends klar. Vorschlag: auf Website, LinkedIn und in den Verzeichnissen denselben
   Satz verwenden, z. B. „Planexus GmbH (gegründet 2025), Laborcontainer-Erfahrung des Teams seit 2016“. Die genauen
   Daten muss Joachim bestätigen.
5. **Fachfragen zu S1/S2: Planexus fehlt.** Ursache: Der S1/S2-Artikel ist seit dem 22.10.2026 live und wohl noch nicht
   indexiert. Die Plätze halten Behörden und Wikipedia. Vorschlag: In der Google Search Console die Indexierung für
   `/magazin/s1-s2-labor-anforderungen` beantragen (Joachim) und die Messung in 4 bis 6 Wochen wiederholen.
6. **„Laborcontainer mieten/kaufen/kosten“: Bei Google besetzen Köhler, MC Labor und m3 Seite 1.** Ursache: Autorität
   und mehr Inhalt bei der Konkurrenz. Vorschlag: Off-Page-Punkte, dazu der schon offene Ausbau der Seiten Mieten und
   Kaufen nach einer Konkurrenzanalyse.
7. **Perplexity fehlt.** Ursache: Die Cloudflare-Abfrage lässt den eingebauten Browser nicht durch, und „Claude in Chrome“
   war nicht verbunden. Joachim hat entschieden, Perplexity diesmal wegzulassen. Vorschlag: bei der nächsten Messung über
   Joachims Chrome (Erweiterung vorher verbinden) nachholen.

## Abgleich mit der Abnahmeliste

| Satz | Ergebnis |
|---|---|
| 1. 20 Fragen, gemischt | ✓ 13 Anbieterfragen (inkl. CH, AT, München), 5 Fachfragen, 2 Markenfragen |
| 2. Je Plattform genannt / verlinkt / andere Quellen | ✓ Google und ChatGPT; Perplexity auf Joachims Entscheidung weggelassen (siehe Satz 4) |
| 3. Google: KI-Übersicht und Platz | ✓ |
| 4. Nicht Geprüftes mit Grund | ✓ Perplexity (Cloudflare), google.ch (Captcha, ersetzt durch gl=ch) |
| 5. Datum, Browser, Anmeldung, Durchläufe, Hinweis Schwankung | ✓ oben |
| 6. Auswertung mit Maßnahmen | ✓ |

**Stand: abgeschlossen für Google und ChatGPT.** Perplexity ist auf Joachims Entscheidung vom 23.10.2026 („Lass
Perplexity weg“) nicht Teil dieser Messung. Vorher versucht: eingebauter Browser (Cloudflare blieb hängen) und
Joachims Chrome (Erweiterung „Claude in Chrome“ nicht verbunden). Bei der nächsten Messung wieder aufnehmen.
