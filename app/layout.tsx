import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/contexts/language-context"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Dufitimana Theoneste - Software Engineer & Cybersecurity Expert",
  description: "Portfolio of Dufitimana Theoneste - Full-stack developer and cybersecurity specialist from Rwanda",
  generator: "v0.app",
  keywords: ["software engineer", "cybersecurity", "full-stack developer", "Rwanda", "web development"],
  authors: [{ name: "Dufitimana Theoneste" }],
  openGraph: {
    title: "Dufitimana Theoneste - Software Engineer",
    description: "Portfolio of a skilled software engineer and cybersecurity expert",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <LanguageProvider>{children}</LanguageProvider>
          </ThemeProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
