import axiosInstance from "@/lib/axios";
import { API_ENDPOINTS } from "@/constants/api";

import type { DashboardAnalytics } from "@/types/analytics";

export const getDashboardAnalytics =
  async (): Promise<{
    success: boolean;
    message: string;
    data: DashboardAnalytics;
  }> => {
    const { data } = await axiosInstance.get(
      API_ENDPOINTS.ANALYTICS
    );

    return data;
  };