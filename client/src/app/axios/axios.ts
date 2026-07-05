import axios from "axios";
import {
  requestInterceptor,
  responseInterceptor,
  errorInterceptor,
} from "./interceptors.js";


const apiInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});
console.log(import.meta.env.VITE_API_URL);
apiInstance.interceptors.request.use(requestInterceptor);
apiInstance.interceptors.response.use(responseInterceptor, errorInterceptor);


export default apiInstance;