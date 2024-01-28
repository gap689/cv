"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

interface ProfitEntry {
  userId: number;
  day: number;
  balance: number;
  netInflow: number;
  profit: number;
  debt: number;
  transferIn: number;
}

interface OverviewProps {
  data: ProfitEntry[];
  startDate: Date | undefined;
  endDate: Date | undefined;
}

export function Overview({
  data,
  startDate,
  endDate
}: OverviewProps ) {
  
  // Utility function to filter data based on the date range
  function filterDataByDateRange(data: ProfitEntry[], startDate:Date |undefined, endDate: Date|undefined) {
    const updatedData = data.map(entry => ({
      ...entry,
      day: new Date(entry.day),
    }));
  
    if (startDate && endDate) {
      return updatedData.filter(entry => {
        return entry.day >= startDate && entry.day <= endDate;
      });
    }
    return updatedData;
  }

  const filterdData = filterDataByDateRange(data, startDate, endDate)
  return (
    <ResponsiveContainer width="100%" height={310}>
      <BarChart data={filterdData}>
        <XAxis
          dataKey="day"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value.getDate().toString()}`}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Bar
          dataKey="balance"
          fill="currentColor"
          radius={[4, 4, 0, 0]}
          className="fill-primary"
        />
      </BarChart>
    </ResponsiveContainer>
  )
}