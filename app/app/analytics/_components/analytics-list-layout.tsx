'use client'

import { cn } from '@/lib/utils'
import { Analytics } from "@/data/analytics/data"
import { AnalyticsLink } from './analytics-link';

interface AnalyticsListLayoutProps {
    list: Analytics[]; // Replace 'any' with the actual type of the 'list' prop
    isMobile: boolean;
  }

export const AnalyticsListLayout: React.FC<AnalyticsListLayoutProps> = ({ list, isMobile }) => {

  return (
    <div className={cn(!isMobile && 'flex flex-col gap-1 text-sm')}>
      {list.map((post) => {
        return <AnalyticsLink key={post.id} post={post} isMobile={isMobile} />
      })}
    </div>
  )
}