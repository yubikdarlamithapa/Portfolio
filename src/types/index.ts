export interface Service {
  id?: string
  slug?: string
  title: string
  description: string
  icon: string
  details: string[]
  href?: string
}

export interface PortfolioItem {
  id: string
  title: string
  industry: string
  category: string
  goal: string
  strategy: string
  results: string[]
  image: string
  metrics?: { label: string; value: string }[]
  challenge?: string
  lessons?: string[]
  tags?: string[]
}

export interface CaseStudy {
  slug?: string
  id?: string
  title: string
  client: string
  industry: string
  problem: string
  research: string
  audience: string
  campaignStructure: string
  creativeStrategy: string
  budget: string
  optimisation: string
  results?: string[]
  finalResults?: string[]
  beforeAfter: { label: string; before: string; after: string }[]
  image?: string
}

export interface Testimonial {
  id?: string
  name: string
  company: string
  role: string
  review: string
  rating: number
  image: string
}

export interface Skill {
  name: string
  level: number
  category: string
}

export interface Tool {
  name: string
  description: string
  category: string
  proficiency: number | 'Expert' | 'Advanced' | 'Intermediate'
  icon?: string
}

export interface BlogPost {
  slug: string
  id?: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  image: string
  content?: string
  tags?: string[]
}

export interface Certification {
  name?: string
  title?: string
  issuer: string
  date: string
  image: string
  link: string
}

export interface Stat {
  label: string
  value: number
  suffix?: string
  prefix?: string
}

export interface TimelineEvent {
  year: string
  title: string
  description: string
}
