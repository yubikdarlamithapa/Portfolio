import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  className?: string;
  title?: string;
  subtitle?: string;
  gradient?: boolean;
  children: React.ReactNode;
}

function Section({
  id,
  className,
  title,
  subtitle,
  gradient = false,
  children,
}: SectionProps) {
  return (
    <section id={id} className={cn("py-16 md:py-24", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="mx-auto mb-12 max-w-3xl text-center">
            {title && (
              <h2
                className={cn(
                  "text-3xl font-bold tracking-tight sm:text-4xl",
                  gradient && "gradient-text"
                )}
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-lg text-muted-foreground">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export { Section };
export type { SectionProps };
