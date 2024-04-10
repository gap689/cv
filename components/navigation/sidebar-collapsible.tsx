"use client"

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils"

import { Separator } from "@/components/ui/separator";
import { TooltipProvider } from "@/components/ui/tooltip";
import { 
  ResizableHandle, 
  ResizablePanel, 
  ResizablePanelGroup 
} from "@/components/ui/resizable";
import { NavCollapse } from "./nav-collapse";
import ProfileDropdown from "./profile-dropdown";
import { ImperativePanelHandle } from "react-resizable-panels";
import useSize from "@/hooks/useSize";
import { ScrollArea } from "../ui/scroll-area";
import { CONTACTROUTES, ROUTES } from "@/lib/constants";

interface NavigationProps {
  defaultLayout: number[] | undefined
  defaultCollapsed?: boolean
  navCollapsedSize: number
  children: React.ReactNode
}

export const SidebarCollapsible = ({
  defaultLayout = [260, 440, 655],
  defaultCollapsed = true,
  navCollapsedSize,
  children
}: NavigationProps) => {

const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);

const windowSize = useSize();

const ref = useRef<ImperativePanelHandle>(null);

useEffect(() => {
  const panel = ref.current;
  if(window.innerWidth < 768) {
    panel?.collapse();
    document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
      true
    )}`
    console.log("panel collapsed (setCollapse) at:", window.innerWidth)
  } else if (window.innerWidth >= 768) {
    panel?.expand();
    console.log("panel expanded (setIsCollapse) at:", window.innerWidth)
  }
}, [window.innerWidth]);

  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction="horizontal"
        onLayout={(sizes: number[]) => {
          document.cookie = `react-resizable-panels:layout=${JSON.stringify(
            sizes
          )}`
        }}
        className="h-full items-stretch"
      >
        <ResizablePanel
          ref={ref}
          defaultSize={defaultLayout[0]}
          collapsedSize={navCollapsedSize}
          collapsible={true}
          minSize={15}
          maxSize={20}
          onCollapse={(collapsed) => {
            setIsCollapsed(collapsed)
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
              collapsed
            )}`
          }}
          className={cn(isCollapsed && "min-w-[50px] transition-all duration-300 ease-in-out")}
        >
          <div className="p-2 w-full mt-5">
            <ProfileDropdown
              isCollapsed={isCollapsed}
            />
          </div>
          
          <Separator />

          <NavCollapse
            isCollapsed={isCollapsed}
            links={ROUTES}
          />
          <Separator />

          <div className="h-full w-full flex flex-col">
            <div className={cn("uppercase mt-3 px-7 py-2 text-xs font-semibold", isCollapsed && "hidden")}>
              Account
            </div>
            <NavCollapse
              isCollapsed={isCollapsed}
              links={CONTACTROUTES}
            />
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
          
        <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
          {/* <ScrollArea className="h-full"> *check this bug */}
          <div className="h-full overflow-y-auto">
            { children }
          </div>
          {/* </ScrollArea> */}
        </ResizablePanel>
	    </ResizablePanelGroup>
	  </TooltipProvider>
  )
}
