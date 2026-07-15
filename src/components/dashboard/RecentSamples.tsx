import type { CoreSample } from "@/types/sample";

type Props = {
  samples: CoreSample[];
};

export default function RecentSamples({
  samples,
}: Props) {
  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body">
        <h2 className="font-bold">
          Recent Samples
        </h2>

        <div className="space-y-2">
          {samples.map((sample) => (
            <div key={sample._id}>
              {sample.sampleId}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}