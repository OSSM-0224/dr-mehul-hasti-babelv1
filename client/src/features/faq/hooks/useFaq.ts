import { FAQS } from "@/src/features/shared/constants/constants";

export function useFaq() {
  return {
    faqs: FAQS,
    loading: false,
    error: null,
    getFaqList: () => {},
  };
}
