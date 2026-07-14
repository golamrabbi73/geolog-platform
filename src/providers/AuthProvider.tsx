"use client";

import { useEffect } from "react";
import type { ReactNode } from "react";

import { useMe } from "@/hooks/auth/useMe";
import { useAuthStore } from "@/store/auth.store";
import { getAccessToken, removeAccessToken } from "@/utils/token";

type Props = {
  children: ReactNode;
};

export default function AuthProvider({
  children,
}: Props) {
  const token = getAccessToken();

  const { refetch } = useMe();

  const { setAccessToken, setUser, logout } =
    useAuthStore();

  useEffect(() => {
    if (!token) return;

    const restoreSession = async () => {
      try {
        const { data } = await refetch();

        if (!data) return;

        setAccessToken(token);
        setUser(data.data);
      } catch {
        removeAccessToken();
        logout();
      }
    };

    restoreSession();
  }, [token, refetch, setAccessToken, setUser, logout]);

  return <>{children}</>;
}