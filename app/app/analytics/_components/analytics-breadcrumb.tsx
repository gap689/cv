"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"

const AnalyticsBreadcrumb = () => {
  
  const pathname= usePathname();
  const [lastSection, setLastSection] = useState('');

  useEffect(() => {
    const pathnameSections = pathname.split('/');
    const lastSection = pathnameSections[pathnameSections.length - 1];
    const lastStringAfterAnalytics = pathnameSections[pathnameSections.length -2] === 'analytics' ? pathnameSections[pathnameSections.length-1] : null;

    setLastSection(lastStringAfterAnalytics);
  }, [pathname]);
  
  return ( 
    <header className="sticky inset-x-0 top-0 z-10 mx-auto flex h-12 w-full shrink-0 items-center overflow-hidden border-b text-sm font-medium md:hidden">
      <div className="flex h-full w-full items-center px-3 pt-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/app/analytics">Notebooks</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={lastSection} className="font-semibold">
                {lastSection}
              </BreadcrumbLink>
            </BreadcrumbItem>
            
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </header>
  );
}
 
export default AnalyticsBreadcrumb;