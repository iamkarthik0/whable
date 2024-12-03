'use server'

import { client } from '@/lib/sanityClient'

export async function getTeamMembers() {
  try {
    const query = `*[_type == "teamMember"] | order(order asc) {
      _id,
      name,
      position,
      bio,
      "avatarUrl": avatar.asset->url
    }`
    
    const teamMembers = await client.fetch(query)
    return { success: true, data: teamMembers }
  } catch (error) {
    console.error('Error fetching team members:', error)
    return { success: false, error: 'Failed to fetch team members' }
  }
}