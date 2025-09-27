import React from "react";
import { Search, Sun, Bell } from "lucide-react";


export default function Header() {
  return (
    <div className="pt-6 pb-2 px-6 bg-transparent">
      <div className="flex items-center justify-between">
        {/* Left */}
        <div>
          <h1 className="text-2xl font-bold">Good Morning, Charlie</h1>
          <p className="text-sm text-gray-500 mt-1">Here’s an overview of your projects, vulnerabilities & more..</p>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          {/* search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input
              className="pl-9 pr-8 py-2 w-64 text-sm rounded-full bg-gray-100 border border-gray-200 placeholder:text-gray-400 focus:outline-none"
              placeholder="Search"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">/</div>
          </div>

          {/* sun */}
          <button className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-gray-100">
            <Sun size={18} className="text-gray-600" />
          </button>

          {/* bell inside light blue box */}
          <div className="w-10 h-10 rounded-md flex items-center justify-center bg-white border border-transparent hover:border-gray-200">
            <div className="w-9 h-9 rounded-sm flex items-center justify-center bg-blue-50 relative">
              <Bell size={16} className="text-gray-700" />
              <span className="absolute -right-0.5 -top-0.5 w-2.5 h-2.5 rounded-full bg-red-500 border-2 border-white"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
