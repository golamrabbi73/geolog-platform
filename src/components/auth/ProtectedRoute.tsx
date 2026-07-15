"use client";

import { useEffect, useSyncExternalStore } from "react";
import { useRouter } from "next/navigation";

import { getAccessToken } from "@/utils/token";

interface Props {
  children: React.ReactNode;
}


function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}


function getClientSnapshot() {
  return getAccessToken();
}


function getServerSnapshot() {
  return null;
}

export default function ProtectedRoute({ children }: Props) {
  const router = useRouter();

  const token = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot
  );


  useEffect(() => {
    if (token === null) {
      router.replace("/login");
    }
  }, [token, router]);

  if (token === null) {
    return null;
  }

  return <>{children}</>;
}