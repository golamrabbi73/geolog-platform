import CoreSampleTable from "@/components/sample/CoreSampleTable";
import Link from "next/link";

export default function SamplesPage() {
  return (
    <section className="space-y-8">
        <div className="flex items-center justify-between">
            <div>
                <h1 className="text-3xl font-bold">
                    Core Sample Management
                </h1>
                <p className="text-base-content/70">
                    Manage all samples.
                </p>
            </div>

            <Link
                href="/samples/create"
                className="btn btn-primary"
            >
                + Create Core Sample
            </Link>
        </div>

        <CoreSampleTable />
    </section>

  );
}