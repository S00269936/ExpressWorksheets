import { NextFunction, Request, Response } from "express";
import { AppError, ValidationError } from "../apperrors/apperror";

export const errorHandler = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  

  console.error(`Custom middleware: ${err}`);

  if (err instanceof ValidationError) {
    res.status(400).json({
      success: false,
      message: err.message,
      errors: err.details
    });
  
    return;
  }
  
  

  res.status(500).json({ error: 'error',
        message: 'Server Error' });
};
