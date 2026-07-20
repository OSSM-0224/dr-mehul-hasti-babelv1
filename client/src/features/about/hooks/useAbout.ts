import { CLINIC_BRANCHES } from "@/src/features/shared/constants/constants";

export function useAbout() {
  return {
    branches: CLINIC_BRANCHES,
    loading: false,
    error: null,
    getBranchesList: () => {},
  };
}
