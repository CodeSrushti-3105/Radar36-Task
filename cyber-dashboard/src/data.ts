// data.ts
import { LucideIcon, Bug as BugIcon, UserPlus as UserPlusIcon, BellRing as BellRingIcon } from "lucide-react";

export const kpis = [
  {
    id: "total",
    title: "Total Projects",
    value: "7,265",
    change: "+11.01%",
    iconKey: "folder",
    cardBg: "bg-purple-50",
    iconBg: "#F3E8FF",
  },
  {
    id: "active",
    title: "Active Projects",
    value: "3,671",
    change: "-0.03%",
    iconKey: "clock",
    cardBg: "bg-sky-50",
    iconBg: "#E6F0FF",
  },
  {
    id: "vuln",
    title: "Vulnerabilities",
    value: "156",
    change: "+15.03%",
    iconKey: "shield",
    cardBg: "bg-pink-50",
    iconBg: "#FCE8FF",
  },
  {
    id: "clients",
    title: "Clients",
    value: "2,318",
    change: "+6.08%",
    iconKey: "users",
    cardBg: "bg-indigo-50",
    iconBg: "#EEF2FF",
  },
];

export const projectsByType = [
  { name: "Web", value: 18, color: "#9AD0FF" },
  { name: "API", value: 30, color: "#FFD19A" },
  { name: "Cloud", value: 22, color: "#A6F0E6" },
  { name: "Network", value: 31, color: "#9FE6A4" },
  { name: "Android", value: 12, color: "#C8E0FF" },
  { name: "Other", value: 25, color: "#D1D5DB" },
];

export const vulnerabilitiesBreakdown = [
  { label: "Critical", percent: 52.1, color: "#EF4444" },
  { label: "High", percent: 22.8, color: "#F97316" },
  { label: "Medium", percent: 13.9, color: "#EAB308" },
  { label: "Low", percent: 11.2, color: "#9CA3AF" },
];

export const monthlyActivity = [12, 30, 22, 32, 10, 26, 18, 30, 20, 34, 12, 28];

export const membersActivity = [
  {
    name: "Natali Craig",
    message: "You have a bug that needs to be fixed",
    time: "Just now",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Andi Lane",
    message: "Released a new version",
    time: "59 minutes ago",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Drew Cano",
    message: "Modified A data in Page X",
    time: "Today, 11:59 AM",
    avatar: "https://randomuser.me/api/portraits/men/78.jpg",
  },
  {
    name: "Olivia Rhye",
    message: "Reviewed pull request #42",
    time: "Today, 10:20 AM",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Marcus Finn",
    message: "Commented on task ‘Upgrade API’",
    time: "Yesterday, 3:15 PM",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
  },
];

export interface Notification {
  message: string;
  time: string;
  icon: LucideIcon; // only store component reference
}

export const notifications: Notification[] = [
  {
    message: "You fixed a bug.",
    time: "Just now",
    icon: BugIcon,
  },
  {
    message: "New user registered.",
    time: "59 minutes ago",
    icon: UserPlusIcon,
  },
  {
    message: "Andi Lane subscribed to you.",
    time: "Today, 11:59 AM",
    icon: BellRingIcon,
  },
  {
    message: "System maintenance scheduled.",
    time: "Today, 8:00 AM",
    icon: BellRingIcon,
  },
  {
    message: "You fixed a bug.",
    time: "12 hours ago",
    icon: BugIcon,
  },
];
