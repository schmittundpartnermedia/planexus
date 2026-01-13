import { motion } from "framer-motion";
import { Linkedin, Mail, Quote } from "lucide-react";
import { SEO } from "@/components/SEO";

export default function Team() {
  const team = [
    {
      name: "Sven Biewald",
      role: "Gesellschafter / Visionär",
      initials: "SB",
      image: null,
      desc: "Der Pionier der modernen Laborcontainer. Mit über einem Jahrzehnt Erfahrung und einem unbändigen Willen zur Innovation treibt er die Vision von Planexus voran."
    },
    {
      name: "Thomas Boss",
      role: "Gesellschafter / Technik",
      initials: "TB",
      image: "/team/thomas-boss.jpg",
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
    <div className="pt-20 min-h-screen bg-white">
      <SEO 
        title="Team - Experten für Laborcontainer"
        description="Das Planexus Team: Sven Biewald und Thomas Boss - Experten für Laborcontainer und Modulbau mit über 10 Jahren Erfahrung."
        canonical="/team"
      />
       <section className="bg-slate-50 py-20 border-b border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-heading font-bold mb-6 text-slate-900">Das Planexus Team</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Erfahrung trifft Innovation. Wir sind Ihre Experten für Laborbau.
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
                className="bg-white border border-gray-100 p-8 rounded-2xl relative overflow-hidden group shadow-lg shadow-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-700" />
                
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mb-6 shadow-md"
                  />
                ) : (
                  <div className="w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mb-6 shadow-md">
                    {member.initials}
                  </div>
                )}
                
                <h3 className="text-3xl font-heading font-bold mb-2 text-slate-900">{member.name}</h3>
                <p className="text-primary font-bold mb-6 uppercase tracking-wider text-sm">{member.role}</p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {member.desc}
                </p>
                
                <div className="flex gap-4">
                  <a href="#" className="p-2 bg-gray-100 rounded-lg hover:bg-primary hover:text-white transition-colors text-slate-600">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-2 bg-gray-100 rounded-lg hover:bg-primary hover:text-white transition-colors text-slate-600">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-center mb-16 text-slate-900">Was unsere Kunden sagen</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm relative hover:shadow-md transition-shadow">
                <div className="absolute top-6 right-6 text-primary/20">
                    <Quote className="w-10 h-10" />
                </div>
                <p className="text-gray-600 mb-6 italic relative z-10 leading-relaxed">"{t.text}"</p>
                <div className="mt-auto">
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-sm text-primary font-medium">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
