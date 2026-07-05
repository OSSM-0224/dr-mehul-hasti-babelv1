import { blogApi } from "../api/blog.api.js";
import { BlogPost } from "@/src/types/index.js";

export const blogService = {
  getBlogs: async (): Promise<BlogPost[]> => {
    return blogApi.getBlogs();
  },
};
