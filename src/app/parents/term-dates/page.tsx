import type { Metadata } from "next"
import { PageHero, ComingSoon } from "@/components/sections"

export const metadata: Metadata = {
  title: "Term Dates",
  description: "Academic calendar and term dates for Westwood Boys School.",
}

export default function TermDatesPage() {
  return (
    <>
      <PageHero
        title="Term Dates"
        subtitle="Parents"
      />
      <ComingSoon />
    </>
  )
}
