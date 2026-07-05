import { useEffect, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/store/hooks.js";
import { fetchTechData } from "../slice/tech.slice.js";

export function useTech() {
  const dispatch = useAppDispatch();
  const { items, loading, error } = useAppSelector((state) => state.tech);

  const getTechList = useCallback(() => {
    dispatch(fetchTechData());
  }, [dispatch]);

  useEffect(() => {
    if (items.length === 0) {
      getTechList();
    }
  }, [items.length, getTechList]);

  return {
    tech: items,
    loading,
    error,
    getTechList,
  };
}
