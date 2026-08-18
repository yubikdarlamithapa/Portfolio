import Link from "next/link"
import { FadeIn } from "@/components/animations/fade-in"
import { ServiceCard } from "@/components/cards/service-card"
import { CTASection } from "@/components/sections/cta-section"
import { services } from "@/lib/data"
import { Badge } from "@/components/ui/badge"

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      <section className="section-padding relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,149,44,0.08),transparent_50%)]" />
        <div className="container-premium relative z-10">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="primary" className="mb-4">What I Do</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                Services
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Data-driven digital marketing services designed to grow your business — from paid advertising and SEO to content strategy and AI-powered optimisation.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-premium">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <FadeIn key={service.id}>
                <Link href={`/services/${service.id}`} className="block h-full">
                  <ServiceCard service={service} />
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="section-padding bg-gradient-to-b from-background to-accent/5">
        <div className="container-premium">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Not Sure What You Need?</h2>
              <p className="text-muted-foreground mb-8">Book a free discovery call and I&apos;ll help identify the best strategy for your business.</p>
              <Link href="/contact">
                <Badge className="cursor-pointer bg-accent text-white hover:bg-accent/90 px-6 py-3 text-sm rounded-full">
                  Book a Discovery Call
                </Badge>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section> */}

      <CTASection />
    </div>
  )
}
