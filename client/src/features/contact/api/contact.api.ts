import api from "../../../app/axios/axios.js";
import { API_ENDPOINTS } from "../../../app/axios/endpoints.js";
import { ContactMessage } from "@/src/types/index.js";

export const contactApi = {
  submitMessage: async (message: ContactMessage): Promise<{ success: boolean; message: ContactMessage }> => {
    const response = await api.post<{ success: boolean; message: ContactMessage }>(
      API_ENDPOINTS.CONTACT,
      message
    );
    return response.data;
  },
};
