"use client"

import Link from "next/link"
import { LucideIcon } from "lucide-react"
import { IconType } from "react-icons";

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import { usePathname } from "next/navigation"

interface NavProps {
  isCollapsed: boolean
  links: {
    title: string
    label?: string
    icon: LucideIcon | IconType
    href: string
    // variant: "default" | "ghost"
  }[]
}

export function NavCollapse({ links, isCollapsed }: NavProps) {

  const pathname = usePathname();
  const pathnameSections = pathname.split('/');
  const lastStringAfterAnalytics = pathnameSections[pathnameSections.length -2] === 'analytics' ? true : false;

  return (
    <div
      data-collapsed={isCollapsed}
      className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
    >
      <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {links.map((link, index) =>
          isCollapsed ? (
            <Tooltip key={index} delayDuration={0}>
              <TooltipTrigger asChild>
                <Link
                  href={link.href}
                  className={cn(
                    buttonVariants({ variant: (pathname=== link.href || pathname?.endsWith(`${link.href}/`) || link.href==="/app/analytics"&&pathname.startsWith(link.href)) ? "default": "ghost", size: "icon" }),
                    "h-9 w-9",
                    (pathname === link.href) &&
                      "dark:hover:bg-muted dark:hover:text-white"
                  )}
                >
                  <link.icon className="h-4 w-4 shrink-0" />
                  <span className="sr-only">{link.title}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="flex items-center gap-4">
                {link.title}
                {link.label && (
                  <span className="ml-auto text-muted-foreground">
                    {link.label}
                  </span>
                )}
              </TooltipContent>
            </Tooltip>
          ) : (
            <Link
              key={index}
              href={link.href}
              className={cn(
                buttonVariants({ variant: ( pathname=== link.href || pathname?.endsWith(`${link.href}/`) || link.href==="/app/analytics"&&pathname.startsWith(link.href) ) ? "default": "ghost", size: "sm" }),
                 "justify-start"
              )}
            >
              <link.icon className="mr-2 h-4 w-4" />
              {link.title}
              {link.label && (
                <span
                  className={cn(
                    "ml-auto flex w-6 h-6 rounded-md justify-center border",
                    pathname === link.href || pathname?.startsWith(`${link.href}/`) ?
                      " bg-gray-900 border-gray-700 dark:bg-gray-100 dark:border-gray-200" : "bg-gray-50 dark:bg-gray-900 border-gray-100 dark:border-gray-800"
                  )}
                >
                  {link.label}
                </span>
              )}
            </Link>
          )
        )}
      </nav>
    </div>
  )
}