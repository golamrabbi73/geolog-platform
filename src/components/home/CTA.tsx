"use client"; // authStore ব্যবহারের জন্য এটি লাগবে

import Link from "next/link";
import { useAuthStore } from "@/store/auth.store";

export default function CTA() {
  const { user } = useAuthStore();

  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-4">
        <div className="hero rounded-3xl bg-primary text-primary-content">
          <div className="hero-content text-center py-20">
            <div>
              <h2 className="text-5xl font-bold">
                {user ? "Ready to dive back in?" : "Ready to Manage Geological Data?"}
              </h2>
              <p className="py-6 max-w-2xl text-primary-content/80">
                {user 
                  ? "Continue managing your wells, drilling operations, and samples right from your dashboard." 
                  : "Start organizing wells, drilling operations, and core samples using a modern platform built for geological teams."
                }
              </p>
              
              <Link
                href={user ? "/dashboard" : "/register"}
                className="btn btn-neutral"
              >
                {user ? "Go to Dashboard" : "Get Started"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}