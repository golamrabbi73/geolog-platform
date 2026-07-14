export const ROCK_TYPES = [
  "Sandstone",
  "Limestone",
  "Shale",
  "Dolomite",
  "Granite",
  "Basalt",
  "Coal",
] as const;

export type RockType =
  (typeof ROCK_TYPES)[number];