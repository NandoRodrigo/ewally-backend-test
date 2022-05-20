import { Response } from "express";

// cria uma classe de erro personalizada
export class ErrorHandler extends Error {
  statusCode;

  constructor(statusCode: number, message: string) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

// cria um gerenciador para o retorno de mensagens e códigos personalizados
export const handleError = (err: ErrorHandler, res: Response) => {
  const { statusCode, message } = err;

  return res.status(statusCode).json({
    message,
  });
};

module.exports = {
  handleError,
  ErrorHandler,
};
