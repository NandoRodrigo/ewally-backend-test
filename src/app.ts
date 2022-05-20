import express, { Request, Response, NextFunction } from "express";
import { ErrorHandler, handleError } from "./errors";

import { initializerRouter } from "./routes";

const app = express();

app.use(express.json());

initializerRouter(app);

// adiciona o gerenciador para capturar possiveis erros no nível mais a cima da aplicação
app.use(
  (err: ErrorHandler, req: Request, res: Response, next: NextFunction) => {
    handleError(err, res);
  }
);

export default app;
