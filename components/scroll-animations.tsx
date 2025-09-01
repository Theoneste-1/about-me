"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  animation?: "fade-in" | "slide-up" | "slide-left" | "slide-right" | "scale-in"
  delay?: number
  threshold?: number
}

export function ScrollAnimation({
  children,
  className = "",
  animation = "fade-in",
  delay = 0,
  threshold = 0.1,
}: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-in")
            }, delay)
          }
        })
      },
      { threshold },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [delay, threshold])

  const animationClasses = {
    "fade-in": "opacity-0 translate-y-8 transition-all duration-700 ease-out",
    "slide-up": "opacity-0 translate-y-12 transition-all duration-700 ease-out",
    "slide-left": "opacity-0 translate-x-12 transition-all duration-700 ease-out",
    "slide-right": "opacity-0 -translate-x-12 transition-all duration-700 ease-out",
    "scale-in": "opacity-0 scale-95 transition-all duration-700 ease-out",
  }

  return (
    <div ref={elementRef} className={`${animationClasses[animation]} ${className}`}>
      {children}
    </div>
  )
}
