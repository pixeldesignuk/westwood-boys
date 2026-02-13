import { defineField, defineType } from 'sanity'

export const policy = defineType({
  name: 'policy',
  title: 'Policy',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Policy Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'file',
      title: 'Policy Document',
      type: 'file',
      options: {
        accept: '.pdf,.doc,.docx',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Safeguarding', value: 'safeguarding' },
          { title: 'Academic', value: 'academic' },
          { title: 'Behaviour', value: 'behaviour' },
          { title: 'Health & Safety', value: 'health-safety' },
          { title: 'SEND', value: 'send' },
          { title: 'Admissions', value: 'admissions' },
          { title: 'Other', value: 'other' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'lastUpdated',
      title: 'Last Updated',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Brief description of the policy',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      date: 'lastUpdated',
    },
    prepare({ title, category, date }) {
      return {
        title,
        subtitle: `${category} - Updated: ${date}`,
      }
    },
  },
})
