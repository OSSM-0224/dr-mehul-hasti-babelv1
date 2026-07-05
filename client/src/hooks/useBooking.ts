import { useState } from "react";
import { appointmentApi } from "../services/api/appointment.api.js";
import { Appointment } from "../types/index.js";
import { toast } from "sonner";

export function useBooking(onSuccess?: () => void) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const book = async (appointment: Appointment) => {
    setIsSubmitting(true);
    setError(null);
    try {
      const result = await appointmentApi.createAppointment(appointment);
      if (result.success) {
        toast.success("Appointment Confirmed!", {
          description: "Your digital scan consultation slot is secured.",
        });
        if (onSuccess) onSuccess();
        return { success: true, appointment: result.appointment };
      }
      return { success: false, error: "Booking failed" };
    } catch (err: any) {
      const msg = err.message || "Failed to confirm booking";
      setError(msg);
      toast.error(msg);
      return { success: false, error: msg };
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    book,
    isSubmitting,
    error,
  };
}
