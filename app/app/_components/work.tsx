import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import React from 'react'

type WorkType= {
  company: string,
  link: string,
  badges: string[],
  title: string,
  start: string,
  end: string,
  description: string,
}

type WorkProps ={
  work: WorkType[]
}
export default function Work({work}: WorkProps) {
  return (
    <section>
      <h2 className="text-xl font-bold">Experience</h2>
        {work.map((work) => {
          return (
            <Card key={work.company}>
              <CardHeader>
                <div className="flex items-center justify-between gap-x-2 text-base">
                  <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                    <a className="hover:underline" href={work.link}>
                      {work.company}
                    </a>
                    <span className="inline-flex gap-x-1">
                      {work.badges.map((badge) => (
                        <Badge
                          variant="secondary"
                          className="align-middle text-xs"
                          key={badge}
                        >
                          {badge}
                        </Badge>
                      ))}
                    </span>
                  </h3>
                  <div className="text-sm tabular-nums text-gray-500">
                    {work.start} - {work.end}
                  </div>
                </div>

                <h4 className="font-mono text-sm leading-none">
                  {work.title}
                </h4>
                </CardHeader>
                <CardContent className="mt-2 text-pretty font-mono text-xs text-muted-foreground">
                  {work.description}
                </CardContent>
              </Card>
            );
          })}
        </section>
  )
}
