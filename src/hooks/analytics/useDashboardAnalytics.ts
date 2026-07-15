"use client";

import { useQuery } from "@tanstack/react-query";

import { getDashboardAnalytics } from "@/services/analytics/analytics.service";

export const useDashboardAnalytics = () => {
  return useQuery({
    queryKey: ["dashboard-analytics"],
    queryFn: getDashboardAnalytics,
  });
};