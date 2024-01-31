"use client"

import { useEffect, useRef, useState } from "react";
import { useParams, usePathname } from "next/navigation";

import { cn } from "@/lib/utils"

import { BarChart, Compass, Layout, List } from "lucide-react"
import { FaVials } from "react-icons/fa";
import { FiActivity } from "react-icons/fi";
import { RiHomeLine } from "react-icons/ri";

import { Separator } from "@/components/ui/separator";
import { TooltipProvider } from "@/components/ui/tooltip";
import { 
  ResizableHandle, 
  ResizablePanel, 
  ResizablePanelGroup 
} from "@/components/ui/resizable";
import { ModeToggle } from "@/components/mode-toggle";
import { NavCollapse } from "./nav-collapse";
import ProfileDropdown from "./profile-dropdown";
import { ImperativePanelHandle } from "react-resizable-panels";
import { ScrollArea } from "../ui/scroll-area";
import useSize from "@/hooks/useSize";

interface NavigationProps {
  defaultLayout: number[] | undefined
  defaultCollapsed?: boolean
  navCollapsedSize: number
  children: React.ReactNode
}

export const SidebarCollapsible = ({
  defaultLayout = [260, 440, 655],
  defaultCollapsed = false,
  navCollapsedSize,
  children
}: NavigationProps) => {

const pathname = usePathname();

const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);

const params = useParams();

const windowSize = useSize();

const ref = useRef<ImperativePanelHandle>(null);

const routes = [
  {
    icon: RiHomeLine,
    title: "Home",
    href:"/app",
    label: "",
  },
	{
		icon: Layout,
		title: "Dashboard",
		href: "/app/dashboard",
    label:"3",
	},
  {
    icon: List,
    title: "Data",
    href: "/app/table",
    label: "",
  },
  {
    icon: BarChart,
    title: "Analytics",
    href: "/app/analytics",
    label: "",
  },
  {
    icon: FaVials,
    title: "Experiments",
    href: "app/experiments",
    label: "",
  },
  {
    icon: FiActivity,
    title: "Activity",
    href: "app/activity",
    label: "",
  }
];

useEffect(() => {
  const panel = ref.current;
  if(windowSize[0] < 520) {
    panel?.collapse();
  } else{
    panel?.expand();
  }
}, [windowSize]);

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
          <div className="p-2 w-full">
            <ProfileDropdown
              isCollapsed={isCollapsed}
            />
          </div>
          
          <Separator />

            <NavCollapse
              isCollapsed={isCollapsed}
              links={routes}
            />
          <Separator />

            <div className="h-full w-full flex flex-col px-3">
              <div className={cn("uppercase mt-3 px-4 py-2 text-xs font-semibold", isCollapsed && "hidden")}>
                Account
              </div>
              <ModeToggle/>
            </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
          
        <ResizablePanel defaultSize={defaultLayout[1]} minSize={30} style={{"overflowY": "scroll"}}>
            {children}
        </ResizablePanel>
	    </ResizablePanelGroup>
	  </TooltipProvider>
  )
}
