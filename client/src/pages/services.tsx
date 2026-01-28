import { motion } from "framer-motion";
import { Hammer, Truck, PenTool, ClipboardCheck, ArrowRight, Zap, Microscope, CheckCircle2, ChevronRight, Phone, Building, Award, Clock } from "lucide-react";
import { Link } from "wouter";
import { SEO } from "@/components/SEO";

export default function Services() {
  const services = [
    {
      id: "planning",
      href: "/leistungen/planung",
      icon: <PenTool className="w-8 h-8" />,
      title: "Technische Fachplanung Labor",
      desc: "Detaillierte Planung Ihres Laborcontainers unter Berücksichtigung aller Sicherheits- und Effizienzanforderungen. Wir erstellen CAD-Zeichnungen, Layouts und TGA-Konzepte für optimale Arbeitsabläufe.",
      features: ["3D-Visualisierung", "Workflow-Optimierung", "Sicherheitskonzepte", "TGA-Fachplanung"]
    },
    {
      id: "construction",
      href: "/leistungen/modulbau",
      icon: <Hammer className="w-8 h-8" />,
      title: "Modulbau & Fertigung",
      desc: "Hochwertige Umsetzung in modularer Bauweise. Unsere Laborcontainer sind robust, langlebig und erfüllen alle relevanten Normen. Fertigung 'Made in Germany' mit höchsten Qualitätsstandards.",
      features: ["Stahlrahmenkonstruktion", "Hochwertige Isolierung", "Labortaugliche Oberflächen", "Qualitätskontrolle"]
    },
    {
      id: "logistics",
      href: "/leistungen/logistik",
      icon: <Truck className="w-8 h-8" />,
      title: "Logistik & Montage",
      desc: "Sicherer Transport und fachgerechte Montage vor Ort. Wir kümmern uns um die Aufstellung, den Anschluss aller Medien und die schlüsselfertige Übergabe Ihres mobilen Labors.",
      features: ["Weltweiter Transport", "Schnelle Montage", "Plug & Play Lösungen", "Inbetriebnahme"]
    },
    {
      id: "equipment",
      href: "/leistungen/ausstattung",
      icon: <Microscope className="w-8 h-8" />,
      title: "Laborausstattung",
      desc: "Integration modernster Labortechnik und Möbel. Wir beraten Sie bei der Auswahl und integrieren Abzüge, Sicherheitseinrichtungen und Ihre Geräte nahtlos in den Container.",
      features: ["Labormöbel nach Maß", "Abzugssysteme", "Sicherheitsausstattung", "Geräteintegration"]
    },
    {
      id: "consulting",
      href: "/leistungen/beratung",
      icon: <ClipboardCheck className="w-8 h-8" />,
      title: "Beratung & Genehmigung",
      desc: "Unterstützung bei Genehmigungsverfahren für Laborcontainer. Wir begleiten Sie durch alle behördlichen Anforderungen und sorgen für rechtssichere Lösungen.",
      features: ["Baurechtliche Beratung", "Arbeitsschutz", "Umweltrecht", "Brandschutzkonzepte"]
    },
    {
      id: "smart-lab",
      href: "/leistungen/smart-lab",
      icon: <Zap className="w-8 h-8" />,
      title: "Smart Lab Integration",
      desc: "Zukunftsfähige Vernetzung Ihres Labors. Integration von IoT-Sensoren, Monitoring-Systemen und digitalen Workflows für maximale Effizienz und Compliance.",
      features: ["Raumklima-Monitoring", "Zugangskontrolle", "Digitale Dokumentation", "Cloud-Anbindung"]
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-white">
      <SEO 
        title="Leistungen - Laborcontainer Komplettservice"
        description="Alle Leistungen von Planexus: Technische Fachplanung, Modulbau, Logistik, Laborausstattung, Beratung und Smart Lab Integration für Ihren Laborcontainer."
        canonical="/leistungen"
      />
      {/* Hero Bereich */}
      <section className="relative py-24 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581093588401-fbb62a02f388?q=80&w=2070')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-900"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-slate-900 font-medium text-sm mb-6">
              <Building className="w-4 h-4" />
              <span>Komplettanbieter für Laborcontainer</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
              Unsere <span className="text-primary">Leistungen</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
              Von der ersten Idee bis zur schlüsselfertigen Übergabe – wir begleiten Sie durch alle Phasen Ihres Laborprojekts. Profitieren Sie von über 10 Jahren Erfahrung im modularen Laborbau.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt" className="bg-primary text-slate-900 font-bold px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center gap-2">
                  Projekt anfragen <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="tel:+4974357519700" className="border border-white/20 text-white font-medium px-8 py-4 rounded-lg hover:bg-white/10 transition-colors inline-flex items-center gap-2">
                <Phone className="w-5 h-5" /> +49 7435 7519 700
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Statistiken */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "10+", label: "Jahre Erfahrung" },
              { value: "50+", label: "Realisierte Projekte" },
              { value: "100%", label: "Kundenzufriedenheit" },
              { value: "24/7", label: "Service & Support" },
            ].map((stat, i) => (
              <div key={i} className="p-4">
                <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-1">{stat.value}</div>
                <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Einleitung */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-8 text-slate-900 text-center">
              Alles aus einer Hand für Ihr Laborprojekt
            </h2>
            <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
              <p>
                Die Realisierung eines Laborcontainers ist ein komplexes Unterfangen, das Expertise in vielen Bereichen erfordert. Von der technischen Planung über die Fertigung und Logistik bis hin zur behördlichen Genehmigung – jeder Schritt muss sorgfältig koordiniert werden, um ein optimales Ergebnis zu erzielen.
              </p>
              <p>
                Bei <strong>Planexus</strong> bieten wir Ihnen genau das: einen zentralen Ansprechpartner für alle Aspekte Ihres Laborprojekts. Unsere sechs Kernleistungen greifen nahtlos ineinander und stellen sicher, dass Ihr Laborcontainer nicht nur technisch perfekt, sondern auch termingerecht und im Budget realisiert wird.
              </p>
              <p>
                Was uns von anderen Anbietern unterscheidet? Wir verstehen uns nicht als reine Ausführer, sondern als Partner, der mit Ihnen denkt. Unsere Ingenieure und Projektmanager bringen langjährige Erfahrung aus dem Laborbau mit und kennen die Herausforderungen, die bei der Realisierung eines Containerlabors auftreten können. So können wir Probleme frühzeitig erkennen und lösen, bevor sie zu Verzögerungen oder Mehrkosten führen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leistungen Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-slate-900">
              Unsere sechs Kernleistungen
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Jede Leistung ist ein Baustein für den Erfolg Ihres Projekts. Kombinieren Sie diese nach Bedarf oder nutzen Sie unser Komplettpaket.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-100 rounded-2xl hover:border-primary/30 transition-all hover:shadow-xl hover:shadow-gray-100 group overflow-hidden"
              >
                <div className="p-8">
                  <div className="mb-6 bg-primary/10 text-primary w-16 h-16 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-slate-900 transition-all duration-300 shadow-sm">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                    {service.desc}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-8 pb-8">
                  <Link href={service.href} className="w-full block text-center py-3 bg-slate-50 rounded-lg hover:bg-primary hover:text-slate-900 transition-all font-medium text-slate-700 group-hover:bg-primary group-hover:text-slate-900">
                      Mehr erfahren <ChevronRight className="w-4 h-4 inline-block ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vorteile */}
      <section className="py-20 bg-slate-50 border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-12 text-slate-900 text-center">
              Warum Planexus?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: <Award className="w-8 h-8" />, title: "Expertise", desc: "Über 10 Jahre Erfahrung im modularen Laborbau mit mehr als 50 erfolgreich realisierten Projekten." },
                { icon: <Clock className="w-8 h-8" />, title: "Effizienz", desc: "Kurze Projektlaufzeiten durch optimierte Prozesse und erfahrene Teams." },
                { icon: <CheckCircle2 className="w-8 h-8" />, title: "Qualität", desc: "Fertigung 'Made in Germany' nach höchsten Standards und mit umfassender Qualitätskontrolle." },
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 text-center">
                  <div className="w-16 h-16 bg-primary/10 text-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-slate-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prozess */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-8 text-slate-900 text-center">
              Unser Projektablauf
            </h2>
            <p className="text-gray-600 text-lg text-center mb-12 max-w-2xl mx-auto">
              Von der ersten Anfrage bis zur Übergabe Ihres fertigen Laborcontainers begleiten wir Sie durch einen strukturierten Prozess.
            </p>
            
            <div className="space-y-6">
              {[
                { step: "01", title: "Beratung & Bedarfsanalyse", desc: "Wir analysieren Ihre Anforderungen, besprechen technische Details und erstellen ein erstes Konzept für Ihr Laborprojekt." },
                { step: "02", title: "Planung & Angebot", desc: "Unsere Ingenieure entwickeln detaillierte Pläne, erstellen 3D-Visualisierungen und Sie erhalten ein transparentes Festpreisangebot." },
                { step: "03", title: "Fertigung & Qualitätskontrolle", desc: "In unserer Produktion entsteht Ihr Laborcontainer unter strengen Qualitätskontrollen – termingerecht und nach höchsten Standards." },
                { step: "04", title: "Lieferung & Inbetriebnahme", desc: "Wir liefern Ihr Labor an den Zielort, übernehmen Aufstellung und Anschluss und übergeben Ihnen ein schlüsselfertiges Labor." },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start bg-slate-50 p-6 rounded-xl border border-gray-100">
                  <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center font-bold text-lg shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-slate-900">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Anwendungsbereiche */}
      <section className="py-20 bg-slate-50 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-8 text-slate-900 text-center">
              Anwendungsbereiche unserer Laborcontainer
            </h2>
            <p className="text-gray-600 text-lg text-center mb-12 max-w-2xl mx-auto">
              Unsere modularen Laborlösungen finden in vielen Branchen und Anwendungen Einsatz – von der Pharmaforschung bis zur Umweltanalytik.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Pharmazeutische Forschung & Entwicklung",
                "Chemische Analytik & Qualitätskontrolle",
                "Biotechnologie & Life Sciences",
                "Umwelt- und Wasseranalytik",
                "Lebensmitteluntersuchung",
                "Materialprüfung & Werkstofftechnik",
                "BSL-2 und BSL-3 Labore",
                "Mobile Forschungsstationen",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-lg border border-gray-100">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Sonderlösung gesucht?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Wir entwickeln individuelle Labor-Module auch fernab vom Standard. Sprechen Sie uns an – gemeinsam finden wir die optimale Lösung für Ihre Anforderungen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt" className="bg-primary text-slate-900 px-10 py-4 rounded-lg font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 inline-flex items-center gap-2">
                  Individuelle Anfrage <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="tel:+4974357519700" className="border border-white/20 text-white px-10 py-4 rounded-lg font-medium hover:bg-white/10 transition-colors inline-flex items-center gap-2">
                <Phone className="w-5 h-5" /> Direkt anrufen
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
