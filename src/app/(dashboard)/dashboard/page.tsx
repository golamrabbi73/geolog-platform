"use client";

import SummaryCards from "@/components/dashboard/SummaryCards";
import WellStatusChart from "@/components/dashboard/WellStatusChart";
import RockTypeChart from "@/components/dashboard/RockTypeChart";
import RecentWells from "@/components/dashboard/RecentWells";
import RecentSamples from "@/components/dashboard/RecentSamples";

import { useDashboardAnalytics } from "@/hooks/analytics/useDashboardAnalytics";

export default function DashboardPage() {
  const { data, isPending, isError } =
    useDashboardAnalytics();

  if (isPending) return <p>Loading...</p>;

  if (isError || !data)
    return <p>Failed to load dashboard.</p>;

  return (
    <div className="space-y-8">
      <SummaryCards summary={data.data.summary} />

      <div className="grid lg:grid-cols-2 gap-6">
        <WellStatusChart
          data={data.data.wellStatus}
        />

        <RockTypeChart
          data={data.data.rockTypes}
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <RecentWells
          wells={data.data.recentWells}
        />

        <RecentSamples
          samples={data.data.recentSamples}
        />
      </div>
    </div>
  );
}