"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import { useDeleteCoreSample } from "@/hooks/core-sample/useDeleteCoreSample";
import { useGetCoreSamples } from "@/hooks/core-sample/useGetCoreSamples";

export default function CoreSampleTable() {
  const router = useRouter();

  const { data, isPending, isError } =
    useGetCoreSamples();

  const { mutate } =
    useDeleteCoreSample();

  if (isPending) {
    return (
      <p className="text-center py-10">
        Loading...
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

  return (
    <div className="card bg-base-100 shadow-md mt-8">
      <div className="card-body">
        <h2 className="card-title">
          Core Samples
        </h2>

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
              {samples.map((sample) => (
                <tr key={sample._id}>
                  <td>{sample.sampleId}</td>

                  <td>{sample.wellName}</td>

                  <td>{sample.rockType}</td>

                  <td>
                    {sample.depthFrom} -
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
                      className="btn btn-xs btn-warning"
                      onClick={() =>
                        router.push(
                          `/samples/edit/${sample._id}`
                        )
                      }
                    >
                      Edit
                    </button>

                    <button
                      className="btn btn-xs btn-error"
                      onClick={() =>
                        mutate(sample._id, {
                          onSuccess: () => {
                            toast.success(
                              "Sample deleted successfully."
                            );
                          },

                          onError: () => {
                            toast.error(
                              "Delete failed."
                            );
                          },
                        })
                      }
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