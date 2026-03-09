import type { Metadata } from "next"
import { PageHero, ComingSoon } from "@/components/sections"

export const metadata: Metadata = {
  title: "Fees",
  description: "Tuition fees and costs at Westwood Boys School.",
}

export default function FeesPage() {
  return (
    <>
      <PageHero
        title="Fees"
        subtitle="Parents"
      />
      <ComingSoon />
    </>
  )
}
