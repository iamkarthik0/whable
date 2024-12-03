export default {
  name: 'aboutPage',
  title: 'About Page', 
  type: 'document',
  fields: [
    {
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          description: 'Main heading for the hero section'
        },
        {
          name: 'description',
          title: 'Description', 
          type: 'text',
          description: 'Main paragraph text below the title'
        },
        {
          name: 'heroImage',
          title: 'Hero Image',
          type: 'image',
          options: {
            hotspot: true
          },
          description: 'Main hero image'
        }
      ]
    },
    {
      name: 'visionSection',
      title: 'Vision Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string'
        },
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string'
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text'
        }
      ]
    },
    {
      name: 'valueSection',
      title: 'Value Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string'
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text'
        },
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true
          }
        }
      ]
    }
  ]
}
