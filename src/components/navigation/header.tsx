"use client"

import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { DesktopNav } from "./desktop-nav"
import { MobileNav } from "./mobile-nav"

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const { scrollY } = useScroll()

  // Background tied to scroll position
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.85)"]
  )
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(16px)"]
  )

  React.useEffect(() => {
    const unsubscribe = scrollY.on("change", (y) => {
      setIsScrolled(y > 50)
    })
    return () => unsubscribe()
  }, [scrollY])

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor,
        backdropFilter: backdropBlur,
        WebkitBackdropFilter: backdropBlur,
      }}
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
