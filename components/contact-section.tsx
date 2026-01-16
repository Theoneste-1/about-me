"use client"

import type React from "react"

import { useState, useActionState } from "react"
import { useFormStatus } from "react-dom"
import { submitContact } from "@/app/actions"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Instagram,
  MessageCircle,
  ExternalLink,
  Clock,
  Globe,
} from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "dufitimanatheoneste@gmail.com",
    href: "mailto:dufitimanatheoneste@gmail.com",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+250 788 123 456",
    href: "https://wa.me/250786555276",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Gisenyi, Rubavu, Western Province, Rwanda",
    href: "https://maps.google.com/?q=Gisenyi,Rwanda",
  },
  {
    icon: Clock,
    label: "Timezone",
    value: "CAT (UTC+2)",
    href: null,
  },
]

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    username: "@Theonste-1",
    href: "https://github.com/Theoneste-1",
    color: "hover:text-gray-900 dark:hover:text-gray-100",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    username: "Dufitimana Theoneste",
    href: "https://www.linkedin.com/in/dufitimana-theoneste-78542437a",
    color: "hover:text-blue-600",
  },
  {
    icon: Instagram,
    label: "Instagram",
    username: "@theoneste_coach",
    href: "https://instagram.com/theoneste_coach",
    color: "hover:text-pink-600",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    username: "+250 786 555 276",
    href: "https://wa.me/250786555276",
    color: "hover:text-green-600",
  },
]

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" size="lg" className="w-full gap-2" disabled={pending}>
      {pending ? (
        <>
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          Sending...
        </>
      ) : (
        <>
          <Send className="w-4 h-4" />
          Send Message
        </>
      )}
    </Button>
  )
}

export function ContactSection() {
  const initialState = { message: "", errors: {} }
  const [state, formAction] = useActionState(submitContact, initialState)


  return (
    <section id="contact" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">Get In Touch</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm always interested in new opportunities, collaborations, and interesting projects. Let's discuss how we
            can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Send className="w-5 h-5 text-primary" />
                Send Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form action={formAction} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      required
                      defaultValue=""
                    />
                    {state.errors?.name && <p className="text-red-500 text-xs mt-1">{state.errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      defaultValue=""
                    />
                    {state.errors?.email && <p className="text-red-500 text-xs mt-1">{state.errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or idea..."
                    rows={6}
                    required
                    defaultValue=""
                  />
                  {state.errors?.message && <p className="text-red-500 text-xs mt-1">{state.errors.message}</p>}
                </div>

                <SubmitButton />

                {state.message && (
                  <p className={`text-sm ${state.success ? "text-green-500" : "text-red-500"}`}>
                    {state.message}
                  </p>
                )}
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-muted-foreground hover:text-primary transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-primary" />
                  Connect With Me
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-4 p-3 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 group ${social.color}`}
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <social.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{social.label}</p>
                        <p className="text-muted-foreground text-sm">{social.username}</p>
                      </div>
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Available for Work</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Currently open to internships, freelance projects, and full-time opportunities.
                  </p>
                  <Badge variant="outline" className="text-xs">
                    Response time: Within 24 hours
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
