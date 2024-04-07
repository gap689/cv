"use client";

import { usePathname } from "next/navigation";
import SideMenu from "./_components/side-menu";
import AnalyticsBreadcrumb from "./_components/analytics-breadcrumb"

const AnalyticsPage = (
  { 
    children,
  }: { 
    children: React.ReactNode;
  }
) => {

  const pathname= usePathname();

  const parts = pathname.split('/');
  const lastPart = parts[parts.length - 1];

  // Check if the last part is "analytics" and get the following string if it exists
  const lastStringAfterAnalytics = parts[parts.length -2] === 'analytics' ? parts[parts.length-1] : null;

  return (
    <div className="flex flex-col flex-grow h-full" >
      <AnalyticsBreadcrumb/>
      {/* { lastStringAfterAnalytics ? null : ( */}
        <div className="flex items-center justify-between space-y-2 p-6 sm:p-8">
          <div>
            <h2 className="md:text-3xl text-2xl font-bold tracking-tight">
              Analytic Notebooks
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              Explore my data-driven journey through a curated portfolio of analytical notebooks!
            </p>
          </div>
        </div>
      {/* )
      } */}

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