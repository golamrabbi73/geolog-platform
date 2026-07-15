type Props = {
  title: string;
  value: number;
};

export default function StatCard({
  title,
  value,
}: Props) {
  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body">
        <h2 className="text-lg font-semibold">
          {title}
        </h2>

        <p className="text-4xl font-bold text-primary">
          {value}
        </p>
      </div>
    </div>
  );
}