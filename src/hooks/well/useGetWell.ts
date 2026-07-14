"use client";

import { useQuery } from "@tanstack/react-query";

import { getWellById } from "@/services/well/well.service";

export const useGetWell = (id: string) => {
  return useQuery({
    queryKey: ["well", id],
    queryFn: () => getWellById(id),
    enabled: !!id,
  });
};