"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, LayoutDashboard, Settings, LogOut, User } from "lucide-react";
import { motion } from "framer-motion";
import { useAuthStore } from "@/store/auth.store";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Explore", href: "/explore" },
    { name: "Features", href: "/#features" },
    { name: "Statistics", href: "/#statistics" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-base-200 bg-base-100/80 backdrop-blur-md">
      <div className="navbar max-w-7xl mx-auto px-4 lg:px-8 min-h-[4rem]">
        {/* Logo Section */}
        <div className="navbar-start">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold">G</div>
            <span className="hidden sm:block">GeoLog</span>
          </Link>
        </div>

        {/* Center Navigation */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`relative font-medium px-4 py-2 rounded-lg transition-all ${
                    isActive(link.href) ? "text-primary" : "text-base-content/70 hover:text-base-content"
                  }`}
                >
                  {link.name}
                  {isActive(link.href) && (
                    <motion.div layoutId="navbar-active" className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Section */}
        <div className="navbar-end gap-2">
          {!user ? (
            <div className="flex gap-2">
              <Link href="/login" className="btn btn-ghost btn-sm rounded-lg">Login</Link>
              <Link href="/register" className="btn btn-primary btn-sm rounded-lg px-5">Get Started</Link>
            </div>
          ) : (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar border border-base-200 hover:border-primary transition-all">
                <div className="w-9 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold overflow-hidden">
                  {user.photoURL ? (
                    <img src={user.photoURL} alt={user.name || "User"} className="w-full h-full object-cover" />
                  ) : (
                    user.name?.charAt(0).toUpperCase() ?? <User size={18} />
                  )}
                </div>
              </div>

              <ul tabIndex={0} className="menu dropdown-content mt-3 w-56 p-2 rounded-2xl bg-base-100 shadow-2xl border border-base-200 z-[100]">
                <li className="menu-title px-4 py-2 text-[10px] uppercase tracking-wider opacity-60">My Account</li>
                <li>
                  <Link href="/dashboard" className="flex items-center gap-3 py-2.5 text-base-content">
                    <LayoutDashboard size={18} className="text-primary" /> Dashboard
                  </Link>
                </li>
                <li>
                  <Link href="/profile" className="flex items-center gap-3 py-2.5 text-base-content">
                    <Settings size={18} className="text-primary" /> Profile
                  </Link>
                </li>
                <div className="divider my-1"></div>
                <li>
                  <button onClick={handleLogout} className="flex items-center gap-3 py-2.5 text-error hover:bg-error/10">
                    <LogOut size={18} /> Logout
                  </button>
                </li>
              </ul>
            </div>
          )}

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden ml-2">
            <div className="dropdown dropdown-end">
              <button className="btn btn-ghost btn-circle" aria-label="Menu">
                <Menu size={24} />
              </button>
              <ul className="menu dropdown-content mt-3 w-64 p-2 rounded-2xl bg-base-100 shadow-2xl border border-base-200 z-[100]">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}