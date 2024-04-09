"use client"

import { useEffect, useState } from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface DatePickerWithRangeProps extends React.HTMLAttributes<HTMLDivElement> {
  range: DateRange | undefined;
  setRange: React.Dispatch<React.SetStateAction<DateRange|undefined>>;
}

export function DatePickerWithRange({
  className,
  range,
  setRange
}: DatePickerWithRangeProps) {

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-fit justify-start text-left font-normal",
              !range && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {range?.from ? (
              range.to ? (
                <>
                  {format(range.from, "LLL dd, y")} -{" "}
                  {format(range.to, "LLL dd, y")}
                </>
              ) : (
                format(range.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={range?.from}
            selected={range}
            onSelect={setRange}
            fromDate={range?.from}
            toDate={range?.to}
            numberOfMonths={2}
            // onDayClick={handleDayClick}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
