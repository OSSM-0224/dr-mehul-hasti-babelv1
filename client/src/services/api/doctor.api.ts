import { Doctor } from "@/src/types/index.js";
import { TEAM_MEMBERS } from "@/src/features/shared/constants/constants.js";

export const doctorApi = {
  getDoctors: async (): Promise<Doctor[]> => {
    // Returns local constant doctors. Easily swappable to real API later.
    return Promise.resolve(TEAM_MEMBERS);
  },
};
