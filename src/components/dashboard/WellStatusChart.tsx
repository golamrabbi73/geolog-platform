"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import type { ChartItem } from "@/types/analytics";

type Props = {
  data: ChartItem[];
};

export default function WellStatusChart({
  data,
}: Props) {
  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body">
        <h2 className="font-bold">
          Well Status
        </h2>

        <ResponsiveContainer
          width="100%"
          height={300}
        >
          <BarChart data={data}>
            <XAxis dataKey="_id" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="count"
              fill="#3B82F6"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}