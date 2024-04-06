'use client'

import { ComponentProps } from "react"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LazyMotion, domAnimation, m } from 'framer-motion'

import { cn, getDateTimeFormat } from '@/lib/utils'
import { Analytics } from '@/data/analytics/data'
import { Badge } from '@/components/ui/badge'

interface AnalyticsLinkProps {
    post: Analytics; // Replace 'any' with the actual type of the 'post' prop
    isMobile: boolean;
  }

export const AnalyticsLink: React.FC<AnalyticsLinkProps> = ({ post, isMobile }) => {
  const pathname = usePathname()
  const isActive = pathname === `/app/analytics/${post.href}`
  const date = new Date(post.date)
  const formattedDate = getDateTimeFormat(date)

  return (
    <LazyMotion features={domAnimation}>
      <Link
        key={post.id}
        href={`/app/analytics/${post.href}`}
        className={cn(
          'flex flex-col gap-1 transition-colors duration-300',
          !isMobile && isActive ? 'bg-black text-white' : 'hover:bg-gray-200',
          isMobile ? 'border-b px-6 sm:px-8 py-3 text-sm hover:bg-gray-100' : 'rounded-lg p-2'
        )}
      >
        <span className="font-medium">{post.name}</span>
        <span className={cn('transition-colors duration-300', isActive ? 'text-slate-400' : 'text-slate-500')}>
          <span>{formattedDate}</span>{' '}
        </span>
        <div>
          {post.labels.length ? (
            <div className="flex flex-wrap items-center gap-2 overflow-x-auto">
              {post.labels.map((label) => (
                <Badge key={label} variant={getBadgeVariantFromLabel(label)}>
                  {label}
                </Badge>
              ))}
              </div>
          ) : null}
        </div>
      </Link>
    </LazyMotion>
  )
}

function getBadgeVariantFromLabel(
  label: string
): ComponentProps<typeof Badge>["variant"] {
  if (["python"].includes(label.toLowerCase())) {
    return "default"
  }

  if (["personal"].includes(label.toLowerCase())) {
    return "outline"
  }

  return "secondary"
}