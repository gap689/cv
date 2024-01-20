import { cookies } from "next/headers"

import { SidebarCollapsible } from "@/components/navigation/sidebar-collapsible";

export default function AppLayout({ 
  children,
}: { 
  children: React.ReactNode;  
} ) {

  const layout = cookies().get("react-resizable-panels:layout")
  const collapsed = cookies().get("react-resizable-panels:collapsed")

  const defaultLayout = layout ? JSON.parse(layout.value) : undefined
  const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : undefined

  return (
    <div className='flex h-full backdrop-blur-md'>
      <div className="flex h-full w-full sm:pt-14 xs:pt-12">
        <SidebarCollapsible
          defaultLayout={defaultLayout}
          defaultCollapsed={defaultCollapsed}
          navCollapsedSize={4}
          children= {children}
        />
      </div>
    </div>      
  )
}