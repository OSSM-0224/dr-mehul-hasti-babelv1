import { TECHNOLOGIES } from "@/src/features/shared/constants/constants";

export function useTech() {
  return {
    tech: TECHNOLOGIES,
    loading: false,
    error: null,
    getTechList: () => {},
  };
}
