"use client";

import { useGetWell } from "@/hooks/well/useGetWell";

type Props = {
  id: string;
};

export default function WellDetails({
  id,
}: Props) {
  const { data, isPending, isError } =
    useGetWell(id);

  if (isPending) {
    return <p>Loading...</p>;
  }

  if (isError || !data) {
    return <p>Well not found.</p>;
  }

  const well = data.data;

  return (
    <div className="max-w-3xl mx-auto">
      <div className="card bg-base-100 shadow">
        <div className="card-body">
          <h1 className="text-3xl font-bold">
            {well.wellName}
          </h1>

          <p>
            <strong>Location:</strong>{" "}
            {well.location}
          </p>

          <p>
            <strong>Operator:</strong>{" "}
            {well.operator}
          </p>

          <p>
            <strong>Depth:</strong>{" "}
            {well.depth} m
          </p>

          <p>
            <strong>Status:</strong>{" "}
            {well.status}
          </p>

          <p>
            <strong>Description:</strong>{" "}
            {well.description}
          </p>
        </div>
      </div>
    </div>
  );
}