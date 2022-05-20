import { Request, Response, NextFunction } from "express";
import { ErrorHandler } from "../errors";

export const validateFormat = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const billetCode = req.params.billet_code;

  // verifica se a linha digitavel possui o tamanho permitido
  if (billetCode.length < 47 || billetCode.length > 48) {
    throw new ErrorHandler(
      400,
      "Billet code lenght must be between 47 and 48 characters"
    );
  }

  // verifica se existem digitos além de números
  if (!isNaN(Number(billetCode)) && !billetCode.includes(".")) {
    req.billet_code = String(billetCode);
    next();
  } else {
    throw new ErrorHandler(400, "Invalid characters on barcode");
  }
};
