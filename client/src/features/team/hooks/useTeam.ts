import { useEffect, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/store/hooks.js";
import { fetchTeam } from "../slice/team.slice.js";

export function useTeam() {
  const dispatch = useAppDispatch();
  const { items, loading, error } = useAppSelector((state) => state.team);

  const getTeamList = useCallback(() => {
    dispatch(fetchTeam());
  }, [dispatch]);

  useEffect(() => {
    if (items.length === 0) {
      getTeamList();
    }
  }, [items.length, getTeamList]);

  return {
    team: items,
    loading,
    error,
    getTeamList,
  };
}
