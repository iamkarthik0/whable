import { z } from "zod"

export const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  option: z.enum(["option1", "option2", "option3"], {
    required_error: "Please select an option.",
  }),
})

export type FormValues = z.infer<typeof formSchema>

