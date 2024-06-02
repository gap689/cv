"use client"

import * as React from "react"
import {
  ExpandedState,
  Row,
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getExpandedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { DataTableToolbar } from "./data-table-toolbar"
import { DataTablePagination } from "./data-table-pagination"
import { cn } from "@/lib/utils"
import useSize from "@/hooks/useSize"
import { SubRowDetailView } from "./subrow-detail-view"
import { Study } from "@/data/table/studies-schema"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

type TableProps<TData> = {
  data: TData[]
  columns: ColumnDef<TData>[]
}

export function DataTableHealth<TData, TValue>({
  data,
  columns,
}: TableProps<Study>): JSX.Element {

  const useWidth = useSize()

  const [rowSelection, setRowSelection] = React.useState({})
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({
    })
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [expanded, setExpanded] = React.useState<ExpandedState>({})

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
      expanded,
    },
    enableRowSelection: true,
    enableHiding: true,
    enableExpanding: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onExpandedChange: setExpanded,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getExpandedRowModel: getExpandedRowModel(),
    debugTable: true,
    getRowCanExpand: () => true
  })

  //programmatically show column
  React.useEffect(() => {
    setColumnVisibility({ 
      use: useWidth[0] < 420 ? false : true,
      container: useWidth[0] <620 ? false : true,
      volume: useWidth[0] < 640 ? false : true,
      expected_turnaround_time: useWidth[0] < 690 ? false: true,
    });
  }, [useWidth]);

  return (
    <div className="relative space-y-4">
      <div className="text-xs text-muted-foreground">
          **Disclaimer: The data presented here is for display purposes only.
      </div>
      <div className="bg-background">
        <DataTableToolbar table={table}/>
      </div>

      <div className="rounded-md border max-h-[calc(100vh-23rem)] overflow-y-auto font-inter">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} colSpan={header.colSpan} className="p-2">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                // addition
                <React.Fragment key={row.id}>
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell 
                        key={cell.id} 
                        className="sm:text-sm text-xs p-2 hover:cursor-pointer"
                        onClick={row.getToggleExpandedHandler()}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                  {/* TODO: check height transitions */}
                  {
                    row.getIsExpanded() && (
                      <TableRow className={cn("table-row bg-zinc-100 dark:bg-zinc-800", row.getIsExpanded()? "border-b": "border-b-0")}>
                        <TableCell 
                          colSpan={row.getVisibleCells().length}
                          className={cn("p-1 xs:p-2 sm:p-3 lg:p-5 2xl:p-7 transition-max-height duration-500 ease-linear overflow-y-auto", row.getIsExpanded() ? "max-h-[800px]": "max-h-0")}
                          style={{
                            transitionProperty: "max-height",
                          }}
                        >
                          <SubRowDetailView row={row} />
                        </TableCell>
                      </TableRow>
                    )
                  }
                </React.Fragment>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
        
      <div className="overflow-x-auto py-2">
        <DataTablePagination table={table} />
      </div>
    </div>
  )
}