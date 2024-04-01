"use client";

import { usePathname } from "next/navigation";
import { FloatingHeader } from "./_components/floating-header";
import SideMenu from "./_components/side-menu";

import { SCROLL_AREA_ID } from '@/lib/constants'

const AnalyticsPage = (
  { 
    children,
  }: { 
    children: React.ReactNode;
  }
) => {

  const pathname= usePathname();

  // Split the pathname by "/" and get the last element
  const parts = pathname.split('/');
  const lastPart = parts[parts.length - 1];

  // Check if the last part is "analytics" and get the following string if it exists
  const lastStringAfterAnalytics = parts[parts.length -2] === 'analytics' ? parts[parts.length-1] : null;
  console.log(lastStringAfterAnalytics)

  return (
    <div className="flex flex-col flex-grow h-full" id={SCROLL_AREA_ID}>
      {
        lastStringAfterAnalytics && (
          <FloatingHeader title={lastStringAfterAnalytics!} scrollTitle={lastStringAfterAnalytics!} goBackLink="/app/analytics"/>
        )
      }

      {
        pathname ==="/analytics" && (
          <div className="flex items-center justify-between space-y-2 p-6 sm:p-8">
            <div>
              <h2 className="md:text-3xl text-2xl font-bold tracking-tight">Analytic Notebooks</h2>
              <p className="text-muted-foreground text-sm md:text-base">
                Explore my data-driven journey through a curated portfolio of analytical notebooks!
              </p>
            </div>
          </div>
        )
      }

      <div className="flex w-full h-full border-t">
        <SideMenu/>
        <div className="w-full">
          { children }
        </div>
      </div>
    </div>
  );
}
 
export default AnalyticsPage;