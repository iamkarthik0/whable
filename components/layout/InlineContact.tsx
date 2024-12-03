"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { submitContact } from "@/app/actions/submitContact";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Loader2 } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

export function InlineContact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    const result = await submitContact(values);
    if (result.success) {
      form.reset();
      toast({
        title: "Success",
        description: result.message || "Form submitted successfully!",
        className: "bg-primary text-white",  
      });
    } else {
      toast({
        title: "Error",
        description: result.message || "Error submitting form",
        variant: "destructive",
      });
    }
    setIsSubmitting(false);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col lg:flex-row items-center justify-center gap-4 w-full"
      >
        <div className="flex  w-full flex-col lg:flex-row sm:w-[336px] lg:items-end  lg:w-full gap-10">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className=" text-[12px] leading-[16px]">
                  Il tuo nome
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Nome"
                    className="focus-visible:ring-primary placeholder:font-medium border-[#525252] "
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className=" text-[12px] leading-[16px]">
                  La tua email
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Email"
                    className="focus-visible:ring-primary placeholder:font-medium border-[#525252] "
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                Iscriviti ora <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}
