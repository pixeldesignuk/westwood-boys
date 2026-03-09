import type { Metadata } from "next"
import { PageHero, ComingSoon } from "@/components/sections"

export const metadata: Metadata = {
  title: "Resources",
  description: "Parent resources and downloads at Westwood Boys School.",
}

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        title="Resources"
        subtitle="Parents"
      />
      <ComingSoon />
    </>
  )
}
