"use client";

import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { createWell } from "@/services/well/well.service";
import { QUERY_KEYS } from "@/constants/queryKeys";

export const useCreateWell = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createWell,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.WELLS,
      });
    },
  });
};