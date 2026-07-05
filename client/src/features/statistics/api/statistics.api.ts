import api from "../../../app/axios/axios.js";
import { API_ENDPOINTS } from "../../../app/axios/endpoints.js";
import { StatItem } from "@/src/types/index.js";

export const statisticsApi = {
  getStatistics: async (): Promise<any> => {
    const response = await api.get(API_ENDPOINTS.STATISTICS);

    console.log("===== API RESPONSE =====");
    console.log(response.data);
    console.log("========================");

    return response.data;
  },
};