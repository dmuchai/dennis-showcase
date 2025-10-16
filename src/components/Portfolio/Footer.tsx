import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { createMailtoLink, obfuscateEmail } from "@/lib/obfuscate";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const obfuscatedEmail = obfuscateEmail("dmmuchai@gmail.com");
  
  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const mailtoLink = createMailtoLink(obfuscatedEmail, "Portfolio Contact");
    window.location.href = mailtoLink;
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Dennis Muchai
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Full-Stack Web Developer passionate about creating modern, 
              scalable applications that make a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2">
              {[
                { name: "Projects", href: "#projects" },
                { name: "About", href: "#about" },
                { name: "Contact", href: "#contact" }
              ].map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Connect</h4>
            <div className="flex gap-4">
              <a 
                href="https://github.com/dmuchai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://linkedin.com/in/dmmuchai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <button 
                onClick={handleEmailClick}
                className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                aria-label="Contact via Email"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Dennis Muchai. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm flex items-center gap-1">
              Built with <Heart className="w-4 h-4 text-red-500" /> using React & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
