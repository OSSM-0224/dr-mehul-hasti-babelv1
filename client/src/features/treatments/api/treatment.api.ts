import api from "../../../app/axios/axios.js";
import { API_ENDPOINTS } from "../../../app/axios/endpoints.js";
import { Treatment } from "@/src/types/index.js";

export const treatmentApi = {
  getTreatments: async (): Promise<Treatment[]> => {
    const response = await api.get<Treatment[]>(API_ENDPOINTS.TREATMENTS);
    return response.data;
  },
};
