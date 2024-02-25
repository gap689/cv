import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnalyticsList } from "./analytics-list";

import { posts } from "@/data/analytics/data";
import { FC, ReactNode, Suspense } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { LoadingSpinner } from "@/components/loading-spinner";

const SideMenu: React.FC = () => {

  return (
    <div
      className={cn(
        'hidden h-full md:flex md:flex-col md:border-r 2xl:max-w-md lg:max-w-sm md:max-w-xs'
      )}
    >
      <Tabs defaultValue="all">
        <div className="flex items-center px-4 py-2 sticky top-0 border-b bg-white dark:bg-[#101010]">
          <TabsList>
            <TabsTrigger value="all" className="text-zinc-600 dark:text-zinc-200">All notebooks</TabsTrigger>
            <TabsTrigger value="analytics" className="text-zinc-600 dark:text-zinc-200">Analytics</TabsTrigger>
            <TabsTrigger value="ml" className="text-zinc-600 dark:text-zinc-200">ML</TabsTrigger>
          </TabsList>
        </div>
                
        <TabsContent value="all" className="m-0 h-[calc(100vh-14.5rem)]">
          <ScrollArea  className="h-full p-4">
            <Suspense fallback={<LoadingSpinner />}>
              <AnalyticsList items={posts}/>
            </Suspense>
          </ScrollArea>
        </TabsContent>
        
        <TabsContent value="analytics" className="m-0 h-[calc(100vh-14.5rem)]">
          <ScrollArea  className="h-full p-4">
            <AnalyticsList items={posts.filter((item) => item.type==="analytics")} />
          </ScrollArea>
        </TabsContent>

        <TabsContent value="ml" className="m-0 h-[calc(100vh-14.5rem)]">
          <ScrollArea  className="h-full p-4">
            <AnalyticsList items={posts.filter((item) => item.type==="machinelearning")} />
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
    );
}
 
export default SideMenu;