"use client"

import { Table } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { DataTableViewOptions } from "./data-table-view-options"

import { X } from "lucide-react"

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0
  const isExpanded = table.getIsSomeRowsExpanded()

  return (
    <div className="flex items-center justify-between overflow-x-auto">
      <div className="flex items-center p-1">
        <Input
          placeholder="Filter study..."
          value={(table.getColumn("test_name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("test_name")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px] xl:w-[300px]"
        />

        {isExpanded &&(
          <Button
            variant="ghost"
            onClick={()=>table.resetExpanded()}
            className="h-8 px-2 lg:px-3 text-xs sm:text-sm"
          >
            Reset Rows
            <X className="ml-2 h-4 w-4" />
          </Button>
        )}
        
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => {
              table.resetColumnFilters();
              table.resetExpanded();
            }}
            className="h-8 px-2 lg:px-3 text-xs sm:text-sm"
          >
            Reset Search
            <X className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  )
}