import axiosInstance from "@/lib/axios";
import type { User } from "@/types/user";

export const getMyProfile = async (): Promise<{
  success: boolean;
  message: string;
  data: User;
}> => {
  const { data } = await axiosInstance.get("/users/me");

  return data;
};