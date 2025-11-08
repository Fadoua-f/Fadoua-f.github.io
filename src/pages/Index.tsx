import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <Projects />
      <Contact />
      
      <footer className="bg-primary text-primary-foreground py-8 text-center">
        <p className="text-sm">
          © 2025 Fadoua El Mengoug - Portfolio
        </p>
      </footer>
    </div>
  );
};

export default Index;
