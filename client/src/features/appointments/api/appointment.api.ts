import api from "@/src/app/axios/axios.js";
import { Appointment } from "@/src/types/index.js";

export const appointmentApi = {
  getAppointments: async (): Promise<Appointment[]> => {
    const response = await api.get("/api/appointments");
    return response.data;
  },

  createAppointment: async (appointment: Appointment) => {
    const response = await api.post("/api/appointments", appointment);
    return response.data;
  },

  deleteAppointment: async (id: string) => {
    const response = await api.delete(`/api/appointments/${id}`);
    return response.data;
  },
};