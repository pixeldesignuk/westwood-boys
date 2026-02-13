"use client"

import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"
import { DesktopNav } from "./desktop-nav"
import { MobileNav } from "./mobile-nav"

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const { scrollY } = useScroll()

  React.useEffect(() => {
    const unsubscribe = scrollY.on("change", (y) => {
      setIsScrolled(y > 50)
    })
    return () => unsubscribe()
  }, [scrollY])

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "glass border-b border-slate-200/50 shadow-sm"
          : "bg-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <DesktopNav isScrolled={isScrolled} />
        <MobileNav isScrolled={isScrolled} />
      </div>
    </motion.header>
  )
}
