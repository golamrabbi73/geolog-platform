import type { BaseEntity } from "./base";
import type { User } from "./user";

export interface CoreSample extends BaseEntity {
  sampleId: string;

  wellName: string;

  depthFrom: number;

  depthTo: number;

  rockType: string;

  description: string;

  imageUrl?: string;

  collectedBy: string | User;
}