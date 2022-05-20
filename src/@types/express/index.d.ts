import "express";

//adiciona um campo à requisição
declare global {
  namespace Express {
    interface Request {
      billet_code: string;
    }
  }
}
