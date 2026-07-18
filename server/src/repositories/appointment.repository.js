import { Appointment } from "../models/Appointment.js";

export class AppointmentRepository {
  static async list() {
    return Appointment.find().lean();
  }

  static async create(data) {
    const appointment = new Appointment(data);
    await appointment.save();
    return appointment.toObject();
  }

  static async removeById(id) {
    const result = await Appointment.findByIdAndDelete(id);
    return Boolean(result);
  }
}

