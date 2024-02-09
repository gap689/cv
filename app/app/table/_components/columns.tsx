"use client"

import { ColumnDef } from "@tanstack/react-table"

import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"

import { sides } from "@/data/table/data"
// import { Task } from "@/data/table/schema"
import { Transaction } from "@/data/table/schema"
import { DataTableColumnHeader } from "./data-table-column-header"
import { DataTableRowActions } from "./data-table-row-actions"

export const columns: ColumnDef<Transaction>[] = [
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
    accessorKey: "insertTime",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Time" />
    ),
    cell: ({ row }) => {
        const timestamp: number = row.getValue("insertTime");
        const date = new Date(timestamp);
        const dateString: string = date.toUTCString();
        return(
            <div className="w-fit">{dateString}</div>
        )
    },
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: "symbol",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Symbol" />
    ),
    cell: ({ row }) => <div className="w-fit">{row.getValue("symbol")}</div>,
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "side",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Side" />
    ),
    cell: ({ row }) => {
        const side = sides.find(
            (side) => side.value === row.getValue("side")
          )
    
          if (!side) {
            return null
          }
    
        return (
            <div>
                {row.getValue("side")==="BUY" ? 
                    <Badge variant="outline" className="text-green-500 dark:text-green-300">
                        {row.getValue("side")}
                    </Badge> :
                    <Badge variant="outline" className="text-red-500 dark:text-red-300">
                    {row.getValue("side")}
                    </Badge>
                }
            </div>
        )
    },
    enableSorting: false,
    enableHiding: false,
    filterFn: (row, id, value) => {
        return value.includes(row.getValue(id))
      },
  },
  {
    accessorKey: "price",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Price" />
    ),
    cell: ({ row }) => <div className="w-fit">{row.getValue("price")}</div>,
    enableSorting: false,
    enableHiding: true,
  },

  {
    accessorKey: "qty",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Quantity" />
    ),
    cell: ({ row }) => {

        return(
        <div className="w-fit">{row.getValue("qty")}</div>
        )
    },
    enableSorting: false,
    enableHiding: true,
  },
  {
    accessorKey: "realizedProfit",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Realized Profits" />
    ),
    cell: ({ row }) => <div className="w-fit">{row.getValue("realizedProfit")} USDT</div>,
    enableSorting: true,
    enableHiding: false,
  },
//   {
//     accessorKey: "title",
//     header: ({ column }) => (
//       <DataTableColumnHeader column={column} title="Title" />
//     ),
//     cell: ({ row }) => {
//       const label = labels.find((label) => label.value === row.original.label)

//       return (
//         <div className="flex space-x-2">
//           {label && <Badge variant="outline">{label.label}</Badge>}
//           <span className="max-w-[500px] truncate font-medium">
//             {row.getValue("title")}
//           </span>
//         </div>
//       )
//     },
//   },
//   {
//     accessorKey: "status",
//     header: ({ column }) => (
//       <DataTableColumnHeader column={column} title="Status" />
//     ),
//     cell: ({ row }) => {
//       const status = statuses.find(
//         (status) => status.value === row.getValue("status")
//       )

//       if (!status) {
//         return null
//       }

//       return (
//         <div className="flex w-[100px] items-center">
//           {status.icon && (
//             <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
//           )}
//           <span>{status.label}</span>
//         </div>
//       )
//     },
//     filterFn: (row, id, value) => {
//       return value.includes(row.getValue(id))
//     },
//   },
//   {
//     accessorKey: "priority",
//     header: ({ column }) => (
//       <DataTableColumnHeader column={column} title="Priority" />
//     ),
//     cell: ({ row }) => {
//       const priority = priorities.find(
//         (priority) => priority.value === row.getValue("priority")
//       )

//       if (!priority) {
//         return null
//       }

//       return (
//         <div className="flex items-center">
//           {priority.icon && (
//             <priority.icon className="mr-2 h-4 w-4 text-muted-foreground" />
//           )}
//           <span>{priority.label}</span>
//         </div>
//       )
//     },
//     filterFn: (row, id, value) => {
//       return value.includes(row.getValue(id))
//     },
//   },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
]