import { Card } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Application Web de gestion de portefeuilles électroniques",
      description: "Création d'une application web de gestion de portefeuilles crypto avec React, MetaMask, Hardhat et Solidity."
    },
    {
      title: "Optimisation Logistique - Distribution Pharmaceutique",
      description: "Développement d'une solution d'optimisation des tournées de distribution pour les pharmacies de Beni Mellal utilisant l'algorithme du plus proche voisin en Python."
    },
    {
      title: "Système de détection précoce des incendies (Jungle Guard)",
      description: "Conception d'un système IoT de détection d'incendies avec Arduino, Raspberry Pi et communication MQTT."
    }
  ];

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2 flex items-center gap-2">
        <Lightbulb className="w-6 h-6" />
        PROJETS ACADÉMIQUES
      </h2>
      
      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <Card key={index} className="p-5 bg-card border-border hover:shadow-lg transition-shadow">
            <h3 className="font-semibold text-card-foreground mb-2 text-base">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {project.description}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
