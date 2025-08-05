import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Zap } from "lucide-react";

const About = () => {
  const skills = [
    { category: "Frontend", icon: Globe, items: ["React", "Redux", "TypeScript", "Tailwind CSS", "HTML/CSS", "JavaScript"] },
    { category: "Backend", icon: Database, items: ["Node.js", "Flask", "Python", "PostgreSQL", "Supabase", "Firebase"] },
    { category: "Tools", icon: Code, items: ["Git", "VS Code", "Docker", "Vercel", "Lovable.dev", "Postman"] },
    { category: "Concepts", icon: Zap, items: ["Full-Stack Development", "REST APIs", "Database Design", "Responsive Design", "Version Control"] }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate Full-Stack Web Developer and recent graduate of the ALX Software Engineering Program. 
            With a strong foundation in modern web technologies, I enjoy building scalable applications that solve real-world problems.
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
                    My journey into software development began with curiosity and evolved into a passion for creating 
                    digital solutions. Through the intensive ALX Software Engineering Program, I gained hands-on 
                    experience with modern development practices and technologies.
                  </p>
                  <p>
                    I specialize in full-stack development with a focus on React-based frontend applications and 
                    robust backend systems using technologies like Supabase, Flask, and Node.js. I'm particularly 
                    interested in building user-centric applications that provide seamless experiences.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                    projects, or sharing knowledge with the developer community. I believe in continuous learning 
                    and staying current with industry trends.
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
                    <span>Completed ALX Software Engineering Program with focus on full-stack development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></span>
                    <span>Built multiple production-ready applications using React and Supabase</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    <span>Experience with database design, API development, and deployment strategies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></span>
                    <span>Strong problem-solving skills and attention to detail in code quality</span>
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