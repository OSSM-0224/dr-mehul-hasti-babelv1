import * as staticData from "../database/staticData.js";

export class StaticRepository {
  static async getTreatments() {
    return staticData.TREATMENTS;
  }

  static async getTeam() {
    return staticData.TEAM;
  }

  static async getTestimonials() {
    return staticData.TESTIMONIALS;
  }

  static async getStats() {
    return staticData.STATS;
  }

  static async getFeatures() {
    return staticData.FEATURES;
  }

  static async getSteps() {
    return staticData.STEPS;
  }

  static async getBlogs() {
    return staticData.BLOGS;
  }

  static async getSmileGallery() {
    return staticData.SMILE_GALLERY;
  }

  static async getClinicBranches() {
    return staticData.CLINIC_BRANCHES;
  }

  static async getFaqs() {
    return staticData.FAQS;
  }

  static async getTechData() {
    return staticData.TECH_DATA;
  }
}
