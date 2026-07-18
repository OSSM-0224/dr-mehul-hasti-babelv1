import express from "express";
import path from "path";
import bodyParser from "body-parser";
import routes from "./routes/index.js";
import { errorHandler } from "./middleware/error.middleware.js";
import { securityMiddleware } from "./middleware/security.middleware.js";
import { requestLogger } from "./middleware/requestLogger.middleware.js";

const app = express();

app.use(requestLogger);
app.use(securityMiddleware);
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));

app.use("/api", routes);
app.use("/uploads", express.static(path.join(process.cwd(), "server", "uploads")));
app.use(express.static(path.join(process.cwd(), "client", "public")));

app.use(errorHandler);

export default app;
