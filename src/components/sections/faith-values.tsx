"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Section, Container } from "@/components/ui/section"
import { Button } from "@/components/ui/button"

const values = [
  "Daily prayers integrated into school life",
  "Islamic Studies as a core subject",
  "Character education rooted in Islamic principles",
  "Emphasis on service to community",
  "Respect for all faiths and backgrounds",
  "British Values embedded in curriculum",
]

export function FaithValuesSection() {
  return (
    <Section background="navy" padding="lg" className="relative">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="faith-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="2" fill="currentColor" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#faith-pattern)" />
        </svg>
      </div>

      <Container className="relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-accent-gold font-medium text-sm uppercase tracking-wider mb-4">
              Faith & Values
            </span>
            <h2 className="font-serif text-h2 text-white mb-6">
              Building Character Through Faith
            </h2>
            <p className="text-body-lg text-white/80 mb-8">
              At Westwood Boys School, Islamic values are at the heart of everything we do.
              We nurture young men who are not only academically accomplished but also
              morally grounded, compassionate, and ready to serve their communities.
            </p>

            <ul className="space-y-4 mb-8">
              {values.map((value, index) => (
                <motion.li
                  key={value}
                  className="flex items-center gap-3 text-white/90"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <CheckCircle className="w-5 h-5 text-accent-gold shrink-0" />
                  <span>{value}</span>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="lg" asChild>
                <Link href="/about/mission" className="group">
                  Our Mission
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="glass-dark" size="lg" asChild>
                <Link href="/academics/green-dome">
                  Green Dome Academy
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden">
              <Image
                src="/images/prayer.jpg"
                alt="Students in prayer"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent-gold/20 rounded-3xl -z-10" />
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
