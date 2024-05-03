"use client";

import { useState } from 'react';

import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';

interface Demographics {
  name: string;
  value: number;
}

interface HealthcarePatientsProps{
  data: Demographics[];
}

interface RenderActiveShapeProps {
    cx: number;
    cy: number;
    midAngle: number;
    innerRadius: number;
    outerRadius: number;
    startAngle: number;
    endAngle: number;
    fill: string;
    payload: any;
    percent: number;
    value: number;
  }

const renderActiveShape: React.FC<RenderActiveShapeProps> = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';
  
    return (
      <g>
        <text x={cx} y={cy} dy={-10} textAnchor="middle" fill={fill} className='text-sm font-semibold font-oxanium'>
          {`${value}`}
        </text>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill} className='text-sm'>
          {payload.name}
        </text>
        <text x={cx} y={cy} dy={25} textAnchor="middle" fill={fill} className='text-xs font-oxanium'>
          {`(${(percent * 100).toFixed(2)}%)`}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          className='fill-primary'
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          className='fill-primary'
        />
      </g>
    );
  };

const HealthcarePatients = ({ data }:HealthcarePatientsProps) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const onPieEnter = (_:any, index:number) => {
        setActiveIndex(index);
    };
    return ( 
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={200} height={200} className='min-w-[150px] min-h-[150px]'>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape as any}
            data={data}
            cx="45%"
            cy="50%"
            innerRadius={50}
            outerRadius={70}
            className='dark:fill-background fill-zinc-300'
            dataKey="value"
            onMouseEnter={onPieEnter}
          />
        </PieChart>
      </ResponsiveContainer>
    );
}
 
export default HealthcarePatients;