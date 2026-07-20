"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";

import { useMe } from "@/hooks/auth/useMe";
import { useAuthStore } from "@/store/auth.store";
import { getAccessToken, removeAccessToken } from "@/utils/token";

type Props = {
  children: ReactNode;
};

export default function AuthProvider({ children }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const token = getAccessToken();
  const { refetch } = useMe();
  const { setAccessToken, setUser, logout } = useAuthStore();

  useEffect(() => {
    const restoreSession = async () => {
      if (!token) {
        setIsLoading(false);
        return;
      }

      try {
        const { data } = await refetch();

        if (data?.data) {
          setAccessToken(token);
          setUser(data.data);
        } else {
          removeAccessToken();
          logout();
        }
      } catch {
        removeAccessToken();
        logout();
      } finally {
        setIsLoading(false);
      }
    };

    restoreSession();
  }, [token, refetch, setAccessToken, setUser, logout]);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-base-100">
        <div className="relative flex items-center justify-center">
          <span className="loading loading-ring loading-lg text-primary"></span>
        </div>
        <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.3em] text-base-content/40 animate-pulse">
          Initializing GeoLog
        </p>
      </div>
    );
  }

  return <>{children}</>;
}