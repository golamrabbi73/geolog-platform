"use client";

import { useQuery } from "@tanstack/react-query";

import { getAllWells } from "@/services/well/well.service";

type Params = {
  searchTerm?: string;
  status?: string;
  page?: number;
  limit?: number;
};
export const useGetWells = (
  params?: Params
) => {
  return useQuery({
    queryKey: ["wells", params],
    queryFn: () => getAllWells(params),
  });
};