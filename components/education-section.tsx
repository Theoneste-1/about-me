"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin, GraduationCap, Award, BookOpen } from "lucide-react"

const education = [
  {
    id: 1,
    institution: "Rwanda Coding Academy",
    degree: "High School Diploma in Computer Science",
    location: "Kigali, Rwanda",
    period: "2023 - 2026",
    status: "Current",
    description:
      "Comprehensive computer science education focusing on software development, cybersecurity, and modern programming practices. Active participant in coding competitions and tech projects.",
    achievements: [
      "Maintained 95%+ average in all technical subjects",
      "Led development team for school's annual tech showcase",
      "Won 1st place in National Cybersecurity Competition 2024",
      "Mentored 20+ junior students in programming fundamentals",
    ],
    subjects: [
      "Data Structures & Algorithms",
      "Web Development",
      "Cybersecurity Fundamentals",
      "Database Management",
      "Software Engineering",
      "Network Security",
    ],
    logo: "assets/images/rca.png",
  },
  {
    id: 2,
    institution: "Ecole des Sciences de Gisenyi",
    degree: "Ordinary Level Certificate",
    location: "Gisenyi, Rwanda",
    period: "2020 - 2023",
    status: "Completed",
    description:
      "Completed ordinary level education with focus on mathematics, sciences, and computer studies. Developed strong analytical and problem-solving skills.",
    achievements: [
      "Graduated with distinction in Mathematics and Sciences",
      "Computer Club President (2022-2023)",
      "Organized first-ever school coding workshop",
      "Represented school in regional science fair",
    ],
    subjects: ["Mathematics", "Physics", "Chemistry", "Computer Studies", "English", "French"],
    logo: "assets/images/esg.jpeg",
  },
]

const certifications = [
  {
    name: "CompTIA Security+ (In Progress)",
    issuer: "CompTIA",
    date: "Expected 2024",
    status: "In Progress",
  },
  {
    name: "Ethical Hacking Essentials",
    issuer: "EC-Council",
    date: "2024",
    status: "Completed",
  },
  {
    name: "Full-Stack Web Development",
    issuer: "freeCodeCamp",
    date: "2023",
    status: "Completed",
  },
  {
    name: "Python Programming",
    issuer: "Coursera",
    date: "2023",
    status: "Completed",
  },
]

export function EducationSection() {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">Education</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My academic journey in computer science and technology, building a strong foundation in both theoretical
            knowledge and practical skills.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-8 mb-16">
          {education.map((edu, index) => (
            <Card
              key={edu.id}
              className="group hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <img
                      src={edu.logo || "/placeholder.svg"}
                      alt={edu.institution}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-heading font-semibold text-xl group-hover:text-primary transition-colors">
                        {edu.institution}
                      </h3>
                      <Badge variant={edu.status === "Current" ? "default" : "secondary"} className="text-xs">
                        {edu.status}
                      </Badge>
                    </div>
                    <h4 className="font-medium text-lg text-muted-foreground mb-2">{edu.degree}</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <CalendarDays className="w-4 h-4" />
                        {edu.period}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-muted-foreground leading-relaxed mb-6">{edu.description}</p>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Achievements */}
                  <div>
                    <h4 className="font-heading font-medium text-sm mb-3 flex items-center gap-2">
                      <Award className="w-4 h-4 text-primary" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Subjects */}
                  <div>
                    <h4 className="font-heading font-medium text-sm mb-3 flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-primary" />
                      Key Subjects
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.subjects.map((subject) => (
                        <Badge key={subject} variant="outline" className="text-xs">
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <h3 className="font-heading font-semibold text-2xl text-center text-foreground mb-8">
            Certifications & Courses
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={cert.name}
                className="group hover:shadow-md transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-heading font-semibold text-base group-hover:text-primary transition-colors">
                          {cert.name}
                        </h4>
                        <Badge variant={cert.status === "Completed" ? "default" : "secondary"} className="text-xs">
                          {cert.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                      <p className="text-xs text-muted-foreground">{cert.date}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Academic Stats */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="font-heading font-semibold text-xl mb-6">Academic Highlights</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">95%+</div>
                  <div className="text-sm text-muted-foreground">Average Grade</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">4+</div>
                  <div className="text-sm text-muted-foreground">Certifications</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">20+</div>
                  <div className="text-sm text-muted-foreground">Students Mentored</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">1st</div>
                  <div className="text-sm text-muted-foreground">Competition Place</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
