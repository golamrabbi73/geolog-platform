"use client";

import Link from "next/link";
import { Menu, User } from "lucide-react";
import { useRouter } from "next/navigation";

import { useAuthStore } from "@/store/auth.store";

export default function Navbar() {
  const router = useRouter();

  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-base-100/90 backdrop-blur">
      <div className="navbar max-w-7xl mx-auto px-4 lg:px-8">

        <div className="navbar-start">
          <Link
            href="/"
            className="text-2xl font-bold text-primary"
          >
            GeoLog
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/#features">Features</Link></li>
            <li><Link href="/#statistics">Statistics</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="navbar-end hidden lg:flex">

          {!user ? (
            <div className="flex gap-3">
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
          ) : (
            <div className="dropdown dropdown-end">

              <button
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full bg-primary text-primary-content flex items-center justify-center font-bold">
                  {user.name?.charAt(0).toUpperCase() ?? (
                    <User size={18} />
                  )}
                </div>
              </button>

              <ul className="menu dropdown-content mt-3 w-56 rounded-box bg-base-100 shadow border z-[100]">

                <li className="menu-title">
                  <span>{user.name}</span>
                </li>

                <li>
                  <Link href="/dashboard">
                    Dashboard
                  </Link>
                </li>

                <li>
                  <Link href="/dashboard/profile">
                    Profile
                  </Link>
                </li>

                <div className="divider my-1"></div>

                <li>
                  <button
                    onClick={handleLogout}
                    className="text-error"
                  >
                    Logout
                  </button>
                </li>

              </ul>

            </div>
          )}

        </div>

        <div className="navbar-end lg:hidden">

          <div className="dropdown dropdown-end">

            <button className="btn btn-ghost">
              <Menu size={22} />
            </button>

            <ul className="menu dropdown-content mt-3 w-64 rounded-box bg-base-100 shadow border z-[100]">

              <li><Link href="/">Home</Link></li>
              <li><Link href="/#features">Features</Link></li>
              <li><Link href="/#statistics">Statistics</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>

              <div className="divider my-1"></div>

              {!user ? (
                <>
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
                </>
              ) : (
                <>
                  <li>
                    <Link href="/dashboard">
                      Dashboard
                    </Link>
                  </li>

                  <li>
                    <Link href="/dashboard/profile">
                      Profile
                    </Link>
                  </li>

                  <li>
                    <button
                      onClick={handleLogout}
                      className="text-error"
                    >
                      Logout
                    </button>
                  </li>
                </>
              )}

            </ul>

          </div>

        </div>

      </div>
    </header>
  );
}