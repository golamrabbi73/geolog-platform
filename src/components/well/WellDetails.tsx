"use client";

import Link from "next/link";
import { MapPin, Gauge, Building2, Activity } from "lucide-react";

import { useGetWell } from "@/hooks/well/useGetWell";
import { useGetPublicWells } from "@/hooks/well/useGetPublicWells";

type Props = {
  id: string;
};

export default function WellDetails({ id }: Props) {
  const { data, isPending, isError } = useGetWell(id);

  const { data: relatedData } = useGetPublicWells({
    limit: 4,
  });

  if (isPending) {
    return (
      <div className="max-w-4xl mx-auto animate-pulse space-y-4">
        <div className="h-64 w-full rounded-2xl bg-base-300" />
        <div className="h-8 w-1/2 rounded bg-base-300" />
        <div className="h-4 w-full rounded bg-base-300" />
      </div>
    );
  }

  if (isError || !data) {
    return (
      <p className="text-center py-16 text-base-content/70">
        Well not found.
      </p>
    );
  }

  const well = data.data;

  const related = (relatedData?.data ?? [])
    .filter((w) => w._id !== well._id)
    .slice(0, 3);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Media */}
      <div className="h-64 md:h-80 w-full rounded-2xl overflow-hidden bg-base-200">
        {well.imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={well.imageUrl}
            alt={well.wellName}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center text-base-content/40">
            <Gauge size={48} />
          </div>
        )}
      </div>

      <div className="flex items-start justify-between gap-4">
        <h1 className="text-3xl font-bold">{well.wellName}</h1>
        <span className="badge badge-primary badge-lg capitalize shrink-0">
          {well.status}
        </span>
      </div>

      {/* Overview */}
      <section className="card bg-base-100 border border-base-300 rounded-2xl">
        <div className="card-body">
          <h2 className="card-title text-lg">Overview</h2>
          <p className="text-base-content/80">
            {well.description || "No description provided."}
          </p>
        </div>
      </section>

      {/* Specifications */}
      <section className="card bg-base-100 border border-base-300 rounded-2xl">
        <div className="card-body">
          <h2 className="card-title text-lg">Key Information</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            <div className="flex items-center gap-3">
              <MapPin className="text-primary" size={20} />
              <div>
                <p className="text-xs text-base-content/60">Location</p>
                <p className="font-medium">{well.location}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Building2 className="text-primary" size={20} />
              <div>
                <p className="text-xs text-base-content/60">Operator</p>
                <p className="font-medium">{well.operator}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Gauge className="text-primary" size={20} />
              <div>
                <p className="text-xs text-base-content/60">Depth</p>
                <p className="font-medium">{well.depth} m</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Activity className="text-primary" size={20} />
              <div>
                <p className="text-xs text-base-content/60">Status</p>
                <p className="font-medium capitalize">{well.status}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related wells */}
      {related.length > 0 && (
        <section>
          <h2 className="text-lg font-semibold mb-4">Related Wells</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {related.map((item) => (
              <Link
                key={item._id}
                href={`/wells/${item._id}`}
                className="card bg-base-100 border border-base-300 rounded-2xl hover:shadow-md transition-shadow"
              >
                <div className="card-body p-4">
                  <p className="font-medium line-clamp-1">
                    {item.wellName}
                  </p>
                  <p className="text-xs text-base-content/60 line-clamp-1">
                    {item.location}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
