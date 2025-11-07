import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Stage PFA - AREX",
      period: "Juillet – Août 2025",
      tasks: [
        "Réalisation d'un moteur d'extraction intelligent capable de collecter et structurer automatiquement les données techniques à partir de documents numériques, photos ou plans.",
        "Réalisation d'une interface interactive permettant l'importation de fichiers et la génération automatique de listes de points techniques classées par type d'équipement.",
        "Réalisation d'une solution complète combinant intelligence artificielle et automatisation pour optimiser la gestion documentaire et technique au sein d'AREX Maroc."
      ]
    },
    {
      title: "Stage Professionnel - OCP",
      period: "Juillet – Août 2024",
      tasks: [
        "Développement d'une application web de messagerie en temps réel avec React (frontend) et Java (backend).",
        "Intégration de fonctionnalités de chat en temps réel, gestion des utilisateurs et des messages.",
        "Collaboration avec l'équipe IT pour garantir la cohérence entre les besoins fonctionnels et les solutions techniques proposées."
      ]
    },
    {
      title: "Stage d'Observation - ONCF",
      period: "Juillet 2023",
      tasks: [
        "Participation à la réalisation d'un mini-projet portant sur l'étude générale du fonctionnement de la rame.",
        "Contribution active aux réunions d'avancement, axées sur la résolution des problématiques techniques."
      ]
    }
  ];

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2 flex items-center gap-2">
        <Briefcase className="w-6 h-6" />
        EXPÉRIENCES PROFESSIONNELLES
      </h2>
      
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index} className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-3 flex-wrap gap-2">
              <h3 className="text-lg font-semibold text-card-foreground">{exp.title}</h3>
              <span className="text-sm font-medium px-3 py-1 bg-primary text-primary-foreground rounded-full">
                {exp.period}
              </span>
            </div>
            <ul className="space-y-2">
              {exp.tasks.map((task, taskIndex) => (
                <li key={taskIndex} className="text-muted-foreground text-sm flex gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
