'use client'

import { motion, type Variants } from 'framer-motion'
import { ArrowRight, MapPin, BarChart3, TrendingUp, Search, Music2 } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { SocialLinks } from '@/components/common/social-links'
import { siteConfig } from '@/lib/data'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const orbVariants: Variants = {
  animate: {
    y: [0, -20, 0],
    scale: [1, 1.05, 1],
    opacity: [0.15, 0.25, 0.15],
    transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
  },
}

const orbVariants2: Variants = {
  animate: {
    y: [0, 20, 0],
    scale: [1, 1.1, 1],
    opacity: [0.1, 0.2, 0.1],
    transition: { duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 },
  },
}

const floatVariants: Variants = {
  animate: {
    y: [0, -12, 0],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
  },
}

const floatVariants2: Variants = {
  animate: {
    y: [0, 10, 0],
    transition: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 },
  },
}

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          variants={orbVariants}
          animate="animate"
          className="absolute -top-20 -right-20 h-[600px] w-[600px] rounded-full bg-accent/15 blur-[100px]"
        />
        <motion.div
          variants={orbVariants2}
          animate="animate"
          className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[100px]"
        />
        <div className="absolute top-1/3 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-purple-500/5 blur-[80px]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container-premium grid items-center gap-16 lg:grid-cols-2 lg:gap-20"
      >
        <div className="flex flex-col gap-8 py-20 lg:py-0">
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-foreground shadow-sm">
              <MapPin className="h-3.5 w-3.5 text-accent" />
              {siteConfig.location}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-foreground shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              {siteConfig.availability}
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-5xl xl:text-6xl"
          >
            Hi, I&apos;m{' '}
            <span className="gradient-text">{siteConfig.name}</span>
            <br />
            {siteConfig.title}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            I help businesses grow through Meta Ads, Google Ads, SEO, content strategy, and AI-powered marketing.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4"
          >
            <Button asChild className="bg-accent text-accent-foreground shadow-lg shadow-accent/20 hover:bg-accent/90">
              <Link href="/portfolio" className="inline-flex items-center gap-1.5">
                View Portfolio
                <ArrowRight className="h-4 w-4 shrink-0" />
              </Link>
            </Button>
            {/* <Button variant="outline" asChild className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              <Link href="/contact">
                <Briefcase className="mr-1.5 h-4 w-4" />
                Hire Me
              </Link>
            </Button> */}
          </motion.div>

          <motion.div variants={itemVariants}>
            <SocialLinks />
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="relative hidden h-full min-h-[500px] items-center justify-center lg:flex">
          <div className="relative">
            <div className="h-[420px] w-[420px] overflow-hidden rounded-2xl shadow-2xl xl:h-[480px] xl:w-[480px]">
              <Image
                src="/images/1.JPG"
                alt={siteConfig.name}
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 420px, 480px"
                priority
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-accent/10" />
            </div>

            <motion.div
              variants={floatVariants}
              animate="animate"
              className="absolute -top-3 -right-3"
            >
              <Badge className="inline-flex items-center gap-1.5 rounded-full border-accent/20 bg-accent/10 px-3 py-1.5 text-xs font-semibold text-accent shadow-lg backdrop-blur-sm">
                <BarChart3 className="h-3 w-3" />
                Meta Ads
              </Badge>
            </motion.div>

            <motion.div
              variants={floatVariants2}
              animate="animate"
              className="absolute -bottom-3 -left-3"
            >
              <Badge className="inline-flex items-center gap-1.5 rounded-full border-accent/20 bg-card px-3 py-1.5 text-xs font-semibold text-foreground shadow-lg backdrop-blur-sm">
                <TrendingUp className="h-3 w-3" />
                Google Ads
              </Badge>
            </motion.div>

            <motion.div
              variants={floatVariants}
              animate="animate"
              className="absolute -right-14 top-1/3"
            >
              <Badge className="inline-flex items-center gap-1.5 rounded-full border-accent/20 bg-accent/10 px-3 py-1.5 text-xs font-semibold text-accent shadow-lg backdrop-blur-sm">
                <Search className="h-3 w-3" />
                SEO
              </Badge>
            </motion.div>

            <motion.div
              variants={floatVariants2}
              animate="animate"
              className="absolute -left-14 bottom-1/3"
            >
              <Badge className="inline-flex items-center gap-1.5 rounded-full border-accent/20 bg-card px-3 py-1.5 text-xs font-semibold text-foreground shadow-lg backdrop-blur-sm">
                <Music2 className="h-3 w-3" />
                TikTok Ads
              </Badge>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
