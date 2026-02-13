"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Play, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { FloatingShapes } from "@/components/ui/floating-shapes"

const taglineLetters = "CHANGE THE WORLD".split("")

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Floating geometric shapes */}
      <FloatingShapes variant="hero" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="max-w-4xl">
          {/* Animated Tagline */}
          <motion.div
            className="mb-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.05,
                },
              },
            }}
          >
            <h1 className="font-serif text-display text-white flex flex-wrap">
              {taglineLetters.map((letter, index) => (
                <motion.span
                  key={index}
                  className={letter === " " ? "w-4 lg:w-6" : ""}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  {letter}
                </motion.span>
              ))}
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            className="text-body-lg text-white/80 max-w-2xl mb-8 lg:mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            Where faith meets excellence. An independent Muslim secondary school
            nurturing tomorrow&apos;s leaders through academic rigour, character development,
            and Islamic values.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <Button variant="cta" size="xl" asChild>
              <Link href="/admissions" className="group">
                Book a Visit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="glass-dark" size="xl" asChild>
              <Link href="/about/welcome" className="group">
                <Play className="w-5 h-5" />
                Watch Our Story
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Trust Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm border-t border-white/10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            <TrustItem
              icon="star"
              title="Outstanding"
              subtitle="Ofsted Rating"
            />
            <TrustItem
              icon="users"
              title="Small Classes"
              subtitle="Personalized attention"
            />
            <TrustItem
              icon="heart"
              title="Faith & Values"
              subtitle="Islamic foundation"
            />
            <TrustItem
              icon="award"
              title="British Values"
              subtitle="Preparing citizens"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}

interface TrustItemProps {
  icon: "star" | "users" | "heart" | "award"
  title: string
  subtitle: string
}

function TrustItem({ icon, title, subtitle }: TrustItemProps) {
  return (
    <div className="flex items-center gap-3 text-white">
      <div className="w-10 h-10 rounded-full bg-accent-gold/20 flex items-center justify-center">
        {icon === "star" && (
          <svg className="w-5 h-5 text-accent-gold" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        )}
        {icon === "users" && (
          <svg className="w-5 h-5 text-accent-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        )}
        {icon === "heart" && (
          <svg className="w-5 h-5 text-accent-gold" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
          </svg>
        )}
        {icon === "award" && (
          <svg className="w-5 h-5 text-accent-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
        )}
      </div>
      <div>
        <div className="font-semibold text-sm">{title}</div>
        <div className="text-xs text-white/60">{subtitle}</div>
      </div>
    </div>
  )
}
