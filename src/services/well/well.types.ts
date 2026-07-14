import type { ApiResponse } from "@/types/api";
import type { Well, WellStatus } from "@/types/well";

export type GetWellsResponse = ApiResponse<Well[]>;

export type GetWellResponse = ApiResponse<Well>;

export interface CreateWellPayload {
  wellName: string;
  location: string;
  operator: string;
  depth: number;
  status: WellStatus;
  description?: string;
}

export type UpdateWellPayload =
  Partial<CreateWellPayload>;

export type CreateWellResponse =
  ApiResponse<Well>;

export type UpdateWellResponse =
  ApiResponse<Well>;

export type DeleteWellResponse =
  ApiResponse<null>;