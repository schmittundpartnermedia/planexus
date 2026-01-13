import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, ClipboardCheck, FileText, Scale, Building, Users, BookOpen, Phone, ChevronRight, Lightbulb } from "lucide-react";
import { SEO, ServiceSchema, BreadcrumbSchema } from "@/components/SEO";

export default function ConsultingService() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <SEO 
        title="Beratung & Genehmigung"
        description="Expertenberatung für Laborcontainer-Projekte. Unterstützung bei Genehmigungsverfahren, Baurecht, Arbeitsschutz und Brandschutzkonzepten."
        canonical="/leistungen/beratung"
      />
      <ServiceSchema 
        name="Beratung & Genehmigung"
        description="Expertenberatung bei Genehmigungsverfahren, Baurecht und Arbeitsschutz für Laborcontainer"
        url="/leistungen/beratung"
      />
      <BreadcrumbSchema items={[
        { name: "Start", url: "/" },
        { name: "Leistungen", url: "/leistungen" },
        { name: "Beratung & Genehmigung", url: "/leistungen/beratung" }
      ]} />
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/80"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary font-medium text-sm mb-6">
              <ClipboardCheck className="w-4 h-4" />
              <span>Leistungen</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
              Beratung & <span className="text-primary">Genehmigung</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mb-8">
              Wir navigieren Sie sicher durch den Dschungel der Vorschriften und Genehmigungsverfahren. Mit unserer Expertise wird Ihr Laborprojekt zum Erfolg.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/kontakt" className="bg-primary text-white font-bold px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center gap-2">
                  Beratung anfragen <ArrowRight className="w-5 h-5" />
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
            <Link href="/" className="hover:text-primary">Start</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/leistungen" className="hover:text-primary">Leistungen</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-primary font-medium">Beratung & Genehmigung</span>
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
                  Kompetente Unterstützung bei allen Formalitäten
                </h2>
                <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
                  <p>
                    Die Errichtung eines Laborcontainers ist mit zahlreichen rechtlichen und behördlichen Anforderungen verbunden. Von der Baugenehmigung über Arbeitsschutzvorschriften bis hin zu speziellen Auflagen für Laboratorien – der Weg durch die Bürokratie kann lang und steinig sein. Doch Sie müssen diesen Weg nicht alleine gehen.
                  </p>
                  <p>
                    Bei Planexus verstehen wir nicht nur, wie man Labore baut, sondern auch, welche rechtlichen Rahmenbedingungen dabei zu beachten sind. Unsere Experten kennen die relevanten Vorschriften und haben langjährige Erfahrung im Umgang mit Behörden und Genehmigungsverfahren.
                  </p>
                  <p>
                    Wir begleiten Sie durch den gesamten Prozess – von der ersten Beratung über die Antragstellung bis zur erfolgreichen Genehmigung. So können Sie sich auf das konzentrieren, was Sie am besten können: Ihre Forschung und Entwicklung.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-bold mb-6 text-slate-900">
                  Unsere Beratungsleistungen
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { icon: <Building className="w-6 h-6" />, title: "Baurecht", desc: "Beratung zu baurechtlichen Anforderungen und Unterstützung bei der Baugenehmigung." },
                    { icon: <Scale className="w-6 h-6" />, title: "Arbeitsschutz", desc: "Einhaltung der Arbeitsstättenverordnung und Gefährdungsbeurteilung." },
                    { icon: <FileText className="w-6 h-6" />, title: "Genehmigungsverfahren", desc: "Vorbereitung und Begleitung aller erforderlichen Genehmigungen." },
                    { icon: <BookOpen className="w-6 h-6" />, title: "Normenkompetenz", desc: "Sicherstellung der Konformität mit DIN, EN und ISO-Normen." },
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
                  Baurechtliche Beratung
                </h3>
                <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
                  <p>
                    Die baurechtliche Einordnung von Laborcontainern ist nicht immer eindeutig und hängt von verschiedenen Faktoren ab: Ist der Container dauerhaft aufgestellt oder temporär? Handelt es sich um ein Gebäude im baurechtlichen Sinne? Welche Nutzungsklasse ist anzuwenden?
                  </p>
                  
                  <h4 className="text-xl font-bold text-slate-900 mt-8">Genehmigungsfreie Aufstellung</h4>
                  <p>
                    In vielen Fällen können Laborcontainer genehmigungsfrei aufgestellt werden – insbesondere bei temporärer Nutzung oder wenn sie als bewegliche Sache eingestuft werden. Wir prüfen die Voraussetzungen und beraten Sie zur optimalen Vorgehensweise.
                  </p>
                  
                  <h4 className="text-xl font-bold text-slate-900 mt-8">Baugenehmigung</h4>
                  <p>
                    Wenn eine Baugenehmigung erforderlich ist, unterstützen wir Sie bei der Erstellung aller erforderlichen Unterlagen: Bauantragsformulare, Lageplan, Grundrisse, Ansichten, Baubeschreibung, statische Berechnungen und Brandschutzkonzept. Wir begleiten das Verfahren und stehen als Ansprechpartner für die Behörden zur Verfügung.
                  </p>
                  
                  <h4 className="text-xl font-bold text-slate-900 mt-8">Bebauungsplankonformität</h4>
                  <p>
                    Die Aufstellung eines Laborcontainers muss mit dem Bebauungsplan vereinbar sein. Wir prüfen die planungsrechtlichen Voraussetzungen und zeigen Wege auf, wie Ihr Projekt realisiert werden kann – auch wenn der Bebauungsplan auf den ersten Blick dagegen zu sprechen scheint.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-bold mb-6 text-slate-900">
                  Arbeitsschutz und Arbeitssicherheit
                </h3>
                <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
                  <p>
                    Labore sind Arbeitsstätten mit besonderen Gefahren. Die Einhaltung der arbeitsschutzrechtlichen Vorschriften ist daher nicht nur gesetzliche Pflicht, sondern auch Ausdruck der Fürsorgepflicht gegenüber Ihren Mitarbeitern.
                  </p>
                  <p>
                    Wir beraten Sie zu allen Aspekten des Arbeitsschutzes im Labor:
                  </p>
                  <ul className="list-none space-y-3">
                    {[
                      "Arbeitsstättenverordnung (ArbStättV) und Technische Regeln (ASR)",
                      "Gefahrstoffverordnung (GefStoffV) und TRGS",
                      "Biostoffverordnung (BioStoffV) für Labore mit biologischen Arbeitsstoffen",
                      "Strahlenschutzverordnung (StrlSchV) für Isotopenlabore",
                      "Betriebssicherheitsverordnung (BetrSichV) für Druckgeräte und Aufzüge",
                      "Gefährdungsbeurteilung nach Arbeitsschutzgesetz"
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
                  Umweltrechtliche Anforderungen
                </h3>
                <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
                  <p>
                    Labore können erhebliche Umweltauswirkungen haben – von der Emission gefährlicher Stoffe über das Abwasser bis hin zur Abfallentsorgung. Die Einhaltung der umweltrechtlichen Vorschriften ist daher ein wichtiger Aspekt bei der Planung und dem Betrieb eines Laborcontainers.
                  </p>
                  <p>
                    <strong>Immissionsschutz:</strong> Wir beraten Sie zu den Anforderungen des Bundes-Immissionsschutzgesetzes (BImSchG) und prüfen, ob für Ihr Labor eine immissionsschutzrechtliche Genehmigung erforderlich ist. Unsere Lüftungs- und Abluftsysteme sind so ausgelegt, dass die Grenzwerte sicher eingehalten werden.
                  </p>
                  <p>
                    <strong>Wasserrecht:</strong> Das Einleiten von Laborabwässern in die Kanalisation unterliegt strengen Vorschriften. Wir beraten Sie zur Abwasserbehandlung und unterstützen bei der Einholung der wasserrechtlichen Erlaubnis.
                  </p>
                  <p>
                    <strong>Abfallrecht:</strong> Die ordnungsgemäße Entsorgung von Laborabfällen ist gesetzlich geregelt. Wir helfen Ihnen bei der Erstellung eines Abfallkonzepts und vermitteln Kontakte zu zertifizierten Entsorgungsunternehmen.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-bold mb-6 text-slate-900">
                  Spezielle Genehmigungen für besondere Labore
                </h3>
                <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
                  <p>
                    Je nach Art des Labors können besondere Genehmigungen erforderlich sein:
                  </p>
                  <p>
                    <strong>S1- bis S4-Labore:</strong> Für Arbeiten mit gentechnisch veränderten Organismen benötigen Sie eine Erlaubnis nach Gentechnikgesetz. Wir beraten Sie zu den baulichen und organisatorischen Anforderungen der verschiedenen Sicherheitsstufen.
                  </p>
                  <p>
                    <strong>BSL-2 und BSL-3 Labore:</strong> Labore für Arbeiten mit gefährlichen biologischen Arbeitsstoffen erfordern eine Anzeige oder Erlaubnis nach Biostoffverordnung. Wir unterstützen Sie bei der Erstellung der erforderlichen Unterlagen.
                  </p>
                  <p>
                    <strong>Isotopenlabore:</strong> Für den Umgang mit radioaktiven Stoffen benötigen Sie eine Genehmigung nach Strahlenschutzverordnung. Wir beraten zur baulichen Ausführung und den erforderlichen Schutzmaßnahmen.
                  </p>
                  <p>
                    <strong>Arzneimittelherstellung:</strong> Labore für die Herstellung von Arzneimitteln unterliegen der GMP (Good Manufacturing Practice). Wir beraten zu den baulichen Anforderungen und der Qualifizierung der Räume.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-bold mb-6 text-slate-900">
                  Brandschutz
                </h3>
                <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
                  <p>
                    Der Brandschutz ist ein zentrales Thema bei der Planung und Genehmigung von Laborcontainern. Wir erstellen Brandschutzkonzepte, die den Anforderungen der Bauordnung und der Industriebaurichtlinie entsprechen.
                  </p>
                  <p>
                    Unsere Brandschutzkonzepte umfassen baulichen, anlagentechnischen und organisatorischen Brandschutz. Von der feuerwiderstandsfähigen Konstruktion über Brandmeldeanlagen bis hin zu Flucht- und Rettungswegeplänen – wir denken an alles und stimmen das Konzept mit den zuständigen Brandschutzdienststellen ab.
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
                    Lassen Sie uns über die rechtlichen Anforderungen für Ihr Laborprojekt sprechen. Unverbindlich und kostenlos.
                  </p>
                  <Link href="/kontakt" className="block w-full bg-white text-primary font-bold py-3 rounded-lg text-center hover:bg-slate-100 transition-colors">
                      Beratung anfordern
                  </Link>
                </div>

                {/* Quick Facts */}
                <div className="bg-slate-50 p-8 rounded-2xl border border-gray-100">
                  <h3 className="text-lg font-bold mb-6 text-slate-900">Unsere Expertise</h3>
                  <ul className="space-y-4">
                    {[
                      "Baurecht & Genehmigungen",
                      "Arbeitsschutz & Arbeitssicherheit",
                      "Umweltrecht",
                      "Gentechnikrecht",
                      "Strahlenschutz",
                      "Brandschutz"
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
                    <li><Link href="/leistungen/planung" className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Technische Fachplanung</Link></li>
                    <li><Link href="/leistungen/modulbau" className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Modulbau & Fertigung</Link></li>
                    <li><Link href="/leistungen/logistik" className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Logistik & Montage</Link></li>
                    <li><Link href="/leistungen/ausstattung" className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Laborausstattung</Link></li>
                    <li><Link href="/leistungen/smart-lab" className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Smart Lab Integration</Link></li>
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
            Rechtssicherheit für Ihr Laborprojekt
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Mit unserer Unterstützung meistern Sie alle behördlichen Hürden. Kontaktieren Sie uns für eine unverbindliche Erstberatung.
          </p>
          <Link href="/kontakt" className="bg-primary text-white font-bold px-10 py-4 rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center gap-2">
              Jetzt Kontakt aufnehmen <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
