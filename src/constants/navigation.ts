import {
  LayoutDashboard,
  Database,
  Drill,
  BarChart3,
  User,
} from "lucide-react";

export const dashboardNavigation = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    roles: ["admin", "manager", "fieldEngineer"],
  },
  {
    title: "Core Samples",
    href: "/samples",
    icon: Database,
    roles: ["admin", "manager", "fieldEngineer"],
  },
  {
    title: "Wells",
    href: "/wells",
    icon: Drill,
    roles: ["admin", "manager"],
  },
  {
    title: "Analytics",
    href: "/analytics",
    icon: BarChart3,
    roles: ["admin", "manager"],
  },
  {
    title: "Profile",
    href: "/profile",
    icon: User,
    roles: ["admin", "manager", "fieldEngineer"],
  },
];