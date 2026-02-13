"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { Send, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface ContactFormData {
  name: string
  email: string
  phone: string
  enquiryType: string
  message: string
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSubmitted, setIsSubmitted] = React.useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    console.log("Form submitted:", data)
    setIsSubmitting(false)
    setIsSubmitted(true)
    reset()
  }

  if (isSubmitted) {
    return (
      <div className="bg-green-50 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="font-serif text-xl font-semibold text-brand-navy mb-2">
          Message Sent!
        </h3>
        <p className="text-text-secondary mb-4">
          Thank you for contacting us. We&apos;ll get back to you within 2 working days.
        </p>
        <Button variant="outline" onClick={() => setIsSubmitted(false)}>
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            placeholder="Your full name"
            {...register("name", { required: "Name is required" })}
            className={errors.name ? "border-red-500" : ""}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            placeholder="your.email@example.com"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="01234 567890"
            {...register("phone")}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="enquiryType">Enquiry Type *</Label>
          <Select onValueChange={(value) => setValue("enquiryType", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select enquiry type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="admissions">Admissions Enquiry</SelectItem>
              <SelectItem value="open-day">Book Open Day</SelectItem>
              <SelectItem value="fees">Fees & Bursaries</SelectItem>
              <SelectItem value="general">General Enquiry</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Your Message *</Label>
        <Textarea
          id="message"
          placeholder="Please tell us how we can help..."
          rows={6}
          {...register("message", { required: "Message is required" })}
          className={errors.message ? "border-red-500" : ""}
        />
        {errors.message && (
          <p className="text-red-500 text-sm">{errors.message.message}</p>
        )}
      </div>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="consent"
          className="mt-1"
          required
        />
        <label htmlFor="consent" className="text-sm text-text-secondary">
          I consent to Westwood Boys School storing my data and contacting me
          regarding my enquiry. View our{" "}
          <a href="/privacy" className="text-brand-navy hover:underline">
            Privacy Policy
          </a>
          .
        </label>
      </div>

      <Button
        type="submit"
        variant="cta"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Send Message
          </>
        )}
      </Button>
    </form>
  )
}
