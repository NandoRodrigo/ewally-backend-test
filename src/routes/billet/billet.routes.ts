import { Router } from "express";
import { billetController } from "../../controllers";
import { validateFormat } from "../../middlewares";

const router = Router();

export const billetRouter = () => {
  router.get("/:billet_code", validateFormat, billetController);

  return router;
};
