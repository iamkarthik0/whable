export default {
    name: 'homePage',
    title: 'Home Page', 
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
          },
          {
            name: 'buttonText',
            title: 'Button Text',
            type: 'string',
          },
          {
            name: 'description',
            title: 'Description',
            type: 'text',
          },
          {
            name: 'heroImage',
            title: 'Hero Image',
            type: 'image',
            options: {
              hotspot: true
            }
          }
        ]
      },
      {
        name: 'subhero',
        title: 'Sub Hero Section',
        type: 'object',
        fields: [
          {
            name: 'title',
            title: 'Title',
            type: 'string',
          },
          {
            name: 'description',
            title: 'Description', 
            type: 'text',
          }
        ]
      },
      {
        name: 'whyWhableSection',
        title: 'Why Whable Section',
        type: 'object',
        fields: [
          {
            name: 'title',
            title: 'Title',
            type: 'string',
          },
          {
            name: 'description',
            title: 'Description',
            type: 'text',
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
      },
      {
        name: 'howItWorksSection',
        title: 'How It Works Section',
        type: 'object',
        fields: [
          {
            name: 'title',
            title: 'Title', 
            type: 'string',
          },
          {
            name: 'description',
            title: 'Description',
            type: 'text',
          },
          {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
              hotspot: true
            }
          },
          {
            name: 'features',
            title: 'Features',
            type: 'array',
            of: [{
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
                  name: 'icon',
                  title: 'Icon',
                  type: 'image',
                  options: {
                    hotspot: true
                  }
                }
              ]
            }]
          }
        ]
      },
      {
        name: 'futureSection',
        title: 'Future Section',
        type: 'object',
        fields: [
          {
            name: 'title',
            title: 'Title',
            type: 'string',
          },
          {
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
          },
          {
            name: 'description',
            title: 'Description',
            type: 'text',
          }
        ]
      },
      {
        name: 'joinSection',
        title: 'Join Section',
        type: 'object',
        fields: [
          {
            name: 'title',
            title: 'Title',
            type: 'string',
          },
          {
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
          }
        ]
      }
    ]
  }