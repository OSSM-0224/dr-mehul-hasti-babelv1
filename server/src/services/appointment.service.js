import { AppointmentRepository } from "../repositories/appointment.repository.js";
import { ApiError } from "../utils/apiError.js";

export class AppointmentService {
  static async list() {
    return AppointmentRepository.list();
  }

  static async create(input) {
    if (!input.name) throw new ApiError(400, "Name is required");
    return AppointmentRepository.create({
      ...input,
      createdAt: new Date(),
    });
  }

  static async remove(id) {
    const removed = await AppointmentRepository.removeById(id);
    if (!removed) throw new ApiError(404, "Appointment not found");
    return removed;
  }
}

