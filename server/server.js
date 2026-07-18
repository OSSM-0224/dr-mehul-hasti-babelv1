import "dotenv/config";
import app from "./src/app.js";
import { connectDatabase } from "./src/config/db.js";
import { config } from "./src/config/config.js";
import { logger } from "./src/utils/logger.js";

const PORT = config.port;

async function startServer() {
  await connectDatabase();

  const server = app.listen(PORT, () => {
    logger.info(`Unique Dental Care running on http://localhost:${PORT} in ${config.env} mode`);
  });

  server.on("error", (error) => {
    logger.error("Server startup failed:", error.message);
    process.exit(1);
  });
}

startServer().catch((error) => {
  logger.error("Server initialization failed:", error.message);
  process.exit(1);
});
 
