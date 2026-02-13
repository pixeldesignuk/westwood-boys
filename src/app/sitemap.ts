import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://westwoodboys.org'

  const staticPages = [
    '',
    '/about/welcome',
    '/about/mission',
    '/about/journey',
    '/about/chairs-message',
    '/about/reports',
    '/about/performance',
    '/academics/curriculum',
    '/academics/teaching-learning',
    '/academics/specialism',
    '/academics/green-dome',
    '/admissions',
    '/admissions/fees',
    '/admissions/open-days',
    '/parents/term-dates',
    '/parents/policies',
    '/contact',
  ]

  return staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.startsWith('/about') ? 0.8 : 0.6,
  }))
}
