'use client'

import { useRef, useEffect, useState } from 'react'
import { useFormStatus } from 'react-dom'
import { useActionState } from 'react'
import { submitContact } from '@/app/actions/submitContact'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from '@/hooks/use-toast'
import { useForm } from 'react-hook-form'

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" disabled={pending}>
      {pending ? 'Sending...' : 'Send Message'}
    </Button>
  )
}

export function ContactForm() {
  const form = useForm()
  const [state, formAction] = useActionState(submitContact, { success: false, errors: {} })
  const formRef = useRef<HTMLFormElement>(null)
  const { toast } = useToast()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    if (state.success) {
      toast({
        title: "Success",
        description: "Your message has been sent successfully.",
        className: "bg-primary text-white border-none",
      })
      formRef.current?.reset()
    } else if (state.errors && Object.keys(state.errors).length > 0) {
      toast({
        title: "Error",
        description: "There was a problem submitting your message. Please check the form and try again.",
        variant: "destructive",
        className: "bg-red-500 text-white border-none",
      })
    }
  }, [state, toast, isMounted])

  if (!isMounted) {
    return null
  }

  return (
    <Form {...form}>
      <form ref={formRef} action={formAction} className="space-y-8">
        <FormField
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} />
              </FormControl>
              {state.errors?.name && <FormMessage>{state.errors.name[0]}</FormMessage>}
            </FormItem>
          )}
        />
        <FormField
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Your email" {...field} />
              </FormControl>
              {state.errors?.email && <FormMessage>{state.errors.email[0]}</FormMessage>}
            </FormItem>
          )}
        />
        <SubmitButton />
      </form>
    </Form>
  )
}
