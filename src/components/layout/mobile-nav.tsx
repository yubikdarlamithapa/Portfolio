'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/common/theme-toggle'
import { SocialLinks } from '@/components/common/social-links'
import { siteConfig } from '@/lib/data'

interface NavLink {
  href: string
  label: string
}

interface MobileNavProps {
  links: NavLink[]
  onClose: () => void
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: 'easeOut' as const },
  }),
}

export function MobileNav({ links, onClose }: MobileNavProps) {
  return (
    <motion.div
      className="fixed inset-0 z-40"
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <motion.div
        className="absolute inset-0 bg-black/60 backdrop-blur-lg"
        variants={overlayVariants}
        onClick={onClose}
      />
      <motion.div
        className="absolute inset-0 flex flex-col bg-background/95 backdrop-blur-xl"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      >
        <div className="flex items-center justify-between px-6 py-5">
          <Link href="/" onClick={onClose} className="flex items-center gap-2.5">
            <div className="relative h-7 w-7 overflow-hidden rounded-full ring-2 ring-accent/20">
              <Image
                src="/images/1.JPG"
                alt="Yublik"
                fill
                className="object-cover"
                sizes="28px"
              />
            </div>
            <span className="text-base font-bold tracking-tight gradient-text">Yublik</span>
          </Link>
          <ThemeToggle />
        </div>

        <nav className="flex flex-1 flex-col items-center justify-center gap-1 px-6">
          {links.map((link, i) => (
            <motion.div
              key={link.href}
              custom={i}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <Link
                href={link.href}
                onClick={onClose}
                className="block rounded-lg px-8 py-4 text-2xl font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        <motion.div
          className="space-y-5 px-6 py-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: links.length * 0.08 + 0.2, duration: 0.4 }}
        >
          <Button
            asChild
            className="w-full bg-accent text-accent-foreground shadow-lg shadow-accent/20 hover:bg-accent/90"
          >
            <Link href="/contact" onClick={onClose}>
              Let&apos;s Work Together
            </Link>
          </Button>
          <div className="flex justify-center">
            <SocialLinks />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
