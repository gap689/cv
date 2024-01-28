"use client"

import { useState } from "react";

import { DateRange } from "react-day-picker"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DatePickerWithRange } from "@/components/ui/date-range-picker";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TradingviewWidget from "./_components/tradingview-widget";
import { Overview } from "./_components/overview";
import { Activity, BarChart3, TrendingDown, TrendingUp, Wallet } from "lucide-react";
import { calculateCryptoBalance, calculateNetProfit, lastSevenDaysProfit, todaysPNL } from "@/lib/calculations";
import { pnlData } from "@/data/finance";

export default function DashboardPage() {
  
  const defaultSelected: DateRange = {
    from: new Date(2024, 0, 1),
    to: new Date(),
  };

  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);

  let totalBalance=0;
  let totalProfit=0

  if (range?.from && range?.to) {
    totalBalance = parseFloat(calculateCryptoBalance(pnlData.data.userProfitRets, range.from, range.to).toFixed(4));
    totalProfit= parseFloat(calculateNetProfit(pnlData.data.userProfitRets, range.from, range.to).toFixed(4));

  }

  const todayProfit = parseFloat(todaysPNL(pnlData.data.userProfitRets).toFixed(4));

  const lastSevenDaysProfits = parseFloat(lastSevenDaysProfit(pnlData.data.userProfitRets).toFixed(4));

  return (
      <div className="relative flex flex-col space-y-4 p-8 pt-6 h-full">
        <Tabs defaultValue="overview" className="space-y-4">
          <div className="flex flex-col sticky top-0 space-y-2 pb-3 bg-background">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold tracking-tight">
                Dashboard
              </h2>
              <div className="flex items-center space-x-2">
                <DatePickerWithRange range={range} setRange={setRange}/>
              </div>
            </div>

            <TabsList className="w-fit">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics" disabled>
                Analytics
              </TabsTrigger>
              <TabsTrigger value="reports" disabled>
                Reports
              </TabsTrigger>
            </TabsList>
          </div>
            
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Balance (USDT)
                  </CardTitle>
                  <Wallet className="h-4 w-4 text-muted-foreground"/>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    ${totalBalance}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    +20.1% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Net Profits
                  </CardTitle>
                  { totalProfit > 0 ? 
                    <TrendingUp className="w-4 h-4 text-muted-foreground"/> 
                      : 
                    <TrendingDown className="w-4 h-4 text-muted-foreground"/>}
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    ${totalProfit}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    +180.1% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">7D PNL</CardTitle>
                  <BarChart3 className="h-4 w-4 text-muted-foreground"/>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    ${lastSevenDaysProfits}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    +19% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Today&apos;s PNL
                  </CardTitle>
                  <Activity className="w-4 h-4 text-muted-foreground"/>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    ${todayProfit}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    +201 since last hour
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  {/* <TradingviewWidget/> */}
                  <Overview data={pnlData.data.userProfitRets} startDate={range?.from} endDate={range?.to} />
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Recent Trades</CardTitle>
                  <CardDescription>
                    You made 265 sales this month.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* <RecentSales /> */}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
   )
}
