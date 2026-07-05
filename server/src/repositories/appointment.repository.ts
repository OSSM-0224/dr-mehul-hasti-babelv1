import { readJsonFile, writeJsonFile } from "../database/jsonDb.js";
import { databaseConfig } from "../config/index.js";
import { Appointment } from "../types/index.js";

export class AppointmentRepository {
  static async getAll(): Promise<Appointment[]> {
    return readJsonFile<Appointment>(databaseConfig.appointmentsFile);
  }

  static async saveAll(appointments: Appointment[]): Promise<void> {
    await writeJsonFile<Appointment>(databaseConfig.appointmentsFile, appointments);
  }

  static async create(appointment: Appointment): Promise<Appointment> {
    const appointments = await this.getAll();
    appointments.push(appointment);
    await this.saveAll(appointments);
    return appointment;
  }

  static async deleteById(id: string): Promise<boolean> {
    const appointments = await this.getAll();
    const exists = appointments.some((appt) => appt.id === id);
    if (!exists) return false;

    const filtered = appointments.filter((appt) => appt.id !== id);
    await this.saveAll(filtered);
    return true;
  }
}
