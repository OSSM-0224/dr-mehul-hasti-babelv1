import { ContactRepository } from "../repositories/contact.repository.js";
import { ContactMessage } from "../types/index.js";
import { CreateContactInput } from "../validators/contact.validator.js";

export class ContactService {
  static async getMessages(): Promise<ContactMessage[]> {
    return ContactRepository.getAll();
  }

  static async submitMessage(input: CreateContactInput): Promise<ContactMessage> {
    const newMessage: ContactMessage = {
      id: "msg_" + Date.now() + "_" + Math.floor(Math.random() * 1000),
      name: input.name,
      email: input.email,
      phone: input.phone || "",
      subject: input.subject || "No Subject",
      branch: input.branch || "Mankhurd",
      message: input.message || "",
      createdAt: new Date().toISOString(),
    };

    return ContactRepository.create(newMessage);
  }
}
