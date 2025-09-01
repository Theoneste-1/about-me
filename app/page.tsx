import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { ExperienceSection } from "@/components/experience-section"
import { EducationSection } from "@/components/education-section"
import { ContactSection } from "@/components/contact-section"
import { ResumeSection } from "@/components/resume-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Main Content */}
      <main className="pt-16">
        <HeroSection />

        <AboutSection />

        <ProjectsSection />

        <ExperienceSection />

        <EducationSection />

        <ResumeSection />

        <ContactSection />
      </main>
    </div>
  )
}
