import { Request, Response } from "express";
import { errorResponse, successResponse } from "@/utils/response";

export const healthCheck = async (req: Request, res: Response) => {
  try {
    return res.status(200).json(successResponse("Server is up and running"));
  } catch (error) {
    return res.status(500).json(errorResponse("Internal server error", error));
  }
};
