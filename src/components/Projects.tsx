import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wallet, TruckIcon, Flame } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: <Wallet className="w-8 h-8" />,
      title: "Application Web de Gestion de Portefeuilles Crypto",
      description: "Création d'une application web de gestion de portefeuilles électroniques avec intégration blockchain.",
      tags: ["React", "MetaMask", "Hardhat", "Solidity", "Web3"],
      color: "from-blue-500/20 to-purple-500/20"
    },
    {
      icon: <TruckIcon className="w-8 h-8" />,
      title: "Optimisation Logistique",
      description: "Développement d'une solution d'optimisation des tournées de distribution pour les pharmacies de Beni Mellal.",
      tags: ["Python", "Algorithmes", "Optimisation", "Data Analysis"],
      color: "from-green-500/20 to-teal-500/20"
    },
    {
      icon: <Flame className="w-8 h-8" />,
      title: "Jungle Guard - Détection d'Incendies",
      description: "Système IoT de détection précoce des incendies forestiers avec communication en temps réel.",
      tags: ["Arduino", "Raspberry Pi", "MQTT", "IoT", "Capteurs"],
      color: "from-orange-500/20 to-red-500/20"
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover-lift hover-glow bg-card border-border group cursor-pointer transform transition-all duration-500 hover:border-accent"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`bg-gradient-to-br ${project.color} p-8 flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="text-primary group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 relative z-10">
                  {project.icon}
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-card-foreground group-hover:text-accent transition-colors">
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
                      className="text-xs group-hover:bg-accent/20 group-hover:text-accent transition-colors border border-transparent group-hover:border-accent/30"
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
