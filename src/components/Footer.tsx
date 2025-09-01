import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gradient mb-4">KIBOTECH</h3>
              <p className="text-muted-foreground leading-relaxed">
                Empowering students and shaping futures through hands-on learning experiences and industry partnerships.
              </p>
            </div>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Github className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-3">
              {["About Us", "Our Services", "Internships", "Training Programs", "Success Stories"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-muted-foreground hover:text-primary transition-smooth"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground">Services</h4>
            <div className="space-y-3">
              {["Web Development", "Mobile Development", "Data Science", "AI/ML Training", "Cloud Computing"].map((service) => (
                <a
                  key={service}
                  href="#"
                  className="block text-muted-foreground hover:text-primary transition-smooth"
                >
                  {service}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span>hello@kibotech.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Tech Hub, Innovation City</span>
              </div>
            </div>
            <Button variant="hero" size="sm" className="w-full">
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground">
                © {new Date().getFullYear()} KIBOTECH. All rights reserved.
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                Terms of Service
              </a>
              <Button
                variant="ghost"
                size="icon"
                onClick={scrollToTop}
                className="hover:text-primary"
              >
                <ArrowUp className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;