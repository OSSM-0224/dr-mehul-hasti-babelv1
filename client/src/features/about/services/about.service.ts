import { aboutApi } from "../api/about.api.js";
import { Branch } from "@/src/types/index.js";

export const aboutService = {
  getBranches: async (): Promise<Branch[]> => {
    return aboutApi.getBranches();
  },
};
