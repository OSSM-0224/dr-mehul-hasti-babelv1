import { AuthService } from "../services/auth.service.js";

export class AuthController {
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const token = await AuthService.login({ email, password });
      res.status(200).json({ success: true, token });
    } catch (error) {
      next(error);
    }
  }

  static async register(req, res, next) {
    try {
      const { name, email, password } = req.body;
      const user = await AuthService.register({ name, email, password });
      res.status(201).json({ success: true, user: { id: user.id, name: user.name, email: user.email } });
    } catch (error) {
      next(error);
    }
  }
}
