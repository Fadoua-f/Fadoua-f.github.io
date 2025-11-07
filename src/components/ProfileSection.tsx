import { Card } from "@/components/ui/card";

const ProfileSection = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">
        PROFIL
      </h2>
      <Card className="p-6 bg-card border-border">
        <p className="text-card-foreground leading-relaxed">
          Élève ingénieure en transformation digitale industrielle, je recherche un stage de fin d'études 
          au sein de votre organisation.
        </p>
      </Card>
    </section>
  );
};

export default ProfileSection;
