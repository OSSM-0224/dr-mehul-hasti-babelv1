import { TESTIMONIALS } from "@/src/features/shared/constants/constants";

export function useTestimonials() {
  return {
    testimonials: TESTIMONIALS,
    loading: false,
    error: null,
    getTestimonialList: () => {},
  };
}
