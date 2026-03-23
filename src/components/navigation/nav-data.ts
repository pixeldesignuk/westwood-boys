export interface NavItem {
  label: string
  href: string
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
      { label: "Welcome from the Principal", href: "/about/welcome" },
      { label: "Our Mission", href: "/about/mission" },
      { label: "British Values", href: "/about/british-values" },
      { label: "Message from the Chair of Governors", href: "/about/chairs-message" },
      { label: "Inspection Reports", href: "/about/reports" },
      { label: "School Performance", href: "/about/performance" },
      { label: "The Green Dome Academy", href: "/about/green-dome" },
      { label: "Admissions", href: "/admissions" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    label: "Parents",
    items: [
      { label: "Policies", href: "/parents/policies" },
      { label: "Term Dates", href: "/parents/term-dates" },
      { label: "Fees", href: "/parents/fees" },
      { label: "Resources", href: "/parents/resources" },
    ],
  },
  {
    label: "About",
    items: [
      { label: "Our Journey", href: "/about/journey" },
      { label: "Curriculum", href: "/academics/curriculum" },
      { label: "Specialism", href: "/academics/specialism" },
      { label: "Teaching & Learning", href: "/academics/teaching-learning" },
      { label: "Sport & Recreation", href: "/about/sport" },
      { label: "Extra-Curricular", href: "/about/extra-curricular" },
      { label: "Prayer", href: "/about/prayer" },
      { label: "News", href: "/about/news" },
    ],
  },
]
