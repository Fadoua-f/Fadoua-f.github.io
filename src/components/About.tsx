import { Briefcase, GraduationCap, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Formation",
      description: "École Nationale des Sciences Appliquées de Beni Mellal"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Expérience",
      description: "Stages en développement web et transformation digitale"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "Projets en blockchain, IoT et optimisation logistique"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 md:px-12 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            À Propos de Moi
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Élève ingénieure passionnée par la transformation digitale et l'innovation technologique
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {highlights.map((item, index) => (
            <Card 
              key={index} 
              className="p-8 text-center hover-lift hover-glow bg-card border-border group cursor-pointer transform transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-accent to-accent/50 text-accent-foreground rounded-full mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-card-foreground group-hover:text-accent transition-colors">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-card border-border">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-3 text-card-foreground flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-primary" />
                Formation
              </h3>
              <div className="space-y-3 text-muted-foreground">
                <div>
                  <p className="font-semibold text-card-foreground">
                    Diplôme d'Ingénieur d'État - Transformation Digitale Industrielle
                  </p>
                  <p className="text-sm">ENSA Beni Mellal | 2022 - 2025</p>
                </div>
                <div>
                  <p className="font-semibold text-card-foreground">
                    Classes Préparatoires - MP
                  </p>
                  <p className="text-sm">Lycée Omar Ibn Abdelaziz, Oujda | 2020 - 2022</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3 text-card-foreground flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-primary" />
                Expériences
              </h3>
              <div className="space-y-3 text-muted-foreground">
                <div>
                  <p className="font-semibold text-card-foreground">Stage à INWI</p>
                  <p className="text-sm mb-2">Casablanca | Juillet 2024</p>
                  <p className="text-sm">Découverte de l'infrastructure réseau et des équipements télécoms</p>
                </div>
                <div>
                  <p className="font-semibold text-card-foreground">Stage chez ETIC TECHNOLOGIES</p>
                  <p className="text-sm mb-2">Casablanca | Juillet 2023</p>
                  <p className="text-sm">Développement d'une application web pour plateforme touristique</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
