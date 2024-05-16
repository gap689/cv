"use client"

import { Table } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { DataTableViewOptions } from "./data-table-view-options"

import { priorities, statuses, sides } from "@/data/table/data"
import { DataTableFacetedFilter } from "./data-table-faceted-filter"
import { X } from "lucide-react"

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter study..."
          value={(table.getColumn("test_name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("test_name")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px] xl:w-[300px]"
        />
        {/* {table.getColumn("side") && (
          <DataTableFacetedFilter
            column={table.getColumn("side")}
            title="Buy/Sell"
            options={sides}
          />
        )} */}
        
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <X className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  )
}