"use client";

import Link from "next/link";
import { Layers, Ruler, Mountain } from "lucide-react";

import { useGetCoreSample } from "@/hooks/core-sample/useGetCoreSample";
import { useGetPublicCoreSamples } from "@/hooks/core-sample/useGetPublicCoreSamples";

type Props = {
  id: string;
};

export default function CoreSampleDetails({ id }: Props) {
  const { data, isPending, isError } = useGetCoreSample(id);

  const { data: relatedData } = useGetPublicCoreSamples({
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
        Core sample not found.
      </p>
    );
  }

  const sample = data.data;

  const related = (relatedData?.data ?? [])
    .filter((s) => s._id !== sample._id)
    .slice(0, 3);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Media */}
      <div className="h-64 md:h-80 w-full rounded-2xl overflow-hidden bg-base-200">
        {sample.imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={sample.imageUrl}
            alt={sample.sampleId}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center text-base-content/40">
            <Layers size={48} />
          </div>
        )}
      </div>

      <div className="flex items-start justify-between gap-4">
        <h1 className="text-3xl font-bold">{sample.sampleId}</h1>
        <span className="badge badge-primary badge-lg capitalize shrink-0">
          {sample.rockType}
        </span>
      </div>

      {/* Overview */}
      <section className="card bg-base-100 border border-base-300 rounded-2xl">
        <div className="card-body">
          <h2 className="card-title text-lg">Overview</h2>
          <p className="text-base-content/80">
            {sample.description || "No description provided."}
          </p>
        </div>
      </section>

      {/* Specifications */}
      <section className="card bg-base-100 border border-base-300 rounded-2xl">
        <div className="card-body">
          <h2 className="card-title text-lg">Key Information</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            <div className="flex items-center gap-3">
              <Mountain className="text-primary" size={20} />
              <div>
                <p className="text-xs text-base-content/60">Well Name</p>
                <p className="font-medium">{sample.wellName}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Layers className="text-primary" size={20} />
              <div>
                <p className="text-xs text-base-content/60">Rock Type</p>
                <p className="font-medium">{sample.rockType}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Ruler className="text-primary" size={20} />
              <div>
                <p className="text-xs text-base-content/60">Depth Range</p>
                <p className="font-medium">
                  {sample.depthFrom}m &ndash; {sample.depthTo}m
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related samples */}
      {related.length > 0 && (
        <section>
          <h2 className="text-lg font-semibold mb-4">Related Samples</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {related.map((item) => (
              <Link
                key={item._id}
                href={`/samples/${item._id}`}
                className="card bg-base-100 border border-base-300 rounded-2xl hover:shadow-md transition-shadow"
              >
                <div className="card-body p-4">
                  <p className="font-medium line-clamp-1">
                    {item.sampleId}
                  </p>
                  <p className="text-xs text-base-content/60 line-clamp-1">
                    {item.wellName}
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
