"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  ArrowLeft,
  LogOut,
} from "lucide-react";

import { dashboardNavigation } from "@/constants/navigation";
import { useAuthStore } from "@/store/auth.store";
import { removeAccessToken } from "@/utils/token";
import { logoutUser } from "@/services/auth";

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const { logout, user } = useAuthStore();

  const handleLogout = async () => {
    try {
      await logoutUser();
    } catch {}

    removeAccessToken();
    logout();

    router.replace("/");
  };

  return (
    <aside className="flex h-full w-64 flex-col bg-base-100 border-r border-base-300">

      {/* Logo */}

      <div className="border-b border-base-300 p-6">

        <Link
          href="/"
          className="text-2xl font-bold text-primary"
        >
          GeoLog
        </Link>

        <Link
          href="/"
          className="mt-3 flex items-center gap-2 text-sm text-base-content/70 hover:text-primary transition"
        >
          <ArrowLeft size={16} />

          Back to Website
        </Link>

      </div>

      {/* Navigation */}

      <nav className="flex-1 space-y-2 p-4">

        {dashboardNavigation.map((item) => {
          const Icon = item.icon;

          const active =
            pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 transition
              ${
                active
                  ? "bg-primary text-primary-content"
                  : "hover:bg-base-200"
              }`}
            >
              <Icon size={20} />

              {item.title}
            </Link>
          );
        })}

      </nav>

      {/* Bottom */}

      <div className="border-t border-base-300 p-4">

        <div className="mb-4 flex items-center gap-3">

          <div className="avatar placeholder">

            <div className="w-12 rounded-full bg-primary text-primary-content">

              <span className="text-lg font-bold">
                {user?.name?.charAt(0).toUpperCase() ??
                  "U"}
              </span>

            </div>

          </div>

          <div>

            <h3 className="font-semibold">
              {user?.name}
            </h3>

            <p className="text-xs opacity-70 capitalize">
              {user?.role}
            </p>

          </div>

        </div>

        <button
          onClick={handleLogout}
          className="btn btn-error btn-outline w-full"
        >
          <LogOut size={18} />

          Logout
        </button>

      </div>

    </aside>
  );
}