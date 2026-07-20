export default function SkeletonCard() {
  return (
    <div className="card h-[420px] w-full bg-base-100 border border-base-300 rounded-2xl shadow-sm overflow-hidden flex flex-col animate-pulse">
      <div className="h-44 w-full shrink-0 bg-base-300" />

      <div className="card-body flex-1 flex flex-col gap-3 p-5">
        <div className="h-5 w-2/3 rounded bg-base-300" />
        <div className="h-3 w-full rounded bg-base-300" />
        <div className="h-3 w-5/6 rounded bg-base-300" />

        <div className="mt-auto space-y-2 pt-2">
          <div className="h-3 w-1/2 rounded bg-base-300" />
          <div className="h-3 w-1/3 rounded bg-base-300" />
          <div className="h-8 w-full rounded bg-base-300 mt-3" />
        </div>
      </div>
    </div>
  );
}
