"use client";

import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import {
  deleteCoreSample,
} from "@/services/core-sample/core-sample.service";
import { QUERY_KEYS } from "@/constants/queryKeys";

export const useDeleteCoreSample = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteCoreSample,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.SAMPLES,
      });
    },
  });
};