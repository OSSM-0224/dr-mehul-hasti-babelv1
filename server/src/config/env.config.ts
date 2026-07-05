import dotenv from "dotenv";
dotenv.config();

export const envConfig = {
  PORT: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000,
  NODE_ENV: process.env.NODE_ENV || "development",
  MONGODB_URI: process.env.MONGODB_URI || "",
  CLIENT_URL: process.env.CLIENT_URL || "https://dr-mehul-hasti-babelv1.vercel.app",
};
