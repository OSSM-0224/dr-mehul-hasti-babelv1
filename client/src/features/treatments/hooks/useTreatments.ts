import { TREATMENTS } from "@/src/features/shared/constants/constants";

export function useTreatments() {
  return {
    treatments: TREATMENTS,
    loading: false,
    error: null,
    getTreatmentsList: () => {},
  };
}
