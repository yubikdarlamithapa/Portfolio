"use client"

import { SkiperToggle } from "@/components/common/skiper-toggle"
import { cn } from "@/lib/utils"

interface ThemeToggleProps {
  className?: string
}

function ThemeToggle({ className }: ThemeToggleProps) {
  return <SkiperToggle className={cn("size-7", className)} />
}

export { ThemeToggle }
