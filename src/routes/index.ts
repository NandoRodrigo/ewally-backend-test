import { Express } from "express";

import { billetRouter } from "./billet";

export const initializerRouter = (app: Express) => {
  app.use("/boleto", billetRouter());
};
