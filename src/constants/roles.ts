export const USER_ROLES = [
  "fieldEngineer",
  "manager",
  "admin",
] as const;

export type UserRole =
  (typeof USER_ROLES)[number];