import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Grocery E-commerce Site",
      description: "Full-featured e-commerce platform for grocery shopping with user authentication, product management, shopping cart, and secure checkout functionality.",
      techStack: ["Flask", "Python", "PostgreSQL", "HTML/CSS", "JavaScript"],
      githubUrl: "https://github.com/dmuchai/grocery-ecommerce",
      liveUrl: "https://denncathy.co.ke",
      image: "🛒"
    },
    {
      title: "Rentify Kenya",
      description: "Housing rental application prototype connecting landlords with tenants. Features property listings, search filters, user profiles, and messaging system.",
      techStack: ["React", "Supabase", "TypeScript", "Tailwind CSS"],
      githubUrl: "https://github.com/dmuchai/rentify-kenya",
      liveUrl: "https://rentify-houses-kenya.vercel.app/",
      image: "🏠"
    },
    {
      title: "MoveEasy/Kenya Movers AI",
      description: "AI-powered moving service platform that connects customers with verified moving companies. Features intelligent matching, quote comparison, and booking management.",
      techStack: ["TypeScript", "Supabase", "React", "AI Integration", "Stripe"],
      githubUrl: "https://github.com/dmuchai/kenya-movers-ai",
      liveUrl: "https://moveeasy-kenya.lovable.app",
      image: "🚚"
    },
    {
      title: "Portfolio Website",
      description: "This responsive portfolio website showcasing my projects and skills, built with modern web technologies and deployed on Vercel.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
      githubUrl: "https://github.com/dennismuchai/dennis-showcase",
      liveUrl: "https://dennis-muchai.vercel.app",
      image: "💼"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-section">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work in full-stack development, featuring modern web applications 
            built with React, Supabase, and other cutting-edge technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:scale-105 border-border/50">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{project.image}</span>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button variant="outline" size="sm" asChild className="group/btn">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                      Code
                    </a>
                  </Button>
                  <Button variant="gradient" size="sm" asChild className="group/btn">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
