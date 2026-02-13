"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Calendar, Phone } from "lucide-react"
import { Section, Container } from "@/components/ui/section"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <Section background="gradient" padding="lg">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <motion.span
            className="inline-block text-accent-gold font-medium text-sm uppercase tracking-wider mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Begin Your Journey
          </motion.span>

          <motion.h2
            className="font-serif text-h1 text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Ready to Change the World?
          </motion.h2>

          <motion.p
            className="text-body-lg text-white/80 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Take the first step towards an exceptional education for your son.
            Book a visit to experience our school community firsthand, or contact
            us to learn more about admissions.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button variant="cta" size="xl" asChild>
              <Link href="/admissions/open-days" className="group">
                <Calendar className="w-5 h-5" />
                Book an Open Day
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="glass-dark" size="xl" asChild>
              <Link href="/contact">
                <Phone className="w-5 h-5" />
                Contact Us
              </Link>
            </Button>
          </motion.div>

          <motion.div
            className="mt-12 pt-8 border-t border-white/10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-white/60 text-sm mb-4">
              Questions? We&apos;re here to help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-white">
              <a href="tel:01234567890" className="flex items-center gap-2 hover:text-accent-gold transition-colors">
                <Phone className="w-4 h-4" />
                01234 567 890
              </a>
              <a href="mailto:admissions@westwoodboys.org" className="hover:text-accent-gold transition-colors">
                admissions@westwoodboys.org
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
