import { Request, Response } from "express";

export const billetController = (req: Request, res: Response) => {
  const billet = req.params.billet_code;
  return res.status(200).send({ message: billet });
};
