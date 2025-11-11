import { ArrowDown, Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 gradient-bg opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo Section - Plus grande et créative */}
          <div className="order-2 md:order-1 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent to-secondary rounded-full blur-lg opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-accent shadow-2xl">
                <img 
                  src={profilePhoto} 
                  alt="Fadoua El Mengoug" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                />
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="order-1 md:order-2 space-y-6 text-center md:text-left">
            <div className="space-y-2">
              <p className="text-accent text-lg font-medium animate-fade-in">
              
              </p>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight animate-fade-in">
                ELMENGOUG Fadoua
              </h1>
              <p className="text-2xl md:text-3xl text-primary-foreground/80 animate-fade-in">
               Élève Ingénieure en Transformation Digitale
              </p>
            </div>

            <p className="text-lg text-primary-foreground/70 max-w-xl animate-fade-in">
              Passionnée par l'innovation technologique et la création de solutions digitales 
              qui transforment les industries. 
            </p>

            <div className="flex gap-4 justify-center md:justify-start animate-fade-in">
              <a href="#contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Mail className="w-5 h-5 mr-2" />
                  Me Contacter
                </Button>
              </a>
              <a 
                href="https://www.linkedin.com/in/fadoua-el-mengoug" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="border-accent text-primary-foreground hover:bg-accent/10">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </Button>
              </a>
            </div>

            <div className="flex gap-6 justify-center md:justify-start pt-4">
              <a 
                href="https://github.com/Fadoua-f" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-accent transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-primary-foreground/50 hover:text-accent transition-colors">
            <ArrowDown className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
