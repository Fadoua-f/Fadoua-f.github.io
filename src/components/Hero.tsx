import { ArrowDown, Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary to-accent/20 text-primary-foreground relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Photo Section - Plus grande et créative */}
          <div className="order-2 md:order-1 flex justify-center">
            <div className="relative group animate-float">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-accent via-accent/50 to-accent rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition duration-1000 animate-pulse-glow"></div>
              
              {/* Rotating border */}
              <div className="absolute -inset-2 bg-gradient-to-r from-accent via-primary-foreground to-accent rounded-full opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              
              {/* Photo container */}
              <div className="relative w-80 h-80 md:w-[28rem] md:h-[28rem] rounded-full overflow-hidden border-4 border-primary-foreground shadow-2xl transform group-hover:scale-105 transition duration-700">
                <img 
                  src={profilePhoto} 
                  alt="Fadoua El Mengoug - Ingénieure en Transformation Digitale" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-6 py-3 rounded-full font-bold shadow-lg transform rotate-12 group-hover:rotate-0 transition duration-500">
                Disponible
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="order-1 md:order-2 space-y-8 text-center md:text-left">
            <div className="space-y-4">
              <p className="text-accent text-xl font-semibold animate-fade-in tracking-wide">
                Bonjour, je suis
              </p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight animate-fade-in bg-gradient-to-r from-primary-foreground via-accent to-primary-foreground bg-clip-text text-transparent">
                Fadoua El Mengoug
              </h1>
              <p className="text-2xl md:text-4xl text-primary-foreground/90 animate-fade-in font-light">
                Ingénieure en Transformation Digitale
              </p>
            </div>

            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl animate-fade-in leading-relaxed">
              Passionnée par l'innovation technologique et la création de solutions digitales 
              qui transforment les industries. Spécialisée en développement web, IoT et optimisation.
            </p>

            <div className="flex gap-4 justify-center md:justify-start animate-fade-in flex-wrap">
              <a href="#contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  <Mail className="w-5 h-5 mr-2" />
                  Me Contacter
                </Button>
              </a>
              <a 
                href="https://www.linkedin.com/in/fadoua-el-mengoug" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="border-2 border-accent text-primary-foreground hover:bg-accent hover:text-accent-foreground shadow-lg transform hover:scale-105 transition-all duration-300">
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
                className="text-primary-foreground/70 hover:text-accent transition-all duration-300 transform hover:scale-125"
              >
                <Github className="w-7 h-7" />
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
