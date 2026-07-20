"use client";

import { useQuery } from "@tanstack/react-query";

import { getDashboardAnalytics } from "@/services/analytics/analytics.service";
import { QUERY_KEYS } from "@/constants/queryKeys";

export const useDashboardAnalytics = () => {
  return useQuery({
    queryKey: QUERY_KEYS.ANALYTICS,
    queryFn: getDashboardAnalytics,
  });
};