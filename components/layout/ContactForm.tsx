"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, FormValues } from "@/lib/schema";

import { ArrowRight, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { submitForm } from "@/app/actions/submitForm";
import { useToast } from "@/hooks/use-toast";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      option: undefined,
    },
  });

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    const result = await submitForm(values);
    if (result.success) {
      toast({
        title: "Success",
        description: result.message,
        className: "bg-primary text-white",
      });
      form.reset();
    } else {
      toast({
        title: "Error",
        description: result.message,
        variant: "destructive",
      });
    }
    setIsSubmitting(false);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 md:max-w-[360px] mx-auto font-gabarito text-[#525252]"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Il tuo nome completo</FormLabel>
              <FormControl>
                <Input
                  placeholder="Nome e Cognome"
                  className="focus-visible:ring-primary placeholder:font-medium "
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>La tua email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Email"
                  className="focus-visible:ring-primary placeholder:font-medium "
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="option"
          render={({ field }) => (
            <FormItem className="text-[#525252] font-gabarito font-medium focus-visible:ring-primary ">
              <FormLabel>Vorrei avere informazioni per</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value} >
                <FormControl className="focus-visible:ring-primary  ">
                  <SelectTrigger>
                    <SelectValue
                      placeholder="Scegli un opzione"
                      className="    text-[#525252]"
                    />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="text-[#525252] focus-visible:ring-primary ">
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                  <SelectItem value="option3">Option 3</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          disabled={isSubmitting}
          type="submit"
          className="w-full py-[12px] text-[20px] leading-[26px] "
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <div className="flex justify-center items-center w-full gap-2">
                Invia
                <ArrowRight className=" w-[16px] h-[14px] font-bold" />
              </div>
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
