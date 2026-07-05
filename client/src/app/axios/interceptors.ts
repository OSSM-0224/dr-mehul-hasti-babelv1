import { InternalAxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

// Request interceptor to add authorization tokens (JWT ready)
export const requestInterceptor = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  const token = localStorage.getItem("token");
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
};

// Response interceptor
export const responseInterceptor = (response: AxiosResponse): AxiosResponse => {
  return response;
};

// Error interceptor with token refresh placeholder
export const errorInterceptor = async (error: AxiosError): Promise<never> => {
  const originalRequest = error.config;
  
  if (error.response?.status === 401 && originalRequest) {
    // JWT token refresh placeholder logic
    console.warn("[Axios Interceptor] Unauthorized, token refresh required");
  }
  
  return Promise.reject(error);
};
