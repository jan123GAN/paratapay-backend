import { PaymentMethod } from "@prisma/client";
// validators/expense.validator.ts

import { z } from "zod";
import { Prisma, splitType } from "@prisma/client";

const expenseAmountSchema = z.object({
  user_id: z.string().min(1, "User ID is required"),
  amount: z
    .number({ required_error: "Amount is required" })
    .nonnegative("Amount must be zero or greater"),
  percentage: z.number().nonnegative("Percentage must be zero or greater").optional(),
});

export const createExpenseSchema = z.object({
  group_id: z.string().min(1, "Group ID is required"),
  created_by: z.string().min(1, "Created By is required"),
  paid_by: z.string().min(1, "Paid By is required"),
  amount: z
    .number({ required_error: "Amount is required" })
    .positive("Amount must be a positive number"),
  description: z
    .string()
    .min(1, "Description is required")
    .max(255, "Description too long"),
  category: z.string().min(1, "Category is required"),
  currency_code: z.string(),
  expense_date: z.string().datetime({
    message: "Invalid date format. Expected ISO 8601 string.",
  }).pipe(z.coerce.date()),
  split_type: z.nativeEnum(splitType, { required_error: "Split type is required" }),
  paid_by_data: z.array(
    z.object({
      user_id: z.string().min(1, "Payer user ID is required"),
      amount: z
        .number({ required_error: "Payer amount is required" })
        .positive("Payer amount must be a positive number"),
    })
  ).min(1, "At least one payer is required"),
  expense_data: z.array(
    z.object({
      user_id: z.string().min(1, "Split user ID is required"),
      amount: z
        .number()
        .nonnegative("Split amount must be zero or greater")
        .optional(),
      percentage: z.number().nonnegative("Percentage must be zero or greater").optional(),
    })
  ).min(1, "At least one split record is required"),
}).superRefine((data, ctx) => {
  const amountDecimal = new Prisma.Decimal(data.amount);
  const paidByTotal = data.paid_by_data.reduce((sum, item) => sum.plus(new Prisma.Decimal(item.amount)), new Prisma.Decimal(0));
  if (!paidByTotal.equals(amountDecimal)) {
    ctx.addIssue({
      path: ["paid_by_data"],
      code: z.ZodIssueCode.custom,
      message: "Total paid_by_data must equal the expense amount",
    });
  }

  if (data.paid_by_data.some((item, index) => data.paid_by_data.findIndex(candidate => candidate.user_id === item.user_id) !== index)) {
    ctx.addIssue({
      path: ["paid_by_data"],
      code: z.ZodIssueCode.custom,
      message: "Duplicate payer users are not allowed",
    });
  }

  if (data.split_type === splitType.CUSTOM_SPLIT) {
    const usesPercentages = data.expense_data.some(item => item.percentage !== undefined);
    if (usesPercentages) {
      const percentageTotal = data.expense_data.reduce((sum, item) => sum.plus(new Prisma.Decimal(item.percentage ?? 0)), new Prisma.Decimal(0));
      if (!percentageTotal.equals(new Prisma.Decimal(100))) {
        ctx.addIssue({
          path: ["expense_data"],
          code: z.ZodIssueCode.custom,
          message: "Percentage split must total 100%",
        });
      }
    } else {
      const splitTotal = data.expense_data.reduce((sum, item) => sum.plus(new Prisma.Decimal(item.amount ?? 0)), new Prisma.Decimal(0));
      if (!splitTotal.equals(amountDecimal)) {
        ctx.addIssue({
          path: ["expense_data"],
          code: z.ZodIssueCode.custom,
          message: "Total expense_data amounts must equal the expense amount",
        });
      }
    }
  } else if (data.split_type === splitType.EQUAL_SPLIT) {
    if (data.expense_data.length > 0) {
      ctx.addIssue({
        path: ["expense_data"],
        code: z.ZodIssueCode.custom,
        message: "Equal split does not use explicit amounts",
      });
    }
  }

  if (data.expense_data.some((item, index) => data.expense_data.findIndex(candidate => candidate.user_id === item.user_id) !== index)) {
    ctx.addIssue({
      path: ["expense_data"],
      code: z.ZodIssueCode.custom,
      message: "Duplicate split users are not allowed",
    });
  }
});



export const createSettlementSchema = z.object({
  group_id: z.string().min(1, "Group ID is required"),
  from_user_id: z.string().min(1, "Payer's user ID is required"),
  to_user_id: z.string().min(1, "Receiver's user ID is required"),
  amount: z.number().positive("Amount must be a positive number"),
  currency_code: z.string(),
  method: z.nativeEnum(PaymentMethod).default(PaymentMethod.ONLINE),
});

export type CreateSettlementInput = z.infer<typeof createSettlementSchema>;
