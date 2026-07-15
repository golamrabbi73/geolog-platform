import StatCard from "./StatCard";
import type { DashboardSummary } from "@/types/analytics";

type Props = {
  summary: DashboardSummary;
};

export default function SummaryCards({
  summary,
}: Props) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <StatCard
        title="Users"
        value={summary.totalUsers}
      />

      <StatCard
        title="Wells"
        value={summary.totalWells}
      />

      <StatCard
        title="Core Samples"
        value={summary.totalSamples}
      />
    </div>
  );
}