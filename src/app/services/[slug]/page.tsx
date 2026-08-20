import Link from "next/link"
import { notFound } from "next/navigation"
import { FadeIn } from "@/components/animations/fade-in"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ServiceCard } from "@/components/cards/service-card"
import { CTASection } from "@/components/sections/cta-section"
import { services } from "@/lib/data"
import { TickCircle, ArrowLeft, ArrowRight, Global, SearchNormal, TrendUp, Share, DocumentText, Cpu, Flag2, Video, ChartSquare, Element4, Chart } from "@/lib/iconsax"

const iconMap: Record<string, React.ReactNode> = {
  Facebook: <Global className="h-10 w-10" />,
  Search: <SearchNormal className="h-10 w-10" />,
  TrendingUp: <TrendUp className="h-10 w-10" />,
  LineChart: <Chart className="h-10 w-10" />,
  Share2: <Share className="h-10 w-10" />,
  FileText: <DocumentText className="h-10 w-10" />,
  Brain: <Cpu className="h-10 w-10" />,
  Target: <Flag2 className="h-10 w-10" />,
  Video: <Video className="h-10 w-10" />,
  BarChart3: <ChartSquare className="h-10 w-10" />,
  Layout: <Element4 className="h-10 w-10" />,
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.id }))
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = services.find((s) => s.id === slug)
  if (!service) notFound()

  const related = services.filter((s) => s.id !== slug).slice(0, 3)

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,149,44,0.08),transparent_50%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <div className="max-w-3xl mx-auto">
              <Link
                href="/services"
                className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Services
              </Link>

              <div className="mb-6 flex items-center gap-4">
                <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl border border-accent/25 bg-card/90 text-accent shadow-lg shadow-accent/10 backdrop-blur-sm">
                  <div className="pointer-events-none absolute -top-6 -right-6 h-16 w-16 rounded-full bg-accent/20 blur-2xl" />
                  <div className="pointer-events-none absolute -bottom-6 -left-6 h-16 w-16 rounded-full bg-primary/15 blur-2xl" />
                  <span className="relative">
                    {iconMap[service.icon] || null}
                  </span>
                </div>
                <Badge className="rounded-full bg-gradient-to-r from-primary to-accent text-xs text-white">
                  Service
                </Badge>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                {service.title.split(" ").slice(0, -1).join(" ")}{" "}
                <span className="gradient-text">{service.title.split(" ").slice(-1)}</span>
              </h1>
              <p className="text-lg text-muted-foreground">{service.description}</p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button
                  size="lg"
                  asChild
                  className="bg-gradient-to-r from-primary to-accent shadow-lg shadow-accent/20 hover:opacity-90"
                >
                  <Link href="/contact" className="inline-flex items-center gap-1.5">
                    Get Started
                    <ArrowRight className="h-4 w-4 shrink-0" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/portfolio" className="inline-flex items-center gap-1.5">
                    See Results
                  </Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What's Included */}
      <section className="pb-16 md:pb-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="mb-10">
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
                Deliverables
              </p>
              <h2 className="text-2xl font-bold sm:text-3xl">
                What&apos;s <span className="gradient-text">Included</span>
              </h2>
            </div>
          </FadeIn>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.details.map((detail, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="group relative flex h-full items-center gap-3 overflow-hidden rounded-2xl border border-border/60 bg-card p-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
                  <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 text-accent ring-1 ring-accent/20 transition-all duration-300 group-hover:from-accent group-hover:to-accent/80 group-hover:text-white">
                    <TickCircle className="h-5 w-5" />
                  </div>
                  <span className="font-medium">{detail}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      {related.length > 0 && (
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <FadeIn>
              <div className="mb-10 text-center">
                <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
                  Explore More
                </p>
                <h2 className="text-2xl font-bold sm:text-3xl">
                  Related <span className="gradient-text">Services</span>
                </h2>
              </div>
            </FadeIn>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              {related.map((s) => (
                <FadeIn key={s.id}>
                  <Link href={`/services/${s.id}`} className="block h-full">
                    <ServiceCard service={s} />
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </div>
  )
}