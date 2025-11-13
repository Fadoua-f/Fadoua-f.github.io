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
          
          </p>
        </div>

        <Card className="p-8 md:p-12 bg-card border-border">
          <div className="space-y-6">
            <a 
              href="mailto:elmengougfadwa2003@gmail.com"
              className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent/10 transition-colors group"
            >
              <div className="p-3 bg-primary/10 text-primary rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-card-foreground">Email</p>
                <p className="text-muted-foreground">elmengougfadwa2003@gmail.com</p>
              </div>
            </a>

            <a 
              href="tel:+212633327734"
              className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent/10 transition-colors group"
            >
              <div className="p-3 bg-primary/10 text-primary rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-card-foreground">Téléphone</p>
                <p className="text-muted-foreground">+212-6-33-77-34-34</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 rounded-lg">
              <div className="p-3 bg-primary/10 text-primary rounded-full">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-card-foreground">Localisation</p>
                <p className="text-muted-foreground">Casablanca, Maroc</p>
              </div>
            </div>

            <div className="pt-6 border-t border-border">
              <p className="text-center text-muted-foreground mb-4">Suivez-moi sur</p>
              <div className="flex gap-4 justify-center">
                <a 
                  href="https://www.linkedin.com/in/fadoua-el-mengoug" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </Button>
                </a>
                <a 
                  href="https://github.com/Fadoua-f" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button size="lg" variant="outline">
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
