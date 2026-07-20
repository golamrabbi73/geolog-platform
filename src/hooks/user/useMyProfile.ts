"use client";

import { useQuery } from "@tanstack/react-query";
import { getMyProfile } from "@/services/user/user.service";
import { QUERY_KEYS } from "@/constants/queryKeys";

export const useMyProfile = () => {
  return useQuery({
    queryKey: QUERY_KEYS.PROFILE,
    queryFn: getMyProfile,
  });
};