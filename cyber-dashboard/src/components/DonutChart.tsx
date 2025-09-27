import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

interface DonutChartProps {
  data: { name: string; value: number }[];
}

const COLORS = ["#ef4444", "#f97316", "#eab308", "#9ca3af"]; // Critical, High, Medium, Low

const DonutChart: React.FC<DonutChartProps> = ({ data }) => {
  return (
    <div className="bg-red-50 rounded-xl p-6 shadow-sm">
      <h3 className="text-sm font-medium mb-4">Vulnerabilities</h3>
      <div className="flex items-center">
        {/* Donut Chart */}
        <div className="w-1/2 h-52">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={4}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Custom Legend with Bars */}
        <div className="w-1/2 pl-6 space-y-3">
          {data.map((entry, index) => (
            <div key={index}>
              <div className="flex justify-between text-sm text-gray-700">
                <span>{entry.name}</span>
                <span>{entry.value}%</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-gray-200">
                <div
                  className="h-1.5 rounded-full"
                  style={{
                    width: `${entry.value}%`,
                    backgroundColor: COLORS[index],
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DonutChart;
