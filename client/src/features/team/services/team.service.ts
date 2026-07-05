import { teamApi } from "../api/team.api.js";
import { TeamMember } from "@/src/types/index.js";

export const teamService = {
  getTeam: async (): Promise<TeamMember[]> => {
    return teamApi.getTeam();
  },
};
