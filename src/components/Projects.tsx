import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import cryptoImage from "@/assets/project-crypto.jpg";
import logisticsImage from "@/assets/project-logistics.jpg";
import forestImage from "@/assets/project-forest.jpg";
import aiImage from "@/assets/project-ai.jpg";

const Projects = () => {
  const projects = [
    {
      image: aiImage,
      title: "Moteur d'Extraction Intelligent - AREX Maroc",
      description: "Solution complète combinant intelligence artificielle et automatisation pour collecter et structurer automatiquement les données techniques à partir de documents numériques, photos ou plans. Interface interactive pour l'importation de fichiers et génération automatique de listes de points techniques.",
      tags: ["Python", "Machine Learning", "IA", "OCR", "Automatisation"]
    },
    {
      image: cryptoImage,
      title: "Application Web de Gestion de Portefeuilles Crypto",
      description: "Création d'une application web de gestion de portefeuilles électroniques avec intégration blockchain.",
      tags: ["React", "MetaMask", "Hardhat", "Solidity", "Web3"]
    },
    {
      image: logisticsImage,
      title: "Optimisation Logistique",
      description: "Développement d'une solution d'optimisation des tournées de distribution pour les pharmacies de Beni Mellal.",
      tags: ["Python", "Algorithmes", "Optimisation", "Data Analysis"]
    },
    {
      image: forestImage,
      title: "Jungle Guard - Détection d'Incendies",
      description: "Système IoT de détection précoce des incendies forestiers avec communication en temps réel.",
      tags: ["Arduino", "Raspberry Pi", "MQTT", "IoT", "Capteurs"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 md:px-12 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Mes Projets
          </h2>
          <p className="text-muted-foreground text-lg">
            Découvrez mes réalisations académiques et techniques
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover-lift bg-card border-border group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-card-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary"
                      className="text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
