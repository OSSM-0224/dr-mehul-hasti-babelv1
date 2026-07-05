import { Request, Response } from "express";
import { StaticService } from "../services/static.service.js";

export class StaticController {
  static async getTreatments(req: Request, res: Response) {
    try {
      const data = await StaticService.getTreatments();
      res.json(data);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getTeam(req: Request, res: Response) {
    try {
      const data = await StaticService.getTeam();
      res.json(data);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getTestimonials(req: Request, res: Response) {
    try {
      const data = await StaticService.getTestimonials();
      res.json(data);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getStats(req: Request, res: Response) {
    try {
      const data = await StaticService.getStats();
      res.json(data);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getFeatures(req: Request, res: Response) {
    try {
      const data = await StaticService.getFeatures();
      res.json(data);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getSteps(req: Request, res: Response) {
    try {
      const data = await StaticService.getSteps();
      res.json(data);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getBlogs(req: Request, res: Response) {
    try {
      const data = await StaticService.getBlogs();
      res.json(data);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getSmileGallery(req: Request, res: Response) {
    try {
      const data = await StaticService.getSmileGallery();
      res.json(data);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getClinicBranches(req: Request, res: Response) {
    try {
      const data = await StaticService.getClinicBranches();
      res.json(data);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getFaqs(req: Request, res: Response) {
    try {
      const data = await StaticService.getFaqs();
      res.json(data);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getTechData(req: Request, res: Response) {
    try {
      const data = await StaticService.getTechData();
      res.json(data);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}
