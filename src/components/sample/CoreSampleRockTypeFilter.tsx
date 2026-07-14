"use client";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function CoreSampleRockTypeFilter({
  value,
  onChange,
}: Props) {
  return (
    <select
      className="select select-bordered"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">All Rock Types</option>
      <option value="Sandstone">Sandstone</option>
      <option value="Limestone">Limestone</option>
      <option value="Shale">Shale</option>
      <option value="Dolomite">Dolomite</option>
      <option value="Siltstone">Siltstone</option>
      <option value="Coal">Coal</option>
      <option value="Basalt">Basalt</option>
      <option value="Granite">Granite</option>
    </select>
  );
}