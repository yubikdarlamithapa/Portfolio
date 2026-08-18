'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

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
          <Link
            href="/contact"
            aria-label="Get in touch"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#c9952c] to-[#d4a853] text-white shadow-lg shadow-[#c9952c]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#c9952c]/40 hover:scale-105"
          >
            <MessageCircle className="h-6 w-6" />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
