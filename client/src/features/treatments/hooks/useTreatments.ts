import { useEffect, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/store/hooks.js";
import { fetchTreatments } from "../slice/treatment.slice.js";

export function useTreatments() {
  const dispatch = useAppDispatch();
  const { items, loading, error } = useAppSelector((state) => state.treatments);

  const getTreatmentsList = useCallback(() => {
    dispatch(fetchTreatments());
  }, [dispatch]);

  useEffect(() => {
    if (items.length === 0) {
      getTreatmentsList();
    }
  }, [items.length, getTreatmentsList]);

  return {
    treatments: items,
    loading,
    error,
    getTreatmentsList,
  };
}
