import WellDetails from "@/components/well/WellDetails";


type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function WellDetailsPage({
  params,
}: Props) {
  const { id } = await params;

  return <WellDetails id={id} />;
}