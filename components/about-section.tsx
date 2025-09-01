"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Shield, Globe, Zap, Users, Award } from "lucide-react"

const techStacks = [
  {
    category: "Frontend",
    icon: Globe,
    technologies: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
    color: "text-blue-500",
  },
  {
    category: "Backend",
    icon: Code,
    technologies: ["Node.js", "Express.js", "Python", "Django", "Java", "Spring Boot"],
    color: "text-green-500",
  },
  {
    category: "Database",
    icon: Zap,
    technologies: ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
    color: "text-yellow-500",
  },
  {
    category: "Security",
    icon: Shield,
    technologies: ["Cybersecurity", "Cryptography", "Web Exploitation", "Malware Analysis"],
    color: "text-red-500",
  },
  {
    category: "Tools & Others",
    icon: Users,
    technologies: ["Git", "Docker", "Linux", "AWS", "CI/CD", "Testing"],
    color: "text-purple-500",
  },
]

const highlights = [
  {
    icon: Award,
    title: "Full-Stack Expertise",
    description: "Proficient in modern web technologies from frontend frameworks to backend architectures",
  },
  {
    icon: Shield,
    title: "Cybersecurity Focus",
    description: "Specialized knowledge in web security, cryptography, and malware analysis",
  },
  {
    icon: Code,
    title: "Multi-Language Proficiency",
    description: "Experienced in JavaScript, TypeScript, Python, Java, and C++ development",
  },
  {
    icon: Globe,
    title: "Modern Architecture",
    description: "Building scalable applications with clean code and best practices",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">About Me</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate software engineer with expertise in full-stack development and cybersecurity. Currently
            studying at Rwanda Coding Academy, I combine technical skills with a deep understanding of security
            principles to build robust, secure applications.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => (
            <Card
              key={highlight.title}
              className="group hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <highlight.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="space-y-8">
          <h3 className="font-heading font-bold text-2xl md:text-3xl text-center text-foreground mb-8">
            Technical Skills
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStacks.map((stack, index) => (
              <Card
                key={stack.category}
                className="group hover:shadow-lg transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg bg-card-foreground/5 ${stack.color}`}>
                      <stack.icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-heading font-semibold text-lg">{stack.category}</h4>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {stack.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Personal Statement */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <blockquote className="text-lg md:text-xl text-muted-foreground italic leading-relaxed">
                "I believe in writing clean, secure code that not only solves problems but also stands the test of time.
                My goal is to bridge the gap between innovative development and robust security practices."
              </blockquote>
              <cite className="block mt-4 font-heading font-semibold text-foreground">— Dufitimana Theoneste</cite>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
