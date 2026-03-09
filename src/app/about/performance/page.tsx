import type { Metadata } from "next"
import { PageHero, ComingSoon } from "@/components/sections"

export const metadata: Metadata = {
  title: "School Performance",
  description: "Academic results and performance data for Westwood Boys School.",
}

export default function PerformancePage() {
  return (
    <>
      <PageHero
        title="School Performance"
        subtitle="Our School"
      />
      <ComingSoon />
    </>
  )
}
