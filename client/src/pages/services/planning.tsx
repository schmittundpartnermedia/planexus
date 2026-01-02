import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, PenTool, Layers, FileCheck, Ruler, LayoutGrid, Lightbulb, Phone, ChevronRight } from "lucide-react";

export default function PlanningService() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581093588401-fbb07aa5cd12?q=80&w=2070')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/80"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary font-medium text-sm mb-6">
              <PenTool className="w-4 h-4" />
              <span>Leistungen</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
              Technische Fachplanung <span className="text-primary">Labor</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mb-8">
              Von der ersten Skizze bis zum detaillierten Ausführungsplan: Unsere erfahrenen Ingenieure entwickeln maßgeschneiderte Laborkonzepte, die Ihre wissenschaftlichen Anforderungen perfekt erfüllen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <a className="bg-primary text-white font-bold px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center gap-2">
                  Planungsanfrage stellen <ArrowRight className="w-5 h-5" />
                </a>
              </Link>
              <a href="tel:+4974357519700" className="border border-white/20 text-white font-medium px-8 py-4 rounded-lg hover:bg-white/10 transition-colors inline-flex items-center gap-2">
                <Phone className="w-5 h-5" /> Direkt anrufen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-gray-100 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/"><a className="hover:text-primary">Start</a></Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/services"><a className="hover:text-primary">Leistungen</a></Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-primary font-medium">Technische Fachplanung</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-heading font-bold mb-6 text-slate-900">
                  Professionelle Laborplanung für maximale Effizienz
                </h2>
                <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
                  <p>
                    Die technische Fachplanung eines Labors ist weit mehr als nur die Anordnung von Arbeitstischen und Geräten. Sie ist das Fundament für effiziente Arbeitsabläufe, sichere Arbeitsbedingungen und die langfristige Zufriedenheit Ihrer Mitarbeiter. Bei Planexus verstehen wir die komplexen Anforderungen moderner Laborumgebungen und entwickeln Konzepte, die sowohl funktional als auch zukunftssicher sind.
                  </p>
                  <p>
                    Unser Planungsprozess beginnt mit einer umfassenden Bedarfsanalyse. Wir nehmen uns die Zeit, Ihre spezifischen Anforderungen zu verstehen – von den wissenschaftlichen Methoden, die Sie anwenden, über die Geräte, die Sie einsetzen, bis hin zu den Sicherheitsvorschriften, die für Ihre Arbeit gelten. Auf Basis dieser Analyse entwickeln wir ein maßgeschneidertes Konzept, das perfekt auf Ihre Bedürfnisse abgestimmt ist.
                  </p>
                  <p>
                    Dabei berücksichtigen wir nicht nur die aktuellen Anforderungen, sondern denken auch an die Zukunft. Labore müssen flexibel sein, um sich an neue Forschungsschwerpunkte, veränderte Arbeitsweisen oder neue gesetzliche Vorschriften anpassen zu können. Unsere modularen Planungskonzepte ermöglichen genau diese Flexibilität – ohne kostspielige Umbaumaßnahmen.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-bold mb-6 text-slate-900">
                  Unsere Planungsleistungen im Detail
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { icon: <LayoutGrid className="w-6 h-6" />, title: "Raumplanung & Layout", desc: "Optimale Anordnung von Arbeitsbereichen, Geräten und Verkehrswegen für maximale Effizienz." },
                    { icon: <Layers className="w-6 h-6" />, title: "TGA-Fachplanung", desc: "Technische Gebäudeausrüstung inkl. Lüftung, Elektrik, Medienversorgung und Abwasserführung." },
                    { icon: <Ruler className="w-6 h-6" />, title: "3D-Visualisierung", desc: "Fotorealistische Renderings und virtuelle Begehungen für ein klares Bild des fertigen Labors." },
                    { icon: <FileCheck className="w-6 h-6" />, title: "Ausführungsplanung", desc: "Detaillierte technische Zeichnungen und Spezifikationen für die Umsetzung." },
                  ].map((item, i) => (
                    <div key={i} className="bg-slate-50 p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                        {item.icon}
                      </div>
                      <h4 className="font-bold text-lg mb-2 text-slate-900">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-bold mb-6 text-slate-900">
                  Der Planungsprozess bei Planexus
                </h3>
                <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
                  <p>
                    Unser strukturierter Planungsprozess stellt sicher, dass jedes Detail berücksichtigt wird und Sie am Ende ein Labor erhalten, das Ihre Erwartungen übertrifft.
                  </p>
                  
                  <h4 className="text-xl font-bold text-slate-900 mt-8">Phase 1: Bedarfsanalyse und Konzeptentwicklung</h4>
                  <p>
                    In der ersten Phase führen wir intensive Gespräche mit allen Stakeholdern – von den Laborleitern über die Facility Manager bis hin zu den Wissenschaftlern, die täglich im Labor arbeiten werden. Wir analysieren die geplanten Arbeitsabläufe, die benötigten Geräte und die spezifischen Anforderungen an Sicherheit und Hygiene. Auf dieser Basis entwickeln wir erste Konzeptentwürfe, die wir gemeinsam mit Ihnen diskutieren und verfeinern.
                  </p>
                  
                  <h4 className="text-xl font-bold text-slate-900 mt-8">Phase 2: Vorplanung und Entwurf</h4>
                  <p>
                    Sobald das Konzept steht, beginnt die eigentliche Planungsarbeit. Unsere Ingenieure erstellen detaillierte Grundrisse, Schnitte und Ansichten. Wir planen die technische Infrastruktur – von der Stromversorgung über die Medienversorgung (Gase, Wasser, Druckluft) bis hin zur Lüftungs- und Klimatechnik. Besonderes Augenmerk legen wir auf die Einhaltung aller relevanten Normen und Vorschriften, insbesondere der DIN EN 12128 für Laboratorien, der ASR A3.6 für Lüftung sowie der Arbeitsstättenverordnung.
                  </p>
                  
                  <h4 className="text-xl font-bold text-slate-900 mt-8">Phase 3: Ausführungsplanung</h4>
                  <p>
                    In der Ausführungsplanungsphase werden alle Details festgelegt. Wir erstellen Leistungsverzeichnisse, definieren Materialien und Qualitäten und koordinieren die verschiedenen Gewerke. Unsere 3D-Modelle ermöglichen eine präzise Kollisionsprüfung, sodass Probleme bereits in der Planungsphase erkannt und gelöst werden können.
                  </p>
                  
                  <h4 className="text-xl font-bold text-slate-900 mt-8">Phase 4: Begleitung der Umsetzung</h4>
                  <p>
                    Auch während der Bauphase stehen wir Ihnen zur Seite. Wir überwachen die Ausführung, koordinieren die beteiligten Firmen und stellen sicher, dass die Umsetzung exakt nach Plan erfolgt. Bei Änderungswünschen oder unvorhergesehenen Herausforderungen reagieren wir flexibel und finden pragmatische Lösungen.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-bold mb-6 text-slate-900">
                  Besondere Anforderungen an Laborcontainer
                </h3>
                <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
                  <p>
                    Die Planung von Laborcontainern stellt besondere Anforderungen an unsere Ingenieure. Im Gegensatz zu konventionellen Laborgebäuden müssen alle technischen Systeme auf engstem Raum untergebracht werden, ohne die Funktionalität einzuschränken. Gleichzeitig müssen die Container transportabel bleiben und die strengen Anforderungen des Straßentransports erfüllen.
                  </p>
                  <p>
                    Unsere langjährige Erfahrung im Containerlabor-Bau ermöglicht es uns, auch komplexe Anforderungen in kompakten Einheiten umzusetzen. Wir haben Lösungen entwickelt für:
                  </p>
                  <ul className="list-none space-y-3">
                    {[
                      "BSL-2 und BSL-3 Labore mit kontrollierten Unterdruckzonen",
                      "Reinraumlabore nach ISO-Klassifizierung",
                      "Analytiklabore mit empfindlicher Messtechnik",
                      "Chemielabore mit Abzugssystemen und Gefahrstofflagerung",
                      "Mikrobiologische Labore mit speziellen Hygieneanforderungen",
                      "Mobile Forschungseinheiten für Feldstudien"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-bold mb-6 text-slate-900">
                  Warum Planexus für Ihre Laborplanung?
                </h3>
                <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
                  <p>
                    Mit über 10 Jahren Erfahrung in der Planung von Containerlaboren und mehr als 50 erfolgreich realisierten Projekten sind wir Ihr kompetenter Partner für alle Fragen rund um die Laborplanung. Unser interdisziplinäres Team aus Ingenieuren, Technikern und Laborexperten bringt das Know-how mit, um auch anspruchsvollste Projekte erfolgreich umzusetzen.
                  </p>
                  <p>
                    Wir verstehen uns nicht nur als Planer, sondern als Partner, der Sie während des gesamten Projekts begleitet. Von der ersten Idee bis zur Inbetriebnahme – und darüber hinaus. Denn ein gut geplantes Labor ist die Basis für erfolgreiche Forschung und Entwicklung.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* CTA Card */}
                <div className="bg-primary text-white p-8 rounded-2xl">
                  <Lightbulb className="w-10 h-10 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Kostenlose Erstberatung</h3>
                  <p className="text-white/80 mb-6 text-sm">
                    Lassen Sie uns über Ihr Projekt sprechen. Wir beraten Sie unverbindlich zu den Möglichkeiten.
                  </p>
                  <Link href="/contact">
                    <a className="block w-full bg-white text-primary font-bold py-3 rounded-lg text-center hover:bg-slate-100 transition-colors">
                      Beratungstermin vereinbaren
                    </a>
                  </Link>
                </div>

                {/* Quick Facts */}
                <div className="bg-slate-50 p-8 rounded-2xl border border-gray-100">
                  <h3 className="text-lg font-bold mb-6 text-slate-900">Auf einen Blick</h3>
                  <ul className="space-y-4">
                    {[
                      "Individuelle Bedarfsanalyse",
                      "3D-Visualisierung inklusive",
                      "Normgerechte Planung",
                      "TGA-Koordination",
                      "Baubegleitung optional",
                      "Festpreisangebot möglich"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-700">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Other Services */}
                <div className="bg-white p-8 rounded-2xl border border-gray-100">
                  <h3 className="text-lg font-bold mb-6 text-slate-900">Weitere Leistungen</h3>
                  <ul className="space-y-3">
                    <li><Link href="/services/construction"><a className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Modulbau & Fertigung</a></Link></li>
                    <li><Link href="/services/logistics"><a className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Logistik & Montage</a></Link></li>
                    <li><Link href="/services/equipment"><a className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Laborausstattung</a></Link></li>
                    <li><Link href="/services/consulting"><a className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Beratung & Genehmigung</a></Link></li>
                    <li><Link href="/services/smart-lab"><a className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Smart Lab Integration</a></Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Bereit für Ihr Laborprojekt?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Kontaktieren Sie uns für eine unverbindliche Erstberatung. Gemeinsam finden wir die optimale Lösung für Ihre Anforderungen.
          </p>
          <Link href="/contact">
            <a className="bg-primary text-white font-bold px-10 py-4 rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center gap-2">
              Jetzt Kontakt aufnehmen <ArrowRight className="w-5 h-5" />
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
