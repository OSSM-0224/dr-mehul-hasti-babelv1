import { useEffect, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/store/hooks.js";
import { fetchBranches } from "../slice/about.slice.js";

export function useAbout() {
  const dispatch = useAppDispatch();
  const { branches, loading, error } = useAppSelector((state) => state.about);

  const getBranchesList = useCallback(() => {
    dispatch(fetchBranches());
  }, [dispatch]);

  useEffect(() => {
    if (branches.length === 0) {
      getBranchesList();
    }
  }, [branches.length, getBranchesList]);

  return {
    branches,
    loading,
    error,
    getBranchesList,
  };
}
