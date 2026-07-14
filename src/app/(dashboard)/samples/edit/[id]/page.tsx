import EditCoreSampleForm from "@/components/forms/EditCoreSampleForm";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditSamplePage({
  params,
}: Props) {
  const { id } = await params;

  return (
    <section className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          Edit Core Sample
        </h1>

        <p className="text-base-content/70">
          Update core sample information.
        </p>
      </div>

      <div className="card bg-base-100 shadow">
        <div className="card-body">
          <EditCoreSampleForm id={id} />
        </div>
      </div>
    </section>
  );
}