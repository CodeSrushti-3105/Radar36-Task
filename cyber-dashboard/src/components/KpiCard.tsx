import React from "react";
import { Folder, Clock, Shield, Users } from "lucide-react";

const ICONS: Record<string, any> = {
  folder: Folder,
  clock: Clock,
  shield: Shield,
  users: Users,
};

export default function KpiCard({ kpi }: any) {
  const Icon = ICONS[kpi.iconKey] ?? Folder;
  // small left icon bg color from data.iconBg (hex)
  return (
    <div className={`${kpi.cardBg} rounded-xl p-4 shadow-sm flex items-center justify-between`}>
      <div className="flex items-center gap-4">
        <div style={{ background: kpi.iconBg }} className="w-14 h-14 rounded-lg flex items-center justify-center">
          <Icon size={22} className="text-indigo-700" />
        </div>

        <div>
          <div className="text-sm text-gray-600">{kpi.title}</div>
          <div className="text-2xl font-bold mt-1">{kpi.value}</div>
        </div>
      </div>

      <div className="text-right">
        <div className={`text-sm ${kpi.change.startsWith("+") ? "text-green-600" : "text-gray-600"}`}>
          {kpi.change}
        </div>
        <div className="text-xs text-gray-400">▲</div>
      </div>
    </div>
  );
}
