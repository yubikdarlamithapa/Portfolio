import Link from "next/link"
import { notFound } from "next/navigation"
import { FadeIn } from "@/components/animations/fade-in"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CTASection } from "@/components/sections/cta-section"
import { portfolioItems } from "@/lib/data"
import {
  ArrowLeft,
  ArrowRight,
  Flag2,
  Lamp,
  Warning2,
  ChartSquare,
  Book1,
  TrendUp,
  TickCircle,
  Chart,
  Export,
  Profile2User,
  SearchNormal1,
  Diagram,
  ShoppingCart,
  Code1,
  Monitor,
  Global,
  Briefcase,
  Building,
  Cup,
} from "@/lib/iconsax"

export function generateStaticParams() {
  return portfolioItems.map((p) => ({ id: p.id }))
}

const categoryIcons: Record<string, React.ElementType> = {
  'Paid Advertising': TrendUp,
  'Social Media': Profile2User,
  SEO: SearchNormal1,
  Analytics: Chart,
  'Google Ads': TrendUp,
  'Meta Ads': Profile2User,
  'E-commerce': ShoppingCart,
  'Digital Marketing': Monitor,
  Strategy: Diagram,
  'Web Marketing': Global,
  Technology: Code1,
  Marketing: Briefcase,
  'Real Estate': Building,
  Restaurant: Cup,
  Hospitality: Building,
}

const resultsIcons = [TrendUp, TickCircle, Chart]

export default async function PortfolioDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const project = portfolioItems.find((p) => p.id === id)
  if (!project) notFound()

  const Icon = categoryIcons[project.category] || Chart
  const currentIndex = portfolioItems.findIndex((p) => p.id === id)
  const prev = portfolioItems[(currentIndex - 1 + portfolioItems.length) % portfolioItems.length]
  const next = portfolioItems[(currentIndex + 1) % portfolioItems.length]

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,149,44,0.08),transparent_50%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <Link
                href="/portfolio"
                className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="h-4 w-4" /> Back to Portfolio
              </Link>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="rounded-full bg-gradient-to-r from-primary to-accent text-white">
                  {project.category}
                </Badge>
                <Badge variant="outline" className="rounded-full border-accent/20 text-accent">
                  {project.industry}
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                {project.title.split(" ").slice(0, -1).join(" ")}{" "}
                <span className="gradient-text">{project.title.split(" ").slice(-1)}</span>
              </h1>
              <p className="text-lg text-muted-foreground">{project.goal}</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Visual + Key Results */}
      <section className="pb-16 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-primary/15 via-purple-500/10 to-accent/10">
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/20 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-primary/15 blur-3xl" />

                <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl border border-accent/25 bg-card/90 text-accent shadow-lg shadow-accent/10 backdrop-blur-sm">
                  <Icon variant="Bold" color="currentColor" className="h-12 w-12" />
                </div>

                <Badge
                  variant="outline"
                  className="absolute left-4 top-4 rounded-full border-accent/20 bg-card/80 text-accent backdrop-blur-sm"
                >
                  {project.industry}
                </Badge>
              </div>
            </FadeIn>

            <div className="space-y-6">
              {project.metrics && project.metrics.length > 0 && (
                <FadeIn>
                  <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
                    Key Results
                  </p>
                  <div className="grid grid-cols-3 gap-4">
                    {project.metrics.map((metric, i) => (
                      <div
                        key={i}
                        className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
                      >
                        <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <TrendUp className="mx-auto mb-2 h-4 w-4 text-accent" />
                        <p className="text-2xl font-bold gradient-text">{metric.value}</p>
                        <p className="mt-1 text-xs text-muted-foreground">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                </FadeIn>
              )}

              <FadeIn>
                <div className="flex gap-3 rounded-2xl border border-border/60 bg-card p-5 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary ring-1 ring-accent/20">
                    <Flag2 className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Objective</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">{project.goal}</p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn>
                <div className="flex gap-3 rounded-2xl border border-border/60 bg-card p-5 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary ring-1 ring-accent/20">
                    <Lamp className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Strategy</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">{project.strategy}</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      {project.challenge && (
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <FadeIn>
              <div className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
                <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary ring-1 ring-accent/20">
                    <Warning2 className="h-5 w-5" />
                  </span>
                  The Challenge
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground">{project.challenge}</p>
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* Results */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn>
            <h2 className="mb-8 flex items-center gap-3 text-2xl font-bold">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary ring-1 ring-accent/20">
                <ChartSquare className="h-5 w-5" />
              </span>
              Results
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {project.results.map((result, i) => {
                const ResultIcon = resultsIcons[i % resultsIcons.length]
                return (
                  <div
                    key={i}
                    className="group flex items-center gap-3 rounded-xl border border-border/60 bg-card p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-md hover:shadow-accent/5"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                      <ResultIcon className="h-4 w-4" />
                    </span>
                    <span className="font-medium">{result}</span>
                  </div>
                )
              })}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Lessons */}
      {project.lessons && project.lessons.length > 0 && (
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <FadeIn>
              <h2 className="mb-8 flex items-center gap-3 text-2xl font-bold">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary ring-1 ring-accent/20">
                  <Book1 className="h-5 w-5" />
                </span>
                Lessons Learned
              </h2>
              <ul className="space-y-3">
                {project.lessons.map((lesson, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 rounded-xl border border-border/60 bg-card p-4 transition-all duration-300 hover:border-accent/30 hover:shadow-md hover:shadow-accent/5"
                  >
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-xs font-bold text-white">
                      {i + 1}
                    </span>
                    <span className="text-muted-foreground">{lesson}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </section>
      )}

      {/* Prev / Next */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href={`/portfolio/${prev.id}`}
              className="group rounded-2xl border border-border/60 bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
            >
              <p className="flex items-center gap-2 text-xs text-muted-foreground">
                <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
                Previous Project
              </p>
              <p className="mt-1.5 font-semibold transition-colors group-hover:text-primary">
                {prev.title}
              </p>
            </Link>
            <Link
              href={`/portfolio/${next.id}`}
              className="group rounded-2xl border border-border/60 bg-card p-5 text-right transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
            >
              <p className="flex items-center justify-end gap-2 text-xs text-muted-foreground">
                Next Project
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </p>
              <p className="mt-1.5 font-semibold transition-colors group-hover:text-primary">
                {next.title}
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-4">
              Want Results <span className="gradient-text">Like This?</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Let&apos;s discuss how I can apply the same data-driven approach to your business.
            </p>
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-primary to-accent shadow-lg shadow-accent/20 hover:opacity-90"
            >
              <Link href="/contact" className="inline-flex items-center gap-1.5">
                Start a Project <ArrowRight className="h-4 w-4 shrink-0" />
              </Link>
            </Button>
          </FadeIn>
        </div>
      </section>

      <CTASection />
    </div>
  )
}