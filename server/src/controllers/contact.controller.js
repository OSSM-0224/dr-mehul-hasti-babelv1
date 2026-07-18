import { ContactService } from "../services/contact.service.js";
import { validateContact } from "../validators/contact.validator.js";

export class ContactController {
  static async submit(req, res, next) {
    try {
      const data = validateContact(req.body);
      const msg = await ContactService.saveMessage(data);
      res.status(201).json({
        success: true,
        message: msg,
      });
    } catch (error) {
      next(error);
    }
  }
}
