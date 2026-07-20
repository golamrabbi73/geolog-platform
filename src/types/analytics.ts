import type { Well } from "./well";
import type { CoreSample } from "./sample";

export interface DashboardSummary {
  totalUsers: number;

  totalWells: number;

  totalSamples: number;
}

export interface ChartItem {
  _id: string;

  count: number;
}

export interface DashboardAnalytics {
  summary: {
    totalUsers: number;
    totalWells: number;
    totalSamples: number;
  };
  wellStatus: { _id: string; count: number }[];
  rockTypes: { _id: string; count: number }[];
  recentWells: any[];
  recentSamples: any[];
}

export interface AnalyticsApiResponse {
  success: boolean;
  message: string;
  data: DashboardAnalytics;
}