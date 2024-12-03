'use server'

import { client } from '@/lib/sanityClient'

export async function getDonationContent() {
  try {
    const query = `*[_type == "donationPage"][0] {
      hero {
        title,
        description,
        "heroImageUrl": heroImage.asset->url
      },
      mainSection {
        title,
        subtitle,
        description,
        supportText,
        buttonText
      },
      valueSection {
        "imageUrl": image.asset->url,
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
    console.error('Error fetching donation content:', error)
    return { 
      success: false, 
      data: null
    }
  }
}