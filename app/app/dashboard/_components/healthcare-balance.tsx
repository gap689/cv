"use client"

import { format } from 'date-fns';
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

interface DailyIncome {
  day: string;
  balance: number;
}

interface OverviewProps {
  data: DailyIncome[];
}

export function HealthcareBalance({
  data,
}: OverviewProps ) {
  
  // TODO: Utility function to filter data based on the date range
  
  return (
    <>
    <ResponsiveContainer width="100%" height="100%" className="min-h-[150px]">
      <BarChart data={data}>
        <XAxis
          dataKey="day"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => format(new Date(value), 'd')}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        {/* <Tooltip /> */}
        <Bar
          dataKey="balance"
          fill="currentColor"
          radius={[4, 4, 0, 0]}
          className="fill-primary"
        />
      </BarChart>
    </ResponsiveContainer>
    </>
  )
}