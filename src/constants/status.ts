export const USER_STATUS = [
  "active",
  "suspended",
] as const;

export type UserStatus =
  (typeof USER_STATUS)[number];