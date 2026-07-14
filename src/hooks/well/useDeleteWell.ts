"use client";

import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { deleteWell } from "@/services/well/well.service";

export const useDeleteWell = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteWell,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["wells"],
      });
    },
  });
};