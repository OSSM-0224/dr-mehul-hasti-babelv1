import express from "express";
import path from "path";
import cors from "cors";
import { createServer as createViteServer } from "vite";
import { initDatabase } from "./database/jsonDb.js";
import { apiRouter } from "./routes/index.js";
import { envConfig, serverConfig } from "./config/index.js";

export async function createApp() {
  const app = express();
  app.use(express.json());

  const allowedOrigins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    envConfig.CLIENT_URL,
    "https://dr-mehul-hasti-babelv1-backend.onrender.com",
  ].filter(Boolean) as string[];

  app.use(cors({
    origin: allowedOrigins,
    credentials: true,
  }))

  // Initialize flat file JSON database tables
  await initDatabase();

  // Attach Layered API Routes under prefix (e.g. /api)
  app.use(serverConfig.apiPrefix, apiRouter);

  // Vite Development / Production asset serving integration
  if (serverConfig.nodeEnv !== "production") {
    const vite = await createViteServer({
      root: path.join(process.cwd(), "client"),
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "client", "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  return app;
}
