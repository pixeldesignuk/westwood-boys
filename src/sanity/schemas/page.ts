import { defineField, defineType } from 'sanity'

export const page = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        { name: 'headline', title: 'Headline', type: 'string' },
        { name: 'subheadline', title: 'Subheadline', type: 'text' },
        { name: 'image', title: 'Background Image', type: 'image', options: { hotspot: true } },
        { name: 'ctaPrimary', title: 'Primary CTA Text', type: 'string' },
        { name: 'ctaPrimaryLink', title: 'Primary CTA Link', type: 'string' },
        { name: 'ctaSecondary', title: 'Secondary CTA Text', type: 'string' },
        { name: 'ctaSecondaryLink', title: 'Secondary CTA Link', type: 'string' },
      ],
    }),
    defineField({
      name: 'sections',
      title: 'Content Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'contentSection',
          title: 'Content Section',
          fields: [
            { name: 'title', title: 'Section Title', type: 'string' },
            { name: 'content', title: 'Content', type: 'array', of: [{ type: 'block' }] },
            { name: 'image', title: 'Section Image', type: 'image', options: { hotspot: true } },
            { name: 'layout', title: 'Layout', type: 'string', options: { list: ['text-only', 'image-left', 'image-right', 'full-width'] } },
          ],
        },
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      fields: [
        { name: 'metaTitle', title: 'Meta Title', type: 'string' },
        { name: 'metaDescription', title: 'Meta Description', type: 'text', validation: (Rule) => Rule.max(160) },
        { name: 'ogImage', title: 'Open Graph Image', type: 'image' },
        { name: 'noIndex', title: 'No Index', type: 'boolean', initialValue: false },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug.current',
    },
    prepare({ title, slug }) {
      return {
        title,
        subtitle: `/${slug}`,
      }
    },
  },
})
