"use client";

import { useMutation } from "@tanstack/react-query";
import { registerUser } from "@/services/auth";

export const useRegister = () => {
  return useMutation({
    mutationFn: registerUser,
  });
};