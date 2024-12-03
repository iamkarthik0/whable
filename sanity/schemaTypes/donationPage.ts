export default {
    name: 'donationPage',
    title: 'Donation Page',
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
            type: 'string'
          },
          {
            name: 'description',
            title: 'Description',
            type: 'text'
          },
          {
            name: 'heroImage',
            title: 'Hero Image',
            type: 'image'
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
          },
          {
            name: 'supportText',
            title: 'Support Text',
            type: 'text'
          },
          {
            name: 'buttonText',
            title: 'Button Text',
            type: 'string'
          }
        ]
      },
      {
        name: 'valueSection',
        title: 'Value Section',
        type: 'object',
        fields: [
          {
            name: 'image',
            title: 'Section Image',
            type: 'image'
          },
          {
            name: 'title',
            title: 'Title',
            type: 'string'
          },
          {
            name: 'description',
            title: 'Description',
            type: 'text'
          }
        ]
      }
    ]
  }