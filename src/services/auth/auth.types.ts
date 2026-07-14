import type { ApiResponse } from "@/types/api";
import type { User } from "@/types/user";

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  photoURL?: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export type RegisterResponse = ApiResponse<User>;

export interface LoginResponseData {
  accessToken: string;
  user: User;
}

export type LoginResponse =
  ApiResponse<LoginResponseData>;

export interface RefreshTokenResponseData {
  accessToken: string;
}

export type RefreshTokenResponse =
  ApiResponse<RefreshTokenResponseData>;

export type MeResponse =
  ApiResponse<User>;