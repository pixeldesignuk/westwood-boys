"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, GraduationCap, BookOpen, Award, Users } from "lucide-react"
import { Section, Container, SectionHeader } from "@/components/ui/section"
import { StatsGrid } from "@/components/ui/stats"
import { Button } from "@/components/ui/button"

const stats = [
  { value: 95, suffix: "%", label: "GCSE Pass Rate" },
  { value: 15, label: "Average Class Size" },
  { value: 12, label: "Subject Areas" },
  { value: 100, suffix: "%", label: "University Progression" },
]

const highlights = [
  {
    icon: GraduationCap,
    title: "Outstanding Results",
    description: "Our students consistently achieve above national averages in GCSE examinations.",
  },
  {
    icon: BookOpen,
    title: "Diverse Curriculum",
    description: "A broad curriculum including Sciences, Humanities, Languages, and Islamic Studies.",
  },
  {
    icon: Award,
    title: "Green Dome Academy",
    description: "Integrated Islamic studies program developing spiritual and academic growth.",
  },
  {
    icon: Users,
    title: "Expert Teachers",
    description: "Qualified, passionate educators committed to every student's success.",
  },
]

export function AcademicExcellenceSection() {
  return (
    <Section background="slate" padding="lg">
      <Container>
        <SectionHeader
          subtitle="Academic Excellence"
          title="Preparing Students for Success"
          description="Our rigorous academic programs combine with personalized support to help every student reach their full potential."
        />

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <StatsGrid stats={stats} variant="card" />
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 rounded-xl bg-brand-navy/5 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-brand-navy" />
              </div>
              <h3 className="font-serif font-semibold text-lg text-brand-navy mb-2">
                {item.title}
              </h3>
              <p className="text-text-muted text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="default" size="lg" asChild>
            <Link href="/academics/curriculum" className="group">
              Explore Our Curriculum
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  )
}
