import type { ApiResponse } from "@/types/api";
import type { Well } from "@/types/well";

export type GetWellsResponse =
  ApiResponse<Well[]>;

export type GetWellResponse =
  ApiResponse<Well>;

export type CreateWellPayload =
  Omit<Well, "_id" | "createdAt" | "updatedAt" | "createdBy">;

export type UpdateWellPayload =
  Partial<CreateWellPayload>;

export type CreateWellResponse =
  ApiResponse<Well>;

export type UpdateWellResponse =
  ApiResponse<Well>;

export type DeleteWellResponse =
  ApiResponse<null>;