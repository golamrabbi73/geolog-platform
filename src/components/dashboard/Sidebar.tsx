"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ArrowLeft, LogOut } from "lucide-react";
import { dashboardNavigation } from "@/constants/navigation";
import { useAuthStore } from "@/store/auth.store";
import { removeAccessToken } from "@/utils/token";
import { logoutUser } from "@/services/auth";

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const { logout, user } = useAuthStore();

  const handleLogout = async () => {
    try { await logoutUser(); } catch {}
    removeAccessToken();
    logout();
    router.replace("/");
  };

  return (
    <aside className="flex h-full w-64 flex-col bg-base-100/50 backdrop-blur-xl border-r border-base-200">
      <div className="p-6">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold">G</div>
            <span className="hidden sm:block">GeoLog</span>
          </Link>
        <Link href="/" className="mt-4 flex items-center gap-2 text-xs font-medium text-base-content/60 hover:text-primary transition">
          <ArrowLeft size={14} /> Back to Website
        </Link>
      </div>

      <nav className="flex-1 space-y-1 px-4">
        {dashboardNavigation
          .filter((item) => item.roles.includes(user?.role || ""))
          .map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  active ? "bg-primary text-white shadow-lg shadow-primary/20" : "hover:bg-base-200 text-base-content/80"
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{item.title}</span>
              </Link>
            );
          })}
      </nav>

      <div className="p-4 border-t border-base-200">
        <Link href="/profile" className="flex items-center gap-3 p-3 rounded-2xl hover:bg-base-200/50 transition mb-3">
          <div className="avatar">
            <div className="w-10 rounded-full ring-2 ring-base-300">
               {user?.photoURL ? (
                <img src={user.photoURL} alt={user.name} />
              ) : (
                <div className="bg-primary text-white flex items-center justify-center font-bold">
                  {user?.name?.charAt(0).toUpperCase()}
                </div>
              )}
            </div>
          </div>
          <div>
            <h3 className="font-bold text-sm">{user?.name}</h3>
            <p className="text-[10px] uppercase tracking-wider opacity-60">{user?.role}</p>
          </div>
        </Link>
        
        <button onClick={handleLogout} className="btn btn-ghost btn-sm text-error w-full justify-start gap-3">
          <LogOut size={16} /> Logout
        </button>
      </div>
    </aside>
  );
}