import * as React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Award } from 'lucide-react'
import type { Certification } from '@/types'

interface CertificationCardProps {
  certification: Certification
}

export default function CertificationCard({ certification }: CertificationCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="p-5 flex flex-col items-center text-center gap-2">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
          <Award className="h-6 w-6 text-primary" />
        </div>
        <h3 className="font-bold text-sm">{certification.title}</h3>
        <p className="text-xs text-muted-foreground">{certification.issuer}</p>
        <span className="text-xs text-muted-foreground">{certification.date}</span>
      </CardContent>
    </Card>
  )
}
