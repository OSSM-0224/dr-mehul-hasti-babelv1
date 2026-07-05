import { StaticRepository } from "../repositories/static.repository.js";

export class StaticService {
  static async getTreatments() {
    return StaticRepository.getTreatments();
  }

  static async getTeam() {
    return StaticRepository.getTeam();
  }

  static async getTestimonials() {
    return StaticRepository.getTestimonials();
  }

  static async getStats() {
    return StaticRepository.getStats();
  }

  static async getFeatures() {
    return StaticRepository.getFeatures();
  }

  static async getSteps() {
    return StaticRepository.getSteps();
  }

  static async getBlogs() {
    return StaticRepository.getBlogs();
  }

  static async getSmileGallery() {
    return StaticRepository.getSmileGallery();
  }

  static async getClinicBranches() {
    return StaticRepository.getClinicBranches();
  }

  static async getFaqs() {
    return StaticRepository.getFaqs();
  }

  static async getTechData() {
    return StaticRepository.getTechData();
  }
}
