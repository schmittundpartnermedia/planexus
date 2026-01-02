import { Link } from "wouter";
import { ArrowRight, ArrowLeft, Calendar, User, Tag, Clock, CheckCircle2, Lightbulb, AlertTriangle, ChevronRight, Share2, Bookmark, Shield, Lock, AlertCircle, FileCheck, Microscope, Wind } from "lucide-react";
import { motion } from "framer-motion";

export default function Article3() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2070')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/90 to-slate-900/70"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
                <Tag className="w-4 h-4" /> Sicherheit
              </span>
              <span className="text-gray-400 text-sm flex items-center gap-2">
                <Clock className="w-4 h-4" /> 15 Min. Lesezeit
              </span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-tight">
              BSL-2 und BSL-3 im Container: Geht das?
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Sicherheitsstufen im Containerbau sind kein Problem mehr. Erfahren Sie, wie wir höchste Sicherheitsanforderungen in mobilen Einheiten realisieren.
            </p>
            
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> 20. Dezember 2025</span>
              <span className="flex items-center gap-2"><User className="w-4 h-4" /> Redaktion Planexus</span>
            </div>
          </div>
        </div>
      </section>

      {/* Brotkrümel */}
      <div className="bg-slate-50 border-b border-gray-100 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/"><a className="hover:text-primary">Start</a></Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/magazine"><a className="hover:text-primary">Magazin</a></Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-primary font-medium">BSL-2 und BSL-3 im Container</span>
          </div>
        </div>
      </div>

      {/* Artikel-Inhalt */}
      <article className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Hauptinhalt */}
            <div className="lg:col-span-8">
              <div className="prose prose-lg max-w-none">
                
                {/* Einleitung */}
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Die Arbeit mit gefährlichen biologischen Arbeitsstoffen erfordert höchste Sicherheitsvorkehrungen. Labore der Schutzstufen BSL-2 und BSL-3 müssen strenge bauliche und technische Anforderungen erfüllen, um Mitarbeiter und Umwelt zu schützen. Lange Zeit galt dies als Domäne aufwendiger Massivbauten. Doch moderne Containerlabore beweisen: Höchste Sicherheit ist auch in modularer Bauweise möglich.
                </p>

                <h2 className="text-2xl font-heading font-bold text-slate-900 mt-12 mb-6">
                  Grundlagen der biologischen Sicherheitsstufen
                </h2>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Die biologischen Sicherheitsstufen – international als Biosafety Levels (BSL) bekannt – klassifizieren Laboratorien nach der Gefährlichkeit der dort gehandhabten Organismen. In Deutschland werden diese durch die Biostoffverordnung (BioStoffV) und die Technischen Regeln für Biologische Arbeitsstoffe (TRBA) geregelt.
                </p>

                {/* Sicherheitsstufen Übersicht */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8 not-prose">
                  {[
                    { level: "BSL-1", risk: "Geringes Risiko", desc: "Organismen ohne bekannte Gefährdung für gesunde Erwachsene", color: "bg-green-100 text-green-700 border-green-200" },
                    { level: "BSL-2", risk: "Moderates Risiko", desc: "Organismen mit moderatem Gefährdungspotential", color: "bg-yellow-100 text-yellow-700 border-yellow-200" },
                    { level: "BSL-3", risk: "Hohes Risiko", desc: "Organismen, die schwere Erkrankungen verursachen können", color: "bg-orange-100 text-orange-700 border-orange-200" },
                    { level: "BSL-4", risk: "Höchstes Risiko", desc: "Hochgefährliche Erreger ohne Therapiemöglichkeit", color: "bg-red-100 text-red-700 border-red-200" },
                  ].map((item, i) => (
                    <div key={i} className={`p-5 rounded-xl border ${item.color}`}>
                      <div className="flex items-center gap-2 mb-2">
                        <Shield className="w-5 h-5" />
                        <span className="font-bold">{item.level}</span>
                      </div>
                      <p className="font-medium mb-1">{item.risk}</p>
                      <p className="text-sm opacity-80">{item.desc}</p>
                    </div>
                  ))}
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Während BSL-1 und BSL-2 Labore vergleichsweise häufig sind, stellen BSL-3 Labore aufgrund ihrer komplexen baulichen Anforderungen eine besondere Herausforderung dar. BSL-4 Labore – die höchste Sicherheitsstufe für Arbeiten mit Erregern wie Ebola oder Marburg-Virus – werden aufgrund ihrer extremen Anforderungen bislang nicht als Containermodul realisiert.
                </p>

                <h2 className="text-2xl font-heading font-bold text-slate-900 mt-12 mb-6">
                  BSL-2 im Containerformat: Bewährt und zuverlässig
                </h2>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Labore der Schutzstufe 2 sind für die Arbeit mit Organismen vorgesehen, die bei gesunden Erwachsenen zu Erkrankungen führen können, für die aber wirksame Behandlungsmöglichkeiten bestehen. Typische Anwendungen sind mikrobiologische Routineuntersuchungen, Arbeiten mit Zellkulturen oder diagnostische Labore.
                </p>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Die baulichen Anforderungen an BSL-2 Labore umfassen unter anderem:
                </p>

                {/* BSL-2 Anforderungen */}
                <div className="bg-slate-50 p-6 rounded-xl my-8 not-prose">
                  <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" /> BSL-2 Anforderungen
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Abgeschlossener Laborbereich mit Zutrittskontrolle",
                      "Waschbecken mit Handwasch-Einrichtung im Labor",
                      "Leicht zu reinigende und desinfizierende Oberflächen",
                      "Fenster müssen während der Arbeit geschlossen bleiben können",
                      "Geeignete Sicherheitswerkbänke für aerosolerzeugendeTätigkeiten",
                      "Dekontaminationsmöglichkeiten (Autoklav im Gebäude)",
                      "Separate Schutzkleidung für den Laborbereich"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Diese Anforderungen lassen sich in einem gut geplanten Containermodul problemlos erfüllen. Unsere BSL-2 Container werden mit abwaschbaren Wandoberflächen, integrierten Handwaschbecken und Anschlüssen für Sicherheitswerkbänke ausgestattet. Die <Link href="/services/planning"><a className="text-primary font-medium hover:underline">technische Fachplanung</a></Link> berücksichtigt alle Details von Anfang an.
                </p>

                {/* Profi-Tipp */}
                <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-xl my-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Lightbulb className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2">Profi-Tipp: Durchreicheautoklav einplanen</h4>
                      <p className="text-gray-600 text-sm">
                        Für effiziente Arbeitsabläufe empfehlen wir die Integration eines Durchreicheautoklaven. So können kontaminierte Materialien dekontaminiert werden, ohne sie durch den sauberen Bereich transportieren zu müssen. Unsere <Link href="/services/equipment"><a className="text-primary font-medium hover:underline">Laborausstattungsexperten</a></Link> beraten Sie zur optimalen Konfiguration.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-heading font-bold text-slate-900 mt-12 mb-6">
                  BSL-3: Die Königsklasse im Containerbau
                </h2>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Labore der Schutzstufe 3 dienen der Arbeit mit Organismen, die schwere Erkrankungen verursachen können und für die wirksame Therapien oder Prophylaxen nicht immer verfügbar sind. Dazu gehören etwa Mycobacterium tuberculosis, das West-Nil-Virus oder bestimmte Influenzastämme. Die baulichen Anforderungen sind entsprechend streng.
                </p>

                {/* BSL-3 Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8 not-prose">
                  {[
                    { icon: <Lock className="w-6 h-6" />, title: "Zugangskontrolle", desc: "Mehrfach gesicherte Schleusen mit Interlock-Funktion" },
                    { icon: <Wind className="w-6 h-6" />, title: "Unterdruckhaltung", desc: "Permanenter Unterdruck verhindert Luftaustritt" },
                    { icon: <AlertCircle className="w-6 h-6" />, title: "Gasdichte Kabine", desc: "Vollständig abgedichtete Raumhülle" },
                    { icon: <FileCheck className="w-6 h-6" />, title: "HEPA-Filtration", desc: "Abluftfilterung mit H14 HEPA-Filtern" },
                  ].map((item, i) => (
                    <div key={i} className="bg-slate-50 p-5 rounded-xl border border-gray-100">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-3">
                        {item.icon}
                      </div>
                      <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-heading font-bold text-slate-900 mt-10 mb-4">
                  Die Unterdruckzone: Herzstück der Sicherheit
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Das wichtigste Sicherheitsmerkmal eines BSL-3 Labors ist die kontrollierte Unterdruckhaltung. Der Luftdruck im Laborbereich liegt etwa 30 bis 50 Pascal unter dem Umgebungsdruck. Dadurch strömt die Luft bei jeder Öffnung von außen nach innen – nie umgekehrt. Potentiell kontaminierte Luft kann somit nicht in die Umgebung gelangen.
                </p>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  In einem Containerlabor wird diese Unterdruckzone durch eine gasdichte Kabinenkonstruktion realisiert. Alle Durchführungen – für Elektrik, Medien, Lüftung – werden mit speziellen Dichtungssystemen ausgeführt. Die Lüftungsanlage ist redundant ausgelegt und mit automatischer Notabschaltung bei Störungen versehen.
                </p>

                {/* Wichtiger Hinweis */}
                <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl my-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center shrink-0">
                      <AlertTriangle className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2">Wichtig: Genehmigungsverfahren beachten</h4>
                      <p className="text-gray-600 text-sm">
                        Der Betrieb eines BSL-3 Labors erfordert eine Erlaubnis nach Biostoffverordnung. Das Genehmigungsverfahren kann mehrere Monate dauern. Beginnen Sie frühzeitig mit der Vorbereitung – unsere <Link href="/services/consulting"><a className="text-primary font-medium hover:underline">Beratungsexperten</a></Link> unterstützen Sie dabei.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-heading font-bold text-slate-900 mt-10 mb-4">
                  Das Schleusenkonzept
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Der Zugang zum BSL-3 Bereich erfolgt über ein mehrstufiges Schleusensystem. Typischerweise besteht dies aus einer Schwarz-Weiß-Trennung mit Umkleidebereich, einer Duschpassage und einer eigentlichen Personenschleuse. Die Schleusen sind mit Interlock-Verriegelungen ausgestattet, sodass niemals beide Türen gleichzeitig geöffnet werden können.
                </p>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  In einem kompakten Containerlabor muss dieses Schleusenkonzept clever umgesetzt werden. Durch optimierte Layouts gelingt es, alle erforderlichen Funktionen auf engem Raum unterzubringen. Je nach Anforderung können die Schleusen in einem separaten Vorschaltcontainer oder im gleichen Modul untergebracht werden.
                </p>

                <h2 className="text-2xl font-heading font-bold text-slate-900 mt-12 mb-6">
                  Technische Systeme für Höchstsicherheit
                </h2>

                <h3 className="text-xl font-heading font-bold text-slate-900 mt-10 mb-4">
                  Lüftungs- und Filtersysteme
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Die Lüftungsanlage eines BSL-3 Containerlabors ist redundant aufgebaut. Zwei unabhängige Abluftventilatoren gewährleisten den kontinuierlichen Betrieb auch bei Ausfall eines Systems. Die Abluft wird über HEPA-Filter der Klasse H14 geleitet, die mindestens 99,995 Prozent aller Partikel mit einer Größe von 0,1 bis 0,3 Mikrometern zurückhalten.
                </p>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Die Zuluft wird ebenfalls gefiltert, um das Einschleppen von Kontaminationen zu verhindern. Die Luftführung ist so konzipiert, dass saubere Luft im Eingangsbereich einströmt und zur Kontaminationsquelle hin abgesaugt wird – ein gerichteter Luftstrom, der die Ausbreitung von Aerosolen minimiert.
                </p>

                {/* Profi-Tipp */}
                <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-xl my-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Lightbulb className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2">Profi-Tipp: Bag-In/Bag-Out Filtergehäuse</h4>
                      <p className="text-gray-600 text-sm">
                        Für den sicheren Filterwechsel empfehlen wir Bag-In/Bag-Out (BIBO) Filtergehäuse. Diese ermöglichen den kontaminationsfreien Austausch der HEPA-Filter ohne Exposition des Servicepersonals. Unsere <Link href="/services/equipment"><a className="text-primary font-medium hover:underline">Laborausstattung</a></Link> umfasst alle erforderlichen Sicherheitssysteme.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-heading font-bold text-slate-900 mt-10 mb-4">
                  Dekontamination und Abfallentsorgung
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Alle Materialien, die den BSL-3 Bereich verlassen, müssen dekontaminiert werden. Hierfür werden typischerweise Durchreicheautoklaven eingesetzt, die den Übergang zwischen kontaminiertem und sauberem Bereich bilden. Flüssige Abfälle werden vor der Ableitung chemisch oder thermisch inaktiviert.
                </p>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Für die Raumbegasung – etwa nach einem Zwischenfall oder vor Wartungsarbeiten – sind Anschlüsse für Formaldehydverdampfer oder Wasserstoffperoxid-Generatoren vorzusehen. Diese ermöglichen die vollständige Dekontamination des gesamten Laborbereichs.
                </p>

                <h2 className="text-2xl font-heading font-bold text-slate-900 mt-12 mb-6">
                  Überwachung und Dokumentation
                </h2>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Ein BSL-3 Labor erfordert umfangreiche Überwachungs- und Dokumentationssysteme. Drucksensoren überwachen kontinuierlich die Unterdruckhaltung und lösen bei Abweichungen Alarm aus. Türkontakte protokollieren jeden Zugang. Videoüberwachung dokumentiert die Aktivitäten im Labor.
                </p>

                {/* Smart Lab Integration */}
                <div className="bg-slate-50 p-6 rounded-xl my-8 not-prose">
                  <h4 className="font-bold text-slate-900 mb-4">Unsere Smart-Lab-Lösung für BSL-3 umfasst:</h4>
                  <ul className="space-y-3">
                    {[
                      "Kontinuierliche Druckdifferenzmessung mit Alarmsystem",
                      "Automatische Dokumentation aller sicherheitsrelevanten Parameter",
                      "Zugangskontrolle mit biometrischer Erfassung",
                      "Videoüberwachung mit Aufzeichnung",
                      "Fernzugriff auf Statusdaten für autorisierte Personen",
                      "Automatische Meldung an den Betriebsleiter bei Störungen"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <Link href="/services/smart-lab">
                      <a className="text-primary font-medium hover:underline flex items-center gap-2">
                        Mehr über Smart Lab Integration erfahren <ArrowRight className="w-4 h-4" />
                      </a>
                    </Link>
                  </div>
                </div>

                <h2 className="text-2xl font-heading font-bold text-slate-900 mt-12 mb-6">
                  Vorteile des Container-Konzepts für Hochsicherheitslabore
                </h2>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Die Realisierung von BSL-2 und BSL-3 Laboren in Containerform bietet spezifische Vorteile, die über die allgemeinen Vorzüge des Modulbaus hinausgehen:
                </p>

                {/* Vorteile Checkliste */}
                <div className="bg-primary/5 p-6 rounded-xl my-8 not-prose">
                  <ul className="space-y-4">
                    {[
                      { title: "Kontrollierte Fertigung", desc: "Die gasdichte Kabine entsteht unter Werkstattbedingungen mit höchster Präzision – Qualitätsniveaus, die auf der Baustelle kaum erreichbar wären." },
                      { title: "Unabhängigkeit vom Bestandsgebäude", desc: "Ein Container-BSL-3 kann ohne aufwendige Eingriffe in bestehende Gebäudestrukturen aufgestellt werden." },
                      { title: "Schnelle Verfügbarkeit", desc: "Die Realisierungszeit ist deutlich kürzer als bei konventionellen BSL-3 Laboren, die oft Jahre in Anspruch nehmen." },
                      { title: "Flexibilität", desc: "Bei Standortwechseln kann das komplette Labor umgezogen werden – die gesamte zertifizierte Einheit bleibt erhalten." },
                      { title: "Definierte Schnittstellen", desc: "Klare Abgrenzung zwischen Hochsicherheitsbereich und Umgebung erleichtert Betrieb und Wartung." },
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                        <div>
                          <span className="font-bold text-slate-900">{item.title}:</span>
                          <span className="text-gray-700 ml-1">{item.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <h2 className="text-2xl font-heading font-bold text-slate-900 mt-12 mb-6">
                  Vom Konzept zur Zulassung
                </h2>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Die Realisierung eines BSL-2 oder BSL-3 Containerlabors folgt einem strukturierten Prozess. Am Anfang steht die Bedarfsanalyse: Welche Organismen sollen bearbeitet werden? Welche Arbeitsverfahren sind geplant? Wie viele Personen werden im Labor arbeiten? Auf Basis dieser Informationen entwickeln wir das Konzept.
                </p>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Parallel beginnt die Abstimmung mit den Genehmigungsbehörden. Für BSL-2 Labore ist in der Regel eine Anzeige bei der zuständigen Behörde ausreichend. BSL-3 Labore erfordern eine Erlaubnis, deren Erteilung von einer Prüfung der baulichen und organisatorischen Voraussetzungen abhängt. Unsere <Link href="/services/consulting"><a className="text-primary font-medium hover:underline">Beratungsexperten</a></Link> begleiten Sie durch diesen Prozess.
                </p>

                {/* Fazit */}
                <div className="bg-slate-900 text-white p-8 rounded-2xl my-12 not-prose">
                  <h3 className="text-xl font-bold mb-4">Fazit: Sicherheit und Flexibilität vereint</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Die Frage „BSL-2 und BSL-3 im Container – geht das?" können wir mit einem klaren Ja beantworten. Moderne Fertigungstechnologien und durchdachte Konzepte ermöglichen es, Hochsicherheitslabore in mobiler Bauweise zu realisieren, die konventionellen Anlagen in nichts nachstehen. Im Gegenteil: Die kontrollierte Werkstattfertigung bietet Qualitätsvorteile, während die Flexibilität des Container-Konzepts neue Einsatzmöglichkeiten eröffnet.
                  </p>
                  <Link href="/contact">
                    <a className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                      Sicherheitslabor anfragen <ArrowRight className="w-5 h-5" />
                    </a>
                  </Link>
                </div>

              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 space-y-6">
                {/* Autor */}
                <div className="bg-slate-50 p-6 rounded-2xl border border-gray-100">
                  <h4 className="font-bold text-slate-900 mb-4">Über den Autor</h4>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-xl">
                      PX
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Redaktion Planexus</p>
                      <p className="text-gray-600 text-sm">Fachartikel & News</p>
                    </div>
                  </div>
                </div>

                {/* Teilen */}
                <div className="bg-white p-6 rounded-2xl border border-gray-100">
                  <h4 className="font-bold text-slate-900 mb-4">Artikel teilen</h4>
                  <div className="flex gap-3">
                    <button className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-colors">
                      <Share2 className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-colors">
                      <Bookmark className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Verwandte Leistungen */}
                <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                  <h4 className="font-bold text-slate-900 mb-4">Passende Leistungen</h4>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/services/planning">
                        <a className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors">
                          <ChevronRight className="w-4 h-4 text-primary" />
                          Technische Fachplanung
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/consulting">
                        <a className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors">
                          <ChevronRight className="w-4 h-4 text-primary" />
                          Beratung & Genehmigung
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/equipment">
                        <a className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors">
                          <ChevronRight className="w-4 h-4 text-primary" />
                          Laborausstattung
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/smart-lab">
                        <a className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors">
                          <ChevronRight className="w-4 h-4 text-primary" />
                          Smart Lab Integration
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* CTA */}
                <div className="bg-slate-900 text-white p-6 rounded-2xl">
                  <h4 className="font-bold mb-3">BSL-Labor planen?</h4>
                  <p className="text-gray-400 text-sm mb-4">
                    Wir beraten Sie zu allen Sicherheitsstufen.
                  </p>
                  <Link href="/contact">
                    <a className="block w-full bg-primary text-white font-bold py-3 rounded-lg text-center hover:bg-primary/90 transition-colors">
                      Kontakt aufnehmen
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Weitere Artikel */}
      <section className="py-16 bg-slate-50 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-heading font-bold text-slate-900 mb-8">Weitere Artikel</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/magazine/1">
              <a className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all flex gap-4 group">
                <div className="w-24 h-24 bg-slate-100 rounded-lg shrink-0 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1581093588401-fbb07aa5cd12?q=80&w=400" alt="" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-xs text-primary font-medium mb-2">Technologie</p>
                  <h3 className="font-bold text-slate-900 group-hover:text-primary transition-colors">Innovation im Modulbau: Die Zukunft des mobilen Labors</h3>
                </div>
              </a>
            </Link>
            <Link href="/magazine/2">
              <a className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all flex gap-4 group">
                <div className="w-24 h-24 bg-slate-100 rounded-lg shrink-0 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=400" alt="" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-xs text-primary font-medium mb-2">Nachhaltigkeit</p>
                  <h3 className="font-bold text-slate-900 group-hover:text-primary transition-colors">Nachhaltigkeit im Laborbau: Energieeffizienz trifft High-Tech</h3>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Zurück */}
      <div className="container mx-auto px-4 py-8">
        <Link href="/magazine">
          <a className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" /> Zurück zum Magazin
          </a>
        </Link>
      </div>
    </div>
  );
}
