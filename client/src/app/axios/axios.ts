import axios from "axios";
import {
  requestInterceptor,
  responseInterceptor,
  errorInterceptor,
} from "./interceptors.js";

const apiBaseUrl =
  import.meta.env.VITE_API_URL || "http://localhost:3000";

const apiInstance = axios.create({
  baseURL: apiBaseUrl,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiInstance.interceptors.request.use(requestInterceptor);
apiInstance.interceptors.response.use(responseInterceptor, errorInterceptor);

export default apiInstance;