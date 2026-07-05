import { faqApi, FAQItem } from "../api/faq.api.js";

export const faqService = {
  getFaqs: async (): Promise<FAQItem[]> => {
    return faqApi.getFaqs();
  },
};
