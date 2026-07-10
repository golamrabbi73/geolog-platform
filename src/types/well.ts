import type { BaseEntity } from "./base";
import type { SiteType, WellStatus } from "./common";

export interface Well extends BaseEntity {
    wellName: string;
    blockNumber: string;
    location: string;
    latitude?: number;
    longitude?: number;
    siteType: SiteType;
    status: WellStatus;
    operatorCompany: string;
    totalDepthFeet: number;
    createdBy: string; //User ID
    description?: string;
}