'use client'

import { motion } from 'framer-motion'
import { Calendar, Send2, MagicStar } from '@/lib/iconsax'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/data'

export function CTASection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border bg-card p-8 text-center sm:p-12 lg:p-16"
        >
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-accent/10 blur-3xl" />
          </div>

          <div className="mx-auto flex max-w-2xl flex-col items-center gap-6">
            {/* <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
              <Sparkles className="size-8 text-primary" />
            </div> */}

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to grow your business?
            </h2>

            <p className="max-w-md text-lg text-muted-foreground">
              Let&apos;s discuss your project and create a marketing strategy that
              delivers real results.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {/* <Button size="lg" asChild>
                <a href={siteConfig.calendly} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 shrink-0" />
                  Schedule Meeting
                </a>
              </Button> */}
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact" className="inline-flex items-center gap-1.5">
                  <Send2 className="h-4 w-4 shrink-0" />
                  Contact Me
                </Link>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Free 30-minute discovery call. No commitment required.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
