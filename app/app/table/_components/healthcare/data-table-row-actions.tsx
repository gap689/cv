"use client"

import { Row } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { studySchema } from "@/data/table/studies-schema"
import { MdOutlineShoppingCart } from "react-icons/md"
import { IoMdCart } from "react-icons/io";
import { FaFilePrescription } from "react-icons/fa6";

interface DataTableRowActionsProps<TData> {
  row: Row<TData>
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const task = studySchema.parse(row.original)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex justify-center items-center h-8 w-8 p-1 data-[state=open]:bg-muted"
        >
          <IoMdCart className="sm:w-6 sm:h-6 w-5 h-5 shrink-0" />
          <span className="sr-only">Add to cart</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <DropdownMenuItem>Add to Cart</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}