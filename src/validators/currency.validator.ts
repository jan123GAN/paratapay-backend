import {z} from "zod"


export const currency = z.object({
  code: z.string(),
    name: z.string(),
    symbol: z.string()
})
