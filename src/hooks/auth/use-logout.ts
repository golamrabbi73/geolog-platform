"use client";

import { useMutation } from "@tanstack/react-query";
import { logoutUser } from "@/services/auth";

export const useLogout = () => {
  return useMutation({
    mutationFn: logoutUser,
  });
};