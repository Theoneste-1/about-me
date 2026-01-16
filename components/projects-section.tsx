"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Eye, Shield, Globe, Smartphone, Code2, Lock, Download, Store } from "lucide-react"
import { useState } from "react"

const projects = [
  {
    id: 1,
    title: "SecureChat Pro",
    description:
      "End-to-end encrypted messaging application with advanced security features including perfect forward secrecy and zero-knowledge architecture.",
    image: "/project-securechat.png",
    technologies: ["React", "Node.js", "WebRTC", "Cryptography", "Socket.io", "PostgreSQL"],
    category: "Full-Stack",
    icon: Lock,
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    id: 2,
    title: "VulnScanner",
    description:
      "Automated web vulnerability scanner that detects common security flaws including XSS, SQL injection, and CSRF vulnerabilities.",
    image: "/project-vulnscanner.png",
    technologies: ["Python", "Django", "Selenium", "BeautifulSoup", "SQLite", "Docker"],
    category: "Cybersecurity",
    icon: Shield,
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    id: 3,
    title: "EcoTrack Rwanda",
    description:
      "Environmental monitoring platform for tracking air quality, water pollution, and deforestation across Rwanda with real-time data visualization.",
    image: "/project-ecotrack.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Chart.js", "Mapbox"],
    category: "Full-Stack",
    icon: Globe,
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    id: 4,
    title: "CryptoWallet Mobile",
    description:
      "Secure cryptocurrency wallet mobile application with biometric authentication and multi-currency support.",
    image: "/project-cryptowallet.png",
    technologies: ["React Native", "TypeScript", "Expo", "Blockchain APIs", "Biometrics"],
    category: "Mobile",
    icon: Smartphone,
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    id: 5,
    title: "Malware Analysis Tool",
    description:
      "Static and dynamic malware analysis platform with sandboxing capabilities and threat intelligence integration.",
    image: "/project-malware.png",
    technologies: ["Python", "Flask", "Docker", "YARA", "VirusTotal API", "Machine Learning"],
    category: "Cybersecurity",
    icon: Shield,
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    id: 6,
    title: "DevOps Dashboard",
    description:
      "Comprehensive DevOps monitoring dashboard with CI/CD pipeline visualization and infrastructure metrics.",
    image: "/project-devops.png",
    technologies: ["Vue.js", "Express.js", "MongoDB", "Docker", "Kubernetes", "Prometheus"],
    category: "Full-Stack",
    icon: Code2,
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    id: 7,
    title: "Ndakwizeye Route",
    description:
      "A comprehensive transport management system ensuring safety of couriers and shipments. Features real-time tracking, QR scanning, and HR management for drivers and officers.",
    image: "/assets/images/swift_route.png",
    technologies: ["React Native", "Expo", "NestJS", "PostgreSQL", "Next.js", "TypeScript"],
    category: "Mobile",
    icon: Smartphone,
    github: "https://github.com/Theoneste-1",
    demo: "#",
    appStoreUrl: "#",
    playStoreUrl: "#",
    featured: true,
  },
]

const categories = ["All", "Full-Stack", "Cybersecurity", "Mobile"]

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects = projects.filter((project) => activeCategory === "All" || project.category === activeCategory)

  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my work in software engineering, cybersecurity, and full-stack development. Each project
            demonstrates different aspects of my technical expertise and problem-solving abilities.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="transition-all duration-300"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Projects Grid */}
        <div className="mb-16">
          <h3 className="font-heading font-semibold text-2xl text-foreground mb-8 text-center">Featured Work</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Card
                key={project.id}
                className="group hover:shadow-2xl transition-all duration-500 overflow-hidden animate-fade-in border-0 bg-card/50 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4">
                    <div className="p-2 rounded-full bg-primary/20 backdrop-blur-sm">
                      <project.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  {/* Hover Actions */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" variant="secondary" className="gap-2">
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                    <Button size="sm" className="gap-2">
                      <Eye className="w-4 h-4" />
                      Demo
                    </Button>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading font-semibold text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <Badge variant="outline" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-2">
                    {/* Web Links */}
                    {project.github && (
                      <Button variant="outline" size="sm" className="flex-1 gap-2 bg-transparent" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.demo && project.demo !== "#" && (
                      <Button size="sm" className="flex-1 gap-2" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                          Visit Site
                        </a>
                      </Button>
                    )}

                    {/* Mobile App Links */}
                    {/* @ts-ignore */}
                    {project.appStoreUrl && (
                      <Button size="sm" className="flex-1 gap-2 bg-black hover:bg-zinc-800 text-white" asChild>
                        <a href={project.appStoreUrl} target="_blank" rel="noopener noreferrer">
                          <Store className="w-4 h-4" />
                          App Store
                        </a>
                      </Button>
                    )}
                    {/* @ts-ignore */}
                    {project.playStoreUrl && (
                      <Button size="sm" className="flex-1 gap-2 bg-green-600 hover:bg-green-700 text-white" asChild>
                        <a href={project.playStoreUrl} target="_blank" rel="noopener noreferrer">
                          <Download className="w-4 h-4" />
                          Play Store
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div>
          <h3 className="font-heading font-semibold text-2xl text-foreground mb-8 text-center">All Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.id}
                className="group hover:shadow-lg transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <project.icon className="w-4 h-4 text-primary" />
                    <h3 className="font-heading font-semibold text-lg group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-3 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="flex-1 gap-2 text-xs">
                      <Github className="w-3 h-3" />
                      Code
                    </Button>
                    <Button variant="ghost" size="sm" className="flex-1 gap-2 text-xs">
                      <ExternalLink className="w-3 h-3" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="font-heading font-semibold text-xl mb-4">Interested in collaborating?</h3>
              <p className="text-muted-foreground mb-6">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
              <Button size="lg" className="gap-2">
                <ExternalLink className="w-4 h-4" />
                Get In Touch
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
