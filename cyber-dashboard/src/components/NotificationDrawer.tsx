import React, { useState } from "react";
import { Bell } from "lucide-react";
import { notifications } from "../data";

export default function NotificationDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Bell Icon */}
      <button
        onClick={() => setOpen(!open)}
        className="relative p-2 rounded-full hover:bg-gray-100"
      >
        <Bell className="w-6 h-6 text-gray-700" />
        {/* Notification dot */}
        <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
      </button>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="p-4 border-b">
          <h2 className="text-sm font-semibold">Notifications</h2>
        </div>

        {/* Notifications List */}
        <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-60px)]">
          {notifications.map((n, i) => (
            <div key={i} className="flex gap-3">
              <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full">
                {n.icon}
              </div>
              <div>
                <p className="text-sm text-gray-800">{n.message}</p>
                <p className="text-xs text-gray-500">{n.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background overlay when open */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/30 z-40"
        />
      )}
    </>
  );
}
