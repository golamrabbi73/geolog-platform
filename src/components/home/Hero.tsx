"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useAuthStore } from "@/store/auth.store";

export default function Hero() {
  const user = useAuthStore((state) => state.user);

  return (
    <section className="relative py-24 lg:py-32 bg-base-100 overflow-hidden">
      {/* Subtle background grid pattern for technical feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Content side */}
          <div className="lg:col-span-6 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 bg-base-200/50 border border-base-300 w-fit px-4 py-1.5 rounded-full"
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-widest text-base-content/70">
                Reliable Geological Data Management
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]"
            >
              Precision tools for <br />
              <span className="text-primary">Geological insights</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-base-content/60 max-w-lg"
            >
              Streamline your core sampling, well monitoring, and team workflows. A centralized platform engineered for field engineers and geologists.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex gap-4 pt-2"
            >
              {!user ? (
                <>
                  <Link href="/register" className="btn btn-primary h-12 px-8">Get Started</Link>
                  <Link href="/login" className="btn btn-outline h-12 px-8">Live Demo</Link>
                </>
              ) : (
                <Link href="/dashboard" className="btn btn-primary h-12 px-8">View Dashboard</Link>
              )}
            </motion.div>
          </div>

          {/* Visual side: Realistic Dashboard Mockup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="lg:col-span-6 relative"
          >
            <div className="bg-base-200 rounded-2xl border border-base-300 p-2 shadow-2xl">
              <div className="bg-base-100 rounded-xl p-6 border border-base-200">
                <div className="flex justify-between items-center mb-6">
                  <div className="font-semibold">Recent Well Activities</div>
                  <div className="badge badge-outline text-[10px]">SYSTEM STATUS: ACTIVE</div>
                </div>
                
                {/* Simulated UI rows */}
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-4 p-3 border border-base-200 rounded-lg hover:bg-base-200/50 transition-colors">
                      <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center font-bold text-primary">W{i}</div>
                      <div className="flex-1">
                        <div className="text-sm font-medium">Well Exploration Unit {i}</div>
                        <div className="text-[10px] opacity-50">Last updated: 2 hrs ago</div>
                      </div>
                      <div className="text-xs font-mono text-success">98.2%</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Decorative element to add depth */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-primary/5 rounded-2xl border border-primary/10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}