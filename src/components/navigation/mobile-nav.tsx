"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { navigation, type NavSection } from "./nav-data"

interface MobileNavProps {
  isScrolled: boolean
}

export function MobileNav({ isScrolled }: MobileNavProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [expandedSection, setExpandedSection] = React.useState<string | null>(null)

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const toggleSection = (label: string) => {
    setExpandedSection(expandedSection === label ? null : label)
  }

  return (
    <div className="lg:hidden">
      {/* Mobile Header */}
      <div className="flex items-center justify-between w-full py-3">
        <Link href="/">
          <div className="relative min-w-[200px] h-12">
            <Image
              src="/images/logo-white.png"
              alt="Westwood Boys School"
              fill
              className={cn(
                "object-contain object-left",
                isScrolled ? "opacity-0" : "opacity-100"
              )}
              priority
            />
            <Image
              src="/images/logo-dark.png"
              alt="Westwood Boys School"
              fill
              className={cn(
                "object-contain object-left",
                isScrolled ? "opacity-100" : "opacity-0"
              )}
              priority
            />
          </div>
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "p-2",
            isScrolled ? "text-brand-navy" : "text-white"
          )}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-[72px] z-50 bg-white overflow-y-auto">
          <nav className="p-6">
            <div className="space-y-2">
              {navigation.map((section) => (
                <MobileNavSection
                  key={section.label}
                  section={section}
                  isExpanded={expandedSection === section.label}
                  onToggle={() => toggleSection(section.label)}
                  onClose={() => setIsOpen(false)}
                />
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200">
              {/* <Button
                variant="cta"
                size="lg"
                className="w-full"
                asChild
                onClick={() => setIsOpen(false)}
              >
                <Link href="/admissions">Book a Visit</Link>
              </Button> */}
            </div>

            {/* Contact Info — hidden until ready
            <div className="mt-8 text-center text-sm text-text-muted">
              <p className="mb-2">Questions? Call us</p>
              <a
                href="tel:01614590024"
                className="text-brand-navy font-semibold text-lg"
              >
                0161 459 0024
              </a>
            </div>
            */}
          </nav>
        </div>
      )}
    </div>
  )
}

interface MobileNavSectionProps {
  section: NavSection
  isExpanded: boolean
  onToggle: () => void
  onClose: () => void
}

function MobileNavSection({
  section,
  isExpanded,
  onToggle,
  onClose,
}: MobileNavSectionProps) {
  const hasDropdown = section.items && section.items.length > 0

  if (!hasDropdown) {
    return (
      <div>
        <Link
          href={section.href || "#"}
          onClick={onClose}
          className="flex items-center justify-between py-4 px-4 text-lg font-medium text-brand-navy hover:bg-surface-slate rounded-xl transition-colors"
        >
          {section.label}
        </Link>
      </div>
    )
  }

  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full py-4 px-4 text-lg font-medium text-brand-navy hover:bg-surface-slate rounded-xl transition-colors"
      >
        {section.label}
        <ChevronDown
          className={cn(
            "w-5 h-5",
            isExpanded && "rotate-180"
          )}
        />
      </button>

      {isExpanded && (
        <div className="overflow-hidden">
          <div className="pl-4 pb-4 space-y-1">
            {section.items?.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="block py-3 px-4 text-text-secondary hover:text-brand-navy hover:bg-surface-slate rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
