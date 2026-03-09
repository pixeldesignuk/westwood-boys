"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import { cn } from "@/lib/utils"
import { Container } from "@/components/ui/section"
import { Button } from "@/components/ui/button"

const footerNavigation = {
  about: [
    { label: "Welcome", href: "/about/welcome" },
    { label: "Our Mission", href: "/about/mission" },
    { label: "Our Journey", href: "/about/journey" },
    { label: "Chair's Message", href: "/about/chairs-message" },
    { label: "Inspection Reports", href: "/about/reports" },
  ],
  academics: [
    { label: "Curriculum", href: "/academics/curriculum" },
    { label: "Teaching & Learning", href: "/academics/teaching-learning" },
    { label: "Specialism", href: "/academics/specialism" },
    { label: "Green Dome Academy", href: "/academics/green-dome" },
  ],
  parents: [
    { label: "Resources", href: "/parents/resources" },
    { label: "Term Dates", href: "/parents/term-dates" },
    { label: "Policies", href: "/parents/policies" },
    { label: "Prayer Times", href: "/parents/prayer" },
    { label: "Sport & Recreation", href: "/parents/sport" },
  ],
  quickLinks: [
    { label: "Admissions", href: "/admissions" },
    { label: "Fees", href: "/admissions/fees" },
    { label: "Open Days", href: "/admissions/open-days" },
    { label: "Contact", href: "/contact" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white relative overflow-hidden">
      {/* Subtle geometric pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="footer-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M10 0L20 10L10 20L0 10Z" fill="currentColor" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#footer-pattern)" />
        </svg>
      </div>

      <Container className="relative">
        {/* Main Footer Content — commented out until content is ready
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center gap-3 mb-6">
                <div className="relative w-14 h-14 bg-white rounded-xl p-2">
                  <Image
                    src="/images/logo.png"
                    alt="Westwood Boys School"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="font-serif text-xl font-semibold">Westwood Boys</div>
                  <div className="text-sm text-white/60">School</div>
                </div>
              </Link>
              <p className="text-white/70 text-body mb-6 max-w-xs">
                An independent Muslim secondary school nurturing tomorrow&apos;s leaders through faith and excellence.
              </p>
              <div className="space-y-3">
                <a href="tel:01614590024" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                  <span>0161 459 0024</span>
                </a>
                <a href="mailto:office@westwoodboysschool.org" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                  <span>office@westwoodboysschool.org</span>
                </a>
                <div className="flex items-start gap-3 text-white/70">
                  <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>121 Union Street<br />Oldham<br />OL1 1TE</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-serif font-semibold text-lg mb-4">About</h3>
              <ul className="space-y-3">
                {footerNavigation.about.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-white/70 hover:text-white transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-serif font-semibold text-lg mb-4">Academics</h3>
              <ul className="space-y-3">
                {footerNavigation.academics.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-white/70 hover:text-white transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-serif font-semibold text-lg mb-4">Parents</h3>
              <ul className="space-y-3">
                {footerNavigation.parents.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-white/70 hover:text-white transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-serif font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {footerNavigation.quickLinks.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-white/70 hover:text-white transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <h4 className="text-sm font-medium mb-3">Follow Us</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        */}

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-white/60">
              &copy; {new Date().getFullYear()} Westwood Boys School. All rights reserved.
            </div>
            {/* <div className="flex flex-wrap justify-center gap-6 text-sm text-white/60">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Use
              </Link>
              <Link href="/accessibility" className="hover:text-white transition-colors">
                Accessibility
              </Link>
              <Link href="/safeguarding" className="hover:text-white transition-colors">
                Safeguarding
              </Link>
            </div> */}
          </div>
        </div>
      </Container>
    </footer>
  )
}
