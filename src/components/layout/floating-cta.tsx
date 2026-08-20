'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Whatsapp } from '@/lib/iconsax'
import { siteConfig } from '@/lib/data'

export function FloatingCTA() {
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-40"
        >
          <a
            href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#25d366] to-[#128c7e] text-white shadow-lg shadow-[#25d366]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#25d366]/40 hover:scale-105"
          >
            <Whatsapp className="h-7 w-7" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
