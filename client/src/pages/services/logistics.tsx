import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Truck, MapPin, Package, Clock, Globe, Wrench, Phone, ChevronRight, Lightbulb } from "lucide-react";
import { SEO, ServiceSchema, BreadcrumbSchema } from "@/components/SEO";

export default function LogisticsService() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <SEO 
        title="Logistik & Montage"
        description="Weltweiter Transport und fachgerechte Montage Ihres Laborcontainers. Schlüsselfertige Übergabe, Plug & Play Lösungen und Inbetriebnahme vor Ort."
        canonical="/leistungen/logistik"
      />
      <ServiceSchema 
        name="Logistik & Montage"
        description="Weltweiter Transport und fachgerechte Montage von Laborcontainern mit schlüsselfertiger Übergabe"
        url="/leistungen/logistik"
      />
      <BreadcrumbSchema items={[
        { name: "Start", url: "/" },
        { name: "Leistungen", url: "/leistungen" },
        { name: "Logistik & Montage", url: "/leistungen/logistik" }
      ]} />
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/80"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-slate-900 font-medium text-sm mb-6">
              <Truck className="w-4 h-4" />
              <span>Leistungen</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
              Logistik & <span className="text-primary">Montage</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mb-8">
              Von der Werkhalle bis zum Einsatzort: Wir organisieren den sicheren Transport Ihres Laborcontainers und übernehmen die fachgerechte Aufstellung und Inbetriebnahme.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/kontakt" className="bg-primary text-slate-900 font-bold px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center gap-2">
                  Logistik planen <ArrowRight className="w-5 h-5" />
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
            <span className="text-primary font-medium">Logistik & Montage</span>
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
                  Reibungslose Lieferung und professionelle Aufstellung
                </h2>
                <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
                  <p>
                    Ein Laborcontainer ist erst dann einsatzbereit, wenn er sicher an seinem Bestimmungsort steht und alle technischen Systeme funktionieren. Die Logistik und Montage sind daher entscheidende Phasen, die ebenso sorgfältig geplant werden müssen wie der Container selbst. Bei Planexus übernehmen wir diese Aufgaben mit der gleichen Präzision und Professionalität, die auch unsere Fertigung auszeichnet.
                  </p>
                  <p>
                    Von der Transportplanung über die Einholung notwendiger Genehmigungen bis hin zur Aufstellung vor Ort – wir kümmern uns um alle Details, damit Sie sich auf das Wesentliche konzentrieren können: Ihre Forschung und Arbeit im neuen Labor.
                  </p>
                  <p>
                    Unsere erfahrenen Logistikexperten und Montageteams haben bereits Hunderte von Containerlieferungen durchgeführt – in Deutschland, Europa und weltweit. Sie wissen genau, worauf es ankommt, und meistern auch schwierige Aufstellsituationen souverän.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-bold mb-6 text-slate-900">
                  Unsere Logistikleistungen im Überblick
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { icon: <MapPin className="w-6 h-6" />, title: "Standortanalyse", desc: "Prüfung der Zugänglichkeit, Aufstellfläche und Anschlussmöglichkeiten vor Ort." },
                    { icon: <Package className="w-6 h-6" />, title: "Transportplanung", desc: "Auswahl des optimalen Transportwegs und Koordination aller beteiligten Parteien." },
                    { icon: <Globe className="w-6 h-6" />, title: "Weltweite Lieferung", desc: "Transport per LKW, Bahn oder Schiff – auch an entlegene Standorte." },
                    { icon: <Wrench className="w-6 h-6" />, title: "Komplettmontage", desc: "Aufstellung, Ausrichtung und Anschluss aller technischen Systeme." },
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
                  Der Transportprozess im Detail
                </h3>
                <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
                  <h4 className="text-xl font-bold text-slate-900 mt-8">Vorbereitung und Planung</h4>
                  <p>
                    Jeder Transport beginnt mit einer sorgfältigen Planung. Wir analysieren den Zielstandort, prüfen die Zufahrtswege und identifizieren mögliche Hindernisse. Bei Schwertransporten oder Überbreitenfahrten holen wir die erforderlichen Genehmigungen ein und koordinieren Polizeibegleitungen, wenn notwendig.
                  </p>
                  <p>
                    Gleichzeitig bereiten wir den Aufstellort vor. Wir erstellen Fundamentpläne, klären die Medienanschlüsse (Strom, Wasser, Abwasser, ggf. Gase) und stimmen uns mit den örtlichen Versorgungsunternehmen ab. So ist bei der Anlieferung alles bereit für eine schnelle Inbetriebnahme.
                  </p>
                  
                  <h4 className="text-xl font-bold text-slate-900 mt-8">Transport und Verladung</h4>
                  <p>
                    Die Verladung erfolgt mit Spezialkränen, die den Container sicher auf den Transportfahrzeug heben. Unsere Container sind für den Transport optimiert und verfügen über genormte Hebeösen und Stapleraufnahmen. Während des Transports ist der Container gegen Verrutschen und Beschädigung gesichert.
                  </p>
                  <p>
                    Für den Straßentransport nutzen wir Tieflader oder Containerchassis, je nach Größe und Gewicht des Containers. Bei Standardcontainern (bis 2,55 m Breite) ist ein regulärer LKW-Transport möglich; bei breiteren Einheiten organisieren wir Schwertransporte mit den entsprechenden Genehmigungen.
                  </p>
                  
                  <h4 className="text-xl font-bold text-slate-900 mt-8">Aufstellung vor Ort</h4>
                  <p>
                    Am Zielort angekommen, wird der Container mit einem Autokran oder Mobilkran abgeladen und auf dem vorbereiteten Fundament positioniert. Unsere Montageteams richten den Container exakt aus und sichern ihn gegen Bewegung. Bei mehrteiligen Anlagen werden die einzelnen Module miteinander verbunden und abgedichtet.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-bold mb-6 text-slate-900">
                  Anschluss und Inbetriebnahme
                </h3>
                <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
                  <p>
                    Nach der Aufstellung erfolgt der Anschluss an die örtliche Infrastruktur. Unsere Elektriker und Installateure verbinden den Container mit der Stromversorgung, schließen Wasser- und Abwasserleitungen an und stellen die Verbindung zu etwaigen Gasversorgungen her.
                  </p>
                  <p>
                    Anschließend nehmen wir alle technischen Systeme in Betrieb. Wir prüfen die Lüftungsanlage, testen die elektrischen Systeme und kontrollieren die Medienversorgung. Alle Prüfungen werden dokumentiert und dem Kunden als Teil der Übergabedokumentation ausgehändigt.
                  </p>
                  
                  <h4 className="text-xl font-bold text-slate-900 mt-8">Einweisung der Nutzer</h4>
                  <p>
                    Bevor wir das Labor übergeben, weisen wir Ihre Mitarbeiter in die Bedienung aller Systeme ein. Wir erklären die Lüftungssteuerung, zeigen die Sicherheitseinrichtungen und beantworten alle Fragen. So können Sie Ihr neues Labor sofort produktiv nutzen.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-bold mb-6 text-slate-900">
                  Besondere Aufstellsituationen
                </h3>
                <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
                  <p>
                    Nicht immer ist die Aufstellung eines Laborcontainers einfach. Enge Zufahrten, begrenzter Platz oder schwierige Bodenverhältnisse stellen besondere Anforderungen. Unsere Experten haben jedoch schon die unterschiedlichsten Situationen gemeistert:
                  </p>
                  <ul className="list-none space-y-3">
                    {[
                      "Aufstellung in Innenhöfen mit begrenztem Kranzugang",
                      "Positionierung auf Dächern von Bestandsgebäuden",
                      "Installation in Reinräumen oder unter beengten Platzverhältnissen",
                      "Aufstellung in abgelegenen Gebieten ohne befestigte Zufahrt",
                      "Montage unter laufendem Betrieb in bestehenden Anlagen",
                      "Temporäre Aufstellung mit späterem Standortwechsel"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p>
                    Sprechen Sie uns an, wenn Sie eine besondere Aufstellsituation haben. Gemeinsam finden wir eine Lösung, die funktioniert.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-bold mb-6 text-slate-900">
                  Fundamente und Unterkonstruktionen
                </h3>
                <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
                  <p>
                    Ein solides Fundament ist die Basis für einen stabilen und langlebigen Laborcontainer. Je nach Bodenbeschaffenheit und Nutzungsanforderungen empfehlen wir verschiedene Fundamentlösungen:
                  </p>
                  <p>
                    <strong>Punktfundamente:</strong> Die wirtschaftlichste Lösung bei tragfähigem Untergrund. Betonpunkte an den Containerecken und unter tragenden Wänden reichen für eine sichere Aufstellung aus.
                  </p>
                  <p>
                    <strong>Streifenfundamente:</strong> Bei höheren Lasten oder weniger tragfähigem Boden bieten durchgehende Betonstreifen zusätzliche Stabilität.
                  </p>
                  <p>
                    <strong>Bodenplatte:</strong> Die massivste Lösung, ideal für dauerhafte Installationen oder wenn eine durchgehende Unterkellerung für Technik benötigt wird.
                  </p>
                  <p>
                    <strong>Schraubfundamente:</strong> Eine schnelle und rückbaubare Alternative, besonders geeignet für temporäre Aufstellungen oder wenn keine Betonarbeiten gewünscht sind.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-bold mb-6 text-slate-900">
                  Internationale Logistik
                </h3>
                <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
                  <p>
                    Unsere Laborcontainer sind weltweit im Einsatz – von der Arktis bis in tropische Regionen, von Forschungsstationen in der Wüste bis zu mobilen Laboren auf Schiffen. Für internationale Lieferungen organisieren wir den kompletten Transport inklusive aller erforderlichen Dokumente.
                  </p>
                  <p>
                    Wir kümmern uns um Zollformalitäten, erstellen die notwendigen Transportdokumente und koordinieren mit lokalen Partnern am Zielort. Unsere Container sind für den internationalen Transport optimiert und erfüllen alle Anforderungen der ISO-Normen für Frachtcontainer.
                  </p>
                  <p>
                    Auf Wunsch begleiten unsere Techniker den Container zum Zielort und übernehmen die Aufstellung und Inbetriebnahme vor Ort. So stellen wir sicher, dass Ihr Labor auch an entlegenen Standorten zuverlässig funktioniert.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* CTA Card */}
                <div className="bg-primary text-slate-900 p-8 rounded-2xl">
                  <Lightbulb className="w-10 h-10 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Logistik aus einer Hand</h3>
                  <p className="text-slate-700 mb-6 text-sm">
                    Wir übernehmen den kompletten Transport und die Montage. Alles aus einer Hand für einen reibungslosen Ablauf.
                  </p>
                  <Link href="/kontakt" className="block w-full bg-white text-primary font-bold py-3 rounded-lg text-center hover:bg-slate-100 transition-colors">
                      Logistik anfragen
                  </Link>
                </div>

                {/* Quick Facts */}
                <div className="bg-slate-50 p-8 rounded-2xl border border-gray-100">
                  <h3 className="text-lg font-bold mb-6 text-slate-900">Unsere Stärken</h3>
                  <ul className="space-y-4">
                    {[
                      "Weltweite Lieferung",
                      "Schlüsselfertige Übergabe",
                      "Erfahrene Montageteams",
                      "Alle Genehmigungen inklusive",
                      "Termingerechte Lieferung",
                      "Vollständige Dokumentation"
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
                    <li><Link href="/leistungen/ausstattung" className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Laborausstattung</Link></li>
                    <li><Link href="/leistungen/beratung" className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Beratung & Genehmigung</Link></li>
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
            Ihr Labor, pünktlich geliefert
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Verlassen Sie sich auf unsere Logistikexpertise. Wir liefern Ihr Labor sicher und termingerecht an jeden Ort der Welt.
          </p>
          <Link href="/kontakt" className="bg-primary text-slate-900 font-bold px-10 py-4 rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center gap-2">
              Jetzt Kontakt aufnehmen <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
