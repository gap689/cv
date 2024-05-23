"use client"

import { ColumnDef } from "@tanstack/react-table"

import { Study } from "@/data/table/studies-schema"
import { DataTableRowActions } from "./data-table-row-actions"
import { DataTableColumnHeader } from "./data-table-column-header"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

export const columnshealth: ColumnDef<Study>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Test id" />
    ),
    cell: ({ row }) => {
      return(
        <div 
          className="w-fit flex items-center shrink-0"
        >
          {row.getCanExpand() && (
            <button
              {...{
                  style: { cursor: 'pointer' },
              }}
            >
              { 
                <div className="p-1 flex items-center justify-center mr-2"><ChevronRight className={cn("md:w-5 md:h-5 w-4 h-4 shrink-0 transition-all duration-300", row.getIsExpanded() && "transition-transform, rotate-90")}/></div>
              }
            </button>
            ) 
          }{' '}
          {row.getValue("id")}
        </div>
      )
    },
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "test_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Test Name"/>
    ),
    cell: ({ row }) => { 
        return(
            <div className="sm:min-w-40">{row.getValue("test_name")}</div>
        )
    },
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "use",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Description"/>
    ),
    cell: ({ row }) => {
        return(
            <div>
              <p className="sm:line-clamp-3 line-clamp-4">
                {row.getValue("use")}
              </p>
            </div>
        )
    },
    enableSorting: false,
    enableHiding: true,
  },
  {
    accessorKey: "expected_turnaround_time",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Processing Time"/>
    ),
    cell: ({ row }) => <div className="w-fit">{row.getValue("expected_turnaround_time")}</div>,
    enableSorting: false,
    enableHiding: true,
  },
  {
    accessorKey: "volume",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Volume"/>
    ),
    cell: ({ row }) => {
      return (
        <div>
            {row.getValue("volume")}
        </div>
      )
    },
    enableSorting: false,
    enableHiding: true,
  },
  {
    accessorKey: "container",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Container"/>
    ),
    cell: ({ row }) => <div className="min-w-24">
      <p className="line-clamp-3 text-ellipsis">{row.getValue("container")}</p></div>,
    enableSorting: false,
    enableHiding: true,
    
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
]