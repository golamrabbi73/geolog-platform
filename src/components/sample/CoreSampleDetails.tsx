"use client";

import { useGetCoreSample } from "@/hooks/core-sample/useGetCoreSample";

type Props = {
  id: string;
};

export default function CoreSampleDetails({
  id,
}: Props) {
  const { data, isPending, isError } =
    useGetCoreSample(id);

  if (isPending) {
    return <p>Loading...</p>;
  }

  if (isError || !data) {
    return <p>Core sample not found.</p>;
  }

  const sample = data.data;

  return (
    <div className="max-w-3xl mx-auto">
      <div className="card bg-base-100 shadow">
        <div className="card-body">
          <h1 className="text-3xl font-bold">
            {sample.sampleId}
          </h1>

          <p>
            <strong>Well Name:</strong>{" "}
            {sample.wellName}
          </p>

          <p>
            <strong>Depth From:</strong>{" "}
            {sample.depthFrom} m
          </p>

          <p>
            <strong>Depth To:</strong>{" "}
            {sample.depthTo} m
          </p>

          <p>
            <strong>Rock Type:</strong>{" "}
            {sample.rockType}
          </p>

          <p>
            <strong>Description:</strong>{" "}
            {sample.description}
          </p>
        </div>
      </div>
    </div>
  );
}