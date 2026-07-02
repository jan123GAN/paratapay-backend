import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt.js";
import { errorResponse } from "../utils/response.js";

interface AuthenticatedRequest extends Request {
  user?: {
    userId: string;
    email: string;
    displayName: string;
  };
}

export const authenticateToken = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Bearer TOKEN

  if (!token) {
    return res.status(401).json(errorResponse("Access token is required"));
  }

  try {
    const decoded = verifyToken(token);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json(errorResponse("Invalid or expired token"));
  }
};
