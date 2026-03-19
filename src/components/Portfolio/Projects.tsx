import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

// Cache-busting update: 2024-12-28T15:45:00Z - FORCE REFRESH
const Projects = () => {
  const projects = [
    {
      title: "KejaLink",
      description: "Marketplace connecting landlords and tenants with property listings, discovery filters, and messaging.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
      githubUrl: "https://github.com/dmuchai/kejalink",
      liveUrl: "https://kejalink.co.ke/",
      image: "🏠"
    },
    {
      title: "Landee",
      description: "Property management platform for rent tracking, tenant administration, and operational visibility.",
      techStack: ["React", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS"],
      githubUrl: "https://github.com/dmuchai/rent-management-system",
      liveUrl: "https://landee.kejalink.co.ke",
      image: "🏢"
    },
    {
      title: "MoveLink Moving Planner",
      description: "AI-powered relocation platform that helps users compare movers, generate estimates, and plan end-to-end moves.",
      techStack: ["React", "TypeScript", "Supabase", "AI Integration", "Stripe"],
      githubUrl: "https://github.com/dmuchai/kenya-movers-ai",
      liveUrl: "https://moving-planner-ke.vercel.app/",
      image: "🚚"
    },
    {
      title: "Denncathy Fresh Basket",
      description: "E-commerce platform with product catalog, cart flows, and integrated payment support for M-Pesa and cards.",
      techStack: ["Flask", "Python", "PostgreSQL", "REST APIs", "JavaScript"],
      githubUrl: "https://github.com/dmuchai/grocery-ecommerce",
      liveUrl: "https://denncathy.co.ke",
      image: "🛒"
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
            Selected products spanning property technology, logistics, and e-commerce,
            built with modern full-stack tools and AI-assisted workflows.
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
