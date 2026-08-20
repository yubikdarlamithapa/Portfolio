'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AnimatePresence } from 'framer-motion'
import { Menu, CloseSquare } from '@/lib/iconsax'

import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/common/theme-toggle'
import { MobileNav } from '@/components/layout/mobile-nav'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/lib/data'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  // { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileOpen, setIsMobileOpen] = React.useState(false)
  const [prevScrollY, setPrevScrollY] = React.useState(0)
  const [visible, setVisible] = React.useState(true)

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsScrolled(currentScrollY > 20)
      setVisible(prevScrollY > currentScrollY || currentScrollY < 20)
      setPrevScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollY])

  React.useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileOpen])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled ? 'glass shadow-sm' : 'bg-transparent',
          visible ? 'translate-y-0' : '-translate-y-full'
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-10">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="relative h-8 w-8 overflow-hidden rounded-full ring-2 ring-accent/20">
              <Image
                src="/images/1.JPG"
                alt="Yublik"
                fill
                className="object-cover"
                sizes="32px"
              />
            </div>
            <span className="text-lg font-bold tracking-tight gradient-text">Yublik</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            {/* <Button
              asChild
              className="bg-accent text-accent-foreground shadow-md shadow-accent/15 hover:bg-accent/90"
            >
              <Link href="/contact">Let&apos;s Work Together</Link>
            </Button> */}
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-muted"
              aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileOpen ? <CloseSquare className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileOpen && (
          <MobileNav links={navLinks} onClose={() => setIsMobileOpen(false)} />
        )}
      </AnimatePresence>
    </>
  )
}
