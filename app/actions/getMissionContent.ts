'use server'

import { client } from '@/lib/sanityClient'

export async function getMissionContent() {
  try {
    const query = `*[_type == "missionPage"][0] {
      hero {
        title,
        description,
        "heroImageUrl": heroImage.asset->url
      },
      missionSection {
        title,
        description
      },
      companionSection {
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
    console.error('Error fetching mission content:', error)
    return { 
      success: false, 
      data: null
    }
  }
}