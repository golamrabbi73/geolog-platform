"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { getAccessToken } from "@/utils/token";

interface Props {
  children: React.ReactNode;
}

export default function ProtectedRoute({
  children,
}: Props) {
  const router = useRouter();

  useEffect(() => {
    const token = getAccessToken();

    if (!token) {
      router.replace("/login");
    }
  }, [router]);

  if (!getAccessToken()) {
    return null;
  }

  return <>{children}</>;
}