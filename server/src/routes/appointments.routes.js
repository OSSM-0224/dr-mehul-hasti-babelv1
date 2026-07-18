import express from "express";
import { AppointmentController } from "../controllers/appointment.controller.js";

const router = express.Router();

router.get("/", AppointmentController.list);
router.post("/", AppointmentController.create);
router.delete("/:id", AppointmentController.delete);

export default router;
