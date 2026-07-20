'use client';
import SummaryCards from "@/components/dashboard/SummaryCards";
import RecentWells from "@/components/dashboard/RecentWells";
import RecentSamples from "@/components/dashboard/RecentSamples";
import { useDashboardAnalytics } from "@/hooks/analytics/useDashboardAnalytics";
import type { AnalyticsApiResponse } from "@/types/analytics";
import SkeletonTable from "@/components/ui/SkeletonTable";


export default function DashboardPage() {
  const { data, isPending, isError } = useDashboardAnalytics();
  const typedData = data as AnalyticsApiResponse | undefined;

  if (isPending) return (
    <div className="max-w-7xl mx-auto p-12 space-y-12">
      <div className="h-8 w-32 bg-base-300 animate-pulse rounded" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="h-32 bg-base-300 animate-pulse rounded-2xl" />
        ))}
      </div>
      <SkeletonTable rows={4} columns={4} />
    </div>
  );

  if (isError || !typedData?.data) return <div className="p-12 text-center text-error">Unable to load dashboard data.</div>;

  const { summary, recentWells, recentSamples } = typedData.data;

  return (
    <div className="max-w-7xl mx-auto p-8 space-y-12">
      <header>
        <h1 className="text-2xl font-semibold tracking-tight text-base-content">Dashboard</h1>
      </header>

      <SummaryCards summary={summary} />

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-base-100 rounded-xl border border-base-200/60 p-6">
          <RecentWells wells={recentWells} />
        </div>
        <div className="bg-base-100 rounded-xl border border-base-200/60 p-6">
          <RecentSamples samples={recentSamples} />
        </div>
      </div>
    </div>
  );
}