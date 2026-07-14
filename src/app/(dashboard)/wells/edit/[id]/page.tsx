import EditWellForm from "@/components/forms/EditWellForm";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditWellPage({
  params,
}: Props) {
  const { id } = await params;

  return (
    <section className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          Edit Well
        </h1>

        <p className="text-base-content/70">
          Update well information.
        </p>
      </div>

      <div className="card bg-base-100 shadow">
        <div className="card-body">
          <EditWellForm id={id} />
        </div>
      </div>
    </section>
  );
}