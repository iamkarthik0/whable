export default {
  name: 'contactPage',
  title: 'Contact Page', 
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
          description: 'Hero section main title'
        },
        {
          name: 'description',
          title: 'Description', 
          type: 'text',
          description: 'Hero section description text'
        },
        {
          name: 'heroImage',
          title: 'Hero Image',
          type: 'image',
          description: 'Hero section main image'
        }
      ]
    },
    {
      name: 'mainSection',
      title: 'Main Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          description: 'Main section title'
        },
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
          description: 'Main section subtitle'
        }
      ]
    },
    {
      name: 'secondSection',
      title: 'Second Section',
      type: 'object', 
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          description: 'Second section title'
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          description: 'Second section description'
        }
      ]
    }
  ]
}
