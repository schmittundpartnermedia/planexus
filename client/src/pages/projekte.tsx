import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Building2, X } from "lucide-react";
import { SEO } from "@/components/SEO";

import abx1 from "@assets/20240924_135546_1769690466430.jpg";
import abx2 from "@assets/20240924_152825_1769690466431.jpg";
import abx3 from "@assets/IMG-20241008-WA0038_1769690466431.jpg";
import abx4 from "@assets/IMG-20241008-WA0040_1769690466431.jpg";

import bosch1 from "@assets/IMG_20210520_184046_1769690502588.jpg";
import bosch2 from "@assets/Laborcontainer_010_1769690502589.jpg";

import bundeswehr1 from "@assets/IMG_9073_1769690513473.jpg";
import bundeswehr2 from "@assets/IMG_20210624_091412_1769690513473.jpg";
import bundeswehr3 from "@assets/IMG_20210624_091424_1769690513473.jpg";
import bundeswehr4 from "@assets/IMG_20210624_102201_1769690513474.jpg";

import curevac1 from "@assets/IMG_20210511_065709_1769690531799.jpg";
import curevac2 from "@assets/IMG_20210520_093550_1769690531799.jpg";
import curevac3 from "@assets/IMG-20210211-WA0011_1769690531799.jpg";
import curevac4 from "@assets/IMG-20210511-WA0009_1769690531799.jpg";

import kit1 from "@assets/20231109_090436_1769690552935.jpg";
import kit2 from "@assets/20240731_121741_1769690552935.jpg";
import kit3 from "@assets/Laborcontainer_013_1769690552935.jpg";
import kit4 from "@assets/Laborcontainer_014_1769690552936.jpg";

import merckDa1 from "@assets/IMG-20230628-WA0037_1769690564537.jpg";
import merckDa2 from "@assets/IMG-20230628-WA0039_1769690564538.jpg";
import merckDa3 from "@assets/Labor_1_1769690564538.jpg";
import merckDa4 from "@assets/Labor_2_1769690564538.jpg";

import merckGe1 from "@assets/IMG-20230901-WA0003_1769690590110.jpg";
import merckGe2 from "@assets/IMG-20230901-WA0007_1769690590110.jpg";
import merckGe3 from "@assets/IMG-20230901-WA0008_1769690590111.jpg";
import merckGe4 from "@assets/IMG-20230901-WA0009_1769690590111.jpg";

import weihen1 from "@assets/IMG_1616_1769690606130.jpg";
import weihen2 from "@assets/IMG_1618_1769690606130.jpg";
import weihen3 from "@assets/IMG_1621_1769690606130.jpg";
import weihen4 from "@assets/IMG_5781_1769690606130.jpg";

import messe1 from "@assets/IMG_20160509_190630_1769690631269.jpg";
import messe2 from "@assets/IMG_20160509_190722_1769690631269.jpg";
import messe3 from "@assets/IMG_20160509_190912_1769690631269.jpg";

interface Project {
  name: string;
  description: string;
  images: string[];
  category: string;
}

