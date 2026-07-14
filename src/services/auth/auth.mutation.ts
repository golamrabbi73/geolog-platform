"use client";

import { useMutation } from "@tanstack/react-query";
import {
  loginUser,
  logoutUser,
  registerUser,
} from "./auth.service";

export const useRegisterMutation = () =>
  useMutation({
    mutationFn: registerUser,
  });

export const useLoginMutation = () =>
  useMutation({
    mutationFn: loginUser,
  });

export const useLogoutMutation = () =>
  useMutation({
    mutationFn: logoutUser,
  });