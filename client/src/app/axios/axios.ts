import axios from "axios";
import {
  requestInterceptor,
  responseInterceptor,
  errorInterceptor,
} from "./interceptors.js";

const apiBaseUrl =
  import.meta.env.VITE_API_URL || "https://dr-mehul-hasti-babelv1.vercel.app";

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