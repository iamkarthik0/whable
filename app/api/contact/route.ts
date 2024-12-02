import { createClient } from 'next-sanity'
import { NextResponse } from 'next/server'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2023-12-02",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email } = body

    const doc = {
      _type: 'contact',
      name,
      email,
      createdAt: new Date().toISOString()
    }

    await client.create(doc)
    
    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { message: 'Failed to submit form' },
      { status: 500 }
    )
  }
}