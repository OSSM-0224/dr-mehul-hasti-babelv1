import { envConfig } from "./env.config.js";

export const serverConfig = {
  port: envConfig.PORT,
  nodeEnv: envConfig.NODE_ENV,
  apiPrefix: "/api",
};
