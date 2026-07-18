import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import compression from "compression";
import mongoSanitize from "express-mongo-sanitize";
import { config } from "../config/config.js";

const rateLimiter = rateLimit({
  windowMs: config.rateLimitWindowMs,
  max: config.rateLimitMax,
  standardHeaders: true,
  legacyHeaders: false,
});

const allowedOrigins = config.clientUrls;

const corsOptions = {
  origin(origin, callback) {
    // Postman, curl, mobile apps
    if (!origin) {
      return callback(null, true);
    }

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    console.error("Blocked by CORS:", origin);

    callback(new Error(`Origin ${origin} is not allowed by CORS`));
  },

  credentials: true,

  methods: [
    "GET",
    "POST",
    "PUT",
    "PATCH",
    "DELETE",
    "OPTIONS",
  ],

  allowedHeaders: [
    "Content-Type",
    "Authorization",
  ],

  optionsSuccessStatus: 200,
};

export const securityMiddleware = [
  helmet(),
  cors(corsOptions),
  compression(),
  mongoSanitize(),
  rateLimiter,
];