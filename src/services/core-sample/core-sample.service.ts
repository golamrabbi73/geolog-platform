import axiosInstance from "@/lib/axios";
import { API_ENDPOINTS } from "@/constants/api";

import type {
  GetCoreSamplesResponse,
  GetCoreSampleResponse,
  CreateCoreSamplePayload,
  UpdateCoreSamplePayload,
  CreateCoreSampleResponse,
  UpdateCoreSampleResponse,
  DeleteCoreSampleResponse,
} from "./core-sample.types";

// Get All
export const getAllCoreSamples = async (
  params?: Record<string, unknown>
): Promise<GetCoreSamplesResponse> => {
  const { data } =
    await axiosInstance.get<GetCoreSamplesResponse>(
      API_ENDPOINTS.CORE_SAMPLES,
      {
        params,
      }
    );

  return data;
};

// Get Single
export const getCoreSampleById = async (
  id: string
): Promise<GetCoreSampleResponse> => {
  const { data } =
    await axiosInstance.get<GetCoreSampleResponse>(
      `${API_ENDPOINTS.CORE_SAMPLES}/${id}`
    );

  return data;
};

// Create
export const createCoreSample = async (
  payload: CreateCoreSamplePayload
): Promise<CreateCoreSampleResponse> => {
  const { data } =
    await axiosInstance.post<CreateCoreSampleResponse>(
      API_ENDPOINTS.CORE_SAMPLES,
      payload
    );

  return data;
};

// Update
export const updateCoreSample = async (
  id: string,
  payload: UpdateCoreSamplePayload
): Promise<UpdateCoreSampleResponse> => {
  const { data } =
    await axiosInstance.patch<UpdateCoreSampleResponse>(
      `${API_ENDPOINTS.CORE_SAMPLES}/${id}`,
      payload
    );

  return data;
};

// Delete
export const deleteCoreSample = async (
  id: string
): Promise<DeleteCoreSampleResponse> => {
  const { data } =
    await axiosInstance.delete<DeleteCoreSampleResponse>(
      `${API_ENDPOINTS.CORE_SAMPLES}/${id}`
    );

  return data;
};