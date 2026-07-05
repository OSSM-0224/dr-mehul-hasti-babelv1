import { envConfig } from "./env.config.js";
import { databaseConfig } from "./database.config.js";
import { corsConfig } from "./cors.config.js";
import { serverConfig } from "./server.config.js";
import { swaggerConfig } from "./swagger.config.js";

export {
  envConfig,
  databaseConfig,
  corsConfig,
  serverConfig,
  swaggerConfig,
};

// Backward compatibility object
export const config = {
  PORT: envConfig.PORT,
  NODE_ENV: envConfig.PORT,
  APPOINTMENTS_FILE: databaseConfig.appointmentsFile,
  MESSAGES_FILE: databaseConfig.messagesFile,
  API_PREFIX: serverConfig.apiPrefix,
};
