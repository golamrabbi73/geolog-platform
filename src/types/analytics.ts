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
  summary: DashboardSummary;

  wellStatus: ChartItem[];

  rockTypes: ChartItem[];

  recentWells: Well[];

  recentSamples: CoreSample[];
}