import { useEffect, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/store/hooks.js";
import {
  fetchAppointments,
  createAppointment as createAction,
  deleteAppointment as deleteAction,
  resetSubmitSuccess,
} from "../slice/appointment.slice.js";
import { Appointment } from "@/src/types/index.js";

export function useAppointments() {
  const dispatch = useAppDispatch();
  const { items, loading, error, submitSuccess } = useAppSelector((state) => state.appointments);

  const getAppointmentsList = useCallback(() => {
    dispatch(fetchAppointments());
  }, [dispatch]);

  const scheduleAppointment = useCallback(
    async (appointment: Appointment) => {
      return dispatch(createAction(appointment)).unwrap();
    },
    [dispatch]
  );

  const cancelAppointment = useCallback(
    async (id: string) => {
      return dispatch(deleteAction(id)).unwrap();
    },
    [dispatch]
  );

  const clearSuccess = useCallback(() => {
    dispatch(resetSubmitSuccess());
  }, [dispatch]);

  return {
    appointments: items,
    loading,
    error,
    submitSuccess,
    getAppointmentsList,
    scheduleAppointment,
    cancelAppointment,
    clearSuccess,
  };
}
