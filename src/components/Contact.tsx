import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 md:px-12 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Contactez-Moi
          </h2>
          <p className="text-muted-foreground text-lg">
            Envie de collaborer ? N'hésitez pas à me contacter
          </p>
        </div>

        <Card className="p-8 md:p-12 bg-card border-border hover-glow">
          <div className="space-y-4">
            <a 
              href="mailto:elmengougfadwa2003@gmail.com"
              className="flex items-center gap-4 p-5 rounded-xl hover:bg-gradient-to-r hover:from-accent/10 hover:to-accent/5 transition-all duration-300 group border border-transparent hover:border-accent/20"
            >
              <div className="p-4 bg-gradient-to-br from-accent/20 to-accent/10 text-accent rounded-xl group-hover:from-accent group-hover:to-accent/80 group-hover:text-accent-foreground transition-all duration-300 transform group-hover:scale-110 shadow-md">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-card-foreground group-hover:text-accent transition-colors text-lg">Email</p>
                <p className="text-muted-foreground">elmengougfadwa2003@gmail.com</p>
              </div>
            </a>

            <a 
              href="tel:+212633773434"
              className="flex items-center gap-4 p-5 rounded-xl hover:bg-gradient-to-r hover:from-accent/10 hover:to-accent/5 transition-all duration-300 group border border-transparent hover:border-accent/20"
            >
              <div className="p-4 bg-gradient-to-br from-accent/20 to-accent/10 text-accent rounded-xl group-hover:from-accent group-hover:to-accent/80 group-hover:text-accent-foreground transition-all duration-300 transform group-hover:scale-110 shadow-md">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-card-foreground group-hover:text-accent transition-colors text-lg">Téléphone</p>
                <p className="text-muted-foreground">+212-6-33-77-34-34</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-5 rounded-xl border border-transparent">
              <div className="p-4 bg-gradient-to-br from-accent/20 to-accent/10 text-accent rounded-xl shadow-md">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-card-foreground text-lg">Localisation</p>
                <p className="text-muted-foreground">Casablanca, Maroc</p>
              </div>
            </div>

            <div className="pt-6 border-t border-border">
              <p className="text-center text-muted-foreground mb-6 text-lg">Suivez-moi sur</p>
              <div className="flex gap-4 justify-center flex-wrap">
                <a 
                  href="https://www.linkedin.com/in/fadoua-el-mengoug" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="bg-accent hover:bg-accent/90 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </Button>
                </a>
                <a 
                  href="https://github.com/Fadoua-f" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button size="lg" variant="outline" className="border-2 border-accent hover:bg-accent hover:text-accent-foreground shadow-lg transform hover:scale-105 transition-all duration-300">
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
