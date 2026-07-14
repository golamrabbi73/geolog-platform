import { CoreSample } from "@/types/sample";

export interface GetCoreSamplesResponse {
  success: boolean;
  message: string;
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
  data: CoreSample[];
}

export interface GetCoreSampleResponse {
  success: boolean;
  message: string;
  data: CoreSample;
}

export interface CreateCoreSamplePayload {
  sampleId: string;
  wellName: string;
  depthFrom: number;
  depthTo: number;
  rockType: string;
  description?: string;
}

export type UpdateCoreSamplePayload =
  Partial<CreateCoreSamplePayload>;

export interface CreateCoreSampleResponse {
  success: boolean;
  message: string;
  data: CoreSample;
}

export interface UpdateCoreSampleResponse {
  success: boolean;
  message: string;
  data: CoreSample;
}

export interface DeleteCoreSampleResponse {
  success: boolean;
  message: string;
}