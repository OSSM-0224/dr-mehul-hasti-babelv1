import api from "../../../app/axios/axios.js";
import { API_ENDPOINTS } from "../../../app/axios/endpoints.js";

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export const faqApi = {
  getFaqs: async (): Promise<FAQItem[]> => {
    const response = await api.get<FAQItem[]>(API_ENDPOINTS.FAQS);
    return response.data;
  },
};
