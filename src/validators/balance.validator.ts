import { z } from "zod";


export const balanceSchema = z.object({
    balance: z.number(),
    group_id: z.string(),
    user_id: z.string(),
    currency_code: z.string()

})


export const updateBalanceSchema = z.object({
    balance: z.number().optional(),
    currency_code: z.string().optional()

})


export type balanceSchema = z.infer<typeof balanceSchema>;
export type updateBalanceSchema = z.infer<typeof updateBalanceSchema>;

