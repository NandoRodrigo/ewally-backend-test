import "express";

declare global {
  namespace Express {
    interface Request {
      billet_code: string;
    }
  }
}

// export {};
