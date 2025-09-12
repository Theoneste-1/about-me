"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowDown, Download, Github, Linkedin, Mail, MapPin } from "lucide-react"
import { useEffect, useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { ScrollAnimation } from "@/components/scroll-animations"

const skills = [
  "TypeScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Python",
  "Java",
  "PostgreSQL",
  "Express.js",
  "Django",
  "Spring Boot",
  "Cybersecurity",
  "Cryptography",
  "Web Exploitation",
  "Malware Analysis",
]

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "mailto:dufitimana.theoneste@example.com", label: "Email" },
]

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute top-1/4 right-1/4 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollAnimation animation="fade-in">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary to-accent p-1 hover-lift">
            <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
              <img
                src="/assets/images/theo.png"
                alt="Dufitimana Theoneste"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          {/* Location */}
          <ScrollAnimation animation="slide-up" delay={200}>
            <div className="flex items-center justify-center gap-2 mb-4 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>{t("hero.location")}</span>
            </div>
          </ScrollAnimation>

          {/* Main Heading */}
          <ScrollAnimation animation="slide-up" delay={400}>
            <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-foreground mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              {t("hero.title")}
            </h1>
          </ScrollAnimation>

          {/* Subtitle */}
          <ScrollAnimation animation="slide-up" delay={600}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              {t("hero.subtitle")}
            </p>
          </ScrollAnimation>

          {/* Skills Tags */}
          <ScrollAnimation animation="fade-in" delay={800}>
            <div className="flex flex-wrap justify-center gap-2 mb-8 max-w-4xl mx-auto">
              {skills.map((skill, index) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="animate-fade-in hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default hover-lift"
                  style={{ animationDelay: `${index * 0.1 + 1}s` }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </ScrollAnimation>

          {/* CTA Buttons */}
          <ScrollAnimation animation="slide-up" delay={1200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="gap-2 hover-lift">
                <Download className="w-4 h-4" />
                {t("hero.downloadResume")}
              </Button>
              <Button variant="outline" size="lg" className="gap-2 bg-transparent hover-lift">
                {t("hero.viewProjects")}
              </Button>
            </div>
          </ScrollAnimation>

          {/* Social Links */}
          <ScrollAnimation animation="fade-in" delay={1400}>
            <div className="flex justify-center gap-6">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 border border-border hover-lift"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </ScrollAnimation>
        </ScrollAnimation>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
