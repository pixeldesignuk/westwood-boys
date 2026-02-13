import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  groups: [
    { name: 'branding', title: 'Branding' },
    { name: 'contact', title: 'Contact Information' },
    { name: 'social', title: 'Social Media' },
    { name: 'footer', title: 'Footer' },
  ],
  fields: [
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      group: 'branding',
      initialValue: 'Westwood Boys School',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      group: 'branding',
      initialValue: 'Change The World',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      group: 'branding',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'logoAlt',
      title: 'Logo (Alternative/Light)',
      type: 'image',
      group: 'branding',
      description: 'Light version for dark backgrounds',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'contact',
      title: 'Contact Information',
      type: 'object',
      group: 'contact',
      fields: [
        { name: 'phone', title: 'Phone Number', type: 'string' },
        { name: 'email', title: 'Email Address', type: 'string' },
        { name: 'address', title: 'Address', type: 'text' },
        { name: 'postcode', title: 'Postcode', type: 'string' },
        {
          name: 'location',
          title: 'Location',
          type: 'object',
          fields: [
            { name: 'lat', title: 'Latitude', type: 'number' },
            { name: 'lng', title: 'Longitude', type: 'number' },
          ],
        },
        { name: 'officeHours', title: 'Office Hours', type: 'string' },
      ],
    }),
    defineField({
      name: 'social',
      title: 'Social Media Links',
      type: 'object',
      group: 'social',
      fields: [
        { name: 'facebook', title: 'Facebook', type: 'url' },
        { name: 'twitter', title: 'Twitter/X', type: 'url' },
        { name: 'instagram', title: 'Instagram', type: 'url' },
        { name: 'linkedin', title: 'LinkedIn', type: 'url' },
        { name: 'youtube', title: 'YouTube', type: 'url' },
      ],
    }),
    defineField({
      name: 'footer',
      title: 'Footer Settings',
      type: 'object',
      group: 'footer',
      fields: [
        { name: 'copyrightText', title: 'Copyright Text', type: 'string' },
        {
          name: 'quickLinks',
          title: 'Quick Links',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'label', title: 'Label', type: 'string' },
                { name: 'href', title: 'Link', type: 'string' },
              ],
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Site Settings',
      }
    },
  },
})
