import api from "../../../app/axios/axios.js";
import { API_ENDPOINTS } from "../../../app/axios/endpoints.js";
import { BlogPost } from "@/src/types/index.js";

export const blogApi = {
  getBlogs: async (): Promise<BlogPost[]> => {
    const response = await api.get<BlogPost[]>(API_ENDPOINTS.BLOGS);
    return response.data;
  },
};
