"use client";

import { useQuery } from "@tanstack/react-query";

import { getPublicWells } from "@/services/well/well.service";
import { QUERY_KEYS } from "@/constants/queryKeys";

type Params = {
  searchTerm?: string;
  status?: string;
  page?: number;
  limit?: number;
};

export const useGetPublicWells = (params?: Params) => {
  return useQuery({
    queryKey: [...QUERY_KEYS.WELLS, "public", params],
    queryFn: () => getPublicWells(params),
  });
};
