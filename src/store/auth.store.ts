import { create } from "zustand";
import type { User } from "@/types/user";
import { removeAccessToken } from "@/utils/token";

interface AuthState {
  accessToken: string | null;
  user: User | null;

  setAccessToken: (token: string | null) => void;
  setUser: (user: User | null) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  accessToken: null,
  user: null,

  setAccessToken: (token) =>
    set({
      accessToken: token,
    }),

  setUser: (user) =>
    set({
      user,
    }),

  logout: () => {
    removeAccessToken();

    set({
      accessToken: null,
      user: null,
    });
  },
}));