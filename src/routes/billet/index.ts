import { Router } from "express";
import { billetController } from "../../controllers";

const router = Router();

export const billetRouter = () => {
  router.get("/:billet_code", billetController);

  return router;
};
