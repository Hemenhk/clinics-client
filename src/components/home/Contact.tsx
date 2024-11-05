"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { PrimaryButton } from "../ui/primary-button";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Namnet får inte vara tomt.",
  }),
  email: z
    .string()
    .min(1, {
      message: "Mejladressen får inte vara tomt.",
    })
    .email(),
  phone_number: z.string().min(9, {
    message: "Fyll i ett giltligt telefonnummer",
  }),
  message: z.string().min(1, {
    message: "Meddelandet får inte vara tomt",
  }),
});

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone_number: "",
      message: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <section className="h-[75vh] w-3/4 flex justify-center items-center">
      <Form {...form}>
        <Card className="w-3/4 bg-transparent shadow-none">
          <CardHeader>
            <CardTitle className="text-5xl text-[#454b42]">Kontakta oss</CardTitle>
          </CardHeader>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-8">
              <div className="flex flex-row gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Ditt namn</FormLabel>
                      <FormControl>
                        <Input placeholder="Johan Andersson" className="bg-neutral-50 h-12 shadow-md" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="w-full">

                      <FormLabel>Din mejladress</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          className="bg-neutral-50 shadow-md h-12" 
                          placeholder="mejl@adress.se"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="phone_number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ditt telefonnummer</FormLabel>
                    <FormControl>
                      <Input placeholder="070-XXXXXXX" className="bg-neutral-50 shadow-md h-12"  {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Meddelande</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Berätta vad vi kan hjälpa dig med."
                        className="resize-none bg-neutral-50 shadow-md h-40"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button className="w-full h-12 text-lg rounded-md bg-[#454b42]">Skicka</Button>
            </CardFooter>
          </form>
        </Card>
      </Form>
    </section>
  );
}
