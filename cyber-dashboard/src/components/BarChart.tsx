import React from "react";
import {
  BarChart as ReBarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface BarChartProps {
  data: { name: string; value: number }[];
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-medium">Projects Activity</h3>
        <select className="text-xs border border-gray-200 rounded-md px-2 py-1 outline-none">
          <option>2025</option>
          <option>2024</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <ReBarChart data={data}>
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} />
          <Tooltip cursor={{ fill: "#f9f9f9" }} />
          <Bar dataKey="value" fill="url(#colorUv)" radius={[6, 6, 0, 0]} />
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6366f1" stopOpacity={0.9} />
              <stop offset="95%" stopColor="#818cf8" stopOpacity={0.6} />
            </linearGradient>
          </defs>
        </ReBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChart;
