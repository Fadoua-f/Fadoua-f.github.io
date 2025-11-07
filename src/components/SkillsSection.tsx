import { Card } from "@/components/ui/card";
import { Code2 } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      category: "Langages de programmation",
      skills: "Java (Spring Boot), C, Python"
    },
    {
      category: "Microsoft Office",
      skills: "Word, Excel, PowerPoint"
    },
    {
      category: "Outils de gestion et modélisation",
      skills: "GanttProject, MsProject"
    },
    {
      category: "Développement web",
      skills: "HTML/CSS, React JS, Next.js"
    },
    {
      category: "DevOps & systèmes",
      skills: "Git/GitHub, Docker"
    },
    {
      category: "IoT & électronique",
      skills: "Arduino, Raspberry Pi, capteurs industriels, communication MQTT"
    },
    {
      category: "Analyse de données",
      skills: "Power BI, Excel VBA, Classification, KNIME"
    },
    {
      category: "Base de données",
      skills: "MySQL, SQL Server (SSMS), Firebase"
    }
  ];

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2 flex items-center gap-2">
        <Code2 className="w-6 h-6" />
        COMPÉTENCES TECHNIQUES
      </h2>
      
      <Card className="p-6 bg-card border-border">
        <div className="grid md:grid-cols-2 gap-4">
          {skillCategories.map((item, index) => (
            <div key={index} className="space-y-1">
              <h3 className="font-semibold text-card-foreground text-sm">
                {item.category}
              </h3>
              <p className="text-muted-foreground text-sm">
                {item.skills}
              </p>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
};

export default SkillsSection;
