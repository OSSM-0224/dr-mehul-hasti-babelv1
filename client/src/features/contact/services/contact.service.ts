import { contactApi } from "../api/contact.api.js";
import { ContactMessage } from "@/src/types/index.js";

export const contactService = {
  submitMessage: async (message: ContactMessage): Promise<{ success: boolean; message: ContactMessage }> => {
    return contactApi.submitMessage(message);
  },
};
