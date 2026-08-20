"use client"

import { motion } from "framer-motion"
import { Star, QuoteDown } from "@/lib/iconsax"
import { cn } from "@/lib/utils"

interface TestimonialData {
  name: string
  role: string
  company: string
  image: string
  review: string
  rating: number
}

interface TestimonialCardProps {
  testimonial: TestimonialData
  index?: number
}

export default function TestimonialCard({ testimonial, index = 0 }: TestimonialCardProps) {
  const { name, role, company, review, rating } = testimonial

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -2, boxShadow: "0 12px 24px rgba(0,0,0,0.08)" }}
      className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900"
    >
      <QuoteDown className="mb-4 h-8 w-8 text-blue-200 dark:text-blue-800" />
      <p className="mb-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{review}</p>
      <div className="mb-4 flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              "h-4 w-4",
              i < rating
                ? "fill-yellow-400 text-yellow-400"
                : "fill-zinc-200 text-zinc-200 dark:fill-zinc-700 dark:text-zinc-700"
            )}
          />
        ))}
      </div>
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700 dark:bg-blue-900 dark:text-blue-300">
          {name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{name}</p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            {role}, {company}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
