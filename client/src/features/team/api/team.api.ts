import api from "../../../app/axios/axios.js";
import { API_ENDPOINTS } from "../../../app/axios/endpoints.js";
import { TeamMember } from "@/src/types/index.js";

export const teamApi = {
  getTeam: async (): Promise<TeamMember[]> => {
    const response = await api.get<TeamMember[]>(API_ENDPOINTS.TEAM);
    return response.data;
  },
};
