"use client";

import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { updateWell } from "@/services/well/well.service";
import type { UpdateWellPayload } from "@/services/well/well.types";
import { QUERY_KEYS } from "@/constants/queryKeys";

export const useUpdateWell = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      payload,
    }: {
      id: string;
      payload: UpdateWellPayload;
    }) => updateWell(id, payload),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.WELLS,
      });
    },
  });
};