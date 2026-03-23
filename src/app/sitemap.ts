import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://westwoodboys.org'

  const staticPages = [
    { route: '', priority: 1, changeFrequency: 'weekly' as const },
    { route: '/about/welcome', priority: 0.8, changeFrequency: 'monthly' as const },
    { route: '/about/mission', priority: 0.8, changeFrequency: 'monthly' as const },
    { route: '/about/journey', priority: 0.8, changeFrequency: 'monthly' as const },
    { route: '/about/chairs-message', priority: 0.7, changeFrequency: 'monthly' as const },
    { route: '/about/british-values', priority: 0.8, changeFrequency: 'monthly' as const },
    { route: '/about/reports', priority: 0.7, changeFrequency: 'monthly' as const },
    { route: '/about/green-dome', priority: 0.6, changeFrequency: 'monthly' as const },
    { route: '/about/sport', priority: 0.6, changeFrequency: 'monthly' as const },
    { route: '/about/extra-curricular', priority: 0.6, changeFrequency: 'monthly' as const },
    { route: '/about/prayer', priority: 0.6, changeFrequency: 'monthly' as const },
    { route: '/academics/curriculum', priority: 0.8, changeFrequency: 'monthly' as const },
    { route: '/academics/teaching-learning', priority: 0.7, changeFrequency: 'monthly' as const },
    { route: '/academics/specialism', priority: 0.7, changeFrequency: 'monthly' as const },
    { route: '/parents/policies', priority: 0.7, changeFrequency: 'monthly' as const },
    { route: '/parents/term-dates', priority: 0.7, changeFrequency: 'monthly' as const },
    { route: '/parents/fees', priority: 0.7, changeFrequency: 'monthly' as const },
    { route: '/parents/resources', priority: 0.6, changeFrequency: 'monthly' as const },
    { route: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
  ]

  return staticPages.map((page) => ({
    url: `${baseUrl}${page.route}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))
}
