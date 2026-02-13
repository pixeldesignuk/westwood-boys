export interface NavItem {
  label: string
  href: string
  description?: string
}

export interface NavSection {
  label: string
  href?: string
  items?: NavItem[]
}

export const navigation: NavSection[] = [
  {
    label: "About",
    items: [
      { label: "Welcome", href: "/about/welcome", description: "Learn about our school community" },
      { label: "Our Mission", href: "/about/mission", description: "Faith, excellence, and character" },
      { label: "Our Journey", href: "/about/journey", description: "Our history and milestones" },
      { label: "Chair's Message", href: "/about/chairs-message", description: "Message from the Chair of Governors" },
      { label: "Inspection Reports", href: "/about/reports", description: "Ofsted and inspection results" },
      { label: "School Performance", href: "/about/performance", description: "Academic results and data" },
    ],
  },
  {
    label: "Academics",
    items: [
      { label: "Curriculum", href: "/academics/curriculum", description: "Our academic programs" },
      { label: "Teaching & Learning", href: "/academics/teaching-learning", description: "Our approach to education" },
      { label: "Specialism", href: "/academics/specialism", description: "Areas of special focus" },
      { label: "Green Dome Academy", href: "/academics/green-dome", description: "Islamic studies program" },
    ],
  },
  {
    label: "Admissions",
    items: [
      { label: "Overview", href: "/admissions", description: "How to apply" },
      { label: "Fees", href: "/admissions/fees", description: "Tuition and costs" },
      { label: "Open Days", href: "/admissions/open-days", description: "Visit our school" },
    ],
  },
  {
    label: "Parents",
    items: [
      { label: "Resources", href: "/parents/resources", description: "Parent portal and downloads" },
      { label: "Term Dates", href: "/parents/term-dates", description: "Academic calendar" },
      { label: "Policies", href: "/parents/policies", description: "School policies" },
      { label: "Prayer Times", href: "/parents/prayer", description: "Daily prayer schedule" },
      { label: "Sport & Recreation", href: "/parents/sport", description: "Physical education" },
      { label: "British Values", href: "/parents/british-values", description: "Our commitment to British values" },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
  },
]
