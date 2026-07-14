"use client";

import { useQuery } from "@tanstack/react-query";

import { getAllWells } from "@/services/well/well.service";

export const useGetWells = () => {
  return useQuery({
    queryKey: ["wells"],
    queryFn: getAllWells,
  });
};