import { TEAM } from "@/src/features/shared/constants/constants";

export function useTeam() {
  return {
    team: TEAM,
    loading: false,
    error: null,
    getTeamList: () => {},
  };
}
