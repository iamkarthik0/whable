'use server'

import { client } from '@/lib/sanityClient'

export async function getContactContent() {
  try {
    const query = `*[_type == "contactPage"][0] {
      hero {
        title,
        description,
        "heroImageUrl": heroImage.asset->url
      },
      mainSection {
        title,
        subtitle
      },
      secondSection {
        title,
        description
      }
    }`
    
    const content = await client.fetch(query)
    return { 
      success: true, 
      data: content 
    }
  } catch (error) {
    console.error('Error fetching contact content:', error)
    return { 
      success: false, 
      data: null
    }
  }
}
