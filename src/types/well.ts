import type { BaseEntity } from "./base";

export type WellStatus =
  | "planned"
  | "active"
  | "completed";

export interface Well extends BaseEntity {
  wellName: string;
  location: string;
  operator: string;
  depth: number;
  status: WellStatus;
  description: string;
  createdBy: string;
}