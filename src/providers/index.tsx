"use client";

import type { ReactNode } from "react";
import QueryProvider from "./query-provider";
import AppThemeProvider from "./theme-provider";
import ToastProvider from "./toast-provider";

type Props = {
  children: ReactNode;
};

export default function Providers({
  children,
}: Props) {
  return (
    <QueryProvider>
      <AppThemeProvider>
        <ToastProvider />

        {children}
      </AppThemeProvider>
    </QueryProvider>
  );
}