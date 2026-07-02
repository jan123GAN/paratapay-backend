import jwt, { SignOptions } from "jsonwebtoken";
import { StringValue } from "ms";
import dotenv from "dotenv";

dotenv.config();

interface JWTPayload {
  userId: string;
  email: string;
  displayName: string;
}

const JWT_SECRET = process.env.JWT_SECRET || "dev-secret";

export const generateToken = (payload: JWTPayload): string => {
  const expiresInValue: number | StringValue | undefined = (process.env.JWT_EXPIRES_IN ||
    "7d") as StringValue;

  const options: SignOptions = {
    expiresIn: expiresInValue,
  };
  return jwt.sign(payload, JWT_SECRET, options);
};

export const verifyToken = (token: string): JWTPayload => {
  return jwt.verify(token, JWT_SECRET) as JWTPayload;
};
