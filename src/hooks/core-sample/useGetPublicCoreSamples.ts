"use client";

import { useQuery } from "@tanstack/react-query";

import { getPublicCoreSamples } from "@/services/core-sample/core-sample.service";
import { QUERY_KEYS } from "@/constants/queryKeys";

type Params = {
  searchTerm?: string;
  rockType?: string;
  wellName?: string;
  page?: number;
  limit?: number;
};

export const useGetPublicCoreSamples = (params?: Params) => {
  return useQuery({
    queryKey: [...QUERY_KEYS.SAMPLES, "public", params],
    queryFn: () => getPublicCoreSamples(params),
  });
};
