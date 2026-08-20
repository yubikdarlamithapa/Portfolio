"use client"

import { useState, useRef } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import emailjs from "@emailjs/browser"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input, Textarea } from "@/components/ui/input"
import { Refresh, TickCircle } from "@/lib/iconsax"

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Please enter a valid email"),
  phone: z.string().regex(/^\d{7,15}$/, "Enter a valid phone number").optional().or(z.literal('')),
  service: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormData = z.infer<typeof contactSchema>

const serviceOptions = [
  "Meta Ads",
  "Google Ads",
  "SEO",
  "Social Media Marketing",
  "Content Marketing",
  "AI Marketing",
  "Marketing Strategy",
  "Video Marketing",
  "Analytics & Tracking",
  "Landing Page Optimisation",
]

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ''
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || ''
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''

interface ContactFormProps {
  className?: string
}

export function ContactForm({ className }: ContactFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  async function onSubmit(data: ContactFormData) {
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setError('root', { message: 'Email service not configured.' })
      return
    }

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current!,
        EMAILJS_PUBLIC_KEY
      )
      setIsSubmitted(true)
    } catch {
      setError('root', { message: 'Failed to send message. Please try again.' })
    }
  }

  if (isSubmitted) {
    return (
      <div className={cn("flex flex-col items-center justify-center py-16 text-center", className)}>
        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
          <TickCircle className="h-8 w-8 text-accent" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
        <p className="text-muted-foreground max-w-sm">
          Thank you for reaching out. I&apos;ll get back to you within 24 hours to discuss your project.
        </p>
      </div>
    )
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className={cn("space-y-5", className)}>
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Name <span className="text-destructive">*</span>
          </label>
          <Input
            id="name"
            placeholder="Your full name"
            error={errors.name?.message}
            {...register("name")}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email <span className="text-destructive">*</span>
          </label>
          <Input
            id="email"
            type="email"
            placeholder="your@email.com"
            error={errors.email?.message}
            {...register("email")}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium">Phone</label>
          <Input
            id="phone"
            type="tel"
            inputMode="numeric"
            placeholder="Enter phone number"
            error={errors.phone?.message}
            {...register("phone", {
              onChange: (e) => { e.target.value = e.target.value.replace(/\D/g, '') },
            })}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="service" className="text-sm font-medium">Service Interested In</label>
          <select
            id="service"
            className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            {...register("service")}
          >
            <option value="">Select a service</option>
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message <span className="text-destructive">*</span>
        </label>
        <Textarea
          id="message"
          placeholder="Tell me about your project..."
          rows={5}
          className={errors.message ? "border-destructive" : ""}
          {...register("message")}
        />
        {errors.message && (
          <p className="text-sm text-destructive">{errors.message.message}</p>
        )}
      </div>

      {errors.root && (
        <p className="text-sm text-destructive text-center">{errors.root.message}</p>
      )}
      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Refresh className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  )
}
