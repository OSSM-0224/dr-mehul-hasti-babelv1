import { techApi, TechItem } from "../api/tech.api.js";

export const techService = {
  getTechData: async (): Promise<TechItem[]> => {
    return techApi.getTechData();
  },
};
