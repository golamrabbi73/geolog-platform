"use client";

import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { useAuthStore } from "@/store/auth.store";

export default function Footer() {
  const { user } = useAuthStore();

  return (
    <footer className="bg-neutral text-neutral-content">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-3xl font-bold hover:opacity-80 transition-opacity"
            >
              GeoLog
            </Link>

            <p className="mt-5 leading-7 text-neutral-content/70">
              Modern geological data management platform
              for wells, drilling operations, and core
              sample management.
            </p>
          </div>

          {/* Platform */}
          <div className="flex flex-col gap-2">
            <h3 className="footer-title">Platform</h3>

            <Link href="/" className="link link-hover">
              Home
            </Link>

            <Link
              href="/#features"
              className="link link-hover"
            >
              Features
            </Link>

            <Link
              href="/#statistics"
              className="link link-hover"
            >
              Statistics
            </Link>

            {/* Conditional Auth Link */}
            <Link
              href={user ? "/dashboard" : "/login"}
              className="link link-hover"
            >
              {user ? "Dashboard" : "Login"}
            </Link>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-2">
            <h3 className="footer-title">Company</h3>

            <Link
              href="/about"
              className="link link-hover"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="link link-hover"
            >
              Contact
            </Link>

            <Link
              href="/privacy"
              className="link link-hover"
            >
              Privacy Policy
            </Link>
          </div>

          {/* Contact */}
          <div>
            <h3 className="footer-title">Contact</h3>

            <a
              href="mailto:support@geolog.com"
              className="flex items-center gap-3 hover:text-primary transition-colors w-fit"
            >
              <FaEnvelope size={18} />
              <span>support@geolog.com</span>
            </a>

            <div className="flex gap-4 mt-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-primary transition-colors"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-primary transition-colors"
              >
                <FaLinkedin size={22} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-content/20 mt-12 pt-6 text-center text-sm text-neutral-content/60">
          © {new Date().getFullYear()} GeoLog. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}