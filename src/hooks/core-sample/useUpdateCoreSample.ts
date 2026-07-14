"use client";

import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import {
  updateCoreSample,
} from "@/services/core-sample/core-sample.service";

import type {
  UpdateCoreSamplePayload,
} from "@/services/core-sample/core-sample.types";

export const useUpdateCoreSample = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      payload,
    }: {
      id: string;
      payload: UpdateCoreSamplePayload;
    }) => updateCoreSample(id, payload),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["core-samples"],
      });
    },
  });
};