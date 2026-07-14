"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { dashboardNavigation } from "@/constants/navigation";
import { useAuthStore } from "@/store/auth.store";
import { removeAccessToken } from "@/utils/token";
import { logoutUser } from "@/services/auth";
import { LogOut } from "lucide-react";

export default function Sidebar() {
    const router = useRouter();
    const { logout } = useAuthStore();
    const { user } = useAuthStore();
    const pathname = usePathname();

    const handleLogout = async () => {
        try {
            await logoutUser();
        } catch {}

        removeAccessToken();

        logout();

        router.replace("/login");
    };

  return (
    <aside className="w-64 min-h-full bg-base-100 border-r border-base-300">
      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b border-base-300">
        <h1 className="text-2xl font-bold text-primary">
          GeoLog
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {dashboardNavigation.map((item) => {
          const Icon = item.icon;

          const active =
            pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-4 py-3 transition-all
              ${
                active
                  ? "bg-primary text-primary-content"
                  : "hover:bg-base-200"
              }`}
            >
              <Icon size={20} />

              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="border-t border-base-300 p-4">
        <div className="flex items-center gap-3">

            <div className="avatar placeholder">
            <div className="bg-primary text-primary-content rounded-full w-12">
                <span>
                {user?.name?.charAt(0).toUpperCase() ?? "U"}
                </span>
            </div>
            </div>

            <div className="flex-1">

            <p className="font-semibold">
                {user?.name ?? "Guest"}
            </p>

            <p className="text-xs opacity-70">
                {user?.role ?? ""}
            </p>

            </div>

        </div>
        </div>

        {/* logout button */}
        <button
            onClick={handleLogout}
            className="btn btn-outline btn-error w-full mt-4"
        >
            <LogOut size={18} />

            Logout
        </button>
    </aside>
  );
}