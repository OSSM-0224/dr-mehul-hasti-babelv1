import { useEffect, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/store/hooks.js";
import { fetchBlogs } from "../slice/blog.slice.js";

export function useBlog() {
  const dispatch = useAppDispatch();
  const { items, loading, error } = useAppSelector((state) => state.blog);

  const getBlogList = useCallback(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  useEffect(() => {
    if (items.length === 0) {
      getBlogList();
    }
  }, [items.length, getBlogList]);

  return {
    blogs: items,
    loading,
    error,
    getBlogList,
  };
}
