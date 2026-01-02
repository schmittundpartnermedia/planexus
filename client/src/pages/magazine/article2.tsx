import { Link } from "wouter";
import { ArrowRight, ArrowLeft, Calendar, User, Tag, Clock, CheckCircle2, Lightbulb, AlertTriangle, ChevronRight, Share2, Bookmark, Leaf, Sun, Droplets, Wind, Thermometer, Recycle } from "lucide-react";
import { motion } from "framer-motion";
import { SEO, ArticleSchema, BreadcrumbSchema } from "@/components/SEO";

export default function Article2() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <SEO 
        title="Nachhaltigkeit im Laborbau: Energieeffizienz trifft High-Tech"
        description="Moderne Laborcontainer setzen neue Maßstäbe in Sachen Energieeffizienz. Erfahren Sie, wie nachhaltige Materialien und smarte Klimatechnik den CO2-Fußabdruck senken."
        canonical="/magazine/2"
        type="article"
      />
      <ArticleSchema 
        headline="Nachhaltigkeit im Laborbau: Energieeffizienz trifft High-Tech"
        description="Moderne Laborcontainer setzen neue Maßstäbe in Sachen Energieeffizienz."
        author="Thomas Boss"
        datePublished="2026-01-05"
        image="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070"
        url="/magazine/2"
      />
      <BreadcrumbSchema items={[
        { name: "Start", url: "/" },
        { name: "Magazin", url: "/magazine" },
        { name: "Nachhaltigkeit im Laborbau", url: "/magazine/2" }
      ]} />
      {/* Hero */}
      <section className="relative py-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/90 to-slate-900/70"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
                <Tag className="w-4 h-4" /> Nachhaltigkeit
              </span>
              <span className="text-gray-400 text-sm flex items-center gap-2">
                <Clock className="w-4 h-4" /> 14 Min. Lesezeit
              </span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-tight">
              Nachhaltigkeit im Laborbau: Energieeffizienz trifft High-Tech
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Moderne Laborcontainer setzen neue Maßstäbe in Sachen Energieeffizienz. Wir zeigen, wie nachhaltige Materialien und smarte Klimatechnik den CO2-Fußabdruck senken.
            </p>
            
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> 05. Januar 2026</span>
              <span className="flex items-center gap-2"><User className="w-4 h-4" /> Thomas Boss</span>
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
            <span className="text-primary font-medium">Nachhaltigkeit im Laborbau</span>
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
                  Der Klimawandel stellt alle Branchen vor neue Herausforderungen – auch den Laborbau. Laboratorien gehören zu den energieintensivsten Gebäudetypen überhaupt. Der hohe Luftwechsel, die präzise Klimatisierung und der Betrieb zahlreicher Geräte führen zu einem Energieverbrauch, der oft das Zehnfache eines normalen Bürogebäudes beträgt. Umso wichtiger ist es, bei der Planung und Realisierung von Laboren auf Nachhaltigkeit zu setzen.
                </p>

                <h2 className="text-2xl font-heading font-bold text-slate-900 mt-12 mb-6">
                  Die Herausforderung: Energiehunger der Labore
                </h2>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Ein durchschnittliches Labor verbraucht zwischen 300 und 500 kWh Energie pro Quadratmeter und Jahr – konventionelle Bürogebäude kommen mit 50 bis 100 kWh aus. Die Gründe für diesen enormen Energiebedarf sind vielfältig: Lüftungsanlagen müssen große Luftmengen bewegen, um Schadstoffe abzuführen. Klimaanlagen halten Temperatur und Luftfeuchtigkeit in engen Grenzen. Laborgeräte wie Kühlschränke, Zentrifugen oder Analysegeräte laufen oft rund um die Uhr.
                </p>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Der modulare Laborbau bietet hier besondere Chancen: Durch die kontrollierte Fertigung und den Einsatz modernster Technologien können Laborcontainer von Planexus Energieverbräuche erreichen, die deutlich unter den Branchendurchschnitt liegen – ohne Kompromisse bei der Funktionalität.
                </p>

                {/* Nachhaltigkeits-Icons */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8 not-prose">
                  {[
                    { icon: <Leaf className="w-6 h-6" />, title: "Nachhaltige Materialien" },
                    { icon: <Sun className="w-6 h-6" />, title: "Solarintegration" },
                    { icon: <Recycle className="w-6 h-6" />, title: "Recyclingfähig" },
                    { icon: <Wind className="w-6 h-6" />, title: "Energierückgewinnung" },
                  ].map((item, i) => (
                    <div key={i} className="bg-primary/5 p-4 rounded-xl text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-2">
                        {item.icon}
                      </div>
                      <p className="text-sm font-medium text-slate-700">{item.title}</p>
                    </div>
                  ))}
                </div>

                <h2 className="text-2xl font-heading font-bold text-slate-900 mt-12 mb-6">
                  Die thermische Hülle: Dämmung auf höchstem Niveau
                </h2>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Die erste Verteidigungslinie gegen Energieverluste ist die thermische Hülle des Gebäudes. Moderne Laborcontainer von Planexus setzen hier neue Maßstäbe. Die Wandelemente bestehen aus hochisolierenden Sandwichpaneelen mit einer Dämmstärke von 80 bis 120 Millimetern. Der Kern aus Polyurethan-Hartschaum oder Mineralwolle erreicht Wärmedurchgangskoeffizienten (U-Werte) von unter 0,20 W/m²K.
                </p>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Zum Vergleich: Die aktuelle Energieeinsparverordnung (GEG) fordert für Außenwände einen U-Wert von maximal 0,24 W/m²K. Unsere Container unterschreiten diesen Wert deutlich und erreichen Passivhausniveau. Dies führt zu erheblichen Einsparungen bei Heizung und Kühlung – je nach Standort und Nutzung zwischen 30 und 50 Prozent gegenüber Standardlösungen.
                </p>

                {/* Profi-Tipp */}
                <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-xl my-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Lightbulb className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2">Profi-Tipp: Wärmebrücken vermeiden</h4>
                      <p className="text-gray-600 text-sm">
                        Besondere Aufmerksamkeit gilt den Anschlusspunkten. In der <Link href="/services/planning"><a className="text-primary font-medium hover:underline">technischen Fachplanung</a></Link> optimieren wir jeden Detailanschluss, um Wärmebrücken zu minimieren. Dies betrifft insbesondere Fenster, Türen und Durchführungen für Medien.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-heading font-bold text-slate-900 mt-10 mb-4">
                  Fenster und Verglasungen
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Auch bei den Verglasungen setzen wir auf höchste Qualität. Dreifach verglaste Fensterelemente mit Wärmeschutzbeschichtung und Edelgas-Füllung erreichen U-Werte von unter 0,8 W/m²K. Wo es die Nutzung erlaubt, kommen spezielle Sonnenschutzgläser zum Einsatz, die den Energieeintrag im Sommer reduzieren, ohne das natürliche Tageslicht wesentlich zu beeinträchtigen.
                </p>

                <h2 className="text-2xl font-heading font-bold text-slate-900 mt-12 mb-6">
                  Intelligente Klimatechnik
                </h2>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Die Klimatisierung ist traditionell der größte Energieverbraucher im Labor. Moderne Lüftungs- und Klimasysteme bieten jedoch zahlreiche Möglichkeiten zur Effizienzsteigerung. Das Herzstück ist die Wärmerückgewinnung: Hocheffiziente Plattenwärmetauscher oder Rotationswärmetauscher übertragen bis zu 85 Prozent der Wärme aus der Abluft auf die Zuluft.
                </p>

                {/* Klimatechnik Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8 not-prose">
                  {[
                    { icon: <Thermometer className="w-6 h-6" />, title: "Präzise Regelung", desc: "Raumweise Temperatursteuerung mit ±0,5°C Genauigkeit" },
                    { icon: <Wind className="w-6 h-6" />, title: "Wärmerückgewinnung", desc: "Bis zu 85% Energierückgewinnung aus der Abluft" },
                    { icon: <Droplets className="w-6 h-6" />, title: "Feuchtemanagement", desc: "Adiabate Kühlung reduziert den Kühlenergiebedarf" },
                    { icon: <Sun className="w-6 h-6" />, title: "Free Cooling", desc: "Nutzung kühler Außenluft zur Klimatisierung" },
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
                  Variable Luftvolumenströme
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Konventionelle Laborlüftungen arbeiten oft mit konstanten Luftmengen – unabhängig davon, ob das Labor voll besetzt ist oder leer steht. Moderne VAV-Systeme (Variable Air Volume) passen die Luftmenge dynamisch an den tatsächlichen Bedarf an. Sensoren erfassen die Luftqualität und die Belegung; die Lüftungsanlage reagiert entsprechend.
                </p>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Bei Laborabzügen, die nur zeitweise genutzt werden, können VAV-Systeme die Absaugleistung bei geschlossenem Schiebefenster reduzieren. Dies spart erhebliche Mengen konditionierter Luft – und damit Energie. Die Einsparungen können je nach Nutzungsprofil 20 bis 40 Prozent betragen.
                </p>

                {/* Wichtiger Hinweis */}
                <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl my-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center shrink-0">
                      <AlertTriangle className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2">Wichtig: Sicherheit geht vor</h4>
                      <p className="text-gray-600 text-sm">
                        Bei der Implementierung von Energiesparmaßnahmen darf die Sicherheit nie kompromittiert werden. Unsere <Link href="/services/consulting"><a className="text-primary font-medium hover:underline">Beratungsexperten</a></Link> stellen sicher, dass alle Maßnahmen mit den geltenden Sicherheitsvorschriften konform sind.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-heading font-bold text-slate-900 mt-12 mb-6">
                  LED-Beleuchtung und Tageslichtnutzung
                </h2>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Die Beleuchtung macht in Laboren typischerweise 15 bis 20 Prozent des Gesamtenergieverbrauchs aus. Der Wechsel von konventionellen Leuchtstoffröhren zu LED-Technologie reduziert diesen Anteil um 50 bis 70 Prozent. Moderne LED-Systeme bieten zudem Vorteile bei der Lichtqualität: Sie sind dimmbar, flackerfrei und können in der Lichtfarbe angepasst werden.
                </p>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Ergänzt wird die Kunstlichtbeleuchtung durch eine optimierte Tageslichtnutzung. Großzügige Fensteröffnungen, lichtlenkende Lamellen und tageslichtabhängige Steuerungen sorgen dafür, dass natürliches Licht bestmöglich genutzt wird. Studien zeigen, dass gutes Tageslicht nicht nur Energie spart, sondern auch die Produktivität und das Wohlbefinden der Mitarbeiter steigert.
                </p>

                <h2 className="text-2xl font-heading font-bold text-slate-900 mt-12 mb-6">
                  Nachhaltige Materialwahl
                </h2>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Nachhaltigkeit beginnt bereits bei der Auswahl der Materialien. Bei Planexus achten wir auf kurze Transportwege, recyclingfähige Werkstoffe und die Vermeidung problematischer Substanzen. Die Stahlkonstruktion unserer Container ist zu über 90 Prozent recyclingfähig – und besteht selbst zu einem erheblichen Teil aus Recycling-Stahl.
                </p>

                {/* Materialien Checkliste */}
                <div className="bg-slate-50 p-6 rounded-xl my-8 not-prose">
                  <h4 className="font-bold text-slate-900 mb-4">Unsere Materialkriterien:</h4>
                  <ul className="space-y-3">
                    {[
                      "Vorrang für recyclingfähige und recycelte Materialien",
                      "Verzicht auf halogenierte Kunststoffe (PVC) wo möglich",
                      "Emissionsarme Innenraumaterialien nach AgBB-Schema",
                      "Holzprodukte aus nachhaltiger Forstwirtschaft (FSC/PEFC)",
                      "Regionale Beschaffung zur Minimierung von Transportwegen",
                      "Langlebige Materialien für maximale Nutzungsdauer"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <h3 className="text-xl font-heading font-bold text-slate-900 mt-10 mb-4">
                  Labortaugliche Oberflächen aus nachhaltigen Quellen
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Die Innenoberflächen von Laborcontainern müssen hohen Anforderungen genügen: chemikalienbeständig, leicht zu reinigen, abriebfest. Gleichzeitig sollten sie möglichst nachhaltig sein. Unsere <Link href="/services/equipment"><a className="text-primary font-medium hover:underline">Laborausstattung</a></Link> umfasst daher auch Arbeitsplatten aus recyceltem Material und Beschichtungen ohne bedenkliche Lösemittel.
                </p>

                <h2 className="text-2xl font-heading font-bold text-slate-900 mt-12 mb-6">
                  Erneuerbare Energien und Eigenversorgung
                </h2>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Die Dächer von Laborcontainern eignen sich hervorragend für die Installation von Photovoltaik-Anlagen. Je nach Größe und Ausrichtung können 30 bis 50 Prozent des Strombedarfs durch Solarenergie gedeckt werden. Bei besonders günstigen Bedingungen und moderatem Verbrauch ist sogar eine vollständige Eigenversorgung möglich.
                </p>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Für Standorte mit gutem Windangebot können kleine Windkraftanlagen eine sinnvolle Ergänzung sein. In Kombination mit Batteriespeichern ermöglichen diese Systeme eine weitgehend autarke Energieversorgung – ideal für abgelegene Forschungsstationen oder Feldlabore ohne Netzanschluss.
                </p>

                {/* Profi-Tipp */}
                <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-xl my-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Lightbulb className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2">Profi-Tipp: Fördermittel nutzen</h4>
                      <p className="text-gray-600 text-sm">
                        Für energieeffiziente Laborgebäude und erneuerbare Energien gibt es attraktive Förderprogramme von Bund und Ländern. Im Rahmen unserer <Link href="/services/consulting"><a className="text-primary font-medium hover:underline">Beratungsleistungen</a></Link> unterstützen wir Sie bei der Identifikation und Beantragung geeigneter Förderungen.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-heading font-bold text-slate-900 mt-12 mb-6">
                  Smart Building und Energiemanagement
                </h2>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Die Vernetzung aller technischen Systeme ermöglicht ein intelligentes Energiemanagement. Unsere <Link href="/services/smart-lab"><a className="text-primary font-medium hover:underline">Smart-Lab-Lösungen</a></Link> erfassen kontinuierlich den Energieverbrauch aller Systeme und Geräte. Algorithmen identifizieren Einsparpotenziale und optimieren den Betrieb automatisch.
                </p>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Die Ergebnisse sind beeindruckend: Durch intelligentes Lastmanagement, bedarfsgerechte Regelung und Vermeidung von Spitzlasten lassen sich weitere 10 bis 20 Prozent Energie einsparen – zusätzlich zu den Einsparungen durch effiziente Hardware. Gleichzeitig verbessert sich die Transparenz: Auf übersichtlichen Dashboards sehen Sie jederzeit, wo Energie verbraucht wird und wo Optimierungspotenzial besteht.
                </p>

                <h2 className="text-2xl font-heading font-bold text-slate-900 mt-12 mb-6">
                  Lebenszyklusbetrachtung und Kreislaufwirtschaft
                </h2>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Wahre Nachhaltigkeit zeigt sich nicht nur im Betrieb, sondern über den gesamten Lebenszyklus. Modulare Laborcontainer haben hier einen entscheidenden Vorteil: Sie sind für Demontage und Wiederverwendung konzipiert. Am Ende der Nutzung an einem Standort können sie an anderer Stelle weiterbetrieben, umgebaut oder – falls nicht mehr benötigt – in ihre Komponenten zerlegt und recycelt werden.
                </p>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Diese Flexibilität reduziert den Ressourcenverbrauch erheblich. Während konventionelle Laborgebäude nach 30 bis 50 Jahren oft abgerissen werden müssen, können Laborcontainer durch Modernisierung und Umnutzung deutlich länger im Einsatz bleiben. Die initiale Investition wird so über einen längeren Zeitraum genutzt – gut für die Wirtschaftlichkeit und die Umwelt.
                </p>

                {/* Fazit */}
                <div className="bg-slate-900 text-white p-8 rounded-2xl my-12 not-prose">
                  <h3 className="text-xl font-bold mb-4">Fazit: Nachhaltigkeit als Wettbewerbsvorteil</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Nachhaltiger Laborbau ist kein Widerspruch zu Funktionalität und Wirtschaftlichkeit – im Gegenteil. Energieeffiziente Laborcontainer senken die Betriebskosten, verbessern das Arbeitsklima und stärken das Image als verantwortungsvolles Unternehmen. Mit Planexus setzen Sie auf einen Partner, der Nachhaltigkeit nicht als Trend, sondern als Grundprinzip versteht.
                  </p>
                  <Link href="/contact">
                    <a className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                      Nachhaltigkeitsberatung anfordern <ArrowRight className="w-5 h-5" />
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
                      TB
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Thomas Boss</p>
                      <p className="text-gray-600 text-sm">Technischer Leiter</p>
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
                      <Link href="/services/construction">
                        <a className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors">
                          <ChevronRight className="w-4 h-4 text-primary" />
                          Modulbau & Fertigung
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
                    <li>
                      <Link href="/services/consulting">
                        <a className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors">
                          <ChevronRight className="w-4 h-4 text-primary" />
                          Beratung & Genehmigung
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* CTA */}
                <div className="bg-slate-900 text-white p-6 rounded-2xl">
                  <h4 className="font-bold mb-3">Nachhaltig planen?</h4>
                  <p className="text-gray-400 text-sm mb-4">
                    Wir beraten Sie zu energieeffizienten Laborlösungen.
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
            <Link href="/magazine/3">
              <a className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all flex gap-4 group">
                <div className="w-24 h-24 bg-slate-100 rounded-lg shrink-0 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=400" alt="" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-xs text-primary font-medium mb-2">Sicherheit</p>
                  <h3 className="font-bold text-slate-900 group-hover:text-primary transition-colors">BSL-2 und BSL-3 im Container: Geht das?</h3>
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
