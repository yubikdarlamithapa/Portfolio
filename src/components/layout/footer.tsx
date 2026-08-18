"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowUp, Mail, Phone, MapPin } from "lucide-react"
import { siteConfig, services } from "@/lib/data"
import { SocialLinks } from "@/components/common/social-links"

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  // { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
]

const serviceLinks = services.slice(0, 6).filter((s) => s.id).map((s) => ({
  href: `/services/${s.id}`,
  label: s.title,
}))

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-[#0a0a14] border-t border-[#c9952c]/20">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9952c]/60 to-transparent" />
      <div className="container-premium py-16 md:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-5">
            <Link href="/" className="text-xl font-bold tracking-tight text-[#f0efe6]">
              {siteConfig.name}
            </Link>
            <p className="text-sm text-[#8888a0] leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="[&_a]:border-[#1e1e35] [&_a]:text-[#8888a0] [&_a]:transition-colors [&_a]:hover:bg-[#c9952c]/10 [&_a]:hover:text-[#d4a853]">
              <SocialLinks />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-[#d4a853]">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#8888a0] transition-colors hover:text-[#f0efe6]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-[#d4a853]">Services</h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#8888a0] transition-colors hover:text-[#f0efe6]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-[#d4a853]">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 text-sm text-[#8888a0] transition-colors hover:text-[#f0efe6]"
                >
                  <Mail className="h-4 w-4 shrink-0 text-[#d4a853]" />
                  <span>{siteConfig.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="inline-flex items-center gap-2 text-sm text-[#8888a0] transition-colors hover:text-[#f0efe6]"
                >
                  <Phone className="h-4 w-4 shrink-0 text-[#d4a853]" />
                  <span>{siteConfig.phone}</span>
                </a>
              </li>
              <li className="inline-flex items-center gap-2 text-sm text-[#8888a0]">
                <MapPin className="h-4 w-4 shrink-0 text-[#d4a853]" />
                <span>{siteConfig.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#1e1e35] flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-[#8888a0]">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-xs text-[#8888a0] transition-colors hover:text-[#d4a853]"
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
