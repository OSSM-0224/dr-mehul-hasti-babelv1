import multer from "multer";
import path from "path";
import fs from "fs";
import { config } from "../config/config.js";

const storage = multer.diskStorage({
  destination(req, file, cb) {
    fs.mkdirSync(config.uploadDir, { recursive: true });
    cb(null, config.uploadDir);
  },
  filename(req, file, cb) {
    const safeName = `${Date.now()}-${file.originalname.replace(/[^a-zA-Z0-9._-]/g, "-")}`;
    cb(null, safeName);
  },
});

function fileFilter(req, file, cb) {
  if (!config.allowedUploadTypes.includes(file.mimetype)) {
    return cb(new Error("Invalid file type"), false);
  }
  cb(null, true);
}

export const uploadMiddleware = multer({
  storage,
  limits: { fileSize: config.maxUploadSizeBytes },
  fileFilter,
});
