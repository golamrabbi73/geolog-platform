import CoreSampleDetails from "@/components/sample/CoreSampleDetails";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function SampleDetailsPage({
  params,
}: Props) {
  const { id } = await params;

  return <CoreSampleDetails id={id} />;
}