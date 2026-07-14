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
  },
  {
    title: "Core Samples",
    href: "/samples",
    icon: Database,
  },
  {
    title: "Wells",
    href: "/wells",
    icon: Drill,
  },
  {
    title: "Analytics",
    href: "/analytics",
    icon: BarChart3,
  },
  {
    title: "Profile",
    href: "/profile",
    icon: User,
  },
];