import { treatmentApi } from "../api/treatment.api.js";
import { Treatment } from "@/src/types/index.js";

export const treatmentService = {
  getTreatments: async (): Promise<Treatment[]> => {
    return treatmentApi.getTreatments();
  },
};
