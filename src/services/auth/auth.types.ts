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

export type RegisterResponse =
  ApiResponse<User>;

export interface LoginData {
  accessToken: string;
  user: User;
}

export type LoginResponse =
  ApiResponse<LoginData>;

export interface RefreshTokenData {
  accessToken: string;
}

export type RefreshTokenResponse =
  ApiResponse<RefreshTokenData>;

export type MeResponse =
  ApiResponse<User>;