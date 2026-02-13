"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface FloatingShapesProps {
  className?: string
  variant?: "hero" | "section"
}

export function FloatingShapes({ className, variant = "hero" }: FloatingShapesProps) {
  const shapes = [
    { type: "circle", size: 80, x: "10%", y: "20%", delay: 0 },
    { type: "diamond", size: 60, x: "85%", y: "15%", delay: 0.5 },
    { type: "triangle", size: 50, x: "75%", y: "70%", delay: 1 },
    { type: "circle", size: 40, x: "15%", y: "75%", delay: 1.5 },
    { type: "diamond", size: 30, x: "60%", y: "85%", delay: 2 },
  ]

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: shape.x,
            top: shape.y,
            width: shape.size,
            height: shape.size,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{
            delay: shape.delay,
            duration: 1,
            ease: "easeOut",
          }}
        >
          <motion.div
            className="w-full h-full"
            animate={{
              y: [0, -20, 0],
              rotate: shape.type === "diamond" ? [0, 45, 0] : 0,
            }}
            transition={{
              duration: 6 + index,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {shape.type === "circle" && (
              <div className={cn(
                "w-full h-full rounded-full border-2",
                variant === "hero" ? "border-white" : "border-brand-navy"
              )} />
            )}
            {shape.type === "diamond" && (
              <div
                className={cn(
                  "w-full h-full rotate-45 border-2",
                  variant === "hero" ? "border-white" : "border-brand-navy"
                )}
              />
            )}
            {shape.type === "triangle" && (
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <polygon
                  points="50,10 90,90 10,90"
                  fill="none"
                  stroke={variant === "hero" ? "white" : "#121F48"}
                  strokeWidth="2"
                />
              </svg>
            )}
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}
