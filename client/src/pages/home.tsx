import { motion } from "framer-motion";
import { ArrowRight, Box, CheckCircle2, ChevronRight, Layers, Layout, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import heroBg from "@assets/generated_images/modern_laboratory_container_exterior.png";
import blueprintBg from "@assets/generated_images/technical_blueprint_abstract_background.png";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Modern Laboratory Container" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/80 md:bg-background/60 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-block px-4 py-1 mb-6 border border-primary/30 rounded-full bg-primary/10 backdrop-blur-sm">
              <span className="text-primary font-mono text-sm uppercase tracking-widest">Innovation im Modulbau</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight">
              Denken. <span className="text-primary">Planen.</span><br />
              Verbinden.
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              Ihr Fachplaner für Containerlabore mit über 10 Jahren Erfahrung. 
              Wir entwickeln Laborcontainer-Konzepte, die die Zukunft des Laborbaus aktiv mitgestalten.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <a className="bg-primary text-background font-bold px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 group">
                  Projekt starten
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Link>
              <Link href="/services">
                <a className="border border-white/20 text-white font-medium px-8 py-4 rounded-lg hover:bg-white/10 transition-colors backdrop-blur-sm flex items-center justify-center">
                  Unsere Leistungen
                </a>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-3 bg-primary rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-border">
            <div className="p-4">
              <div className="text-5xl font-heading font-bold text-primary mb-2">10+</div>
              <p className="text-muted-foreground">Jahre Erfahrung</p>
            </div>
            <div className="p-4">
              <div className="text-5xl font-heading font-bold text-primary mb-2">50+</div>
              <p className="text-muted-foreground">Erfolgreiche Projekte</p>
            </div>
            <div className="p-4">
              <div className="text-5xl font-heading font-bold text-primary mb-2">100%</div>
              <p className="text-muted-foreground">Kundenzufriedenheit</p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro / About Teaser */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
             <img src={blueprintBg} alt="Blueprint" className="w-full h-full object-cover mix-blend-screen" />
        </div>
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold mb-6">Vom Visionär zum <span className="text-primary">Branchenpionier</span></h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Als Sven Biewald 2016 den ersten vollfunktionsfähigen Laborcontainer präsentierte, war die Branche skeptisch. 
                  Heute gilt seine Vision als wegweisend für moderne Laborlösungen.
                </p>
                <p>
                  Mit <strong>Planexus</strong> vereint sich geballte Erfahrung, tiefes technisches Know-how und ein kompromissloser Innovationswille. 
                  Gemeinsam entwickeln wir Konzepte, die nicht nur heutigen Anforderungen gerecht werden, sondern die Zukunft gestalten.
                </p>
              </div>
              <Link href="/about">
                <a className="inline-flex items-center gap-2 text-primary font-bold mt-8 hover:gap-3 transition-all">
                  Mehr über uns erfahren <ChevronRight className="w-5 h-5" />
                </a>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border border-white/10 relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent mix-blend-overlay z-10" />
                {/* Abstract visualization of a modular unit */}
                <div className="w-full h-full bg-secondary flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581093588401-fbb07aa5cd12?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700"></div>
                    <div className="relative z-20 p-8 border border-white/20 bg-background/80 backdrop-blur-md rounded-xl max-w-xs transform group-hover:-translate-y-2 transition-transform duration-500">
                        <Box className="w-12 h-12 text-primary mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">Modular & Flexibel</h3>
                        <p className="text-sm text-gray-400">Maßgeschneiderte Lösungen für jede Anforderung.</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Teaser */}
      <section className="py-24 bg-card/50 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Unsere Leistungen</h2>
            <p className="text-muted-foreground text-lg">
              Ganzheitliche Lösungen von der ersten Skizze bis zur schlüsselfertigen Übergabe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Layout className="w-10 h-10 text-primary" />,
                title: "Konzeption & Planung",
                desc: "Maßgeschneiderte Layouts und technische Planung für maximale Effizienz."
              },
              {
                icon: <Layers className="w-10 h-10 text-primary" />,
                title: "Modulbau & Realisierung",
                desc: "Hochwertige Fertigung und Montage Ihrer Laborcontainer."
              },
              {
                icon: <ShieldCheck className="w-10 h-10 text-primary" />,
                title: "Beratung & Service",
                desc: "Umfassende Betreuung auch nach Projektabschluss."
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="bg-background border border-border p-8 rounded-xl hover:border-primary/50 transition-colors group"
              >
                <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.desc}</p>
                <Link href="/services">
                  <a className="text-primary text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Details ansehen <ArrowRight className="w-4 h-4" />
                  </a>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl font-heading font-bold mb-6">Bereit für Ihr nächstes Projekt?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Lassen Sie uns gemeinsam Großes schaffen. Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch.
          </p>
          <Link href="/contact">
            <a className="bg-primary text-background font-bold px-10 py-4 rounded-lg hover:bg-primary/90 transition-colors inline-block">
              Jetzt Kontakt aufnehmen
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
