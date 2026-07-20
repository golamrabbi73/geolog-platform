'use client';
import SkeletonCard from "@/components/ui/SkeletonCard";
import { useDashboardAnalytics } from "@/hooks/analytics/useDashboardAnalytics";
import { AnalyticsApiResponse } from "@/types/analytics";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, Legend } from 'recharts';


const COLORS = ['var(--color-primary)', 'var(--color-secondary)', 'var(--color-accent)', 'var(--color-info)'];

export default function AnalyticsPage() {
  const { data, isPending, isError } = useDashboardAnalytics();
  const typedData = data as AnalyticsApiResponse | undefined;

  // ফাইনাল স্কেলিটন লোডার ভার্সন
  if (isPending) return (
    <div className="max-w-7xl mx-auto p-8 space-y-8 min-h-screen">
      <div className="h-10 w-64 bg-base-300/50 animate-pulse rounded-lg" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="h-32 bg-base-300/50 animate-pulse rounded-[--radius-box]" />
        ))}
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </div>
  );

  if (isError || !typedData?.data) return <div className="p-8 text-center text-error">Failed to load data.</div>;

  const { summary, wellStatus, rockTypes } = typedData.data;

  return (
    <div className="max-w-7xl mx-auto p-8 space-y-8 bg-base-100 min-h-screen">
      <header className="border-b border-base-300 pb-6">
        <h1 className="text-3xl font-bold text-base-content tracking-tight">Intelligence Hub</h1>
        <p className="text-base-content/60">GeoLog advanced operational performance metrics.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard label="Total Users" val={summary.totalUsers} />
        <StatCard label="Total Wells" val={summary.totalWells} />
        <StatCard label="Total Samples" val={summary.totalSamples} />
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Well Status Chart */}
        <div className="rounded-[--radius-box] border border-base-300 p-6 bg-base-100">
          <h2 className="text-sm font-semibold mb-6">Well Status Distribution</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={wellStatus}>
                <XAxis dataKey="_id" tick={{fill: 'currentColor', fontSize: 12}} />
                <YAxis tick={{fill: 'currentColor', fontSize: 12}} />
                <Tooltip contentStyle={{backgroundColor: 'var(--color-base-100)', borderRadius: 'var(--radius-field)', borderColor: 'var(--color-base-300)'}} />
                <Bar dataKey="count" fill="var(--color-primary)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Rock Types Chart */}
        <div className="rounded-[--radius-box] border border-base-300 p-6 bg-base-100">
          <h2 className="text-sm font-semibold mb-6">Rock Type Composition</h2>
          <div className="h-64 flex flex-col items-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={rockTypes} dataKey="count" nameKey="_id" innerRadius={60} outerRadius={80} paddingAngle={5}>
                  {rockTypes.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{borderRadius: 'var(--radius-field)'}} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, val }: { label: string, val: number }) {
  return (
    <div className="bg-base-200 p-6 rounded-[--radius-box] border border-base-300">
      <p className="text-xs font-bold uppercase tracking-widest text-base-content/50">{label}</p>
      <p className="mt-2 text-4xl font-light text-primary">{val}</p>
    </div>
  );
}