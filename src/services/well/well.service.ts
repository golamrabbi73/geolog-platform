import axiosInstance from "@/lib/axios";
import { API_ENDPOINTS } from "@/constants/api";

import type {
  GetWellsResponse,
  GetWellResponse,
  CreateWellPayload,
  UpdateWellPayload,
  CreateWellResponse,
  UpdateWellResponse,
  DeleteWellResponse,
} from "./well.types";

// Get All Wells
export const getAllWells = async (
  params?: {
    searchTerm?: string;
    status?: string;
  }
): Promise<GetWellsResponse> => {
  const { data } = await axiosInstance.get<GetWellsResponse>(
    API_ENDPOINTS.WELLS,
    {
      params,
    }
  );

  return data;
};

// Get My Wells
export const getMyWells = async (): Promise<GetWellsResponse> => {
  const { data } = await axiosInstance.get<GetWellsResponse>(
    `${API_ENDPOINTS.WELLS}/my-wells`
  );

  return data;
};

// Get Single Well (Future)
export const getWellById = async (
  id: string
): Promise<GetWellResponse> => {
  const { data } = await axiosInstance.get<GetWellResponse>(
    `${API_ENDPOINTS.WELLS}/${id}`
  );

  return data;
};

// Create Well
export const createWell = async (
  payload: CreateWellPayload
): Promise<CreateWellResponse> => {
  const { data } = await axiosInstance.post<CreateWellResponse>(
    API_ENDPOINTS.WELLS,
    payload
  );

  return data;
};

// Update Well
export const updateWell = async (
  id: string,
  payload: UpdateWellPayload
): Promise<UpdateWellResponse> => {
  const { data } = await axiosInstance.patch<UpdateWellResponse>(
    `${API_ENDPOINTS.WELLS}/${id}`,
    payload
  );

  return data;
};

// Delete Well
export const deleteWell = async (
  id: string
): Promise<DeleteWellResponse> => {
  const { data } = await axiosInstance.delete<DeleteWellResponse>(
    `${API_ENDPOINTS.WELLS}/${id}`
  );

  return data;
};