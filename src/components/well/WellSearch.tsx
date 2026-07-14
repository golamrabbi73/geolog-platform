"use client";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function WellSearch({
  value,
  onChange,
}: Props) {
  return (
    <input
      type="text"
      placeholder="Search by well name..."
      className="input input-bordered w-full max-w-sm"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}