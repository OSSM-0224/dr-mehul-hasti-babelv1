import jwt from "jsonwebtoken";
import { config } from "../config/config.js";

export function authenticate(req, res, next) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ success: false, error: "Authentication required" });
    }

    const token = authHeader.split(" ")[1];
    const payload = jwt.verify(token, config.jwtSecret);
    req.user = payload;
    next();
  } catch (error) {
    return res.status(401).json({ success: false, error: "Invalid or expired token" });
  }
}

export function authorize(role) {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(403).json({ success: false, error: "Forbidden" });
    }
    if (role && req.user.role !== role) {
      return res.status(403).json({ success: false, error: "Access denied" });
    }
    next();
  };
}
