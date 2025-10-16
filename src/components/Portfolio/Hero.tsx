import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import { createMailtoLink, obfuscateEmail } from "@/lib/obfuscate";

const Hero = () => {
  // Obfuscated email to prevent bot scraping
  const obfuscatedEmail = obfuscateEmail("dmmuchai@gmail.com");
  
  // Handle email contact with obfuscation
  const handleContactMe = () => {
    const mailtoLink = createMailtoLink(
      obfuscatedEmail,
      "Portfolio Contact",
      "Hi Dennis, I'd like to get in touch regarding..."
    );
    window.location.href = mailtoLink;
  };

  // Handle CV download using Google Drive link
  const handleDownloadCV = () => {
    // Convert Google Drive view link to direct download link
    const fileId = "1v-t7WJOyEQb2RXw4dndT7Cwz0_bdnlu0";
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    window.open(downloadUrl, '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted to-accent/10 px-4">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-8 text-center lg:text-left">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Dennis Muchai
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground">
              Software Engineer
            </h2>
            <p className="text-lg text-foreground/80 max-w-lg mx-auto lg:mx-0">
              Software Engineer with a strong foundation in full-stack web development 
              through the ALX Software Engineering Plus Program. Skilled in building scalable 
              applications using modern technologies including Python, JavaScript, React, Node.js, Next.js, MySQL, and PostgreSQL. Transitioning from a successful career in banking, where I 
              developed expertise in problem-solving, client relationship management, and risk analysis. 
              Passionate about leveraging technology to create impactful digital solutions.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              variant="hero" 
              size="lg" 
              className="group"
              onClick={handleContactMe}
            >
              <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Contact Me
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="group"
              onClick={handleDownloadCV}
            >
              <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              Download CV
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center lg:justify-start">
            <a 
              href="https://github.com/dmuchai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border hover:shadow-card transition-all duration-300 hover:scale-110"
              aria-label="GitHub Profile"
            >
              <Github className="w-6 h-6 text-foreground" />
            </a>
            <a 
              href="https://linkedin.com/in/dennismuchai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border hover:shadow-card transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6 text-foreground" />
            </a>
            <button
              onClick={handleContactMe}
              className="p-3 rounded-full bg-card border hover:shadow-card transition-all duration-300 hover:scale-110"
              aria-label="Contact via Email"
            >
              <Mail className="w-6 h-6 text-foreground" />
            </button>
          </div>
        </div>

        {/* Profile Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary to-accent p-1">
              <img
                src={profilePhoto}
                alt="Dennis Muchai - Software Engineer"
                className="w-full h-full rounded-full object-cover bg-background"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;