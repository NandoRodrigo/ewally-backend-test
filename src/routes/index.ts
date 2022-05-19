import { Express } from "express";

import { billetRouter } from "./billet/billet.routes";

export const initializerRouter = (app: Express) => {
  app.use("/boleto", billetRouter());
};
