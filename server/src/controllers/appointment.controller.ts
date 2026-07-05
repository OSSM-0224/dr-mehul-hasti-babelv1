import { Request, Response } from "express";
import { AppointmentService } from "../services/appointment.service.js";
import { createAppointmentSchema } from "../validators/appointment.validator.js";

export class AppointmentController {
  static async list(req: Request, res: Response) {
    try {
      const appointments = await AppointmentService.getAppointments();
      return res.json(appointments);
    } catch (error) {
      return res.status(500).json({ error: "Failed to read appointments" });
    }
  }

  static async create(req: Request, res: Response) {
    try {
      const parseResult = createAppointmentSchema.safeParse(req.body);
      if (!parseResult.success) {
        return res.status(400).json({ error: parseResult.error.issues[0].message });
      }

      const newAppt = await AppointmentService.bookAppointment(parseResult.data);
      return res.status(201).json({ success: true, appointment: newAppt });
    } catch (error) {
      return res.status(500).json({ error: "Failed to create appointment" });
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ error: "Appointment ID is required" });
      }

      const success = await AppointmentService.cancelAppointment(id);
      if (!success) {
        return res.status(404).json({ error: "Appointment not found" });
      }

      return res.json({ success: true, message: "Appointment cancelled successfully" });
    } catch (error) {
      return res.status(500).json({ error: "Failed to delete appointment" });
    }
  }
}
