import { Router } from "express";
import { AppointmentController } from "../controllers/appointment.controller.js";

const router = Router();

router.get("/", AppointmentController.list);
router.post("/", AppointmentController.create);
router.delete("/:id", AppointmentController.delete);

export { router as appointmentRouter };
