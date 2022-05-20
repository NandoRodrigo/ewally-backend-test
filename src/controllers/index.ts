import { Request, Response, NextFunction } from "express";
import { dealershipService } from "../services/dealership/dealership.service";
import { titleService } from "../services/titles/title.service";

export const billetController = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // tenta realizar a consulta baseado no dígito inicial para definir o tipo do boleto
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
    // caso estoure algum erro será passado adiante

    next(err);
  }
};
