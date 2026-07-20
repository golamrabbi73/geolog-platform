"use client";

import { useQuery } from "@tanstack/react-query";
import { getMe } from "@/services/auth/auth.service";
import { QUERY_KEYS } from "@/constants/queryKeys";

export const useMe = () => {
  return useQuery({
    queryKey: QUERY_KEYS.ME,
    queryFn: getMe,
    retry: false,
    enabled: false,
  });
};