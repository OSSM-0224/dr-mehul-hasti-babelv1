import { Router } from "express";
import { ContactController } from "../controllers/contact.controller.js";

const router = Router();

router.get("/", ContactController.list);
router.post("/", ContactController.create);

export { router as contactRouter };
