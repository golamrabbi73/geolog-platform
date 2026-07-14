"use client";

import { useDeleteWell } from "@/hooks/well/useDeleteWell";
import { useGetWells } from "@/hooks/well/useGetWells";
import Link from "next/link";

export default function WellTable() {
  const { data, isPending, isError } = useGetWells();
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

  return (
    <div className="card bg-base-100 shadow-md mt-8">
      <div className="card-body">
        <h2 className="card-title mb-4">
          All Wells
        </h2>

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
              {wells.map((well) => (
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

                    <button className="btn btn-xs btn-warning">
                      Edit
                    </button>

                    <button
                        onClick={() => deleteMutate(well._id)}
                        className="btn btn-xs btn-error"
                    >
                        Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}