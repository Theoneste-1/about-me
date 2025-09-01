"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin, Building, Award, Users, Code } from "lucide-react"

const experiences = [
  {
    id: 1,
    title: "Junior Full-Stack Developer",
    company: "TechHub Rwanda",
    location: "Kigali, Rwanda",
    period: "Jun 2024 - Present",
    type: "Internship",
    description:
      "Developing web applications using React.js and Node.js. Collaborated with senior developers on client projects and contributed to the company's internal tools.",
    achievements: [
      "Built 3 client websites using Next.js and TypeScript",
      "Improved application performance by 40% through code optimization",
      "Implemented responsive designs for mobile-first approach",
    ],
    technologies: ["React.js", "Next.js", "Node.js", "TypeScript", "PostgreSQL"],
    logo: "/company-techhub.png",
  },
  {
    id: 2,
    title: "Cybersecurity Research Assistant",
    company: "Rwanda Coding Academy",
    location: "Kigali, Rwanda",
    period: "Jan 2024 - May 2024",
    type: "Research",
    description:
      "Conducted research on web application vulnerabilities and developed security assessment tools. Assisted in cybersecurity curriculum development.",
    achievements: [
      "Developed automated vulnerability scanner for web applications",
      "Published research paper on XSS prevention techniques",
      "Mentored 15+ junior students in cybersecurity fundamentals",
    ],
    technologies: ["Python", "Burp Suite", "OWASP", "Kali Linux", "Wireshark"],
    logo: "/company-rca.png",
  },
  {
    id: 3,
    title: "Freelance Web Developer",
    company: "Self-Employed",
    location: "Remote",
    period: "Sep 2023 - Dec 2023",
    type: "Freelance",
    description:
      "Provided web development services to local businesses and startups. Specialized in creating modern, responsive websites and e-commerce solutions.",
    achievements: [
      "Delivered 8 successful projects for local businesses",
      "Achieved 100% client satisfaction rate",
      "Generated $5,000+ in revenue through freelance work",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "WordPress", "Shopify"],
    logo: "/company-freelance.png",
  },
  {
    id: 4,
    title: "IT Support Volunteer",
    company: "Community Tech Center",
    location: "Gisenyi, Rwanda",
    period: "Jun 2023 - Aug 2023",
    type: "Volunteer",
    description:
      "Provided technical support to community members and maintained computer lab equipment. Taught basic computer skills to local youth.",
    achievements: [
      "Supported 200+ community members with technical issues",
      "Organized 5 coding workshops for local youth",
      "Improved lab efficiency by implementing new maintenance procedures",
    ],
    technologies: ["Windows", "Linux", "Hardware Troubleshooting", "Network Setup"],
    logo: "/company-community.png",
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-card/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Work Experience
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My professional journey in software development and cybersecurity, from internships to freelance projects,
            building real-world experience and contributing to meaningful projects.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-0.5"></div>

          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className={`relative flex items-center mb-12 animate-fade-in ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background transform -translate-x-2 md:-translate-x-2 z-10"></div>

              {/* Content Card */}
              <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}>
                <Card className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <img
                          src={experience.logo || "/placeholder.svg"}
                          alt={experience.company}
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-heading font-semibold text-lg group-hover:text-primary transition-colors">
                            {experience.title}
                          </h3>
                          <Badge variant="outline" className="text-xs">
                            {experience.type}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                          <div className="flex items-center gap-1">
                            <Building className="w-4 h-4" />
                            {experience.company}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {experience.location}
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <CalendarDays className="w-4 h-4" />
                          {experience.period}
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <p className="text-muted-foreground leading-relaxed mb-4">{experience.description}</p>

                    {/* Key Achievements */}
                    <div className="mb-4">
                      <h4 className="font-heading font-medium text-sm mb-2 flex items-center gap-2">
                        <Award className="w-4 h-4 text-primary" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-1">
                        {experience.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-heading font-medium text-sm mb-2 flex items-center gap-2">
                        <Code className="w-4 h-4 text-primary" />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="font-heading font-semibold text-xl mb-4">Professional Skills Developed</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
                    <Code className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-heading font-medium text-sm">Full-Stack Development</h4>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-heading font-medium text-sm">Cybersecurity Research</h4>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-heading font-medium text-sm">Team Collaboration</h4>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
                    <Building className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-heading font-medium text-sm">Client Relations</h4>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
