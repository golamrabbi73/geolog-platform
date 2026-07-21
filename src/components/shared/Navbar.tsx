"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, LayoutDashboard, Settings, LogOut, User } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useAuthStore } from "@/store/auth.store";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const { user, logout } = useAuthStore();

  const [scrolled, setScrolled] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const userMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleLogout = () => {
    setUserMenuOpen(false);
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

  // Shrink + deepen the navbar once the page scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target as Node)) {
        setUserMenuOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target as Node)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  // Close mobile menu whenever the route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setUserMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-xl backdrop-saturate-150 transition-all duration-300 ${
        scrolled
          ? "bg-base-100/85 border-base-300/70 shadow-sm shadow-black/5"
          : "bg-base-100/60 border-base-300/30"
      }`}
    >
      <div
        className={`navbar max-w-7xl mx-auto px-4 lg:px-8 transition-all duration-300 ${
          scrolled ? "min-h-[3.75rem]" : "min-h-[4.5rem]"
        }`}
      >
        {/* Logo Section */}
        <div className="navbar-start">
          <Link href="/" className="group flex items-center gap-2.5 text-xl font-bold tracking-tight">
            <div className="relative">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary to-secondary blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
              <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-content font-extrabold shadow-lg shadow-primary/25 ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-3">
                G
              </div>
            </div>
            <span className="hidden sm:block text-base-content">
              Geo<span className="text-primary">Log</span>
            </span>
          </Link>
        </div>

        {/* Center Navigation */}
        <div className="navbar-center hidden lg:flex">
          <ul
            className="menu menu-horizontal gap-0.5 px-1 relative"
            onMouseLeave={() => setHoveredLink(null)}
          >
            {navLinks.map((link) => (
              <li key={link.name} className="relative">
                <Link
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(link.name)}
                  className={`relative z-10 font-medium text-[0.925rem] px-4 py-2 rounded-lg transition-colors duration-200 ${
                    isActive(link.href)
                      ? "text-primary"
                      : "text-base-content/65 hover:text-base-content"
                  }`}
                >
                  {link.name}
                  {isActive(link.href) && (
                    <motion.div
                      layoutId="navbar-active-underline"
                      className="absolute bottom-0.5 left-4 right-4 h-[2px] rounded-full bg-gradient-to-r from-primary to-secondary"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
                {hoveredLink === link.name && (
                  <motion.div
                    layoutId="navbar-hover-pill"
                    className="absolute inset-0 rounded-lg bg-base-200/80"
                    transition={{ type: "spring", stiffness: 420, damping: 32 }}
                  />
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Action Section */}
        <div className="navbar-end gap-2.5">
          {!user ? (
            <div className="flex items-center gap-2">
              <Link
                href="/login"
                className="btn btn-ghost btn-sm rounded-lg font-medium text-base-content/75 hover:text-base-content hover:bg-base-200/70"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="relative overflow-hidden btn btn-sm rounded-lg px-5 font-semibold border-none text-primary-content bg-gradient-to-r from-primary to-secondary shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/30 transition-shadow duration-200 group/cta"
              >
                <span className="relative z-10">Get Started</span>
                <span className="absolute inset-0 -translate-x-full group-hover/cta:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/25 to-transparent" />
              </Link>
            </div>
          ) : (
            <div className="dropdown dropdown-end" ref={userMenuRef}>
              <button
                type="button"
                onClick={() => setUserMenuOpen((v) => !v)}
                className="btn btn-ghost btn-circle avatar border border-base-300/70 hover:border-primary/60 hover:shadow-md hover:shadow-primary/10 transition-all duration-200"
              >
                <div className="w-9 rounded-full bg-gradient-to-br from-primary/15 to-secondary/15 text-primary flex items-center justify-center font-bold overflow-hidden ring-1 ring-primary/10">
                  {user.photoURL ? (
                    <img src={user.photoURL} alt={user.name || "User"} className="w-full h-full object-cover" />
                  ) : (
                    user.name?.charAt(0).toUpperCase() ?? <User size={18} />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {userMenuOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: -8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.97 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="menu dropdown-content mt-3 w-60 p-2 rounded-2xl bg-base-100 shadow-2xl shadow-black/10 border border-base-300/60 z-[100]"
                  >
                    <li className="menu-title px-4 pt-2 pb-1.5 text-[10px] font-semibold uppercase tracking-widest text-base-content/40">
                      My Account
                    </li>
                    <li>
                      <Link
                        href="/dashboard"
                        className="flex items-center gap-3 py-2.5 px-3 rounded-xl text-base-content/85 hover:bg-primary/8 hover:text-primary transition-colors"
                      >
                        <LayoutDashboard size={17} className="text-primary" />
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/profile"
                        className="flex items-center gap-3 py-2.5 px-3 rounded-xl text-base-content/85 hover:bg-primary/8 hover:text-primary transition-colors"
                      >
                        <Settings size={17} className="text-primary" />
                        Profile
                      </Link>
                    </li>
                    <div className="divider my-1 before:bg-base-300/70 after:bg-base-300/70"></div>
                    <li>
                      <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 py-2.5 px-3 rounded-xl text-error hover:bg-error/10 transition-colors"
                      >
                        <LogOut size={17} />
                        Logout
                      </button>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          )}

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden ml-1 dropdown dropdown-end" ref={mobileMenuRef}>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((v) => !v)}
              className="btn btn-ghost btn-circle border border-base-300/60 hover:border-primary/50 hover:bg-base-200/70 transition-all"
              aria-label="Menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={mobileMenuOpen ? "close" : "open"}
                  initial={{ opacity: 0, rotate: -45 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 45 }}
                  transition={{ duration: 0.15 }}
                  className="flex"
                >
                  {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                </motion.span>
              </AnimatePresence>
            </button>

            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.97 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="menu dropdown-content mt-3 w-64 p-2 rounded-2xl bg-base-100 shadow-2xl shadow-black/10 border border-base-300/60 z-[100]"
                >
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className={`py-2.5 px-3 rounded-xl font-medium ${
                          isActive(link.href)
                            ? "text-primary bg-primary/8"
                            : "text-base-content/80 hover:bg-base-200/70"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  );
}