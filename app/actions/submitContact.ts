'use server'

import { client } from '@/lib/sanityClient'
import * as z from 'zod'

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters."
  }),
  email: z.string().email({
    message: "Please enter a valid email address."
  }),
  option: z.string().optional()
})

type FormData = z.infer<typeof formSchema>

export async function submitContact(values: FormData) {
  const result = formSchema.safeParse(values)

  if (!result.success) {
    return { 
      success: false, 
      message: "Validation failed",
      errors: result.error.flatten().fieldErrors 
    }
  }

  const { name, email, option } = result.data

  try {
    await client.create({
      _type: 'contactSubmission',
      name,
      email,
      option,
      submittedAt: new Date().toISOString(),
    })

    return { success: true, message: 'Grazie per averci contattato!' }
  } catch (error) {
    console.error('Error submitting contact form:', error)
    return { success: false, message: 'Errore durante l\'invio del modulo. Per favore riprova.' }
  }
}
