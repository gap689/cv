import { LoadingSpinner } from "@/components/loading-spinner";
import { Suspense } from "react";
import { AnalyticsListLayout } from "./_components/analytics-list-layout";

import { posts } from "@/data/analytics/data";
import { ScrollArea } from "@/components/ui/scroll-area";


export default async function Analytics() {
  
    return (
      <ScrollArea className="flex flex-col md:hidden">
        <Suspense fallback={<LoadingSpinner />}>
          <AnalyticsListLayout list={posts} isMobile />
        </Suspense>
      </ScrollArea>
    )
  }