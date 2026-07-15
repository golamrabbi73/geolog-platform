import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-neutral text-neutral-content">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>

            <h2 className="text-3xl font-bold">
              GeoLog
            </h2>

            <p className="mt-5 leading-7 text-neutral-content/70">
              Modern geological data management platform
              for wells, drilling operations, and
              core sample management.
            </p>

          </div>

          {/* Platform */}

          <div>

            <h3 className="footer-title">
              Platform
            </h3>

            <Link href="/" className="link link-hover">
              Home
            </Link>

            <Link
              href="#features"
              className="link link-hover"
            >
              Features
            </Link>

            <Link
              href="#statistics"
              className="link link-hover"
            >
              Statistics
            </Link>

            <Link
              href="/login"
              className="link link-hover"
            >
              Login
            </Link>

          </div>

          {/* Company */}

          <div>

            <h3 className="footer-title">
              Company
            </h3>

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

            <h3 className="footer-title">
              Contact
            </h3>

            <div className="flex items-center gap-3">
              <FaEnvelope size={18} />
              <span>
                support@geolog.com
              </span>
            </div>

            <div className="flex gap-4 mt-6">

              <a
                href="https://github.com"
                target="_blank"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
              >
                <FaLinkedin size={22} />
              </a>

            </div>

          </div>

        </div>

        <div className="border-t border-neutral-content/20 mt-12 pt-6 text-center text-sm text-neutral-content/60">

          © {new Date().getFullYear()} GeoLog.
          All rights reserved.

        </div>

      </div>
    </footer>
  );
}