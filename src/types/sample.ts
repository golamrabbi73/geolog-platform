import type { BaseEntity } from "./base";

export interface CoreSample extends BaseEntity {
  sampleId: string;
  wellName: string;
  depthFrom: number;
  depthTo: number;
  rockType: string;
  description?: string;
  collectedBy: string;
}