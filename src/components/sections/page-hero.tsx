"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/section"
import { FloatingShapes } from "@/components/ui/floating-shapes"

interface PageHeroProps {
  title: string
  subtitle?: string
  description?: string
}

export function PageHero({ title, subtitle, description }: PageHeroProps) {
  return (
    <section className="relative hero-gradient overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      <FloatingShapes variant="hero" />

      <Container className="relative z-10">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {subtitle && (
            <span className="inline-block text-accent-gold font-medium text-sm uppercase tracking-wider mb-4">
              {subtitle}
            </span>
          )}
          <h1 className="font-serif text-h1 lg:text-display text-white mb-6">
            {title}
          </h1>
          {description && (
            <p className="text-body-lg text-white/80 max-w-2xl">
              {description}
            </p>
          )}
        </motion.div>
      </Container>
    </section>
  )
}
