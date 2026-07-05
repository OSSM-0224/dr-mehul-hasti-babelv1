import { Appointment } from "@/src/types/index.js";

export const appointmentApi = {
  getAppointments: async (): Promise<Appointment[]> => {
    const base = import.meta.env.VITE_API_URL || "https://dr-mehul-hasti-babelv1-backend.onrender.com";
    const response = await fetch(`${base}/api/appointments`);
    if (!response.ok) {
      throw new Error("Failed to fetch appointments");
    }
    return response.json();
  },

  createAppointment: async (appointment: Appointment): Promise<{ success: boolean; appointment: Appointment }> => {
    const base = import.meta.env.VITE_API_URL || "https://dr-mehul-hasti-babelv1-backend.onrender.com";
    const response = await fetch(`${base}/api/appointments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(appointment),
    });
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || "Failed to create appointment");
    }
    return response.json();
  },

  deleteAppointment: async (id: string): Promise<{ success: boolean; message: string }> => {
    const base = import.meta.env.VITE_API_URL || "https://dr-mehul-hasti-babelv1-backend.onrender.com";
    const response = await fetch(`${base}/api/appointments/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete appointment");
    }
    return response.json();
  },
};
