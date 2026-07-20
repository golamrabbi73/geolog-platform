import WellDetails from "@/components/well/WellDetails";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function PublicWellDetailsPage({ params }: Props) {
  const { id } = await params;

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
      <WellDetails id={id} />
    </div>
  );
}
