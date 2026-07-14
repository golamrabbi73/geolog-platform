import Link from "next/link";
import WellTable from "@/components/well/WellTable";

export default function WellsPage() {
  return (
    <section className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Well Management
          </h1>

          <p className="text-base-content/70">
            Manage all wells.
          </p>
        </div>

        <Link
          href="/wells/create"
          className="btn btn-primary"
        >
          + Create Well
        </Link>
      </div>

      <WellTable />
    </section>
  );
}