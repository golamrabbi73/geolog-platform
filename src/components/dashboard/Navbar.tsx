"use client";

import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="h-16 border-b border-base-300 bg-base-100 px-6 flex items-center justify-between">

      <div className="flex items-center gap-4">

        <label
          htmlFor="dashboard-drawer"
          className="btn btn-square btn-ghost lg:hidden"
        >
          <Menu size={22} />
        </label>

        <h2 className="text-xl font-semibold">
          Dashboard
        </h2>

      </div>

      <div className="avatar placeholder">
        <div className="bg-primary text-primary-content rounded-full w-10">
          <span>U</span>
        </div>
      </div>
    </header>
  );
}