"use client";

import type { ReactNode } from "react";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

interface Props {
  children: ReactNode;
}

export default function DashboardLayout({
  children,
}: Props) {
  return (
    <div className="drawer lg:drawer-open">
      <input
        id="dashboard-drawer"
        type="checkbox"
        className="drawer-toggle"
      />

      <div className="drawer-content flex flex-col bg-base-200">
        <Navbar />

        <main className="flex-1 p-6 overflow-y-auto">
          {children}
        </main>
      </div>

      <div className="drawer-side z-50">
        <label
          htmlFor="dashboard-drawer"
          className="drawer-overlay"
        />

        <Sidebar />
      </div>
    </div>
  );
}