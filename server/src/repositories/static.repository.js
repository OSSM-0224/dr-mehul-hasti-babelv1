import { JsonDb } from "../database/jsonDb.js";

export class StaticRepository {
  static async getTreatments() {
    const db = new JsonDb();
    return db.read("treatments");
  }

  static async getTeam() {
    const db = new JsonDb();
    return db.read("team");
  }

  static async getTestimonials() {
    const db = new JsonDb();
    return db.read("testimonials");
  }

  static async getStats() {
    const db = new JsonDb();
    return db.read("stats");
  }

  static async getFeatures() {
    const db = new JsonDb();
    return db.read("features");
  }

  static async getSteps() {
    const db = new JsonDb();
    return db.read("steps");
  }

  static async getBlogs() {
    const db = new JsonDb();
    return db.read("blogs");
  }

  static async getSmileGallery() {
    const db = new JsonDb();
    return db.read("smileGallery");
  }

  static async getClinicBranches() {
    const db = new JsonDb();
    return db.read("clinicBranches");
  }

  static async getFaqs() {
    const db = new JsonDb();
    return db.read("faqs");
  }

  static async getTechData() {
    const db = new JsonDb();
    return db.read("techData");
  }
}

