"use client"

import { labData } from "@/data/dashboard/data";
import { format } from 'date-fns';
import { Bar, BarChart, CartesianGrid, LabelList, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

interface Studies {
  id: string;
  value: number;
}

interface StudiesProps {
  data: Studies[];
}
const HealthcareStudies = ({
    data,
    }:StudiesProps) => {

  return ( 
    <ResponsiveContainer width="100%" height="100%">
      <BarChart 
        data={data}
        layout="vertical"
        margin={{top: 15, right: 0, left: 0, bottom: 5}}
        maxBarSize={16}
        barGap={"5%"}
        >
        <XAxis
          type="number"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          // tickFormatter={(value) => value}
        />
        <YAxis
          dataKey="id"
          type="category"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={true}
          tickFormatter={(id) => `${id}`}
        />
        {/* <Tooltip /> */}
        <Bar
          dataKey="value"
          fill="currentColor"
          radius={[0, 4, 4, 0]}
          className="fill-primary"
        >
          <LabelList dataKey="value" position="right" fontSize={12} />
        </Bar>
        
      </BarChart>
    </ResponsiveContainer>
    );
}
 
export default HealthcareStudies;