"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, Eye, ExternalLink, Star, Award, Code, Shield } from "lucide-react"

const resumeStats = [
  { label: "Years of Experience", value: "2+", icon: Award },
  { label: "Projects Completed", value: "15+", icon: Code },
  { label: "Technologies Mastered", value: "20+", icon: Star },
  { label: "Security Certifications", value: "3", icon: Shield },
]

const resumeHighlights = [
  "Full-stack development with React, Next.js, and Node.js",
  "Cybersecurity expertise in web application security",
  "Experience with Python, Java, and modern frameworks",
  "Strong background in database design and management",
  "Proven track record in team collaboration and leadership",
  "Continuous learning and professional development",
]

export function ResumeSection() {
  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = '/documents/DufitimanaTheoneste_cv.pdf'
    link.download = 'DufitimanaTheoneste_cv.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleViewResume = () => {
    window.open('/documents/DufitimanaTheoneste_cv.pdf', '_blank')
  }

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">Resume</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Download my complete resume or view it online to learn more about my professional background, skills, and
            achievements.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Resume Preview */}
          <div className="lg:col-span-2">
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  Resume Preview
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* Resume Preview Image */}
                <div className="relative group mb-6 h-[500px]">
                  <div className="w-full h-full bg-card border-2 border-border rounded-lg overflow-hidden">
                    <iframe
                      src="/documents/DufitimanaTheoneste_cv.pdf"
                      title="Resume Preview"
                      className="w-full h-full"
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" onClick={handleDownloadResume} className="flex-1 gap-2">
                    <Download className="w-4 h-4" />
                    Download PDF Resume
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={handleViewResume}
                    className="flex-1 gap-2 bg-transparent"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Online
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Resume Stats & Highlights */}
          <div className="space-y-6">
            {/* Stats */}
            <Card className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <CardHeader>
                <CardTitle className="text-lg">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {resumeStats.map((stat) => (
                  <div key={stat.label} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <stat.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-lg">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Key Highlights */}
            <Card className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <CardHeader>
                <CardTitle className="text-lg">Key Highlights</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {resumeHighlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* File Info */}
            <Card className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <CardContent className="p-6">
                <div className="text-center">
                  <FileText className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-heading font-semibold text-lg mb-2">Resume Details</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Format:</span>
                      <Badge variant="outline">PDF</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Size:</span>
                      <span>2.1 MB</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Last Updated:</span>
                      <span>Dec 2024</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Language:</span>
                      <span>English</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="font-heading font-semibold text-xl mb-4">Interested in my profile?</h3>
              <p className="text-muted-foreground mb-6">
                Feel free to download my resume and get in touch to discuss potential opportunities or collaborations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={handleDownloadResume} className="gap-2">
                  <Download className="w-4 h-4" />
                  Download Resume
                </Button>
                <Button size="lg" variant="outline" className="gap-2 bg-transparent">
                  <ExternalLink className="w-4 h-4" />
                  Contact Me
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
