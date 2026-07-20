"use client";

import { ThemeProvider } from "next-themes";

type Props = {
  children: React.ReactNode;
};

export default function AppThemeProvider({
  children,
}: Props) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}