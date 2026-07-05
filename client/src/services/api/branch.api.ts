import { Branch } from "@/src/types/index.js";
import { CLINIC_BRANCHES } from "@/src/features/shared/constants/constants.js";

export const branchApi = {
  getBranches: async (): Promise<Branch[]> => {
    return Promise.resolve(CLINIC_BRANCHES);
  },
};
