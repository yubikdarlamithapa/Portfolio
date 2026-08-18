import { FadeIn } from "@/components/animations/fade-in"
import { Hero } from "@/components/sections/hero"
import { TrustSection } from "@/components/sections/trust-section"
import { AboutPreview } from "@/components/sections/about-preview"
import { ServicesGrid } from "@/components/sections/services-grid"
import { FeaturedProjects } from "@/components/sections/featured-projects"
import { StatsSection } from "@/components/sections/stats-section"
import { ProcessSection } from "@/components/sections/process-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { CTASection } from "@/components/sections/cta-section"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <section id="hero"><FadeIn><Hero /></FadeIn></section>
      <section id="trust"><FadeIn><TrustSection /></FadeIn></section>
      <section id="about-preview"><FadeIn><AboutPreview /></FadeIn></section>
      <section id="services"><FadeIn><ServicesGrid /></FadeIn></section>
      <section id="projects"><FadeIn><FeaturedProjects /></FadeIn></section>
      <section id="stats"><FadeIn><StatsSection /></FadeIn></section>
      <section id="process"><FadeIn><ProcessSection /></FadeIn></section>
      <section id="testimonials"><FadeIn><TestimonialsSection /></FadeIn></section>
      <section id="cta"><FadeIn><CTASection /></FadeIn></section>
    </div>
  )
}
