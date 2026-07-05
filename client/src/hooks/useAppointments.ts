import { useState, useCallback } from "react";
import { appointmentApi } from "../services/api/appointment.api.js";
import { Appointment } from "../types/index.js";
import { toast } from "sonner";

export function useAppointments() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAppointments = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await appointmentApi.getAppointments();
      setAppointments(data);
    } catch (err: any) {
      setError(err.message || "Failed to fetch appointments");
    } finally {
      setIsLoading(false);
    }
  }, []);

  const cancelAppointment = useCallback(async (id: string) => {
    try {
      const result = await appointmentApi.deleteAppointment(id);
      if (result.success) {
        setAppointments((prev) => prev.filter((appt) => appt.id !== id));
        toast.success("Appointment Cancelled", {
          description: "Your scheduled slot has been removed.",
        });
        return true;
      }
      return false;
    } catch (err: any) {
      toast.error(err.message || "Failed to cancel slot.");
      return false;
    }
  }, []);

  return {
    appointments,
    setAppointments,
    isLoading,
    error,
    fetchAppointments,
    cancelAppointment,
  };
}
