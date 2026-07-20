import { BLOGS } from "@/src/features/shared/constants/constants";

export function useBlog() {
  return {
    blogs: BLOGS,
    loading: false,
    error: null,
    getBlogList: () => {},
  };
}
