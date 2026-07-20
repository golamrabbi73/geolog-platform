type Props = {
  rows?: number;
  columns?: number;
};

export default function SkeletonTable({
  rows = 6,
  columns = 5,
}: Props) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-base-300">
      <table className="table">
        <tbody>
          {Array.from({ length: rows }).map((_, rowIdx) => (
            <tr key={rowIdx} className="animate-pulse">
              {Array.from({ length: columns }).map((_, colIdx) => (
                <td key={colIdx} className="py-4">
                  <div className="h-4 w-full max-w-[140px] rounded bg-base-300" />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
