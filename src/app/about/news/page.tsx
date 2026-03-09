import type { Metadata } from "next"
import { PageHero, ComingSoon } from "@/components/sections"

export const metadata: Metadata = {
  title: "News",
  description: "Latest news from Westwood Boys School.",
}

export default function NewsPage() {
  return (
    <>
      <PageHero
        title="News"
        subtitle="About"
      />
      <ComingSoon />
    </>
  )
}
