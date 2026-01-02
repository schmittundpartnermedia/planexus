import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

export default function Team() {
  const team = [
    {
      name: "Sven Biewald",
      role: "Gesellschafter / Visionär",
      initials: "SB",
      desc: "Der Pionier der modernen Laborcontainer. Mit über einem Jahrzehnt Erfahrung und einem unbändigen Willen zur Innovation treibt er die Vision von Planexus voran."
    },
    {
      name: "Thomas Boss",
      role: "Gesellschafter / Technik",
      initials: "TB",
      desc: "Der technische Kopf hinter den Kulissen. Seine Expertise garantiert, dass visionäre Ideen in funktionale, robuste Realität umgesetzt werden."
    }
  ];

  const testimonials = [
    {
      name: "Dr. Martina Weber",
      role: "Laborleiterin",
      text: "Die Zusammenarbeit bei der Planung unseres neuen Labors war hervorragend. Von der ersten Konzeptidee bis zur finalen Umsetzung wurden all unsere Anforderungen berücksichtigt."
    },
    {
      name: "Prof. Dr. Thomas Keller",
      role: "Forschungsleiter",
      text: "Planexus hat für unser Forschungszentrum ein innovatives technisches Konzept entwickelt, das sowohl effizient als auch zukunftssicher ist."
    },
    {
      name: "Susanne Lehmann",
      role: "Vertriebsleiterin",
      text: "Dank der kompetenten Vertriebsbegleitung durch Planexus konnten wir unsere technischen Produkte gezielt am Markt platzieren."
    }
  ];

  return (
    <div className="pt-20 min-h-screen">
       <section className="bg-card py-20 border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-heading font-bold mb-6">Unser Team</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Die Köpfe hinter Planexus. Erfahrung trifft Innovation.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                className="bg-card border border-border p-8 rounded-2xl relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-700" />
                
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary/50 rounded-full flex items-center justify-center text-3xl font-bold text-background mb-6 shadow-lg shadow-primary/20">
                  {member.initials}
                </div>
                
                <h3 className="text-3xl font-heading font-bold mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-6 uppercase tracking-wider text-sm">{member.role}</p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {member.desc}
                </p>
                
                <div className="flex gap-4">
                  <a href="#" className="p-2 bg-secondary rounded-lg hover:bg-primary hover:text-background transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-2 bg-secondary rounded-lg hover:bg-primary hover:text-background transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-center mb-16">Was unsere Kunden sagen</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-background p-8 rounded-xl border border-white/5 relative">
                <div className="text-4xl text-primary/20 font-serif absolute top-4 right-6">"</div>
                <p className="text-muted-foreground mb-6 italic relative z-10">{t.text}</p>
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <p className="text-sm text-primary">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
