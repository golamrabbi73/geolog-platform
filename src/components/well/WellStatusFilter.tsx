"use client";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function WellStatusFilter({
  value,
  onChange,
}: Props) {
  return (
    <select
      className="select select-bordered"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">All Status</option>
      <option value="planned">Planned</option>
      <option value="active">Active</option>
      <option value="completed">Completed</option>
    </select>
  );
}