"use client";

import { useQuery } from "@tanstack/react-query";

import { getWellById } from "@/services/well/well.service";
import { QUERY_KEYS } from "@/constants/queryKeys";

export const useGetWell = (id: string) => {
  return useQuery({
    queryKey: QUERY_KEYS.WELL(id),
    queryFn: () => getWellById(id),
    enabled: !!id,
  });
};