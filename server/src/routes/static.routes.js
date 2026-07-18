import express from "express";
import { StaticController } from "../controllers/static.controller.js";

const router = express.Router();

router.get("/treatments", StaticController.getTreatments);
router.get("/team", StaticController.getTeam);
router.get("/testimonials", StaticController.getTestimonials);
router.get("/stats", StaticController.getStats);
router.get("/features", StaticController.getFeatures);
router.get("/steps", StaticController.getSteps);
router.get("/blogs", StaticController.getBlogs);
router.get("/smile-gallery", StaticController.getSmileGallery);
router.get("/clinic-branches", StaticController.getClinicBranches);
router.get("/faqs", StaticController.getFaqs);
router.get("/tech", StaticController.getTechData);

export default router;
