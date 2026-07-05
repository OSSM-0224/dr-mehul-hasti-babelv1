import { AppointmentRepository } from "../repositories/appointment.repository.js";
import { Appointment } from "../types/index.js";
import { CreateAppointmentInput } from "../validators/appointment.validator.js";

export class AppointmentService {
  static async getAppointments(): Promise<Appointment[]> {
    return AppointmentRepository.getAll();
  }

  static async bookAppointment(input: CreateAppointmentInput): Promise<Appointment> {
    const newAppointment: Appointment = {
      id: "appt_" + Date.now() + "_" + Math.floor(Math.random() * 1000),
      name: input.name,
      email: input.email || "",
      phone: input.phone,
      date: input.date,
      timeSlot: input.timeSlot,
      treatmentId: Number(input.treatmentId),
      notes: input.notes || "",
      createdAt: new Date().toISOString(),
    };

    return AppointmentRepository.create(newAppointment);
  }

  static async cancelAppointment(id: string): Promise<boolean> {
    return AppointmentRepository.deleteById(id);
  }
}
