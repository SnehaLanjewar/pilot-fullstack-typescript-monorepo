import "dotenv/config";

import cors from "cors";
import express from "express";
import { APP_NAME, type HealthResponse } from "@pilot/shared";

const port = Number(process.env.PORT ?? 3000);

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  const body: HealthResponse = {
    status: "ok",
    service: APP_NAME,
    timestamp: new Date().toISOString()
  };

  res.status(200).json(body);
});

app.listen(port, () => {
  console.log(`[api] listening on http://localhost:${port}`);
});
