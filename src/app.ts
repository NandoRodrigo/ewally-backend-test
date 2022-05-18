import express from "express";

import { initializerRouter } from "./routes";

const app = express();

app.use(express.json());

initializerRouter(app);

export default app;
