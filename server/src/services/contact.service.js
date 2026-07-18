import { ContactRepository } from "../repositories/contact.repository.js";

export class ContactService {
  static async saveMessage(data) {

    return ContactRepository.create(data);
  }
}
