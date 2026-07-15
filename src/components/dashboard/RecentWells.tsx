import type { Well } from "@/types/well";

type Props = {
  wells: Well[];
};

export default function RecentWells({
  wells,
}: Props) {
  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body">
        <h2 className="font-bold">
          Recent Wells
        </h2>

        <div className="space-y-2">
          {wells.map((well) => (
            <div key={well._id}>
              {well.wellName}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}