import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { config } from "../config/config.js";
import { UserRepository } from "../repositories/user.repository.js";
import { ApiError } from "../utils/apiError.js";

export class AuthService {
  static async register({ name, email, password }) {
    const existing = await UserRepository.findByEmail(email);
    if (existing) {
      throw new ApiError(409, "Email already registered");
    }

    const hashed = await bcrypt.hash(password, 12);
    const user = await UserRepository.create({ name, email, password: hashed, role: "user" });
    return user;
  }

  static async login({ email, password }) {
    const user = await UserRepository.findByEmail(email);
    if (!user) {
      throw new ApiError(401, "Invalid credentials");
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new ApiError(401, "Invalid credentials");
    }

    return jwt.sign({ id: user.id, email: user.email, role: user.role }, config.jwtSecret, {
      expiresIn: config.jwtExpiresIn,
    });
  }
}
