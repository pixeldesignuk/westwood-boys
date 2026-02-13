"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Calendar } from "lucide-react"
import { Section, Container, SectionHeader } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const newsItems = [
  {
    title: "Outstanding Ofsted Report Celebrates School Success",
    date: "2024-01-15",
    category: "Announcements",
    excerpt: "We are thrilled to share that our recent Ofsted inspection has recognized the outstanding work happening at our school.",
    image: "/images/news-1.jpg",
    href: "/news/ofsted-report",
  },
  {
    title: "Year 11 Students Achieve Record GCSE Results",
    date: "2024-01-10",
    category: "Achievements",
    excerpt: "Our Year 11 cohort has achieved the best GCSE results in the school's history, with 95% of students achieving grade 4 or above.",
    image: "/images/news-2.jpg",
    href: "/news/gcse-results",
  },
  {
    title: "Open Day: Book Your Place for February",
    date: "2024-01-05",
    category: "Events",
    excerpt: "Join us for our upcoming Open Day to experience the Westwood Boys community firsthand and learn about admissions.",
    image: "/images/news-3.jpg",
    href: "/admissions/open-days",
  },
]

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

export function NewsEventsSection() {
  return (
    <Section background="white" padding="lg">
      <Container>
        <SectionHeader
          subtitle="Latest Updates"
          title="News & Events"
          description="Stay up to date with the latest happenings at Westwood Boys School."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newsItems.map((item, index) => (
            <motion.article
              key={item.title}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={item.href}>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm">
                      {item.category}
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-text-muted text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    {formatDate(item.date)}
                  </div>
                  <h3 className="font-serif font-semibold text-lg text-brand-navy mb-2 group-hover:text-accent-gold transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary text-sm line-clamp-2">
                    {item.excerpt}
                  </p>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/news" className="group">
              View All News
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  )
}
