"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation";
import Link from "next/link"
import { Button } from '@/components/ui/button';
import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

const AnalyticsBreadcrumb = () => {
  
  const pathname= usePathname();

  const pathnameSections = pathname.split('/');
  const lastSection = pathnameSections[pathnameSections.length - 1];
  const lastStringAfterAnalytics = pathnameSections[pathnameSections.length -2] === 'analytics' ? pathnameSections[pathnameSections.length-1] : null;
  
  return ( 
    <nav aria-label="Breadcrumb" className="sticky inset-x-0 top-0 pt-2 mx-auto flex h-fit w-full shrink-0 items-center overflow-hidden border-b text-xs font-medium md:hidden mt-4 bg-background">
      <ol className="flex items-center gap-2 px-4">
        <li className="flex items-center gap-2">
          <Link href="/app/analytics">
            <Button variant="link" className="p-0 dark:text-zinc-400 text-zinc-600 font-semibold">
              Notebooks
            </Button>
          </Link>
          {/* { pathname.startsWith("/app/analytics/") && ( */}
            <span className="text-gray-500 dark:text-gray-400">
              <ChevronRight className="w-4 h-4"/>
            </span>
            {/* )
          } */}
        </li>
        <li className="flex items-center">
          <Link href={`/app/analytics/${lastStringAfterAnalytics}`}>
            <Button variant="link" className={cn("p-0 font-semibold", lastStringAfterAnalytics&&"dark:text-zinc-200 text-zinc-800")}>
              {lastStringAfterAnalytics}
            </Button>
          </Link>
        </li>
      </ol>
    </nav>
  );
}
 
export default AnalyticsBreadcrumb;