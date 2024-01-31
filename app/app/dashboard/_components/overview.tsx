"use client"

import { addDays } from "date-fns";
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

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
        return entry.day >= startDate && entry.day <= addDays(endDate,1);
      });
    }
    return updatedData;
  }

  const filteredData = filterDataByDateRange(data, startDate, endDate)
  return (
    <ResponsiveContainer width="100%" height={310}>
      <BarChart data={filteredData}>
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
        {/* <Legend /> */}
        <Bar
          dataKey="balance"
          fill="currentColor"
          radius={[4, 4, 0, 0]}
          className="fill-primary"
        />
      </BarChart>
      {/* <LineChart
          width={500}
          height={300}
          data={filteredData}
          margin={{
            top: 5,
            right: 10,
            left: 10,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="day"
            fontSize={11}
            tickFormatter={(value) => `${value.getDate().toString()}`} 
          />
          <YAxis 
            fontSize={11}
            stroke="#888888"
            tickFormatter={(value) => `$${value}`}
          />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="balance" stroke="#777777" activeDot={{ r: 8 }} />
        </LineChart> */}
    </ResponsiveContainer>
  )
}