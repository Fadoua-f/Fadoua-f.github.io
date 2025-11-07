import CVHeader from "@/components/CVHeader";
import ProfileSection from "@/components/ProfileSection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CVHeader />
      
      <main className="max-w-6xl mx-auto px-6 md:px-12 py-12">
        <ProfileSection />
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
      </main>
      
      <footer className="bg-sidebar-header text-sidebar-primary py-6 text-center">
        <p className="text-sm">
          © 2025 Fadoua El Mengoug - Tous droits réservés
        </p>
      </footer>
    </div>
  );
};

export default Index;
