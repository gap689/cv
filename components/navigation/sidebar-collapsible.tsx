"use client"
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

import { Settings, ShoppingCart } from "lucide-react"

import { cn } from "@/lib/utils"

import { BarChart, Compass, Layout, List } from "lucide-react"
import { FaVials } from "react-icons/fa";
import { RiMapPin5Line, RiUser3Line, RiHome6Line, RiHomeLine } from "react-icons/ri";
import { BsCreditCard } from "react-icons/bs";

import { TooltipProvider } from "@/components/ui/tooltip";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { useState } from "react";
import { NavCollapse } from "./nav-collapse";
import { useParams, usePathname } from "next/navigation";
import { ModeToggle } from "../mode-toggle";

interface NavigationProps {
  defaultLayout: number[] | undefined
  defaultCollapsed?: boolean
  navCollapsedSize: number
  children: React.ReactNode
}

export const SidebarCollapsible = ({
  defaultLayout = [260, 440],
  // [265, 440, 655]
  defaultCollapsed = false,
  navCollapsedSize,
  children
}: NavigationProps) => {

const pathname = usePathname();

const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);

const params = useParams();

const routes = [
  {
    icon: RiHomeLine,
    title: "Home",
    href:"/home",
    label: "",
  },
	{
		icon: Layout,
		title: "Dashboard",
		href: "/app/dashboard",
    label:"",
	},
  {
    icon: List,
    title: "Catálogo",
    href: "/app/catalogo",
    label: "",
  },
  {
    icon: BarChart,
    title: "Analytics",
    href: "/app/analytics",
    label: "",
  },
	{
    icon: ShoppingCart,
    title: "Órdenes",
    href: "/app/ordenes",
    label: "",
  },
  {
    icon: FaVials,
    title: "Crear solicitudes",
    href: "app/solicitar",
    label: "",
  },
  {
    icon: BsCreditCard,
    title: "Suscripción",
    href: "app/subscription",
    label: "",
  },
];
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
          <div className={cn("flex h-[52px] items-center justify-center", isCollapsed ? 'h-[52px]': 'px-2')}>
            <div className="w-full flex items-center px-3 text-sm font-medium dark:bg-black bg-gray-100 h-9 rounded-md">
              Welcome
            </div> 
          </div>
          <Separator />
            {/* <div className={cn("uppercase px-3 py-2 text-xs font-semibold", isCollapsed && "hidden")}>
              Menu
            </div>   */}
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
          <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>          
              {children}
          </ResizablePanel>
	  </ResizablePanelGroup>
	</TooltipProvider>
  )
}
