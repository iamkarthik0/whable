'use server'

import { createClient } from '@sanity/client'
import { z } from 'zod'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
})

type FormState = {
  success: boolean;
  errors: {
    name?: string[];
    email?: string[];
    server?: string[];
  };
}

export async function submitContact(prevState: FormState, formData: FormData): Promise<FormState> {
  const validatedFields = formSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
  })

  if (!validatedFields.success) {
    return { success: false, errors: validatedFields.error.flatten().fieldErrors }
  }

  const { name, email } = validatedFields.data

  try {
    await client.create({
      _type: 'contactSubmission',
      name,
      email,
      submittedAt: new Date().toISOString(),
    })

    return { success: true, errors: {} }
    
  } catch (error) {
    console.error('Error submitting form:', error)
    return { success: false, errors: { server: ['Failed to submit the form. Please try again.'] } }
  }
}
