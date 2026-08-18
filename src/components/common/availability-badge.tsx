"use client"

import { cn } from "@/lib/utils"

interface AvailabilityBadgeProps {
  status?: string
  className?: string
}

function AvailabilityBadge({ status = "Available for projects", className }: AvailabilityBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-3 py-1 text-xs font-medium text-accent-dark dark:text-accent",
        className
      )}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
      </span>
      {status}
    </span>
  )
}

export { AvailabilityBadge }
