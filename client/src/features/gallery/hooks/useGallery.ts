import { useEffect, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/store/hooks.js";
import { fetchGallery } from "../slice/gallery.slice.js";

export function useGallery() {
  const dispatch = useAppDispatch();
  const { items, loading, error } = useAppSelector((state) => state.gallery);

  const getGalleryList = useCallback(() => {
    dispatch(fetchGallery());
  }, [dispatch]);

  useEffect(() => {
    if (items.length === 0) {
      getGalleryList();
    }
  }, [items.length, getGalleryList]);

  return {
    gallery: items,
    loading,
    error,
    getGalleryList,
  };
}
