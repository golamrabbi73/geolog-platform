"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";
import toast from "react-hot-toast";

import { useDeleteCoreSample } from "@/hooks/core-sample/useDeleteCoreSample";
import { useGetCoreSamples } from "@/hooks/core-sample/useGetCoreSamples";

import CoreSampleSearch from "./CoreSampleSearch";
import CoreSampleRockTypeFilter from "./CoreSampleRockTypeFilter";

import DeleteConfirmModal from "@/components/shared/DeleteConfirmModal";

export default function CoreSampleTable() {
  const router = useRouter();
  const [page, setPage] = useState(1);

  const limit = 10;

  const [searchTerm, setSearchTerm] = useState("");

  const [debouncedSearch] = useDebounce(
    searchTerm,
    500
  );
  const [rockType, setRockType] = useState("");

  const [selectedId, setSelectedId] =
  useState("");

const [openModal, setOpenModal] =
  useState(false);

  const { data, isPending, isError } = useGetCoreSamples({
    searchTerm: debouncedSearch,
    rockType,
    page,
    limit,
  });

  const { mutate: deleteMutate } = useDeleteCoreSample();

  if (isPending) {
    return (
      <p className="text-center py-10">
        Loading samples...
      </p>
    );
  }

  if (isError) {
    return (
      <p className="text-error text-center py-10">
        Failed to load samples.
      </p>
    );
  }

  const samples = data?.data ?? [];

  const meta = data?.meta;

  return (
    <div className="card bg-base-100 shadow-md mt-8">
      <div className="card-body">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <h2 className="card-title">
            Core Samples
          </h2>

          <div className="flex flex-col md:flex-row gap-3">
            <CoreSampleSearch
              value={searchTerm}
              onChange={setSearchTerm}
            />

            <CoreSampleRockTypeFilter
              value={rockType}
              onChange={setRockType}
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th>Sample ID</th>
                <th>Well</th>
                <th>Rock Type</th>
                <th>Depth</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {samples.length > 0 ? (
                samples.map((sample) => (
                  <tr key={sample._id}>
                    <td>{sample.sampleId}</td>
                    <td>{sample.wellName}</td>
                    <td>{sample.rockType}</td>

                    <td>
                      {sample.depthFrom} -{" "}
                      {sample.depthTo} m
                    </td>

                    <td className="space-x-2">
                      <Link
                        href={`/samples/${sample._id}`}
                        className="btn btn-xs btn-info"
                      >
                        View
                      </Link>

                      <button
                        onClick={() =>
                          router.push(
                            `/samples/edit/${sample._id}`
                          )
                        }
                        className="btn btn-xs btn-warning"
                      >
                        Edit
                      </button>

                      {/* delete button */}
                      <button
                    className="btn btn-xs btn-error"
                    onClick={() => {
                        setSelectedId(sample._id);
                        setOpenModal(true);
                    }}
                    >
                    Delete
                    </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={5}
                    className="text-center py-10"
                  >
                    No samples found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="flex justify-end mt-6 gap-2">
          <button
            className="btn btn-sm"
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
          >
            Previous
          </button>

          <span className="btn btn-sm btn-disabled">
            {meta?.page ?? 1} / {meta?.totalPages ?? 1}
          </span>

          <button
            className="btn btn-sm"
            disabled={page === (meta?.totalPages ?? 1)}
            onClick={() => setPage((p) => p + 1)}
          >
            Next
          </button>
        </div>

        <DeleteConfirmModal
            id={selectedId}
            isOpen={openModal}
            onClose={() => setOpenModal(false)}
            onConfirm={(id) => deleteMutate(id)}
            />
      </div>
    </div>
  );
}