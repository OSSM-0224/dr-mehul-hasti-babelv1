import api from "../../../app/axios/axios.js";
import { API_ENDPOINTS } from "../../../app/axios/endpoints.js";
import { Testimonial } from "@/src/types/index.js";

export const testimonialApi = {
  getTestimonials: async (): Promise<Testimonial[]> => {
    const response = await api.get<Testimonial[]>(API_ENDPOINTS.TESTIMONIALS);
    return response.data;
  },
};
