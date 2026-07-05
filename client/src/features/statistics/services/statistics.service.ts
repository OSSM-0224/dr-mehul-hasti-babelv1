import { statisticsApi } from "../api/statistics.api.js";
import { StatItem } from "@/src/types/index.js";

export const statisticsService = {
  getStatistics: async (): Promise<StatItem[]> => {
    return statisticsApi.getStatistics();
  },
};
