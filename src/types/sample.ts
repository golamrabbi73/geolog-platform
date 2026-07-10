import type { BaseEntity } from "./base";
import type { LabStatus, Lithology } from "./common";

export interface Sample extends BaseEntity{
    sampleName: string;
    wellId: string; //Well ID
    depthFeet: number;
    lithology: Lithology;
    porosity: number;
    permeability: number;
    collectionDate: string;
    labStatus: LabStatus;
    collectedBy: string; //User ID
    analysisCost?: number;
    imageUrl?: string;
    notes?: string;
}