import { createApp } from "./src/app.js";
import { serverConfig } from "./src/config/index.js";

async function bootstrap() {
  const app = await createApp();
  
  app.listen(serverConfig.port, "0.0.0.0", () => {
    console.log(
      `[Server] Unique Dental Care running on http://localhost:${serverConfig.port} in ${serverConfig.nodeEnv} mode`
    );
  });
}

bootstrap().catch((err) => {
  console.error("[Server] Critical failure during startup:", err);
  process.exit(1);
});
