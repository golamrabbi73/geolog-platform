import CoreSampleForm from "@/components/forms/CoreSampleForm";

export default function CreateCoreSamplePage() {
  return (
    <section className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          Create Core Sample
        </h1>

        <p className="text-base-content/70 mt-2">
          Add a new core sample.
        </p>
      </div>

      <div className="card bg-base-100 shadow">
        <div className="card-body">
          <CoreSampleForm />
        </div>
      </div>
    </section>
  );
}