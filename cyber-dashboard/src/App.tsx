import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import KpiCard from "./components/KpiCard";
import BarChart from "./components/BarChart";
import DonutChart from "./components/DonutChart";
import ProjectsActivity from "./components/ProjectsActivity";
import MembersActivity from "./components/MembersActivity";

import { kpis, projectsByType, vulnerabilitiesBreakdown } from "./data";

export default function App() {
  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />

      {/* main area shifted right by sidebar width (64 => ml-64) */}
      <main className="flex-1 ml-64">
        <div className="p-6 max-w-[1200px] mx-auto">
          <Header />

          {/* title row with dropdown + export button on right */}
          <div className="flex items-center justify-between mt-8 mb-4">
            <h2 className="text-lg font-semibold">Dashboard Overview</h2>
            <div className="flex items-center gap-3">
              <select className="text-sm border border-gray-200 rounded-full px-4 py-2 bg-white">
                <option>This Month</option>
                <option>Last Month</option>
              </select>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm">Export Report</button>
            </div>
          </div>

          {/* KPI cards */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {kpis.map((k) => (
              <KpiCard key={k.id} kpi={k} />
            ))}
          </section>

          {/* Charts row */}
         <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            {/* Left: Projects by Type */}
            <div className="lg:col-span-1">
              <BarChart data={projectsByType} />
            </div>

            {/* Right: Vulnerabilities Donut (wider) */}
            <div className="lg:col-span-2">
              <DonutChart
                data={vulnerabilitiesBreakdown.map((v) => ({
                  name: v.label, // match DonutChart props
                  value: v.percent, // match DonutChart props
                }))}
              />
            </div>
          </section>

          {/* Projects Activity */}
          <ProjectsActivity />

          {/* Members activities */}
          <MembersActivity />
        </div>
      </main>
    </div>
  );
}
