"use client";

import { useQuery } from "@tanstack/react-query";

import { getCoreSampleById } from "@/services/core-sample/core-sample.service";

export const useGetCoreSample = (
  id: string
) => {
  return useQuery({
    queryKey: ["core-sample", id],
    queryFn: () => getCoreSampleById(id),
    enabled: !!id,
  });
};