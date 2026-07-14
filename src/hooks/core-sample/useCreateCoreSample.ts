"use client";

import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { createCoreSample } from "@/services/core-sample/core-sample.service";

export const useCreateCoreSample = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createCoreSample,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["core-samples"],
      });
    },
  });
};