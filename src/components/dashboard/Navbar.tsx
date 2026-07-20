"use client";

import { Menu, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { useAuthStore } from "@/store/auth.store";
import { useEffect, useState } from "react";

export default function DashboardNavbar() {
  const { user } = useAuthStore();
  const [theme, setTheme] = useState("geolog");

  // এই useEffect টি পেজ লোড হওয়ার সাথে সাথে লোকাল স্টোরেজ থেকে থিম তুলে নেবে
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "geolog";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "geolog" ? "geolog-dark" : "geolog";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <header className="sticky top-0 z-30 h-16 border-b border-base-200 bg-base-100/80 backdrop-blur-md px-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <label htmlFor="dashboard-drawer" className="btn btn-square btn-ghost lg:hidden">
          <Menu size={22} />
        </label>
        <h2 className="text-xl font-bold tracking-tight">Dashboard</h2>
      </div>

      <div className="flex items-center gap-3">
        <button 
          onClick={toggleTheme} 
          className="btn btn-ghost btn-circle btn-sm"
          aria-label="Toggle Theme"
        >
          {theme === "geolog" ? <Moon size={20} /> : <Sun size={20} />}
        </button>

        <Link href="/profile" className="avatar placeholder cursor-pointer group">
          <div className="w-9 rounded-full bg-primary text-primary-content ring-2 ring-primary/20 ring-offset-2 ring-offset-base-100 transition-transform hover:scale-105">
            {user?.photoURL ? (
              <img src={user.photoURL} alt={user.name || "User"} />
            ) : (
              <span className="text-sm font-bold">
                {user?.name?.charAt(0).toUpperCase() || "U"}
              </span>
            )}
          </div>
        </Link>
      </div>
    </header>
  );
}