import { cn } from "@/lib/utils"

interface FloatingShapesProps {
  className?: string
  variant?: "hero" | "section"
}

export function FloatingShapes({ className, variant = "hero" }: FloatingShapesProps) {
  const shapes = [
    { type: "circle", size: 80, x: "10%", y: "20%" },
    { type: "diamond", size: 60, x: "85%", y: "15%" },
    { type: "triangle", size: 50, x: "75%", y: "70%" },
    { type: "circle", size: 40, x: "15%", y: "75%" },
    { type: "diamond", size: 30, x: "60%", y: "85%" },
  ]

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {shapes.map((shape, index) => (
        <div
          key={index}
          className="absolute opacity-5"
          style={{
            left: shape.x,
            top: shape.y,
            width: shape.size,
            height: shape.size,
          }}
        >
          <div className="w-full h-full">
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
          </div>
        </div>
      ))}
    </div>
  )
}
