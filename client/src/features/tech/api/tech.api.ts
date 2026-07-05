import api from "../../../app/axios/axios.js";
import { API_ENDPOINTS } from "../../../app/axios/endpoints.js";

export interface TechItem {
  id: number;
  title: string;
  specs: string;
  clinicalUse: string;
  imageUrl: string;
}

export const techApi = {
  getTechData: async (): Promise<TechItem[]> => {
    const response = await api.get<TechItem[]>(API_ENDPOINTS.TECHNOLOGY);
    return response.data;
  },
};
