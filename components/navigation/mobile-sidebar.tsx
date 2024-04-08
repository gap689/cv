import Link from "next/link"

import { usePathname } from "next/navigation"

import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger
} from "@/components/ui/sheet"

import { NavCollapse } from "./nav-collapse";
import { CONTACTROUTES, ROUTES } from "@/lib/constants";
import { Separator } from "@/components/ui/separator";
import { buttonVariants } from "@/components/ui/button"

import { Menu } from "lucide-react"

import { cn } from "@/lib/utils";

const MobileSidebar = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="sm:hidden pr-4 hover:opacity-75 transition">
        <div className="px-3 py-1 dark:bg-zinc-900 border border-gray-200 dark:border-stone-700 text-xs rounded-full">
          <Menu className="w-5 h-5"/>
        </div>
      </SheetTrigger>
      <SheetContent side="left" className="px-4 py-12">
        <nav className="grid gap-1 px-2">
          {ROUTES.map((link, index) =>
            <Link
              key={index}
              href={link.href}
              className={cn(
                buttonVariants({ variant: (pathname === "/app" && link.href === "/app") ||
                pathname === link.href ? "default": "ghost", size: "sm" }),
                 "justify-start"
              )}
            >
              <SheetClose className="flex w-full items-center">
              <link.icon className="mr-2 h-4 w-4" />
              {link.title}
              {link.label && (
                <span
                  className={cn(
                    "ml-auto flex w-6 h-6 rounded-md justify-center border",
                    (pathname === "/app" && link.href === "/app") ||
                    pathname === link.href || pathname?.startsWith(`${link.href}/`) ?
                       " bg-gray-900 border-gray-700 dark:bg-gray-100 dark:border-gray-200" : "bg-gray-50 dark:bg-gray-900 border-gray-100 dark:border-gray-800"
                  )}
                >
                  {link.label}
                </span>
              )}
              </SheetClose>
            </Link>
          )}
        </nav>
        
        <Separator className="my-4"/>

        <nav className="grid gap-2 px-2">
          {CONTACTROUTES.map((link, index) =>
            <Link
              key={index}
              href={link.href}
              className={cn(
                buttonVariants({ variant: (pathname === "/app" && link.href === "/app") ||
                pathname === link.href ? "default": "ghost", size: "sm" }),
                 "justify-start"
              )}
            >
              <SheetClose className="flex w-full items-center">
              <link.icon className="mr-2 h-4 w-4" />
              {link.title}
              {link.label && (
                <span
                  className={cn(
                    "ml-auto flex w-6 h-6 rounded-md justify-center border",
                    (pathname === "/app" && link.href === "/app") ||
                    pathname === link.href || pathname?.startsWith(`${link.href}/`) ?
                       " bg-gray-900 border-gray-700 dark:bg-gray-100 dark:border-gray-200" : "bg-gray-50 dark:bg-gray-900 border-gray-100 dark:border-gray-800"
                  )}
                >
                  {link.label}
                </span>
              )}
              </SheetClose>
            </Link>
          )}
        </nav>
      </SheetContent>
    </Sheet>
   );
}
 
export default MobileSidebar;