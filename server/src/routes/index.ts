import { Router } from "express";
import { appointmentRouter } from "./appointment.routes.js";
import { contactRouter } from "./contact.routes.js";
import { staticRouter } from "./static.routes.js";

const router = Router();

router.use("/appointments", appointmentRouter);
router.use("/contact", contactRouter);
router.use("/static", staticRouter);

export { router as apiRouter };
