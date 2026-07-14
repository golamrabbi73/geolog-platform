import axiosInstance from "@/lib/axios";
import { API_ENDPOINTS } from "@/constants/api";

import type {
  RegisterPayload,
  LoginPayload,
  RegisterResponse,
  LoginResponse,
  RefreshTokenResponse,
  MeResponse,
} from "./auth.types";

// Register
export const registerUser = async (
  payload: RegisterPayload
): Promise<RegisterResponse> => {
  const { data } = await axiosInstance.post<RegisterResponse>(
    `${API_ENDPOINTS.AUTH}/register`,
    payload
  );

  return data;
};

// Login
export const loginUser = async (
  payload: LoginPayload
): Promise<LoginResponse> => {
  const { data } = await axiosInstance.post<LoginResponse>(
    `${API_ENDPOINTS.AUTH}/login`,
    payload
  );

  return data;
};

// Logout
export const logoutUser = async (): Promise<void> => {
  await axiosInstance.post(
    `${API_ENDPOINTS.AUTH}/logout`
  );
};

// Me
export const getMe = async (): Promise<MeResponse> => {
  const { data } = await axiosInstance.get<MeResponse>(
    `${API_ENDPOINTS.AUTH}/me`
  );

  return data;
};

// Refresh
export const refreshToken = async (): Promise<RefreshTokenResponse> => {
  const { data } = await axiosInstance.post<RefreshTokenResponse>(
    `${API_ENDPOINTS.AUTH}/refresh-token`
  );

  return data;
};