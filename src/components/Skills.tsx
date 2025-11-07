import { Card } from "@/components/ui/card";
import { Code2, Database, Cpu, Globe } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Développement Web",
      skills: ["HTML/CSS", "JavaScript", "React", "PHP", "Laravel"]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Bases de Données",
      skills: ["MySQL", "PostgreSQL", "MongoDB"]
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Technologies IoT",
      skills: ["Arduino", "Raspberry Pi", "Capteurs", "MQTT"]
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Autres Compétences",
      skills: ["Python", "C/C++", "Git", "Docker", "Blockchain"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 md:px-12 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Compétences Techniques
          </h2>
          <p className="text-muted-foreground text-lg">
            Technologies et outils que je maîtrise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="p-6 hover-lift bg-card border-border"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 text-primary rounded-lg">
                  {category.icon}
                </div>
                <h3 className="font-bold text-card-foreground">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li 
                    key={skillIndex} 
                    className="text-sm text-muted-foreground flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
