"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Section, Container } from "@/components/ui/section"
import { cn } from "@/lib/utils"

interface ContentSectionProps {
  title?: string
  children: React.ReactNode
  image?: string
  imageAlt?: string
  imagePosition?: "left" | "right"
  background?: "white" | "cream" | "slate"
}

export function ContentSection({
  title,
  children,
  image,
  imageAlt,
  imagePosition = "right",
  background = "white",
}: ContentSectionProps) {
  const hasImage = image && imageAlt

  if (!hasImage) {
    return (
      <Section background={background} padding="default">
        <Container size="sm">
          <motion.article
            className="prose prose-lg prose-slate max-w-none"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {title && (
              <h2 className="font-serif text-h2 text-brand-navy mb-6">{title}</h2>
            )}
            {children}
          </motion.article>
        </Container>
      </Section>
    )
  }

  return (
    <Section background={background} padding="default">
      <Container>
        <div
          className={cn(
            "grid lg:grid-cols-2 gap-12 lg:gap-16 items-center",
            imagePosition === "left" && "lg:flex-row-reverse"
          )}
        >
          <motion.div
            className={cn(
              imagePosition === "left" ? "lg:order-2" : "lg:order-1"
            )}
            initial={{ opacity: 0, x: imagePosition === "left" ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <article className="prose prose-lg prose-slate max-w-none">
              {title && (
                <h2 className="font-serif text-h2 text-brand-navy mb-6 not-prose">
                  {title}
                </h2>
              )}
              {children}
            </article>
          </motion.div>

          <motion.div
            className={cn(
              imagePosition === "left" ? "lg:order-1" : "lg:order-2"
            )}
            initial={{ opacity: 0, x: imagePosition === "left" ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
              <Image src={image} alt={imageAlt} fill className="object-cover" />
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
