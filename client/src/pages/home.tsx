import { motion } from "framer-motion";
import { ArrowRight, Box, CheckCircle2, ChevronRight, Layers, Layout, ShieldCheck, Microscope, FlaskConical, Leaf } from "lucide-react";
import { Link } from "wouter";
import heroBg from "@assets/Kopf_green-scaled_1768306688943.jpg";
import blueprintBg from "@assets/generated_images/technical_blueprint_abstract_background.png";
import planexusLogo from "@assets/Planexus_Home-e1738171155684_1767361842201.png";
import refMobil from "@assets/IMG_8081_1769688326917.jpg";
import refInnen from "@assets/IMG_20191114_093201_1769688326917.jpg";
import refKran from "@assets/IMG_20200727_155538_1769688326918.jpg";
import refAussen from "@assets/Laborcontainer_001_1769688326918.jpg";
import { SEO } from "@/components/SEO";
import { LiquidDistortion } from "@/components/LiquidDistortion";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="Laborcontainer & Modulbau Labor Spezialist"
        description="Planexus ist Ihr Experte für Laborcontainer, mobile Labore und Modulbau. Über 10 Jahre Erfahrung in Laborplanung, BSL-2/BSL-3 Labore und Containerbau."
        canonical="/"
      />
      {/* Hero Section - Dark & Impactful with Liquid Distortion Effect */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 text-white">
        {/* Mobile: Static Image */}
        <div className="lg:hidden absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Moderner Laborcontainer Außenansicht"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        
        {/* Desktop: Liquid Distortion Effect */}
        <div className="hidden lg:block absolute inset-0 z-[5] w-full h-full">
          <LiquidDistortion 
            imageSrc={heroBg} 
            className="w-full h-full"
          />
        </div>

        <div className="container mx-auto px-4 relative z-[10] pointer-events-none">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl pt-16 md:pt-0"
          >
            <img 
              src={planexusLogo} 
              alt="Planexus GmbH" 
              className="hidden md:block w-[520px] h-auto mb-8"
            />
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight">
              Denken. <span className="text-primary">Planen.</span><br />
              Verbinden.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-2xl font-light">
              Ihr Spezialist für <strong className="text-white font-medium">Laborcontainer</strong> und modulare Laborlösungen. 
              Wir realisieren flexible Forschungsumgebungen für die Zukunft.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pointer-events-auto">
              <Link href="/kontakt" className="bg-primary text-slate-900 font-bold px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(132,189,0,0.4)]">
                Labor Projekt starten
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/leistungen" className="border border-white/20 text-white font-medium px-8 py-4 rounded-lg hover:bg-white/10 transition-colors backdrop-blur-sm flex items-center justify-center">
                Unsere Leistungen
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Clean White */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
            <div className="p-4">
              <div className="text-5xl font-heading font-bold text-primary mb-2">10+</div>
              <p className="text-gray-600 font-medium">Jahre Erfahrung im Laborbau</p>
            </div>
            <div className="p-4">
              <div className="text-5xl font-heading font-bold text-primary mb-2">50+</div>
              <p className="text-gray-600 font-medium">Realisierte Labor-Projekte</p>
            </div>
            <div className="p-4">
              <div className="text-5xl font-heading font-bold text-primary mb-2">100%</div>
              <p className="text-gray-600 font-medium">Kundenzufriedenheit</p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro / About Teaser - Clean Design */}
      <section className="py-24 relative overflow-hidden bg-dot-pattern">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary text-slate-900 font-medium text-sm mb-6">
                <Box className="w-4 h-4" />
                <span>Modular & Flexibel</span>
              </div>
              <h2 className="text-4xl font-heading font-bold mb-6 text-slate-900">
                Vom Visionär zum <span className="text-primary">Branchenpionier</span>
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Als Fachplaner für <strong>Containerlabore</strong> setzen wir neue Standards. Was 2016 als Vision begann, ist heute Stand der Technik im mobilen Laborbau.
                </p>
                <p>
                  <strong>Planexus</strong> steht für intelligente Modulbauweise. Wir verbinden technisches Know-how mit Innovationskraft, um Labore zu schaffen, die exakt auf Ihre Analyseprozesse abgestimmt sind – schnell verfügbar, kosteneffizient und nachhaltig.
                </p>
              </div>
              <Link href="/ueber-uns" className="inline-flex items-center gap-2 text-primary font-bold mt-8 hover:gap-3 transition-all border-b-2 border-primary/20 hover:border-primary pb-1">
                  Mehr über Planexus erfahren <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl shadow-gray-200 border border-gray-100 relative group bg-white">
                 {/* Decorative elements */}
                 <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-primary/5 rounded-bl-[100px] -z-0"></div>
                 
                 <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="grid grid-cols-2 gap-4 w-full h-full">
                        <div className="bg-slate-50 rounded-xl p-6 flex flex-col justify-center items-center text-center hover:bg-white hover:shadow-lg transition-all border border-gray-100">
                            <Microscope className="w-10 h-10 text-primary mb-3" />
                            <span className="font-bold text-slate-800">Analytik</span>
                        </div>
                        <div className="bg-slate-50 rounded-xl p-6 flex flex-col justify-center items-center text-center hover:bg-white hover:shadow-lg transition-all border border-gray-100 mt-8">
                            <FlaskConical className="w-10 h-10 text-primary mb-3" />
                            <span className="font-bold text-slate-800">Forschung</span>
                        </div>
                        <div className="bg-slate-50 rounded-xl p-6 flex flex-col justify-center items-center text-center hover:bg-white hover:shadow-lg transition-all border border-gray-100 -mt-8">
                            <Leaf className="w-10 h-10 text-primary mb-3" />
                            <span className="font-bold text-slate-800">Nachhaltig</span>
                        </div>
                        <div className="bg-primary rounded-xl p-6 flex flex-col justify-center items-center text-center text-slate-900 shadow-lg shadow-primary/30 transform scale-105">
                            <Box className="w-10 h-10 text-slate-900 mb-3" />
                            <span className="font-bold">Modular</span>
                        </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Teaser - Cards in White/Green */}
      <section className="py-24 bg-slate-50 border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-slate-900">Unsere Leistungen</h2>
            <p className="text-gray-600 text-lg">
              Ganzheitliche Lösungen für den Laborbau – von der ersten Skizze bis zur schlüsselfertigen Übergabe Ihres Laborcontainers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                href: "/leistungen/planung",
                icon: <Layout className="w-8 h-8" />,
                title: "Technische Fachplanung",
                desc: "Detaillierte Planung mit 3D-Visualisierung und TGA-Konzepten."
              },
              {
                href: "/leistungen/modulbau",
                icon: <Layers className="w-8 h-8" />,
                title: "Modulbau & Fertigung",
                desc: "Hochwertige Laborcontainer 'Made in Germany'."
              },
              {
                href: "/leistungen/logistik",
                icon: <Box className="w-8 h-8" />,
                title: "Logistik & Montage",
                desc: "Weltweiter Transport und schlüsselfertige Übergabe."
              },
              {
                href: "/leistungen/ausstattung",
                icon: <Microscope className="w-8 h-8" />,
                title: "Laborausstattung",
                desc: "Labormöbel, Abzüge und Sicherheitsausstattung."
              },
              {
                href: "/leistungen/beratung",
                icon: <ShieldCheck className="w-8 h-8" />,
                title: "Beratung & Genehmigung",
                desc: "Unterstützung bei allen behördlichen Verfahren."
              },
              {
                href: "/leistungen/smart-lab",
                icon: <Layout className="w-8 h-8" />,
                title: "Smart Lab Integration",
                desc: "Digitale Vernetzung und IoT-Monitoring."
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white border border-gray-100 p-6 rounded-xl hover:shadow-xl hover:shadow-gray-200/50 transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-slate-900 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 text-slate-900">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.desc}</p>
                <Link href={service.href} className="text-primary font-bold text-sm flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                    Mehr erfahren <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/leistungen" className="inline-flex items-center gap-2 bg-slate-900 text-white font-bold px-8 py-4 rounded-lg hover:bg-slate-800 transition-colors">
                Alle Leistungen ansehen <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Referenzen Teaser */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary text-slate-900 font-medium text-sm mb-6">
              <CheckCircle2 className="w-4 h-4" />
              <span>Unsere Projekte</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-slate-900">Referenzen</h2>
            <p className="text-gray-600 text-lg">
              Von mobilen Forschungslaboren bis zu kompletten BSL-Anlagen – entdecken Sie unsere erfolgreich realisierten Laborcontainer-Projekte.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                image: refMobil,
                title: "Mobiles Forschungslabor",
                desc: "Vollausgestatteter Laborcontainer mit Abzügen und Lüftungstechnik",
                category: "Forschung"
              },
              {
                image: refInnen,
                title: "Laboreinrichtung",
                desc: "Hochwertige Labormöbel und Arbeitsflächen nach Maß",
                category: "Industrie"
              },
              {
                image: refKran,
                title: "Container-Anlieferung",
                desc: "Transport und Montage per Kran direkt am Einsatzort",
                category: "Logistik"
              },
              {
                image: refAussen,
                title: "Modulares Laborgebäude",
                desc: "Mehrgeschossiger Laborcontainer mit Holzfassade",
                category: "Pharma"
              }
            ].map((ref, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={ref.image} 
                    alt={ref.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-slate-900 bg-primary px-2 py-1 rounded-full">
                    {ref.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-3 mb-2">{ref.title}</h3>
                  <p className="text-gray-600 text-sm">{ref.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/projekte" className="inline-flex items-center gap-2 border-2 border-slate-900 text-slate-900 font-bold px-8 py-4 rounded-lg hover:bg-slate-900 hover:text-white transition-colors">
                Alle Projekte ansehen <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA - Green Accent */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-primary rounded-3xl p-12 md:p-16 text-center text-slate-900 relative overflow-hidden shadow-2xl shadow-primary/20">
             {/* Abstract circles bg */}
             <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
             <div className="absolute bottom-0 right-0 w-80 h-80 bg-black/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
             
             <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 relative z-10">Bereit für Ihr Laborprojekt?</h2>
             <p className="text-xl text-slate-700 max-w-2xl mx-auto mb-10 relative z-10">
               Lassen Sie uns gemeinsam Ihre Anforderungen besprechen. Wir erstellen Ihnen ein individuelles Konzept für Ihren Laborcontainer.
             </p>
             <Link href="/kontakt" className="bg-white text-primary font-bold px-10 py-4 rounded-lg hover:bg-slate-100 transition-colors inline-flex items-center gap-2 shadow-lg">
                 Jetzt Kontakt aufnehmen <ArrowRight className="w-5 h-5" />
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
