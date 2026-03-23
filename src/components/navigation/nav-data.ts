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
    label: "Our School",
    items: [
      { label: "Welcome from the Principal", href: "/about/welcome", description: "Learn about our school community" },
      { label: "Our Mission", href: "/about/mission", description: "Faith, excellence, and character" },
      { label: "British Values", href: "/about/british-values", description: "Our commitment to British values" },
      { label: "Message from the Chair of Governors", href: "/about/chairs-message", description: "Message from the Chair of Governors" },
      { label: "Inspection Reports", href: "/about/reports", description: "Ofsted and inspection results" },
      { label: "School Performance", href: "/about/performance", description: "Academic results and data" },
      { label: "The Green Dome Academy", href: "/about/green-dome", description: "Proprietor" },
      { label: "Admissions", href: "/admissions", description: "How to apply" },
      { label: "Contact", href: "/contact", description: "Get in touch" },
    ],
  },
  {
    label: "Parents",
    items: [
      { label: "Policies", href: "/parents/policies", description: "School policies" },
      { label: "Term Dates", href: "/parents/term-dates", description: "Academic calendar" },
      { label: "Fees", href: "/parents/fees", description: "Tuition and costs" },
      { label: "Resources", href: "/parents/resources", description: "Parent portal and downloads" },
    ],
  },
  {
    label: "About",
    items: [
      { label: "Our Journey", href: "/about/journey", description: "Our history and milestones" },
      { label: "Curriculum", href: "/academics/curriculum", description: "Our academic programmes" },
      { label: "Specialism", href: "/academics/specialism", description: "Areas of special focus" },
      { label: "Teaching & Learning", href: "/academics/teaching-learning", description: "Our approach to education" },
      { label: "Sport & Recreation", href: "/about/sport", description: "Physical education" },
      { label: "Extra-Curricular", href: "/about/extra-curricular", description: "Activities beyond the classroom" },
      { label: "Prayer", href: "/about/prayer", description: "Prayer facilities" },
      { label: "News", href: "/about/news", description: "Latest school news" },
    ],
  },
]
