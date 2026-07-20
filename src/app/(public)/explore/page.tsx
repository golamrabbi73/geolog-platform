"use client";

import { useMemo, useState } from "react";
import { useDebounce } from "use-debounce";
import { MapPin, Layers } from "lucide-react";

import { useGetPublicWells } from "@/hooks/well/useGetPublicWells";
import { useGetPublicCoreSamples } from "@/hooks/core-sample/useGetPublicCoreSamples";

import WellSearch from "@/components/well/WellSearch";
import WellStatusFilter from "@/components/well/WellStatusFilter";
import CoreSampleSearch from "@/components/sample/CoreSampleSearch";
import CoreSampleRockTypeFilter from "@/components/sample/CoreSampleRockTypeFilter";

import ItemCard from "@/components/ui/ItemCard";
import SkeletonCard from "@/components/ui/SkeletonCard";

type Tab = "wells" | "samples";
type SortOption = "newest" | "oldest" | "name-asc" | "name-desc";

export default function ExplorePage() {
  const [tab, setTab] = useState<Tab>("wells");

  const [page, setPage] = useState(1);
  const limit = 8;

  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch] = useDebounce(searchTerm, 500);

  // Well filters
  const [status, setStatus] = useState("");
  const [minDepth, setMinDepth] = useState("");

  // Sample filters
  const [rockType, setRockType] = useState("");
  const [wellNameFilter, setWellNameFilter] = useState("");

  const [sort, setSort] = useState<SortOption>("newest");

  const wellsQuery = useGetPublicWells({
    searchTerm: debouncedSearch,
    status,
    page,
    limit,
  });

  const samplesQuery = useGetPublicCoreSamples({
    searchTerm: debouncedSearch,
    rockType,
    wellName: wellNameFilter,
    page,
    limit,
  });

  const activeQuery = tab === "wells" ? wellsQuery : samplesQuery;
  const { isPending, isError } = activeQuery;

  const wells = useMemo(() => {
    let list = wellsQuery.data?.data ?? [];

    if (minDepth) {
      list = list.filter((w) => w.depth >= Number(minDepth));
    }

    return [...list].sort((a, b) => {
      if (sort === "name-asc") return a.wellName.localeCompare(b.wellName);
      if (sort === "name-desc") return b.wellName.localeCompare(a.wellName);
      if (sort === "oldest")
        return (
          new Date(a.createdAt).getTime() -
          new Date(b.createdAt).getTime()
        );
      return (
        new Date(b.createdAt).getTime() -
        new Date(a.createdAt).getTime()
      );
    });
  }, [wellsQuery.data, minDepth, sort]);

  const samples = useMemo(() => {
    const list = samplesQuery.data?.data ?? [];

    return [...list].sort((a, b) => {
      if (sort === "name-asc") return a.sampleId.localeCompare(b.sampleId);
      if (sort === "name-desc") return b.sampleId.localeCompare(a.sampleId);
      if (sort === "oldest")
        return (
          new Date(a.createdAt).getTime() -
          new Date(b.createdAt).getTime()
        );
      return (
        new Date(b.createdAt).getTime() -
        new Date(a.createdAt).getTime()
      );
    });
  }, [samplesQuery.data, sort]);

  const meta = tab === "wells" ? wellsQuery.data?.meta : samplesQuery.data?.meta;

  const switchTab = (next: Tab) => {
    setTab(next);
    setPage(1);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Explore GeoLog</h1>
        <p className="text-base-content/70 mt-1">
          Browse wells and core samples across every field site — no
          account required.
        </p>
      </div>

      {/* Tabs */}
      <div className="tabs tabs-boxed w-fit">
        <button
          className={`tab ${tab === "wells" ? "tab-active" : ""}`}
          onClick={() => switchTab("wells")}
        >
          Wells
        </button>

        <button
          className={`tab ${tab === "samples" ? "tab-active" : ""}`}
          onClick={() => switchTab("samples")}
        >
          Core Samples
        </button>
      </div>

      {/* Controls */}
      <div className="flex flex-col lg:flex-row lg:items-center gap-3">
        {tab === "wells" ? (
          <WellSearch
            value={searchTerm}
            onChange={(v) => {
              setSearchTerm(v);
              setPage(1);
            }}
          />
        ) : (
          <CoreSampleSearch
            value={searchTerm}
            onChange={(v) => {
              setSearchTerm(v);
              setPage(1);
            }}
          />
        )}

        {tab === "wells" ? (
          <>
            <WellStatusFilter
              value={status}
              onChange={(v) => {
                setStatus(v);
                setPage(1);
              }}
            />

            <input
              type="number"
              placeholder="Min depth (m)"
              className="input input-bordered w-full max-w-[10rem]"
              value={minDepth}
              onChange={(e) => setMinDepth(e.target.value)}
            />
          </>
        ) : (
          <>
            <CoreSampleRockTypeFilter
              value={rockType}
              onChange={(v) => {
                setRockType(v);
                setPage(1);
              }}
            />

            <input
              type="text"
              placeholder="Filter by well name"
              className="input input-bordered w-full max-w-[12rem]"
              value={wellNameFilter}
              onChange={(e) => {
                setWellNameFilter(e.target.value);
                setPage(1);
              }}
            />
          </>
        )}

        <select
          className="select select-bordered lg:ml-auto"
          value={sort}
          onChange={(e) => setSort(e.target.value as SortOption)}
        >
          <option value="newest">Newest first</option>
          <option value="oldest">Oldest first</option>
          <option value="name-asc">Name (A–Z)</option>
          <option value="name-desc">Name (Z–A)</option>
        </select>
      </div>

      {/* Grid */}
      {isPending ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      ) : isError ? (
        <p className="text-error text-center py-16">
          Failed to load data. Please try again.
        </p>
      ) : tab === "wells" ? (
        wells.length === 0 ? (
          <p className="text-center text-base-content/60 py-16">
            No wells match your filters.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {wells.map((well) => (
              <ItemCard
                key={well._id}
                imageUrl={well.imageUrl}
                title={well.wellName}
                description={well.description || "No description provided."}
                badge={well.status}
                href={`/explore/wells/${well._id}`}
                meta={[
                  { icon: <MapPin size={14} />, label: well.location },
                  {
                    icon: <Layers size={14} />,
                    label: `${well.depth} m depth`,
                  },
                ]}
              />
            ))}
          </div>
        )
      ) : samples.length === 0 ? (
        <p className="text-center text-base-content/60 py-16">
          No core samples match your filters.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {samples.map((sample) => (
            <ItemCard
              key={sample._id}
              imageUrl={sample.imageUrl}
              title={sample.sampleId}
              description={sample.description || "No description provided."}
              badge={sample.rockType}
              href={`/explore/samples/${sample._id}`}
              meta={[
                { icon: <MapPin size={14} />, label: sample.wellName },
                {
                  icon: <Layers size={14} />,
                  label: `${sample.depthFrom}m – ${sample.depthTo}m`,
                },
              ]}
            />
          ))}
        </div>
      )}

      {/* Pagination */}
      {meta && meta.totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pt-4">
          <button
            className="btn btn-sm"
            disabled={page <= 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
          >
            Previous
          </button>

          <span className="text-sm text-base-content/70">
            Page {meta.page} of {meta.totalPages}
          </span>

          <button
            className="btn btn-sm"
            disabled={page >= meta.totalPages}
            onClick={() => setPage((p) => p + 1)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
