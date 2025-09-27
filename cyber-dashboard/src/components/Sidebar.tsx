import React from "react";
import {
  LayoutDashboard,
  Folder,
  Users,
  UserPlus,
  FileText,
  Clock,
  Settings,
  HelpCircle,
  LogOut,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white h-screen border-r fixed left-0 top-0">
      <div className="p-4">
        {/* Logo / Title */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-md bg-black text-white flex items-center justify-center font-bold">R</div>
          <div>
            <div className="text-base font-semibold">Radar 36</div>
          </div>
        </div>

        {/* Menu label */}
        <div className="text-xs font-semibold text-gray-400 uppercase mb-3 px-1">Menu</div>

        {/* Items */}
        <nav>
          <ul className="space-y-1">
            <li className="relative">
              <div className="absolute left-0 top-2 bottom-2 w-1.5 bg-indigo-600 rounded-r-md"></div>
              <button className="w-full text-left pl-6 pr-3 py-2 flex items-center gap-3 rounded-lg bg-indigo-50 text-indigo-600">
                <LayoutDashboard size={18} /> <span className="text-sm">Dashboard</span>
              </button>
            </li>

            <li>
              <button className="w-full text-left pl-6 pr-3 py-2 flex items-center gap-3 rounded-lg hover:bg-gray-50 text-gray-700">
                <Folder size={18} /> <span className="text-sm">Projects</span>
              </button>
            </li>

            <li>
              <button className="w-full text-left pl-6 pr-3 py-2 flex items-center gap-3 rounded-lg hover:bg-gray-50 text-gray-700">
                <Users size={18} /> <span className="text-sm">Clients</span>
              </button>
            </li>

            <li>
              <button className="w-full text-left pl-6 pr-3 py-2 flex items-center gap-3 rounded-lg hover:bg-gray-50 text-gray-700">
                <UserPlus size={18} /> <span className="text-sm">Team Members</span>
              </button>
            </li>

            <li>
              <button className="w-full text-left pl-6 pr-3 py-2 flex items-center gap-3 rounded-lg hover:bg-gray-50 text-gray-700">
                <FileText size={18} /> <span className="text-sm">Scope</span>
              </button>
            </li>

            <li>
              <button className="w-full text-left pl-6 pr-3 py-2 flex items-center gap-3 rounded-lg hover:bg-gray-50 text-gray-700">
                <Clock size={18} /> <span className="text-sm">Activity</span>
              </button>
            </li>
          </ul>
        </nav>

        {/* Generals */}
        <div className="mt-6 pt-4 border-t">
          <div className="text-xs uppercase tracking-wide text-gray-400 px-1 mb-2">Generals</div>

          <div className="space-y-1">
            <button className="w-full text-left pl-3 pr-3 py-2 flex items-center gap-3 rounded-lg hover:bg-gray-50 text-gray-700">
              <Settings size={18} /> <span className="text-sm">Settings</span>
            </button>

            <button className="w-full text-left pl-3 pr-3 py-2 flex items-center gap-3 rounded-lg hover:bg-gray-50 text-gray-700">
              <HelpCircle size={18} /> <span className="text-sm">Help & Support</span>
            </button>

            <button className="w-full text-left pl-3 pr-3 py-2 flex items-center gap-3 rounded-lg hover:bg-gray-50 text-red-600">
              <LogOut size={18} /> <span className="text-sm">Log out</span>
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
