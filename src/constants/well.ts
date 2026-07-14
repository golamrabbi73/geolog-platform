export const WELL_STATUS = [
  "planned",
  "active",
  "completed",
] as const;

export type WellStatus =
  (typeof WELL_STATUS)[number];