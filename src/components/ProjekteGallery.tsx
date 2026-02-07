import { useState } from 'react';

interface Project {
  name: string;
  description: string;
  images: string[];
  category: string;
}

const projects: Project[] = [
  {
    name: "Industrielabor",
    description: "Mobile Laborlösung mit vollständiger Lüftungstechnik und Klimatisierung für den Industriestandort.",
    images: [
      "/attached_assets/IMG_20210520_184046_1769690502588.jpg",
      "/attached_assets/Laborcontainer_010_1769690502589.jpg"
    ],
    category: "Industrie"
  },
  {
    name: "Hochsicherheitslabor",
    description: "Hochsicherheits-Laborcontainer mit spezieller Fassadenverkleidung.",
    images: [
      "/attached_assets/IMG_9073_1769690513473.jpg",
      "/attached_assets/IMG_20210624_091412_1769690513473.jpg",
      "/attached_assets/IMG_20210624_091424_1769690513473.jpg",
      "/attached_assets/IMG_20210624_102201_1769690513474.jpg"
    ],
    category: "Öffentlich"
  },
  {
    name: "Pharmalabor",
    description: "Pharma-Labor mit kompletter Reinraumtechnik und Großanlagen für die Impfstoffforschung.",
    images: [
      "/attached_assets/IMG_20210511_065709_1769690531799.jpg",
      "/attached_assets/IMG_20210520_093550_1769690531799.jpg",
      "/attached_assets/IMG-20210211-WA0011_1769690531799.jpg",
      "/attached_assets/IMG-20210511-WA0009_1769690531799.jpg"
    ],
    category: "Pharma"
  },
  {
    name: "Forschungslabor",
    description: "Forschungslabor für eine technische Universität mit sichtbarer Unterkonstruktion.",
    images: [
      "/attached_assets/20231109_090436_1769690552935.jpg",
      "/attached_assets/20240731_121741_1769690552935.jpg",
      "/attached_assets/Laborcontainer_013_1769690552935.jpg",
      "/attached_assets/Laborcontainer_014_1769690552936.jpg"
    ],
    category: "Forschung"
  },
  {
    name: "Mehrgeschossiges Pharmalabor",
    description: "Mehrgeschossiger Laborcontainer mit Secuflow-Abzügen und hochwertiger Laborausstattung.",
    images: [
      "/attached_assets/IMG-20230628-WA0037_1769690564537.jpg",
      "/attached_assets/IMG-20230628-WA0039_1769690564538.jpg",
      "/attached_assets/Labor_1_1769690564538.jpg",
      "/attached_assets/Labor_2_1769690564538.jpg"
    ],
    category: "Pharma"
  },
  {
    name: "Produktionslabor",
    description: "Großprojekt mit umfangreicher Dachtechnik und RLT-Anlagen für den Produktionsstandort.",
    images: [
      "/attached_assets/IMG-20230901-WA0003_1769690590110.jpg",
      "/attached_assets/IMG-20230901-WA0007_1769690590110.jpg",
      "/attached_assets/IMG-20230901-WA0008_1769690590111.jpg",
      "/attached_assets/IMG-20230901-WA0009_1769690590111.jpg"
    ],
    category: "Pharma"
  },
  {
    name: "Hochschul-Forschungslabor",
    description: "Forschungslabor für eine Hochschule mit modularer Bauweise und flexibler Raumaufteilung.",
    images: [
      "/attached_assets/IMG_1616_1769690606130.jpg",
      "/attached_assets/IMG_1618_1769690606130.jpg",
      "/attached_assets/IMG_1621_1769690606130.jpg",
      "/attached_assets/IMG_5781_1769690606130.jpg"
    ],
    category: "Forschung"
  }
];

const messeImages = [
  "/attached_assets/IMG_20160509_190630_1769690631269.jpg",
  "/attached_assets/IMG_20160509_190722_1769690631269.jpg",
  "/attached_assets/IMG_20160509_190912_1769690631269.jpg"
];

const categories = ["Alle", "Industrie", "Pharma", "Forschung", "Öffentlich"];

export default function ProjekteGallery() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [filter, setFilter] = useState("Alle");

  const filteredProjects = filter === "Alle"
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <>
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
            {filteredProjects.map((project) => (
              <div
                key={project.name}
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
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">Messe MC Labor 2016</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Messeauftritt mit begehbarem Laborcontainer-Exponat.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {messeImages.map((img, index) => (
              <div
                key={index}
                className="aspect-[4/3] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <img
                  src={img}
                  alt={`Messe MC Labor 2016 - Bild ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
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
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
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
    </>
  );
}
