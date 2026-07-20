"use client";

import { useQuery } from "@tanstack/react-query";

import { getCoreSampleById } from "@/services/core-sample/core-sample.service";
import { QUERY_KEYS } from "@/constants/queryKeys";

export const useGetCoreSample = (
  id: string
) => {
  return useQuery({
    queryKey: QUERY_KEYS.SAMPLE(id),
    queryFn: () => getCoreSampleById(id),
    enabled: !!id,
  });
};