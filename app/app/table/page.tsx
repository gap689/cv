import { promises as fs } from "fs"
import path from "path"
import { Metadata } from "next"
import { z } from "zod"

import { columns } from "./_components/columns"
import { DataTable } from "./_components/data-table"
// import { UserNav } from "./components/user-nav"
import { transactionSchema } from "@/data/table/schema"

export const metadata: Metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
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
      <div className="h-full flex-1 flex-col space-y-8 p-8 md:flex pb-4">
        
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="md:text-3xl text-2xl font-bold tracking-tight">Transaction Data</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of your trades for this month!
            </p>
            <div className="text-xs py-2 text-muted-foreground">
            **Disclaimer: The data presented here is for display purposes only. It is entirely fictional and does not represent real-world information.
        </div>
          </div>
          <div className="flex items-center space-x-2">
            {/* <UserNav /> */}
          </div>
        </div>
        <DataTable data={transactions} columns={columns} />
        
      </div>
  )
}