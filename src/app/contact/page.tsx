import { FadeIn } from "@/components/animations/fade-in"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/forms/contact-form"
import { siteConfig } from "@/lib/data"
import { Sms, MessageCircle, Calendar, Location, Linkedin, Instagram, Facebook } from "@/lib/iconsax"

const contactInfo = [
  { icon: Sms, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: MessageCircle, label: "WhatsApp", value: siteConfig.whatsapp, href: `https://wa.me/${siteConfig.whatsapp}` },
]

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", value: siteConfig.social.linkedin.replace("https://", ""), href: siteConfig.social.linkedin },
  { icon: Instagram, label: "Instagram", value: `@${siteConfig.social.instagram.split("/").pop()}`, href: siteConfig.social.instagram },
  { icon: Facebook, label: "Facebook", value: siteConfig.social.facebook.split("/").pop() || "", href: siteConfig.social.facebook },
  // { label: "X (Twitter)", value: siteConfig.social.twitter.replace("https://", ""), href: siteConfig.social.twitter },
]

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <section className="section-padding relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,149,44,0.08),transparent_50%)]" />
        <div className="container-premium relative z-10">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="primary" className="mb-4">Get in Touch</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                Let&apos;s Work Together
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ready to grow your business with data-driven marketing? Fill out the form below or reach out directly. I typically respond within 24 hours.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-premium">
          <div className="grid gap-12 lg:grid-cols-5 max-w-6xl mx-auto">
            <div className="lg:col-span-3">
              <FadeIn>
                <h2 className="mb-6 text-2xl font-bold">Send a Message</h2>
              </FadeIn>
              <ContactForm />
            </div>
            <div className="lg:col-span-2">
              <FadeIn>
                <h2 className="mb-6 text-2xl font-bold">Contact Information</h2>
              </FadeIn>
              <div className="mb-8 space-y-4">
                {contactInfo.map((item, i) => (
                  <FadeIn key={i}>
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 rounded-xl card-premium p-4 transition-all hover:border-accent/20 hover:shadow-md">
                      <div className="rounded-xl bg-accent/10 p-2.5 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">{item.label}</p>
                        <p className="text-sm font-medium">{item.value}</p>
                      </div>
                    </a>
                  </FadeIn>
                ))}
              </div>

              <FadeIn>
                <div className="mb-8 space-y-3">
                  <h3 className="text-sm font-semibold text-muted-foreground">Social</h3>
                  {socialLinks.map((item, i) => (
                    <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 rounded-xl card-premium p-4 transition-all hover:border-accent/20 hover:shadow-md">
                      <div className="rounded-xl bg-accent/10 p-2.5 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">{item.label}</p>
                        <p className="text-sm font-medium">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </FadeIn>

              {/* <FadeIn>
                <Card className="card-premium mb-8">
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-accent" />
                      <h3 className="font-semibold">Schedule a Meeting</h3>
                    </div>
                    <p className="mb-4 text-sm text-muted-foreground">Book a 30-minute discovery call to discuss your marketing goals and how I can help.</p>
                    <Button className="w-full bg-accent text-accent-foreground shadow-lg shadow-accent/20 hover:bg-accent/90" asChild>
                      <a href={siteConfig.calendly} target="_blank" rel="noopener noreferrer">Book a Discovery Call</a>
                    </Button>
                  </CardContent>
                </Card>
              </FadeIn> */}

              {/* <FadeIn>
                <Card className="card-premium mb-4">
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-accent" />
                      <h3 className="font-semibold">Location</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {siteConfig.location}<br />Available for remote collaboration worldwide
                    </p>
                  </CardContent>
                </Card>
              </FadeIn> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
