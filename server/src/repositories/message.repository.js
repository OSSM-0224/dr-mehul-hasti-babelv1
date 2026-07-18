import { Message } from "../models/Message.js";

export class MessageRepository {
  static async create(data) {
    const message = new Message(data);
    await message.save();
    return message.toObject();
  }
}
