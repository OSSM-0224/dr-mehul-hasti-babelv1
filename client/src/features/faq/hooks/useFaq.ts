import { useEffect, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/store/hooks.js";
import { fetchFaqs } from "../slice/faq.slice.js";

export function useFaq() {
  const dispatch = useAppDispatch();
  const { items, loading, error } = useAppSelector((state) => state.faq);

  const getFaqList = useCallback(() => {
    dispatch(fetchFaqs());
  }, [dispatch]);

  useEffect(() => {
    if (items.length === 0) {
      getFaqList();
    }
  }, [items.length, getFaqList]);

  return {
    faqs: items,
    loading,
    error,
    getFaqList,
  };
}
