import React from "react";
import { membersActivity } from "../data";

export default function MembersActivity() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm mt-6 overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-semibold">Members Activities</h3>
        <button className="text-sm bg-white border px-3 py-1 rounded-full">
          View Full Details
        </button>
      </div>

      {/* Marquee wrapper */}
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-4 animate-marquee">
          {membersActivity.concat(membersActivity).map((m, i) => (
            <div
              key={`${m.name}-${i}`}
              className="min-w-[250px] rounded-lg p-4 bg-[#EEF2FF] flex-shrink-0"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-300" />
                <div>
                  <div className="font-semibold">{m.name}</div>
                  <div className="text-xs text-gray-500">{m.time}</div>
                </div>
              </div>

              <div className="text-sm text-gray-700 mt-3">{m.message}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
