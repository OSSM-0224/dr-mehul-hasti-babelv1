import { useEffect, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/store/hooks.js";
import { fetchStatistics } from "../slice/statistics.slice.js";

export function useStatistics() {
  const dispatch = useAppDispatch();
  const { items, loading, error } = useAppSelector((state) => state.statistics);

  const getStatisticsList = useCallback(() => {
    dispatch(fetchStatistics());
  }, [dispatch]);

  useEffect(() => {
    if (items.length === 0) {
      getStatisticsList();
    }
  }, [items.length, getStatisticsList]);

  return {
    statistics: items,
    loading,
    error,
    getStatisticsList,
  };
}
