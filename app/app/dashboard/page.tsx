"use client"

import { useState, useEffect } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Metadata } from "next";
import FinancialDashboard from "./_components/financial-dashboard";
import { Separator } from "@/components/ui/separator";
import HealthcareDashboard from "./_components/healthcare-dashboard";

const metadata: Metadata = {
  title: "Dashboard",
  description: "Analytics dashboard",
}

const DashboardPage: React.FC = () => {
  
  return (
      <div className="flex flex-col space-y-4 sm:p-8 p-5 pt-6 h-full">
        <Tabs defaultValue="healthcare" className="space-y-4">
          <div className="flex flex-col space-y-2 pb-2 bg-background">
            <div className="flex flex-col">
              <h2 className="md:text-3xl text-2xl font-bold font-orbitron uppercase tracking-wider">
                Dashboard Design
              </h2>
            </div>
            
            <div className="text-sm py-2 text-muted-foreground">
              ** Explore my dashboard designs tailored for diverse use cases.
            </div>

            <div className="overflow-x-auto">
              <TabsList className="w-fit">
                <TabsTrigger value="healthcare" className="text-xs">
                  HEALTHCARE
                </TabsTrigger>
                <TabsTrigger value="financial" className="text-xs">
                  FINANCE
                </TabsTrigger>
              </TabsList>
            </div>
          </div>

          <Separator/>
            
          <TabsContent value="financial" className="space-y-4 pb-6">
            <FinancialDashboard/>
          </TabsContent>
          
          <TabsContent value="healthcare" className="space-y-4 pb-6">
            <HealthcareDashboard/>
          </TabsContent>
        </Tabs>
      </div>
   )
}

export default DashboardPage;