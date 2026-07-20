import axios from "axios";
import { env } from "@/config/env";
import {
  getAccessToken,
  saveAccessToken,
  removeAccessToken,
} from "@/utils/token";

const axiosInstance = axios.create({
  baseURL: env.baseURL,
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  const token = getAccessToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// --- Silent access-token refresh on 401 ---
// The backend issues a short-lived access token + an HttpOnly refresh
// cookie. When a request fails with 401, we try refreshing the access
// token once (via the refresh cookie) and retry the original request.
// Concurrent 401s while a refresh is already in flight are queued so we
// only call /refresh-token once.

let isRefreshing = false;
let pendingQueue: Array<(token: string | null) => void> = [];

const processQueue = (token: string | null) => {
  pendingQueue.forEach((callback) => callback(token));
  pendingQueue = [];
};

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    const isAuthEndpoint =
      originalRequest?.url?.includes("/login") ||
      originalRequest?.url?.includes("/register") ||
      originalRequest?.url?.includes("/refresh-token");

    if (
      error.response?.status === 401 &&
      originalRequest &&
      !originalRequest._retry &&
      !isAuthEndpoint
    ) {
      originalRequest._retry = true;

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          pendingQueue.push((token) => {
            if (token) {
              originalRequest.headers.Authorization = `Bearer ${token}`;
              resolve(axiosInstance(originalRequest));
            } else {
              reject(error);
            }
          });
        });
      }

      isRefreshing = true;

      try {
        const { data } = await axios.post(
          `${env.baseURL}/users/refresh-token`,
          {},
          { withCredentials: true }
        );

        const newToken: string | undefined = data?.data?.accessToken;

        if (!newToken) {
          throw new Error("Refresh did not return an access token.");
        }

        saveAccessToken(newToken);
        processQueue(newToken);

        originalRequest.headers.Authorization = `Bearer ${newToken}`;

        return axiosInstance(originalRequest);
      } catch (refreshError) {
        processQueue(null);
        removeAccessToken();

        if (typeof window !== "undefined") {
          window.location.href = "/login";
        }

        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
