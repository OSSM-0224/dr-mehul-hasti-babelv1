import express from "express";
import authRouter from "./auth.routes.js";
import appointmentsRouter from "./appointments.routes.js";
import contactRouter from "./contact.routes.js";
import staticRouter from "./static.routes.js";

const router = express.Router();

router.use("/auth", authRouter);
router.use("/appointments", appointmentsRouter);
router.use("/contact", contactRouter);
router.use("/static", staticRouter);

export default router;
