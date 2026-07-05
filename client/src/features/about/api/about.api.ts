import api from "../../../app/axios/axios.js";
import { API_ENDPOINTS } from "../../../app/axios/endpoints.js";
import { Branch } from "@/src/types/index.js";

export const aboutApi = {
  getBranches: async (): Promise<Branch[]> => {
    const response = await api.get<Branch[]>(API_ENDPOINTS.BRANCHES);
    return response.data;
  },
};
