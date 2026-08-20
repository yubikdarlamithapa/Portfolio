'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Briefcase, Teacher, Award } from '@/lib/iconsax'
import Link from 'next/link'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/data'

const highlights = [
  { icon: Briefcase, text: '2+ years in digital marketing' },
  { icon: Teacher, text: 'Managed $5M+ in ad spend' },
  { icon: Award, text: 'Meta & Google certified' },
]

export function AboutPreview() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/images/2.JPG"
                  alt="About"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 448px"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-accent/10" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              About{' '}
              <span className="gradient-text">{siteConfig.name}</span>
            </h2>

            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              I&apos;m a performance marketing professional passionate about helping
              businesses grow through data-driven strategies. My journey started in
              analytics, evolved into campaign management, and now I lead comprehensive
              digital marketing strategies that deliver measurable results.
            </p>

            <p className="text-base leading-relaxed text-muted-foreground">
              From startups to established brands, I&apos;ve helped 50+ clients across
              e-commerce, hospitality, real estate, and technology sectors achieve
              exponential growth through Meta Ads, Google Ads, SEO, and AI-powered
              marketing solutions.
            </p>

            <div className="flex flex-col gap-3">
              {highlights.map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="size-4 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button asChild className="bg-accent text-accent-foreground shadow-lg shadow-accent/20 hover:bg-accent/90">
                <Link href="/about" className="inline-flex items-center gap-1.5">
                  Learn More
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </Link>
              </Button>
              {/* <Button variant="outline" asChild>
                <a href="#">
                  <Download className="size-4" />
                  Download Resume
                </a>
              </Button> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