const projects: Project[] = [
  {
    name: "Modulare Laboranlage",
    description: "Modulare Laborcontainer-Anlage mit mehreren Einheiten für Forschung und Entwicklung.",
    images: [abx1, abx2, abx3, abx4],
    category: "Industrie"
  },
  {
    name: "Industrielabor",
    description: "Mobile Laborlösung mit vollständiger Lüftungstechnik und Klimatisierung für den Industriestandort.",
    images: [bosch1, bosch2],
    category: "Industrie"
  },
  {
    name: "Hochsicherheitslabor",
    description: "Hochsicherheits-Laborcontainer mit spezieller Fassadenverkleidung.",
    images: [bundeswehr1, bundeswehr2, bundeswehr3, bundeswehr4],
    category: "Öffentlich"
  },
  {
    name: "Pharmalabor",
    description: "Pharma-Labor mit kompletter Reinraumtechnik und Großanlagen für die Impfstoffforschung.",
    images: [curevac1, curevac2, curevac3, curevac4],
    category: "Pharma"
  },
  {
    name: "Forschungslabor mit Lamellenfassade",
    description: "Forschungslabor für eine technische Universität mit moderner Lamellenfassade.",
    images: [kit1, kit2, kit3, kit4],
    category: "Forschung"
  },
  {
    name: "Mehrgeschossiges Pharmalabor",
    description: "Mehrgeschossiger Laborcontainer mit Secuflow-Abzügen und hochwertiger Laborausstattung.",
    images: [merckDa1, merckDa2, merckDa3, merckDa4],
    category: "Pharma"
  },
  {
    name: "Produktionslabor",
    description: "Großprojekt mit umfangreicher Dachtechnik und RLT-Anlagen für den Produktionsstandort.",
    images: [merckGe1, merckGe2, merckGe3, merckGe4],
    category: "Pharma"
  },
  {
    name: "Hochschul-Forschungslabor",
    description: "Forschungslabor für eine Hochschule mit modularer Bauweise und flexibler Raumaufteilung.",
    images: [weihen1, weihen2, weihen3, weihen4],
    category: "Forschung"
  }
];

const messeImages = {
  name: "Messeauftritt 2016",
  description: "Messeauftritt mit begehbarem Laborcontainer-Exponat.",
  images: [messe1, messe2, messe3]
};

export default function Projekte() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [filter, setFilter] = useState<string>("Alle");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ["Alle", "Industrie", "Pharma", "Forschung", "Öffentlich"];

  const filteredProjects = filter === "Alle" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="pt-20 min-h-screen bg-background">
      <SEO 
        title="Projekte | Laborcontainer Referenzen"
        description="Entdecken Sie unsere erfolgreich realisierten Laborcontainer-Projekte für Bosch, CureVac, Merck, KIT, Bundeswehr und weitere namhafte Kunden."
        canonical="/projekte"
      />

      <section className="relative py-24 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(187,215,0,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-900"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Unsere Projekte
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-4">
              Von mobilen Forschungslaboren bis zu kompletten BSL-Anlagen – entdecken Sie unsere erfolgreich realisierten Laborcontainer-Projekte für namhafte Kunden.
            </p>
            <p className="text-sm text-gray-400">
              Eine Auswahl unserer Referenzen
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 bg-white border-b border-gray-100 sticky top-16 z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full font-medium text-sm transition-colors ${
                  filter === cat
                    ? "bg-primary text-slate-900"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
                data-testid={`filter-${cat.toLowerCase()}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow cursor-pointer group"
                onClick={() => {
                  setSelectedProject(project);
                  setSelectedImageIndex(0);
                }}
                data-testid={`project-${project.name.toLowerCase().replace(/\s/g, '-')}`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.images[0]}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-slate-900 bg-primary px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-3 mb-2">{project.name}</h3>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                  <p className="inline-block bg-primary text-slate-900 font-medium text-sm mt-4 px-3 py-1 rounded-full">
                    Bilder ansehen →
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">Messe MC Labor 2016</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{messeImages.description}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {messeImages.images.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="aspect-[4/3] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <img
                  src={img}
                  alt={`Messe MC Labor 2016 - Bild ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <button
            onClick={() => setSelectedProject(null)}
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
            data-testid="close-lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          <div 
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 text-center">
              <h3 className="text-2xl font-bold text-white">{selectedProject.name}</h3>
              <p className="text-gray-400">{selectedProject.description}</p>
            </div>

            <div className="aspect-video rounded-lg overflow-hidden mb-4">
              <img
                src={selectedProject.images[selectedImageIndex]}
                alt={`${selectedProject.name} - Bild ${selectedImageIndex + 1}`}
                className="w-full h-full object-contain bg-black"
              />
            </div>

            <div className="flex gap-2 justify-center overflow-x-auto pb-2">
              {selectedProject.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`w-20 h-16 rounded overflow-hidden flex-shrink-0 transition-all ${
                    selectedImageIndex === index
                      ? "ring-2 ring-primary"
                      : "opacity-60 hover:opacity-100"
                  }`}
                  data-testid={`thumbnail-${index}`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
