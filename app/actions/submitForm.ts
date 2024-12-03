'use server'


import { client } from '@/lib/sanityClient'
import { formSchema } from '@/lib/schema'


export async function submitForm(values: unknown) {
  const result = formSchema.safeParse(values)

  if (!result.success) {
    return { success: false, errors: result.error.flatten().fieldErrors }
  }

  const { name, email, option } = result.data

  try {
    await client.create({
      _type: 'formSubmission',
      name,
      email,
      option,
      submittedAt: new Date().toISOString(),
    })


    return { success: true, message: 'Form submitted successfully!' }
  } catch (error) {
    console.error('Error submitting form:', error)
    return { success: false, message: 'Error submitting form. Please try again.' }
  }
}

