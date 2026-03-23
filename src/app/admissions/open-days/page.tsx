import type { Metadata } from "next"
import { PageHero, ComingSoon } from "@/components/sections"

export const metadata: Metadata = {
  title: "Open Days",
  description: "Visit Westwood Boys School and experience our community.",
}

export default function OpenDaysPage() {
  return (
    <>
      <PageHero
        title="Open Days"
        subtitle="Admissions"
      />
      <ComingSoon />
    </>
  )
}
