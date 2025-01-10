"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const formatValue = (value) => {
  if (value >= 1000000) {
    return `$${(value / 1000000).toFixed(1)}m`;
  }
  if (value >= 1000) {
    return `$${(value / 1000).toFixed(1)}k`;
  }
  return `$${value}`;
};

const SimpleBarChart = ({ data, color }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={data}
        margin={{
          top: 10,
          right: 14.2,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" fontSize={15} />
        <YAxis tickFormatter={(tick) => formatValue(tick)} />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar dataKey="value" fill={color} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SimpleBarChart;

// Custom Tooltip Component
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { name, formattedValue } = payload[0].payload;
    return (
      <div className="p-4 bg-slate-900 flex flex-col gap-2 rounded-md">
        <p className="text-medium text-lg">{name}</p>
        <p className="text-sm text-blue-400">
          Value: <span className="ml-2">{formattedValue}</span>
        </p>
      </div>
    );
  }

  return null;
};
