"use client";

import { useQuery } from "@tanstack/react-query";
import { getMe } from "./auth.service";

export const useMeQuery = () =>
  useQuery({
    queryKey: ["me"],
    queryFn: getMe,
  });