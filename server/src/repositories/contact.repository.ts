import { readJsonFile, writeJsonFile } from "../database/jsonDb.js";
import { databaseConfig } from "../config/index.js";
import { ContactMessage } from "../types/index.js";

export class ContactRepository {
  static async getAll(): Promise<ContactMessage[]> {
    return readJsonFile<ContactMessage>(databaseConfig.messagesFile);
  }

  static async saveAll(messages: ContactMessage[]): Promise<void> {
    await writeJsonFile<ContactMessage>(databaseConfig.messagesFile, messages);
  }

  static async create(message: ContactMessage): Promise<ContactMessage> {
    const messages = await this.getAll();
    messages.push(message);
    await this.saveAll(messages);
    return message;
  }
}
