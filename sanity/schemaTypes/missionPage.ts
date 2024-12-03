export default {
    name: 'missionPage',
    title: 'Mission Page', 
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
        name: 'missionSection',
        title: 'Mission Section',
        type: 'object',
        fields: [
          {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'E.g. Missione Sociale'
          },
          {
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{type: 'text'}],
            description: 'Add multiple paragraphs of mission description'
          }
        ]
      },
      {
        name: 'companionSection',
        title: 'Companion Section',
        type: 'object',
        fields: [
          {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'E.g. Più di una semplice app, un compagno di viaggio affidabile.'
          },
          {
            name: 'description',
            title: 'Description',
            type: 'text'
          },
          {
            name: 'image',
            title: 'Image',
            type: 'image'
          }
        ]
      }
    ]
  }