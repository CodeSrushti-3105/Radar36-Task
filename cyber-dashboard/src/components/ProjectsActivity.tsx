import React from "react";
import { monthlyActivity } from "../data";

export default function ProjectsActivity() {
  const max = Math.max(...monthlyActivity, 1);
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm mt-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-semibold">Projects Activity</h3>
        <div className="text-xs bg-gray-100 px-3 py-1 rounded-full">2025</div>
      </div>

      {/* Chart area */}
      <div className="flex items-end justify-between h-56">
        {monthlyActivity.map((v, i) => {
          const isAccent = [1, 3, 7, 9].includes(i); // Feb, Apr, Aug, Oct
          const barHeight = (v / max) * 200; // scale to max 200px
          return (
            <div key={i} className="flex flex-col items-center flex-1">
              {/* Bar */}
              <div
                style={{ height: `${barHeight}px` }}
                className={`w-7 rounded-md transition-all duration-300 ${
                  isAccent
                    ? "bg-indigo-600"
                    : "bg-indigo-300"
                }`}
              />
              {/* Month Label */}
              <span className="text-xs text-gray-500 mt-2">{months[i]}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
