dotenv.config();
import express, { Express } from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import logger from "@/config/logger.js";
import routes from "@/routes/index.js";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import { readFileSync, existsSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let swaggerFile: any = {};
const swaggerPath = join(__dirname, "docs", "swagger-output.json");

if (existsSync(swaggerPath)) {
  swaggerFile = JSON.parse(readFileSync(swaggerPath, "utf8"));
} else {
  logger.warn("Swagger documentation file not found. API docs will not be available.");
}

const app: Express = express();
const morganFormat = ":method :url :status :response-time ms";

app.use(
  morgan(morganFormat, {
    stream: {
      write: message => {
        const [method, url, status, responseTime] = message.trim().split(" ");
        logger.info(`${method} ${url} ${status} ${responseTime} ms`);
      },
    },
  }),
);

app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", routes);

// Only setup swagger if file exists
if (Object.keys(swaggerFile).length > 0) {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
}

export default app;