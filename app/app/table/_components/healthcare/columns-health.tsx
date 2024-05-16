"use client"

import { ColumnDef } from "@tanstack/react-table"

import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"

import { sides } from "@/data/table/data"
// import { Task } from "@/data/table/schema"
import { Study } from "@/data/table/studies-schema"
import { DataTableRowActions } from "./data-table-row-actions"
import { DataTableColumnHeader } from "./data-table-column-header"
import { TbCircleChevronDown, TbCircleChevronRight } from "react-icons/tb"

export const columnshealth: ColumnDef<Study>[] = [
//   {
//     id: "select",
//     header: ({ table }) => (
//       <Checkbox
//         checked={
//           table.getIsAllPageRowsSelected() ||
//           (table.getIsSomePageRowsSelected() && "indeterminate")
//         }
//         onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
//         aria-label="Select all"
//         className="translate-y-[2px]"
//       />
//     ),
//     cell: ({ row }) => (
//       <Checkbox
//         checked={row.getIsSelected()}
//         onCheckedChange={(value) => row.toggleSelected(!!value)}
//         aria-label="Select row"
//         className="translate-y-[2px]"
//       />
//     ),
//     enableSorting: false,
//     enableHiding: false,
//   },

  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Test id" />
    ),
    cell: ({ row }) => {
      return(
        <div 
          className="w-fit flex items-center shrink-0"
          style={{
            // Since rows are flattened by default,
            // we can use the row.depth property
            // and paddingLeft to visually indicate the depth of the row
            paddingLeft: `${row.depth * 2}rem`,
          }}
        >
          {row.getCanExpand() ? (
            <button
              {...{
                onClick: row.getToggleExpandedHandler(),
                  style: { cursor: 'pointer' },
              }}
            >
              {row.getIsExpanded() ? <TbCircleChevronDown className="w-6 h-6 font-light"/> : <TbCircleChevronRight className="w-6 h-6 font-light"/>}
            </button>
            ) : (
              '🔵'
            )}{' '}
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
      <DataTableColumnHeader column={column} title="Test Name" />
    ),
    cell: ({ row }) => {
        return(
            <div className="w-fit">{row.getValue("test_name")}</div>
        )
    },
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "expected_turnaround_time",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Processing Time" />
    ),
    cell: ({ row }) => <div className="w-fit">{row.getValue("expected_turnaround_time")}</div>,
    enableSorting: false,
    enableHiding: true,
  },
  // {
  //   accessorKey: "specimen",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Specimen" />
  //   ),
  //   cell: ({ row }) => {
  //     return (
  //       <div>
  //           {row.getValue("specimen")}
  //       </div>
  //     )
  //   },
  //   enableSorting: false,
  //   enableHiding: true,
  //   // filterFn: (row, id, value) => {
  //   //     return value.includes(row.getValue(id))
  //   //   },
  // },
  {
    accessorKey: "volume",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Volume" />
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
  // {
  //   accessorKey: "minimum_volume",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Minimum Volume" />
  //   ),
  //   cell: ({ row }) => {
  //     return (
  //       <div>
  //           {row.getValue("minimum_volume")}
  //       </div>
  //     )
  //   },
  //   enableSorting: false,
  //   enableHiding: true,
  // },
  // {
  //   accessorKey: "price",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Price" />
  //   ),
  //   cell: ({ row }) => <div className="w-fit">{row.getValue("price")}</div>,
  //   enableSorting: false,
  //   enableHiding: true,
  // },
  {
    accessorKey: "container",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Container" />
    ),
    cell: ({ row }) => <div className="w-fit">{row.getValue("container")}</div>,
    enableSorting: false,
    enableHiding: true,
  },
  // {
  //   id: "actions",
  //   cell: ({ row }) => <DataTableRowActions row={row} />,
  // },
]