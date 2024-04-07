import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet"

import { NavCollapse } from "./nav-collapse";
import { CONTACTROUTES, ROUTES } from "@/lib/constants";
import { Separator } from "@/components/ui/separator";

import { Menu } from "lucide-react"

const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger className="sm:hidden pr-4 hover:opacity-75 transition">
        <div className="px-3 py-1 dark:bg-zinc-900 border border-gray-200 dark:border-stone-700 text-xs rounded-full">
          <Menu className="w-5 h-5"/>
        </div>
      </SheetTrigger>
      <SheetContent side="left" className="px-4 py-12">
        <NavCollapse
          isCollapsed={false}
          links={ROUTES}
        />
        <Separator/>
        <NavCollapse
          isCollapsed={false}
          links={CONTACTROUTES}
        />
      </SheetContent>
    </Sheet>
   );
}
 
export default MobileSidebar;