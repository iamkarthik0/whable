'use server'

import { client } from '@/lib/sanityClient'

export async function getAboutContent() {
  try {
    const query = `*[_type == "aboutPage"][0] {
      hero {
        title,
        description,
        "heroImageUrl": heroImage.asset->url
      },
      visionSection {
        title,
        subtitle,
        description
      },
      valueSection {
        title,
        description,
        "imageUrl": image.asset->url
      }
    }`
    
    const content = await client.fetch(query)
    return { 
      success: true, 
      data: content 
    }
  } catch (error) {
    console.error('Error fetching about content:', error)
    return { 
      success: false, 
      data: null
    }
  }
}
