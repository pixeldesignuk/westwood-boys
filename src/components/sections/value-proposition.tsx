"use client"

import * as React from "react"
import { Book, Users, Heart, Lightbulb, Trophy, Globe } from "lucide-react"
import { Section, Container, SectionHeader } from "@/components/ui/section"
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid"

const values = [
  {
    title: "Islamic Foundation",
    description: "Our curriculum is rooted in Islamic principles, nurturing both academic excellence and spiritual growth. Students develop a strong moral compass guided by faith.",
    icon: Heart,
    size: "large" as const,
    variant: "feature" as const,
  },
  {
    title: "Academic Excellence",
    description: "Rigorous academic programs preparing students for success in GCSEs and beyond.",
    icon: Book,
    size: "default" as const,
    variant: "default" as const,
  },
  {
    title: "British Values",
    description: "Promoting democracy, rule of law, individual liberty, and mutual respect.",
    icon: Globe,
    size: "default" as const,
    variant: "default" as const,
  },
  {
    title: "Small Class Sizes",
    description: "Personalized attention with an average of 15 students per class, ensuring every student is supported.",
    icon: Users,
    size: "default" as const,
    variant: "default" as const,
  },
  {
    title: "Character Development",
    description: "Building confident, compassionate leaders ready to make a positive impact.",
    icon: Lightbulb,
    size: "default" as const,
    variant: "default" as const,
  },
  {
    title: "Sport & Wellbeing",
    description: "Comprehensive physical education and extracurricular activities for holistic development.",
    icon: Trophy,
    size: "default" as const,
    variant: "default" as const,
  },
]

export function ValuePropositionSection() {
  return (
    <Section background="cream" padding="lg">
      <Container>
        <SectionHeader
          subtitle="Why Choose Us"
          title="Nurturing Excellence in Every Student"
          description="At Westwood Boys School, we combine academic rigour with Islamic values to develop well-rounded individuals ready to change the world."
        />

        <BentoGrid>
          {values.map((value, index) => (
            <BentoCard
              key={value.title}
              title={value.title}
              description={value.description}
              icon={<value.icon className="w-6 h-6" />}
              size={value.size}
              variant={value.variant}
              href="#"
            />
          ))}
        </BentoGrid>
      </Container>
    </Section>
  )
}
