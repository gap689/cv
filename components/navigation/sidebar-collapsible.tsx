"use client"

import { FC, PropsWithChildren, useEffect, useRef, useState } from "react";

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
import { useWindowSize } from 'usehooks-ts'

import { ScrollArea } from "../ui/scroll-area";
import { CONTACTROUTES, ROUTES } from "@/lib/constants";

interface NavigationProps {
  defaultLayout: number[] | undefined
  defaultCollapsed?: boolean
  navCollapsedSize: number
}

export const SidebarCollapsible = ({
  defaultLayout = [20, 80],
  defaultCollapsed = false,
  navCollapsedSize,
  children
}: PropsWithChildren<NavigationProps>) => {
  
  const { width } = useWindowSize();

  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);

  const ref = useRef<ImperativePanelHandle>(null);

useEffect(() => {
  const panel = ref.current;
  if(width < 768) {
    setIsCollapsed(true)
    panel?.collapse();
    return
  }else {
    setIsCollapsed(false)
    panel?.expand();
    document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
        false
      )}`
  }
}, [width]);

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
          minSize={12}
          maxSize={20}
          onCollapse={(collapsed) => {
            const panel = ref.current;
            if(width<768){
              setIsCollapsed(true);
              panel?.collapse();
              document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
                true
              )}`
            } else {
              // panel?.expand();
              setIsCollapsed(collapsed);
              document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
                collapsed
              )}`
            }
          }}
          onResize={(resize) => {
            console.log("resize onResize", resize);
            document.cookie = `react-resizable-panels:layout=${JSON.stringify(
              [resize, 100-resize]
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
          <div className="h-full overflow-y-auto overflow-hidden">
            { children }
          </div>
          {/* </ScrollArea> */}
        </ResizablePanel>
	    </ResizablePanelGroup>
	  </TooltipProvider>
  )
}
