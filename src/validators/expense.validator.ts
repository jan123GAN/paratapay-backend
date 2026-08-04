import { PaymentMethod } from "@prisma/client";
import { z } from "zod";
import { Prisma } from "@prisma/client";

const payerSchema = z.object({
  user_id: z.string().min(1, "Payer user ID is required"),
  amount: z.number({ required_error: "Payer amount is required" }).positive("Payer amount must be a positive number"),
});

const splitEntrySchema = z.object({
  user_id: z.string().min(1, "Split user ID is required"),
  amount: z.number().nonnegative("Split amount must be zero or greater").optional(),
  percentage: z.number().nonnegative("Percentage must be zero or greater").optional(),
});

export const createExpenseSchema = z.object({
  group_id: z.string().min(1, "Group ID is required"),
  created_by: z.string().min(1, "Created By is required"),
  paid_by: z.string().min(1, "Paid By is required").optional(),
  amount: z.number({ required_error: "Amount is required" }).positive("Amount must be a positive number"),
  description: z.string().min(1, "Description is required").max(255, "Description too long"),
  category: z.string().min(1, "Category is required"),
  currency_code: z.string().min(1, "Currency code is required"),
  expense_date: z.string().datetime({ message: "Invalid date format. Expected ISO 8601 string." }).pipe(z.coerce.date()),
  split_type: z.preprocess(
    (value) => value ?? "EQUAL_SPLIT",
    z.enum(["EQUAL_SPLIT", "CUSTOM_SPLIT", "PERCENTAGE_SPLIT", "EXACT_AMOUNT_SPLIT"], {
      required_error: "Split type is required",
      invalid_type_error: "Split type is invalid",
    })
  ),
  paid_by_data: z.array(payerSchema).optional(),
  expense_data: z.array(splitEntrySchema).optional(),
}).superRefine((data, ctx) => {
  const amountDecimal = new Prisma.Decimal(data.amount);
  const payerEntries = data.paid_by_data ?? [];
  if (!payerEntries.length) {
    if (!data.paid_by) {
      ctx.addIssue({ path: ["paid_by_data"], code: z.ZodIssueCode.custom, message: "At least one payer is required." });
    }
    return;
  }

  const paidByTotal = payerEntries.reduce((sum, item) => sum.plus(new Prisma.Decimal(item.amount)), new Prisma.Decimal(0));
  if (!paidByTotal.equals(amountDecimal)) {
    ctx.addIssue({ path: ["paid_by_data"], code: z.ZodIssueCode.custom, message: "The total payer contribution must equal the expense amount." });
  }

  const splitEntries = data.expense_data ?? [];
  if (!splitEntries.length) {
    if (data.split_type === "PERCENTAGE_SPLIT") {
      ctx.addIssue({ path: ["expense_data"], code: z.ZodIssueCode.custom, message: "Percentage split requires entries for each member." });
    }
    if (data.split_type === "EXACT_AMOUNT_SPLIT") {
      ctx.addIssue({ path: ["expense_data"], code: z.ZodIssueCode.custom, message: "Exact amount split requires entries for each member." });
    }
    return;
  }

  if (data.split_type === "PERCENTAGE_SPLIT") {
    const totalPercentage = splitEntries.reduce((sum, item) => sum.plus(new Prisma.Decimal(item.percentage ?? 0)), new Prisma.Decimal(0));
    if (!totalPercentage.equals(100)) {
      ctx.addIssue({ path: ["expense_data"], code: z.ZodIssueCode.custom, message: "Percentages must total exactly 100%." });
    }
  }

  if (data.split_type === "EXACT_AMOUNT_SPLIT") {
    const totalSplitAmount = splitEntries.reduce((sum, item) => sum.plus(new Prisma.Decimal(item.amount ?? 0)), new Prisma.Decimal(0));
    if (!totalSplitAmount.equals(amountDecimal)) {
      ctx.addIssue({ path: ["expense_data"], code: z.ZodIssueCode.custom, message: "Exact split amounts must equal the total expense amount." });
    }
  }
});

export const createSettlementSchema = z.object({
  group_id: z.string().min(1, "Group ID is required"),
  from_user_id: z.string().min(1, "Payer's user ID is required"),
  to_user_id: z.string().min(1, "Receiver's user ID is required"),
  amount: z.number().positive("Amount must be a positive number"),
  currency_code: z.string().min(1, "Currency code is required"),
  method: z.nativeEnum(PaymentMethod).default(PaymentMethod.ONLINE),
  expense_id: z.string().optional(),
}).superRefine((data, ctx) => {
  if (data.from_user_id === data.to_user_id) {
    ctx.addIssue({
      path: ["to_user_id"],
      code: z.ZodIssueCode.custom,
      message: "Sender and receiver cannot be the same user.",
    });
  }
});

export type CreateSettlementInput = z.infer<typeof createSettlementSchema>;
