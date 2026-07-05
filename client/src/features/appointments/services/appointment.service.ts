import { appointmentApi } from "../api/appointment.api.js";
import { Appointment } from "@/src/types/index.js";

export const appointmentService = {
  getAppointments: async (): Promise<Appointment[]> => {
    return appointmentApi.getAppointments();
  },

  createAppointment: async (appointment: Appointment): Promise<{ success: boolean; appointment: Appointment }> => {
    return appointmentApi.createAppointment(appointment);
  },

  deleteAppointment: async (id: string): Promise<{ success: boolean; message: string }> => {
    return appointmentApi.deleteAppointment(id);
  },
};
