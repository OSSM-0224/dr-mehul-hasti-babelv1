import { Router } from "express";
import { StaticController } from "../controllers/static.controller.js";

const router = Router();

router.get("/treatments", StaticController.getTreatments);
router.get("/team", StaticController.getTeam);
router.get("/testimonials", StaticController.getTestimonials);
router.get("/statistics", StaticController.getStats);
router.get("/features", StaticController.getFeatures);
router.get("/steps", StaticController.getSteps);
router.get("/blogs", StaticController.getBlogs);
router.get("/gallery", StaticController.getSmileGallery);
router.get("/branches", StaticController.getClinicBranches);
router.get("/faqs", StaticController.getFaqs);
router.get("/technology", StaticController.getTechData);

export { router as staticRouter };
