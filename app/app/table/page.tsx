import { promises as fs } from "fs"
import path from "path"
import { Metadata } from "next"
import { z } from "zod"

import { columns } from "./_components/columns"
import { DataTable } from "./_components/data-table"
import { transactionSchema } from "@/data/table/schema"

export const metadata: Metadata = {
  title: "Data table",
  description: "A transaction tracker build using Tanstack Table.",
}

// Simulate a database read for transaction.
async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "data/table/transactions.json")
  )

const transactions = JSON.parse(data.toString())

  return z.array(transactionSchema).parse(transactions)
}

export default async function TaskPage() {
  const transactions = await getTasks()

  return (
      <div className="flex-1 flex-col space-y-8 sm:p-8 p-5 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="md:text-3xl text-2xl font-bold tracking-tight font-orbitron uppercase">Transaction Data</h2>
            <p className="text-muted-foreground py-2">
              Here&apos;s an data table exploration of transactions using tanstack table. Includes search by symbol, pagination, columns selection, filter by transaction type, and ordering asc or desc.
            </p>
            <div className="text-xs py-2 text-muted-foreground">
              **Disclaimer: The data presented here is for display purposes only. It is entirely fictional and does not represent real-world information.
            </div>
          </div>
          <div className="flex items-center space-x-2">
          </div>
        </div>
        <DataTable data={transactions} columns={columns} />
        
      </div>
  )
}