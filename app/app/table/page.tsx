import { promises as fs } from "fs"
import path from "path"
import { Metadata } from "next"
import { z } from "zod"

import { columns } from "./_components/columns"
import { DataTable } from "./_components/data-table"
import { transactionSchema } from "@/data/table/schema"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { DataTableHealth } from "./_components/healthcare/data-table-health"
import { columnshealth } from "./_components/healthcare/columns-health"
import { studySchema } from "@/data/table/studies-schema"
import { SubRowDetailView } from "./_components/healthcare/subrow-detail-view"

export const metadata: Metadata = {
  title: "Data table",
  description: "A transaction tracker build using Tanstack Table.",
}

// Simulate a database read for transaction.
async function getTransactions() {
  const data = await fs.readFile(
    path.join(process.cwd(), "data/table/transactions.json")
  )

const transactions = JSON.parse(data.toString())

  return z.array(transactionSchema).parse(transactions)
}

async function getStudies() {
  const data = await fs.readFile(
    path.join(process.cwd(), "data/table/lab-studies.json")
  )

const studies = JSON.parse(data.toString())
  return z.array(studySchema).parse(studies)
}

export default async function TaskPage() {
  const transactions = await getTransactions();
  const studies = await getStudies();

  return (
      <div className="flex flex-col h-full space-y-8 md:pb-4 md:p-8 sm:p-5 p-4 md:flex">
        <Tabs defaultValue="healthcare" className="space-y-4">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="md:text-3xl text-2xl font-bold tracking-tight font-orbitron uppercase">Data Table</h2>
            <p className="text-muted-foreground py-2 xs:text-sm text-xs">
              A data table exploration for different use cases. Includes search by keywords, pagination, columns selection, filter by type, and ordering asc or desc using tanstack table.
            </p>
          <div className="overflow-x-auto">
            <TabsList className="w-fit">
              <TabsTrigger value="healthcare" className="text-xs">
                HEALTHCARE
              </TabsTrigger>
              <TabsTrigger value="financial" className="text-xs">
                FINANCE
              </TabsTrigger>
            </TabsList>
          </div>
          </div>
        </div>
        <TabsContent value="financial" className="space-y-4 pb-6">
          <DataTable data={transactions} columns={columns} />
        </TabsContent>
          
        <TabsContent value="healthcare" className="space-y-4">
          <DataTableHealth 
            data={studies} 
            columns={columnshealth}
            />
        </TabsContent>
        </Tabs>
      </div>
  )
}