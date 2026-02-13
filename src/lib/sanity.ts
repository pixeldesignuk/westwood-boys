import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SanityImageSource = any

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
})

const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// GROQ query helpers
export const queries = {
  // Get all pages
  allPages: `*[_type == "page"] {
    _id,
    title,
    slug,
    hero,
    sections,
    seo
  }`,

  // Get page by slug
  pageBySlug: (slug: string) => `*[_type == "page" && slug.current == "${slug}"][0] {
    _id,
    title,
    slug,
    hero,
    sections,
    seo
  }`,

  // Get all staff members
  allStaff: `*[_type == "staffMember"] | order(order asc) {
    _id,
    name,
    role,
    photo,
    bio
  }`,

  // Get all news items
  allNews: `*[_type == "newsItem"] | order(date desc) {
    _id,
    title,
    date,
    content,
    image,
    slug
  }`,

  // Get latest news
  latestNews: (limit: number = 3) => `*[_type == "newsItem"] | order(date desc) [0...${limit}] {
    _id,
    title,
    date,
    excerpt,
    image,
    slug
  }`,

  // Get all testimonials
  allTestimonials: `*[_type == "testimonial"] {
    _id,
    quote,
    author,
    role,
    photo
  }`,

  // Get all subjects
  allSubjects: `*[_type == "subject"] | order(name asc) {
    _id,
    name,
    icon,
    description,
    keyStage
  }`,

  // Get all policies
  allPolicies: `*[_type == "policy"] | order(category asc, title asc) {
    _id,
    title,
    file,
    category,
    lastUpdated
  }`,

  // Get site settings
  siteSettings: `*[_type == "siteSettings"][0] {
    logo,
    logoAlt,
    siteName,
    contact,
    social,
    footer
  }`,
}

// Fetch helper with error handling
export async function fetchSanity<T>(query: string): Promise<T | null> {
  try {
    const result = await sanityClient.fetch<T>(query)
    return result
  } catch (error) {
    console.error('Sanity fetch error:', error)
    return null
  }
}
