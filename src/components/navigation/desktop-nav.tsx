"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { navigation, type NavSection } from "./nav-data";

interface DesktopNavProps {
  isScrolled: boolean;
}

export function DesktopNav({ isScrolled }: DesktopNavProps) {
  const [activeMenu, setActiveMenu] = React.useState<string | null>(null);

  return (
    <nav className="hidden lg:flex items-center justify-between w-full py-4">
      {/* Logo */}
      <Link href="/" className="shrink-0">
        <div className="relative min-w-[200px] h-14">
          <Image
            src="/images/logo-cropped.png"
            alt="Westwood Boys School"
            fill
            className={cn(
              "object-contain object-left transition-opacity duration-300",
              isScrolled ? "opacity-0" : "opacity-100"
            )}
            priority
          />
          <Image
            src="/images/logo-dark-cropped.png"
            alt="Westwood Boys School"
            fill
            className={cn(
              "object-contain object-left transition-opacity duration-300",
              isScrolled ? "opacity-100" : "opacity-0"
            )}
            priority
          />
        </div>
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-1">
        {navigation.map((section) => (
          <NavItemComponent
            key={section.label}
            section={section}
            isActive={activeMenu === section.label}
            isScrolled={isScrolled}
            onMouseEnter={() => setActiveMenu(section.label)}
            onMouseLeave={() => setActiveMenu(null)}
          />
        ))}
      </div>

      {/* CTA Button */}
      <Button variant="cta" size="lg" asChild>
        <Link href="/admissions">Book a Visit</Link>
      </Button>
    </nav>
  );
}

interface NavItemComponentProps {
  section: NavSection;
  isActive: boolean;
  isScrolled: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

function NavItemComponent({
  section,
  isActive,
  isScrolled,
  onMouseEnter,
  onMouseLeave,
}: NavItemComponentProps) {
  const hasDropdown = section.items && section.items.length > 0;

  if (!hasDropdown) {
    return (
      <Link
        href={section.href || "#"}
        className={cn(
          "px-4 py-2 font-medium transition-colors",
          isScrolled
            ? "text-text-secondary hover:text-brand-navy"
            : "text-white/80 hover:text-white",
        )}
      >
        {section.label}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button
        className={cn(
          "flex items-center gap-1 px-4 py-2 font-medium transition-colors",
          isScrolled
            ? isActive
              ? "text-brand-navy"
              : "text-text-secondary hover:text-brand-navy"
            : isActive
              ? "text-white"
              : "text-white/80 hover:text-white",
        )}
      >
        {section.label}
        <ChevronDown
          className={cn(
            "w-4 h-4 transition-transform duration-200",
            isActive && "rotate-180",
          )}
        />
      </button>

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 pt-2"
          >
            <div className="glass rounded-2xl p-4 shadow-xl border border-slate-200 min-w-[320px]">
              <div className="grid gap-1">
                {section.items?.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex flex-col gap-1 rounded-xl p-3 hover:bg-surface-slate transition-colors"
                  >
                    <span className="font-medium text-brand-navy group-hover:text-accent-gold transition-colors">
                      {item.label}
                    </span>
                    {item.description && (
                      <span className="text-sm text-text-muted">
                        {item.description}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
