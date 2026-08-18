import Link from "next/link"
import Image from "next/image"
import { FadeIn } from "@/components/animations/fade-in"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CTASection } from "@/components/sections/cta-section"
import CertificationCard from "@/components/cards/certification-card"
import { siteConfig, certifications, timelineEvents } from "@/lib/data"
import { Download, Award, Calendar, Quote, ArrowRight } from "lucide-react"

const philosophy = [
  { title: "Data-Driven Creativity", description: "Every creative decision is backed by data. I believe the best marketing combines artistic storytelling with analytical rigour. Numbers tell us what works; creativity makes it memorable." },
  { title: "Continuous Optimisation", description: "Marketing is never 'done'. I treat every campaign as a living experiment — constantly testing, learning, and iterating. Small incremental gains compound into remarkable results." },
  { title: "Audience-First Thinking", description: "Understanding the human behind the click is everything. I build strategies around audience psychology, pain points, and aspirations — not just demographics and interests." },
  { title: "Transparency & Trust", description: "Clients deserve to understand exactly where their money is going and what it's achieving. I provide clear reporting, honest communication, and realistic expectations from day one." },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <section className="section-padding relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,149,44,0.08),transparent_50%)]" />
        <div className="absolute right-0 top-0 h-64 w-64 opacity-10 md:opacity-20">
          <Image src="/images/1.JPG" alt="" fill className="object-cover blur-2xl" />
        </div>
        <div className="container-premium relative z-10">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="primary" className="mb-4">About Me</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                {siteConfig.name}
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-6">
                Turning Data Into Marketing Magic
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A passionate digital marketer with 7+ years of experience helping brands grow through strategic paid media, SEO, content marketing, and AI-powered optimisation.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-premium">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="relative">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src="/images/2.JPG"
                    alt="Professional portrait"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-accent/10" />
                </div>
                <div className="absolute -bottom-6 -right-6 h-28 w-28 overflow-hidden rounded-xl shadow-lg ring-2 ring-background md:h-36 md:w-36">
                  <Image
                    src="/images/1.JPG"
                    alt="Marketing campaign work"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 112px, 144px"
                  />
                </div>
              </div>
            </FadeIn>
            <div className="space-y-6">
              <FadeIn><h2 className="text-3xl font-bold">The Journey So Far</h2></FadeIn>
              <FadeIn><p className="text-muted-foreground leading-relaxed">My marketing journey began in 2017 when I graduated with a degree in Marketing Management. What started as a curiosity about how brands connect with people quickly became an obsession with the science of digital advertising.</p></FadeIn>
              <FadeIn><p className="text-muted-foreground leading-relaxed">Over the past 7 years, I&apos;ve managed over $500K in monthly ad spend, generated 15,000+ leads, and helped 75+ businesses achieve measurable growth. From local restaurants to e-commerce brands, every client has taught me something new about the ever-evolving digital landscape.</p></FadeIn>
              <FadeIn><p className="text-muted-foreground leading-relaxed">Today, I specialise in AI-powered marketing — leveraging machine learning and predictive analytics to optimise campaigns in real-time. I&apos;m certified across Meta, Google, HubSpot, and TikTok, and I bring that expertise to every project I take on.</p></FadeIn>
              {/* <FadeIn>
                <Button asChild>
                  <Link href="#"><Download className="mr-2 h-4 w-4" /> Download Resume</Link>
                </Button>
              </FadeIn> */}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/50">
        <div className="container-premium">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-4">Marketing Philosophy</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">The principles that guide every campaign I build.</p>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {philosophy.map((item, i) => (
              <FadeIn key={i}>
                <Card className="card-premium h-full">
                  <CardContent className="p-6">
                    <Quote className="h-5 w-5 text-accent mb-3" />
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="section-padding">
        <div className="container-premium">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-4">Career Timeline</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">Key milestones in my professional journey.</p>
          </FadeIn>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 to-accent/5" />
            <div className="space-y-12">
              {timelineEvents.map((event, i) => (
                <FadeIn key={i}>
                  <div className="relative pl-20">
                    <div className="absolute left-4 top-1 w-9 h-9 rounded-full bg-accent/10 border-2 border-accent/30 flex items-center justify-center">
                      <Calendar className="h-4 w-4 text-accent" />
                    </div>
                    <Badge variant="outline" className="mb-2 border-accent/20 text-accent bg-accent/5">{event.year}</Badge>
                    <h3 className="text-xl font-semibold">{event.title}</h3>
                    <p className="text-muted-foreground mt-2">{event.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="section-padding bg-muted/50">
        <div className="container-premium">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-4">Certifications</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">Industry-recognised credentials that validate my expertise across major platforms.</p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {certifications.map((certification, i) => (
              <FadeIn key={i}><CertificationCard certification={certification} /></FadeIn>
            ))}
          </div>
        </div>
      </section> */}

      {/* <section className="section-padding">
        <div className="container-premium">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-4">Awards & Recognition</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">Honours received for exceptional marketing work.</p>
          </FadeIn>
          <div className="max-w-3xl mx-auto space-y-4">
            <FadeIn>
              <Card className="card-premium">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-accent/10 shrink-0"><Award className="h-5 w-5 text-accent" /></div>
                  <div>
                    <h3 className="font-semibold">Best Meta Ads Campaign 2025</h3>
                    <p className="text-sm text-muted-foreground">Digital Marketing Awards SA — 2025</p>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
            <FadeIn>
              <Card className="card-premium">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-accent/10 shrink-0"><Award className="h-5 w-5 text-accent" /></div>
                  <div>
                    <h3 className="font-semibold">Top Performer — Client Satisfaction</h3>
                    <p className="text-sm text-muted-foreground">Elevate Marketing Agency — 2024</p>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
            <FadeIn>
              <Card className="card-premium">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-accent/10 shrink-0"><Award className="h-5 w-5 text-accent" /></div>
                  <div>
                    <h3 className="font-semibold">Google Ads Rising Star</h3>
                    <p className="text-sm text-muted-foreground">Google Partners Program — 2021</p>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section> */}



      <CTASection />
    </div>
  )
}
