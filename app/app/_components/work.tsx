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
      <h2 className="text-xl font-bold py-3">Experience</h2>
        {work.map((work) => {
          return (
            <Card key={work.company} className='border-none shadow-none mb-5'>
              <CardHeader className='p-0'>
                <div className="flex sm:flex-row flex-col justify-between gap-x-2 text-base">
                  <div className='flex flex-col'>
                    <div className="inline-flex items-center gap-x-1 font-semibold leading-none mb-3">
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
                    </div>
                    <h4 className="font-mono text-sm leading-none">
                    {work.title}
                    </h4>
                  </div>
                  
                  <div className="sm:text-sm text-xs sm:py-0 py-1 tabular-nums text-gray-500">
                    {work.start} - {work.end}
                  </div>
                </div>

                </CardHeader>
                <CardContent className="text-pretty font-mono text-xs text-muted-foreground p-0 my-3">
                  {work.description}
                </CardContent>
              </Card>
            );
          })}
        </section>
  )
}
