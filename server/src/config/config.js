import { url } from "inspector";
import path from "path";

const ROOT = process.cwd();

export const config = {
  env: process.env.NODE_ENV || "development",
  port: Number(process.env.PORT || 3000),
  jwtSecret: process.env.JWT_SECRET || "ChangeThisSecretToAStrongLongValue",
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || "2h",
  clientUrl: (process.env.CLIENT_URL || "http://localhost:5173")
    .split(",")
    .map((url) => url.trim),
  rateLimitWindowMs: 15 * 60 * 1000,
  rateLimitMax: 100,
  uploadDir: path.join(ROOT, "server", "uploads"),
  allowedUploadTypes: [
    "image/jpeg",
    "image/png",
    "image/webp",
    "application/pdf",
  ],
  maxUploadSizeBytes: 5 * 1024 * 1024,
  mongoUri: process.env.MONGODB_URI,
};
