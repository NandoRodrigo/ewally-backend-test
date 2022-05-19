import { Request, Response, NextFunction } from "express";
import { dealershipService } from "../services/dealership/dealership.service";
import { titleService } from "../services/titles/title.service";

export const billetController = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const billetCode = req.billet_code;
    const dealershipIdentifier: string = "8";

    let billetContent = {};

    if (billetCode[0] === dealershipIdentifier) {
      billetContent = dealershipService(billetCode);
    } else {
      billetContent = titleService(billetCode);
    }

    return res.status(200).json(billetContent);
  } catch (err) {
    next(err);
  }
};
