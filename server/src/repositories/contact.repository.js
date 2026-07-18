import { Message } from "../models/Message.js";

export class ContactRepository {
  static async create(data) {
    console.log("Saving message:", data);
    const saved = await Message.create(data);
    console.log("Saved message:", saved);

    return saved;
  }
}
