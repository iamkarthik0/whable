'use server'

import { client } from '@/lib/sanityClient'

export async function getHomeContent() {
  try {
    const query = `*[_type == "homePage"][0] {
      hero {
        title,
        buttonText,
        description,
        "heroImageUrl": heroImage.asset->url
      },
      subhero {
        title,
        description
      },
      whyWhableSection {
        title,
        description,
        "image": image.asset->url
      },
      howItWorksSection {
        title,
        description,
        "image": image.asset->url,
        features[] {
          title,
          description,
          "icon": icon.asset->url
        }
      },
      futureSection {
        title,
        subtitle,
        description
      },
      joinSection {
        title,
        subtitle
      }
    }`
    
    const content = await client.fetch(query)
    return { 
      success: true, 
      data: content 
    }
  } catch (error) {
    console.error('Error fetching home content:', error)
    return { 
      success: false, 
      data: null
    }
  }
}