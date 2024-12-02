
import { client } from '@/lib/sanityClient'
import { NextResponse } from 'next/server'



export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email } = body

    const doc = {
      _type: 'contactSubmission',
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