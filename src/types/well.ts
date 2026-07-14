import type { BaseEntity } from "./base";
import type { User } from "./user";
import type { WellStatus } from "./common";

export interface Well extends BaseEntity {
  wellName: string;

  location: string;

  operator: string;

  depth: number;

  status: WellStatus;

  description: string;

  createdBy: string | User;
}