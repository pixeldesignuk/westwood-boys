import { defineField, defineType } from 'sanity'

export const subject = defineType({
  name: 'subject',
  title: 'Subject',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Subject Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'icon',
      title: 'Icon Name',
      type: 'string',
      description: 'Lucide icon name (e.g., "book", "calculator", "globe")',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'content',
      title: 'Full Content',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'keyStage',
      title: 'Key Stages',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Key Stage 3', value: 'ks3' },
          { title: 'Key Stage 4', value: 'ks4' },
          { title: 'GCSE', value: 'gcse' },
        ],
      },
    }),
    defineField({
      name: 'examBoard',
      title: 'Exam Board',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'examBoard',
    },
  },
})
