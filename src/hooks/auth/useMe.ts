"use client";

import { useQuery } from "@tanstack/react-query";
import { getMe } from "@/services/auth/auth.service";

export const useMe = () => {
  return useQuery({
    queryKey: ["me"],
    queryFn: getMe,
    retry: false,
    enabled: false,
  });
};