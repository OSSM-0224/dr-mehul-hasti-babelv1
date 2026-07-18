import { StaticService } from "../services/static.service.js";

export class StaticController {
  static async getTreatments(req, res) {
    try {
      const data = await StaticService.getTreatments();
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getTeam(req, res) {
    try {
      const data = await StaticService.getTeam();
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getTestimonials(req, res) {
    try {
      const data = await StaticService.getTestimonials();
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getStats(req, res) {
    try {
      const data = await StaticService.getStats();
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getFeatures(req, res) {
    try {
      const data = await StaticService.getFeatures();
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getSteps(req, res) {
    try {
      const data = await StaticService.getSteps();
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getBlogs(req, res) {
    try {
      const data = await StaticService.getBlogs();
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getSmileGallery(req, res) {
    try {
      const data = await StaticService.getSmileGallery();
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getClinicBranches(req, res) {
    try {
      const data = await StaticService.getClinicBranches();
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getFaqs(req, res) {
    try {
      const data = await StaticService.getFaqs();
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getTechData(req, res) {
    try {
      const data = await StaticService.getTechData();
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
