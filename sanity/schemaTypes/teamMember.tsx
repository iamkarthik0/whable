export default {
    name: 'teamMember',
    title: 'Team Member',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        validation: (Rule: any) => Rule.required()
      },
      {
        name: 'position',
        title: 'Position',
        type: 'string',
        validation: (Rule: any) => Rule.required()
      },
      {
        name: 'bio',
        title: 'Bio',
        type: 'text',
        validation: (Rule: any) => Rule.required()
      },
      {
        name: 'avatar',
        title: 'Avatar',
        type: 'image',
        options: {
          hotspot: true
        },
        validation: (Rule: any) => Rule.required()
      },
      {
        name: 'order',
        title: 'Display Order',
        type: 'number',
        validation: (Rule: any) => Rule.required()
      }
    ]
  }