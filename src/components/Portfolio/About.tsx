import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Zap } from "lucide-react";

const About = () => {
  const skills = [
    { category: "Frontend", icon: Globe, items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"] },
    { category: "Backend", icon: Database, items: ["Node.js", "Flask", "Python", "REST APIs"] },
    { category: "Database & Cloud", icon: Code, items: ["PostgreSQL", "Supabase", "Firebase", "Vercel", "Supabase Auth"] },
    { category: "AI & Delivery", icon: Zap, items: ["Prompt Engineering", "LLM Integrations", "AI-Assisted Coding", "Automation Workflows", "Git", "Docker", "Stripe"] }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Software Engineer focused on scalable web applications and AI-enabled product delivery.
            I combine strong business-domain understanding with modern full-stack engineering to
            build practical platforms in PropTech, e-commerce, and logistics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-6">
            <Card className="p-6 border-border/50 hover:shadow-card transition-all duration-300">
              <CardContent className="p-0 space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">My Journey</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I transitioned from banking operations and risk-focused roles into software engineering
                    to build the kinds of systems I used to manage manually. That shift gave me a strong
                    product mindset grounded in operations, compliance, and reliability.
                  </p>
                  <p>
                    Through ALX Software Engineering Plus and focused AI-for-developers training, I built
                    production-style projects across React, Node.js, Flask, Supabase, and PostgreSQL.
                    I now specialize in AI-assisted development workflows that increase delivery speed
                    without compromising code quality.
                  </p>
                  <p>
                    My work centers on platforms that solve real-world workflow pain points: property
                    marketplaces, rent operations, relocation planning, and online commerce.
                    I value clean UX, measurable outcomes, and maintainable systems.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Experience Highlights */}
            <Card className="p-6 border-border/50 hover:shadow-card transition-all duration-300">
              <CardContent className="p-0 space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">Experience Highlights</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    <span>ALX Software Engineering Plus (2024-2025) with 20+ full-stack, cloud, and DevOps projects</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></span>
                    <span>ALX AI for Developers I & II (2025): prompt engineering, agentic workflows, and AI-assisted testing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    <span>Family Bank Ltd (2009-2023): Senior Relationship Officer and Operations Supervisor</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></span>
                    <span>Built and deployed products in housing, rent management, moving logistics, and e-commerce</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Skills Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground text-center lg:text-left">
              Technical Skills
            </h3>
            
            {skills.map((skillGroup, index) => {
              const IconComponent = skillGroup.icon;
              return (
                <Card key={index} className="p-6 border-border/50 hover:shadow-card transition-all duration-300 group">
                  <CardContent className="p-0 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <h4 className="text-lg font-semibold text-foreground">
                        {skillGroup.category}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant="secondary" 
                          className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;