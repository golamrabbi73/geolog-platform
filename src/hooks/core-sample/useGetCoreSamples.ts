"use client";

import { useQuery } from "@tanstack/react-query";
import { getAllCoreSamples } from "@/services/core-sample/core-sample.service";

type Params = {
  searchTerm?: string;
  rockType?: string;
  wellName?: string;
  page?: number;
  limit?: number;
};

export const useGetCoreSamples = (
  params?: Params
) => {
  return useQuery({
    queryKey: ["core-samples", params],
    queryFn: () => getAllCoreSamples(params),
  });
};