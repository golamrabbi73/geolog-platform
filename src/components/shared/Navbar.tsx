"use client";

import Link from "next/link";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "Statistics",
    href: "#statistics",
  },
  {
    name: "About",
    href: "#about",
  },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-base-100/90 backdrop-blur">
      <div className="navbar max-w-7xl mx-auto px-4 lg:px-8">
        {/* Logo */}
        <div className="navbar-start">
          <Link
            href="/"
            className="text-2xl font-bold text-primary"
          >
            GeoLog
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2">
            {navLinks.map((item) => (
              <li key={item.name}>
                <Link href={item.href}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Buttons */}
        <div className="navbar-end hidden lg:flex gap-3">
          <Link
            href="/login"
            className="btn btn-ghost"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="btn btn-primary"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile */}
        <div className="navbar-end lg:hidden">
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost"
            >
              ☰
            </label>

            <ul
              tabIndex={0}
              className="menu dropdown-content z-[100] mt-3 w-56 rounded-box bg-base-100 shadow"
            >
              {navLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.href}>
                    {item.name}
                  </Link>
                </li>
              ))}

              <div className="divider my-1"></div>

              <li>
                <Link href="/login">
                  Login
                </Link>
              </li>

              <li>
                <Link href="/register">
                  Get Started
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}