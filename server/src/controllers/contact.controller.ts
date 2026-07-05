import { Request, Response } from "express";
import { ContactService } from "../services/contact.service.js";
import { createContactSchema } from "../validators/contact.validator.js";

export class ContactController {
  static async list(req: Request, res: Response) {
    try {
      const messages = await ContactService.getMessages();
      return res.json(messages);
    } catch (error) {
      return res.status(500).json({ error: "Failed to read messages" });
    }
  }

  static async create(req: Request, res: Response) {
    try {
      const parseResult = createContactSchema.safeParse(req.body);
      if (!parseResult.success) {
        return res.status(400).json({ error: parseResult.error.issues[0].message });
      }

      const newMessage = await ContactService.submitMessage(parseResult.data);
      return res.status(201).json({ success: true, message: newMessage });
    } catch (error) {
      return res.status(500).json({ error: "Failed to send message" });
    }
  }
}
