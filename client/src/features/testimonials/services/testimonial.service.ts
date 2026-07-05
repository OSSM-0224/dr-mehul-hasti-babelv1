import { testimonialApi } from "../api/testimonial.api.js";
import { Testimonial } from "@/src/types/index.js";

export const testimonialService = {
  getTestimonials: async (): Promise<Testimonial[]> => {
    return testimonialApi.getTestimonials();
  },
};
