"use client";

import { useQuery } from "@tanstack/react-query";
import { getMyProfile } from "@/services/user/user.service";

export const useMyProfile = () => {
  return useQuery({
    queryKey: ["profile"],
    queryFn: getMyProfile,
  });
};