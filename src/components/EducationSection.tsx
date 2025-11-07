import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2 flex items-center gap-2">
        <GraduationCap className="w-6 h-6" />
        FORMATION
      </h2>
      
      <div className="space-y-4">
        <Card className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
          <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
            <h3 className="text-lg font-semibold text-card-foreground">Cycle Ingénieur</h3>
            <span className="text-sm font-medium px-3 py-1 bg-primary text-primary-foreground rounded-full">
              2026
            </span>
          </div>
          <p className="text-secondary-foreground font-medium mb-1">
            Ecole Nationale des Sciences Appliquées Beni Mellal
          </p>
          <p className="text-muted-foreground text-sm">
            Obtention du diplôme d'ingénieur d'État en Transformation Digitale Industrielle
          </p>
        </Card>

        <Card className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
          <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
            <h3 className="text-lg font-semibold text-card-foreground">Baccalauréat Scientifique</h3>
            <span className="text-sm font-medium px-3 py-1 bg-secondary text-secondary-foreground rounded-full">
              2019 - 2020
            </span>
          </div>
          <p className="text-secondary-foreground font-medium">
            Lycée Alhoussin Beno Ali, Casablanca
          </p>
        </Card>
      </div>
    </section>
  );
};

export default EducationSection;
