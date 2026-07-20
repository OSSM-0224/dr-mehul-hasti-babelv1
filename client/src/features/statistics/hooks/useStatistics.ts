import { STATS } from "@/src/features/shared/constants/constants";

export function useStatistics() {
  return {
    statistics: STATS,
    loading: false,
    error: null,
    getStatisticsList: () => {},
  };
}
