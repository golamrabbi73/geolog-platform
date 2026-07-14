"use client";

import { useMutation } from "@tanstack/react-query";
import { registerUser } from "@/services/auth/auth.service";

export const useRegister = () => {
  return useMutation({
    mutationFn: registerUser,
  });
};