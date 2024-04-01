import { LoadingSpinner } from "@/components/loading-spinner";
import { Suspense } from "react";
import { AnalyticsListLayout } from "./_components/analytics-list-layout";

import { posts } from "@/data/analytics/data";

export default async function Analytics() {
  
    return (
      <div className="flex flex-col h-full">
        <div className="hidden md:flex items-center justify-center h-full bg-grid-black/[0.2] dark:bg-grid-white/[0.2] relative">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

          <h2 className="text-xl">
            Select a notebook
          </h2>
        </div>
        <div className="md:hidden">
          <Suspense fallback={<LoadingSpinner />}>
            <AnalyticsListLayout list={posts} isMobile />
          </Suspense>
        </div>
      </div>
    )
  }