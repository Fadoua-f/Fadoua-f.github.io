import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const CVHeader = () => {
  return (
    <header className="bg-sidebar-header text-sidebar-primary py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="relative">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-sidebar-primary shadow-lg">
              <img 
                src={profilePhoto} 
                alt="Fadoua El Mengoug" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">
              FADOUA EL MENGOUG
            </h1>
            <p className="text-xl text-sidebar-primary/80 mb-6">
              Élève Ingénieure en Transformation Digitale Industrielle
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm">
              <a href="mailto:elmengougfadwa2003@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail className="w-4 h-4" />
                <span>elmengougfadwa2003@gmail.com</span>
              </a>
              <a href="tel:+212633773434" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="w-4 h-4" />
                <span>+212-6-33-77-34-34</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Casablanca, Maroc</span>
              </div>
            </div>
            
            <div className="flex gap-4 mt-4 justify-center md:justify-start">
              <a 
                href="https://www.linkedin.com/in/fadoua-el-mengoug" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-sidebar-primary/10 hover:bg-sidebar-primary/20 rounded-lg transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a 
                href="https://github.com/Fadoua-f" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-sidebar-primary/10 hover:bg-sidebar-primary/20 rounded-lg transition-colors"
              >
                <Github className="w-5 h-5" />
                <span className="text-sm">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default CVHeader;
