import mongoose from "mongoose";
import { config } from "./config.js";
import { logger } from "../utils/logger.js";

mongoose.set("strictQuery", true);

export async function connectDatabase() {
  if (!config.mongoUri) {
    logger.error(
      "MONGODB_URI is not defined. Set the environment variable and restart the server.",
    );
    process.exit(1);
  }
  mongoose.connection.on("connected", () => {
    logger.info("MongoDB Atlas connected successfully");
  });
  mongoose.connection.on("reconnected", () => {
    logger.info("MongoDB Atlas reconnected");
  });
  mongoose.connection.on("disconnected", () => {
    logger.warn("MongoDB connection disconnected");
  });
  mongoose.connection.on("error", (error) => {
    logger.error("MongoDB connection error:", error.message);
  });
  try {
    await mongoose.connect(config.mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoIndex: true,
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 45000,
      family: 4,
    });
  } catch (error) {
    logger.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
}
