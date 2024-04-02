import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  id: z.string(),
  title: z.string(),
  status: z.string(),
  label: z.string(),
  priority: z.string(),
})

export type Task = z.infer<typeof taskSchema>


export const transactionSchema = z.object({
  tradeId: z.number(),
  price: z.string(),
  insertTime: z.number().int(),
  symbol: z.string(),
  side: z.string(),
  activeBuy: z.boolean(),
  qty: z.string(),
  fee: z.string(),
  commissionAsset: z.string(),
  totalQuota: z.string(),
  productName: z.string().nullable(),
  baseAsset: z.string(),
  quoteAsset: z.string(),
  marginAsset: z.string(),
  realizedProfit: z.string(),
  id: z.string(),
  positionSide: z.string(),
})

export type Transaction = z.infer<typeof transactionSchema>
