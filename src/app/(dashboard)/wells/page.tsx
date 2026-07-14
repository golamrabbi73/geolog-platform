import WellForm from "@/components/forms/WellForm";

export default function WellsPage() {
  return (
    <div className="max-w-3xl mx-auto p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Create Well
        </h1>

        <p className="text-base-content/70 mt-2">
          Add a new well to the system.
        </p>
      </div>

      <div className="card bg-base-100 shadow-md">
        <div className="card-body">
          <WellForm />
        </div>
      </div>
    </div>
  );
}