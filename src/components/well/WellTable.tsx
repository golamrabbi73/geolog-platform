"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useDeleteWell } from "@/hooks/well/useDeleteWell";
import { useGetWells } from "@/hooks/well/useGetWells";

import WellSearch from "./WellSearch";
import WellStatusFilter from "./WellStatusFilter";
import { useDebounce } from "use-debounce";

import toast from "react-hot-toast";

export default function WellTable() {
  const router = useRouter();
  const [page, setPage] = useState(1);

    const limit = 10;

  const [searchTerm, setSearchTerm] = useState("");

    const [debouncedSearch] = useDebounce(
    searchTerm,
    500
    );
  const [status, setStatus] = useState("");

  const { data, isPending, isError } = useGetWells({
  searchTerm: debouncedSearch,
  status,
  page,
  limit,
});

  const { mutate: deleteMutate } = useDeleteWell();

  if (isPending) {
    return (
      <p className="text-center py-10">
        Loading wells...
      </p>
    );
  }

  if (isError) {
    return (
      <p className="text-error text-center py-10">
        Failed to load wells.
      </p>
    );
  }

  const wells = data?.data ?? [];

    const meta = data?.meta;

  return (
    <div className="card bg-base-100 shadow-md mt-8">
      <div className="card-body">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <h2 className="card-title">
            All Wells
          </h2>

          <div className="flex flex-col md:flex-row gap-3">
            <WellSearch
              value={searchTerm}
              onChange={setSearchTerm}
            />

            <WellStatusFilter
              value={status}
              onChange={setStatus}
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th>Well Name</th>
                <th>Location</th>
                <th>Operator</th>
                <th>Depth</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {wells.length > 0 ? (
                wells.map((well) => (
                  <tr key={well._id}>
                    <td>{well.wellName}</td>
                    <td>{well.location}</td>
                    <td>{well.operator}</td>
                    <td>{well.depth} m</td>

                    <td>
                      <span className="badge badge-outline">
                        {well.status}
                      </span>
                    </td>

                    <td className="space-x-2">
                      <Link
                        href={`/wells/${well._id}`}
                        className="btn btn-xs btn-info"
                      >
                        View
                      </Link>

                      <button
                        onClick={() =>
                          router.push(
                            `/wells/edit/${well._id}`
                          )
                        }
                        className="btn btn-xs btn-warning"
                      >
                        Edit
                      </button>

                      {/* delete button */}
                      <button
                        onClick={() =>
                            deleteMutate(well._id, {
                            onSuccess: () => {
                                toast.success("Well deleted successfully.");
                            },
                            onError: () => {
                                toast.error("Failed to delete well.");
                            },
                            })
                        }
                        className="btn btn-xs btn-error"
                        >
                        Delete
                        </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={6}
                    className="text-center py-10"
                  >
                    No wells found.
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
      </div>
    </div>
  );
}