"use client";

import z from "zod";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "./ui/field";
import { Input } from "./ui/input";
import { InputGroup, InputGroupTextarea } from "./ui/input-group";
import { Button } from "./ui/button";
import { toast } from "sonner";

const formSchema = z.object({
  firstName: z
    .string()
    .min(1, "Bug title must be at least 1 characters.")
    .max(32, "Bug title must be at most 32 characters."),
  lastName: z
    .string()
    .min(1, "Bug title must be at least 1 characters.")
    .max(32, "Bug title must be at most 32 characters."),
  email: z.email({ pattern: z.regexes.unicodeEmail }),
  message: z.string().refine((msg) => msg.trim().length >= 10, {
    message: "Message must be at least 10 characters",
  }),
});
export function ContactUsForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast.success("Message sent! We'll get back to you as soon as possible.", { position: "bottom-right" })
    form.reset()
    console.log(data)
  }
  return (
    <Card className="w-full ">
      <CardContent>
        <form id="form-pisd-contact" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="firstName"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-pisd-contact-firstName">
                    First Name
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-pisd-contact-firstName"
                    aria-invalid={fieldState.invalid}
                    placeholder="Juan"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="lastName"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-pisd-contact-lastName">
                    Last Name
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-pisd-contact-lastName"
                    aria-invalid={fieldState.invalid}
                    placeholder="Dela Cruz"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-pisd-contact-email">
                    Email
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-pisd-contact-email"
                    aria-invalid={fieldState.invalid}
                    placeholder="studentDemocracy@email.ph"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="message"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-pisd-contact-message">
                    Message
                  </FieldLabel>
                  <InputGroup>
                    <InputGroupTextarea
                      {...field}
                      id="form-pisd-contact-message"
                      placeholder="I'd like to connect with you."
                      rows={6}
                      className="min-h-24 resize-none"
                      aria-invalid={fieldState.invalid}
                    />
                  </InputGroup>
                  <FieldDescription>
                    Lets to chat about the future of student democracy.
                  </FieldDescription>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>

      <CardFooter>
        <Field orientation="horizontal">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button
            className="bg-[#345995]"
            type="submit"
            form="form-pisd-contact"
          >
            Submit
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
}
