import { PrismaClient } from "@prisma/client"
import { Request, Response } from "express"
import { currency } from "../../validators/currency.validator";
import { successResponse, errorResponse } from "../../utils/response";


const prisma = new PrismaClient();

export const getCurrency = async (req: Request, res: Response) => {
   try {

      const response = await prisma.currencies.findMany({
         where: { isDeleted: false }
      })

      return res.status(200).json(successResponse("Currency fetched sucessfully", response))


   } catch (error) {
      return res.status(500).json(errorResponse("", error))
   }
}

export const createCurrency = async (req: Request, res: Response) => {
   const validCurrency = currency.safeParse(req.body);
   if (!validCurrency.success) {
      return res.status(400).json(errorResponse("validation error", validCurrency.error.issues));
   }

   const { code, name, symbol } = validCurrency.data;

   try {
      // Check for existing currency by code/name/symbol to avoid duplicates
      const existingCurrency = await prisma.currencies.findFirst({
         where: {
            OR: [
               { code: code },
               { name: name },
               { symbol: symbol }
            ]
         }
      })

      if (existingCurrency) {
         return res.status(400).json(errorResponse("Currency with same code/name/symbol already exists"));
      }

      const newCurrency = await prisma.currencies.create({
         data: {
            code: code,
            name: name,
            symbol: symbol
         }
      });

      return res.status(201).json(successResponse("Currency Created successfully", newCurrency));
   } catch (error) {
      return res.status(500).json(errorResponse("Internal server error", error))
   }
}

export const updateCurrency = async (req: Request, res: Response) => {
   const { id } = req.params;
   const validupdateCurrency = currency.partial().safeParse(req.body)

   if (!validupdateCurrency.success) {
      return res.status(400).json(errorResponse("Validation error", validupdateCurrency.error.issues))
   }
   const { name, symbol } = validupdateCurrency.data;

   try {
      const isExist = await prisma.currencies.findUnique({
         where: { code: id },
      })

      if (!isExist || isExist.isDeleted) {
         return res.status(400).json(errorResponse("Currency not exist"))
      }

      // Build OR conditions only for provided fields and exclude current record
      const orConditions: any[] = [];
      if (name) orConditions.push({ name });
      if (symbol) orConditions.push({ symbol });

      if (orConditions.length > 0) {
         const existNameOrSymbol = await prisma.currencies.findFirst({
            where: {
               AND: [
                 { NOT: { code: id } },
                 { OR: orConditions }
               ]
            }
         });

         if (existNameOrSymbol) {
            return res.status(400).json(errorResponse("Currency with name or symbol already exists"))
         }
      }

      const response = await prisma.currencies.update({
         where: { code: id },
         data: {
            name: name,
            symbol: symbol
         }
      })

      return res.status(200).json(successResponse("Currency Updated Sucessfully", response))

   } catch (error) {
      return res.status(500).json(errorResponse("Internal server error", error))
   }
}


export const deleteCurrency = async (req: Request, res: Response) => {
   const { id } = req.params;

   try {

      const isExist = await prisma.currencies.findFirst({
         where: { code: id }
      })


      if (!isExist || isExist.isDeleted) {
         return res.status(400).json("Currency not found")
      }

      const response = await prisma.currencies.update({
         where: { code: id },
         data: {
            isDeleted: true,
            deletedAt: new Date()
         }
      })

      return res.status(200).json(successResponse("Currency deleted sucessfully", response))

   } catch (error) {
      return res.status(500).json(errorResponse("Internal server error", error))
   }

}