"use client"

import { useState, useEffect } from "react";

import { DateRange } from "react-day-picker"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DatePickerWithRange } from "@/components/ui/date-range-picker";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TradingviewWidget from "./_components/tradingview-widget";
import { Overview } from "./_components/overview";
import { Activity, BarChart3, TrendingDown, TrendingUp, Wallet } from "lucide-react";
import { calculateCryptoBalance, calculateNetProfit, calculateProfitRangeChange, lastSevenDaysProfit, todaysPNL } from "@/lib/calculations";
import { pnlData } from "@/data/finance";
import RecentTrades from "./_components/recent-trades";
import { transactions } from "@/data/transactions";
import { ScrollArea } from "@/components/ui/scroll-area";

import { useMotionValue, useMotionTemplate, motion } from "framer-motion";

import { cn } from "@/lib/utils/cn";

export default function DashboardPage() {

  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);
 
  const [randomString, setRandomString] = useState("");
 
  useEffect(() => {
    let str = generateRandomString(1500);
    setRandomString(str);
  }, []);

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
 
    const str = generateRandomString(1500);
    setRandomString(str);
  }
  
  const defaultSelected: DateRange = {
    from: new Date(2024, 0, 1),
    to: new Date(),
  };

  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);

  let totalBalance=0;
  let totalProfit=0
  let profitRangeChange = 0;

  if (range?.from && range?.to) {
    totalBalance = parseFloat(calculateCryptoBalance(pnlData.data.userProfitRets, range.from, range.to).toFixed(4));
    totalProfit= parseFloat(calculateNetProfit(pnlData.data.userProfitRets, range.from, range.to).toFixed(4));
    profitRangeChange= calculateProfitRangeChange(pnlData.data.userProfitRets, range.from, range.to)
  }

  const todayProfit = parseFloat(todaysPNL(pnlData.data.userProfitRets).toFixed(4));

  const lastSevenDaysProfits = parseFloat(lastSevenDaysProfit(pnlData.data.userProfitRets).toFixed(4));

  const trades = transactions.data;

  const lastTransactions = trades.slice(-10);
  
  return (
      <div className="relative flex flex-col space-y-4 p-8 pt-6 h-full">
        <Tabs defaultValue="overview" className="space-y-4">
          <div className="flex flex-col space-y-2 pb-2 bg-background">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <h2 className="md:text-3xl text-2xl font-bold tracking-tight">
                Dashboard
              </h2>
              <div className="flex items-center space-x-2">
                <DatePickerWithRange range={range} setRange={setRange}/>
              </div>
            </div>

            <TabsList className="w-fit">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="reports" disabled>
                Reports
              </TabsTrigger>
            </TabsList>

            <div className="text-xs py-2 text-muted-foreground">
              **Disclaimer: The data presented here is for display purposes only. It is entirely fictional and does not represent real-world information.
            </div>
          </div>
            
          <TabsContent value="overview" className="space-y-4 pb-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Card onMouseMove={onMouseMove} className="group/card w-full relative overflow-hidden bg-transparent h-full">
                <CardPattern
                  mouseX={mouseX}
                  mouseY={mouseY}
                  randomString={randomString}
                />
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium z-20">
                    Total Balance (USDT)
                  </CardTitle>
                  <Wallet className="h-4 w-4 text-muted-foreground z-20"/>
                </CardHeader>
                <CardContent className="flex flex-col">
                  <div className="text-2xl font-bold z-20">
                    ${totalBalance}
                  </div>
                </CardContent>
              </Card>

              <Card onMouseMove={onMouseMove} className="group/card w-full relative overflow-hidden bg-transparent h-full">
                <CardPattern
                  mouseX={mouseX}
                  mouseY={mouseY}
                  randomString={randomString}
                />
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium z-20">
                    Net Profits
                  </CardTitle>
                  { totalProfit > 0 ? 
                    <TrendingUp className="w-4 h-4 text-muted-foreground z-20"/> 
                      : 
                    <TrendingDown className="w-4 h-4 text-muted-foreground z-20"/>}
                </CardHeader>
                <CardContent className="flex flex-col">
                  <div className="text-2xl font-bold z-20">
                    ${totalProfit}
                  </div>
                  <div className="text-xs text-muted-foreground z-20">
                    {profitRangeChange}% from initial date
                  </div>
                </CardContent>
              </Card>
              <Card onMouseMove={onMouseMove} className="group/card w-full relative overflow-hidden bg-transparent h-full">
                <CardPattern
                  mouseX={mouseX}
                  mouseY={mouseY}
                  randomString={randomString}
                />
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium z-20">7D PNL</CardTitle>
                  <BarChart3 className="h-4 w-4 text-muted-foreground z-20"/>
                </CardHeader>
                <CardContent className="flex flex-col">
                  <div className="text-2xl font-bold z-20">
                    ${lastSevenDaysProfits}
                  </div>
                  <p className="text-xs text-muted-foreground z-20">
                    +19% from last month
                  </p>
                </CardContent>
              </Card>
              <Card onMouseMove={onMouseMove} className="group/card w-full relative overflow-hidden bg-transparent h-full">
                <CardPattern
                  mouseX={mouseX}
                  mouseY={mouseY}
                  randomString={randomString}
                />
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium z-20">
                    Today&apos;s PNL
                  </CardTitle>
                  <Activity className="w-4 h-4 text-muted-foreground z-20"/>
                </CardHeader>
                <CardContent className="flex flex-col">
                  <div className="text-2xl font-bold z-20">
                    ${todayProfit}
                  </div>
                  <p className="text-xs text-muted-foreground z-20">
                    +201 since last hour
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 grid-cols-2 lg:grid-cols-7">
              <Card className="lg:col-span-4 col-span-2">
                <CardHeader>
                  <CardTitle>Balance Overview</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {range?.from?.toDateString()} - {range?.to?.toDateString()} `
                  </p>
                </CardHeader>
                <CardContent className="pl-2">
                  {/* <TradingviewWidget/> */}
                  <Overview data={pnlData.data.userProfitRets} startDate={range?.from} endDate={range?.to} />
                </CardContent>
              </Card>
              <Card className="lg:col-span-3 col-span-2">
                <CardHeader className="pb-2">
                  <CardTitle>Recent Trades</CardTitle>
                  <CardDescription>
                    You made X transactions this month.
                  </CardDescription>
                </CardHeader>
                <ScrollArea className="h-72">
                  <CardContent>
                    <div className="space-y-2">
                      {lastTransactions.map((lastTransaction)=> (
                        <RecentTrades key={lastTransaction.id} transaction={lastTransaction} />
                      ))
                      }
                    </div>
                  </CardContent>
                </ScrollArea>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
   )
}

export function CardPattern({ mouseX, mouseY, randomString }: any) {
  let maskImage = useMotionTemplate`radial-gradient(200px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };
 
  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-lg  [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50"></div>
      <motion.div
        className="absolute inset-0 rounded-lg bg-gradient-to-r from-green-500 to-blue-700 opacity-0  group-hover/card:opacity-100 backdrop-blur-xl transition duration-500"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-lg opacity-0 mix-blend-overlay  group-hover/card:opacity-100"
        style={style}
      >
        <p className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold transition duration-500">
          {randomString}
        </p>
      </motion.div>
    </div>
  );
}

const characters =
  "AGPagp01689";

  export const generateRandomString = (length: number) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};