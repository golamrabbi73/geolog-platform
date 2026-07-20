import CoreSampleDetails from "@/components/sample/CoreSampleDetails";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function PublicCoreSampleDetailsPage({ params }: Props) {
  const { id } = await params;

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
      <CoreSampleDetails id={id} />
    </div>
  );
}
