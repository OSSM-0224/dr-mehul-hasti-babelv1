import { MessageRepository } from "../repositories/message.repository.js";
import { ApiError } from "../utils/apiError.js";

export class MessageService {
  static async create(input) {
    if (!input.name || !input.message) {
      throw new ApiError(400, "Name and message are required");
    }
    return MessageRepository.create({
      ...input,
      createdAt: new Date(),
    });
  }
}
