import { AppointmentService } from "../services/appointment.service.js";
import { validateAppointment } from "../validators/appointment.validator.js";

export class AppointmentController {
  static async list(req, res, next) {
    try {
      const appointments = await AppointmentService.list();
      res.json(appointments);
    } catch (error) {
      next(error);
    }
  }

  static async create(req, res, next) {
    try {
      const data = validateAppointment(req.body);
      const appointment = await AppointmentService.create(data);
      res.status(201).json({ success: true, appointment });
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      await AppointmentService.remove(req.params.id);
      res.json({
        success: true,
        message: "Appointment cancelled successfully",
      });
    } catch (error) {
      next(error);
    }
  }
}
