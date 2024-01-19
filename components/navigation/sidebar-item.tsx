"use client"

import { usePathname, useRouter } from "next/navigation"

import { LucideIcon } from "lucide-react"
import { IconType } from "react-icons";

import { cn } from "@/lib/utils";

interface SidebarItemProps {
  icon: LucideIcon | IconType;
  label: string;
  href: string;
}

export const SidebarItem = ({
  icon: Icon,
  label,
  href,
}: SidebarItemProps ) => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (pathname === "/" && href === "/") ||
  pathname === href || pathname?.startsWith(`${href}/`);

  const onClick = () => {
    router.push(href)
  }

  return (
    <button
      onClick={onClick}
      type="button"
      className={cn("flex items-center gap-x-2 rounded-md text-gray-700 dark:text-gray-400 text-sm font-medium pl-4 transition-all hover:text-sky-900 hover:bg-stone-100 dark:hover:bg-stone-700 dark:hover:text-stone-200",
        isActive && "text-sky-900 dark:text-gray-300 bg-gray-200 dark:bg-gray-700")}>
        <div className="flex items-center gap-x-2 py-3">
          <Icon 
            className={cn("w-5 h-5 shrink-0", isActive && "")}/>
          {label}
        </div>
        <div className={cn("ml-auto opacity-0 border-2 flex h-full transition-all", isActive && "opacity-100 border-sky-700")}/>
    </button>
  )
}
