import { useEffect, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/store/hooks.js";
import { fetchTestimonials } from "../slice/testimonial.slice.js";

export function useTestimonials() {
  const dispatch = useAppDispatch();
  const { items, loading, error } = useAppSelector((state) => state.testimonials);

  const getTestimonialList = useCallback(() => {
    dispatch(fetchTestimonials());
  }, [dispatch]);

  useEffect(() => {
    if (items.length === 0) {
      getTestimonialList();
    }
  }, [items.length, getTestimonialList]);

  return {
    testimonials: items,
    loading,
    error,
    getTestimonialList,
  };
}
