import WellForm from "@/components/forms/WellForm";

export default function CreateWellPage() {
  return (
    <section className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          Create Well
        </h1>

        <p className="text-base-content/70 mt-2">
          Add a new well.
        </p>
      </div>

      <div className="card bg-base-100 shadow">
        <div className="card-body">
          <WellForm />
        </div>
      </div>
    </section>
  );
}