"use client";

import type { ReactNode } from "react";
import QueryProvider from "./query-provider";
import ToastProvider from "./toast-provider";
import AuthProvider from "./AuthProvider";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <QueryProvider>
      <AuthProvider>
        <ToastProvider />
        {children}
      </AuthProvider>
    </QueryProvider>
  );
}