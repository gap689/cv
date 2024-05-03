"use client"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react"
import { Separator } from "@/components/ui/separator"

import { labData } from "@/data/dashboard/data";

import { HealthcareBalance } from "./healthcare-balance"
import HealthcarePatients from "./healthcare-patients"
import HealthcareStudies from "./healthcare-studies"
import HealthcareTable from "./healthcare-table"

import { FaHandHoldingWater } from "react-icons/fa";
import { FaBiohazard } from "react-icons/fa";
import { FaTemperatureLow } from "react-icons/fa";
import { LuSyringe } from "react-icons/lu";

const HealthcareDashboard = () => {

  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(labData[0])

  const totalPatientCount = value.patientCount.reduce((total, item) => total + item.value, 0);

  return (
    <div className="h-full">
      <div className="py-2">
        <h1 className="text-xl md:text-2xl font-semibold"><span className="text-base">Case study:</span> Clinical Laboratory Dashboard</h1>
        <p className="text-lg py-3 uppercase font-orbitron">{value.branchName}</p>
        <div className="flex items-center">
          branch:
          <div className="px-2">
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="w-[200px] justify-between"
                >
                  {value
                    ? labData.find((branch) => branch.branchName === value.branchName)?.branchName
                    : "Select a brach..."}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandInput placeholder="Search laboratory..." />
                  <CommandEmpty>No laboratory found.</CommandEmpty>
                  <CommandGroup>
                    {labData.map((branch) => (
                      <CommandItem
                        key={branch.branchId}
                        value={branch.branchName}
                        onSelect={() => {
                          setValue(branch)
                          setOpen(false)
                        }}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            value.branchName === branch.branchName ? "opacity-100" : "opacity-0"
                          )}
                        />
                        {branch.branchName}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>

        {/* subgrid 0 experimental */}
      <div className="col-span-2 md:col-span-4 flex justify-end gap-x-4 p-2 pb-0">
        <div className="flex items-center">
          <FaHandHoldingWater  className="w-4 h-4"/>
          <div className="flex items-center gap-1 ml-2">
            <div className="w-1 h-4 bg-gray-300 dark:bg-stone-700"></div>
            <div className="w-1 h-4 bg-gray-300 dark:bg-stone-700"></div>
            <div className="w-1 h-4 bg-gray-300 dark:bg-stone-700"></div>
            <div className="w-1 h-4 bg-gray-200 dark:bg-stone-800"></div>
            <div className="w-1 h-4 bg-gray-200 dark:bg-stone-800"></div>
          </div>
        </div>
        <div className="flex items-center">
          <FaBiohazard className="w-4 h-4"/>
          <div className="rounded-full w-1 h-1 bg-red-400 dark:bg-red-600 ml-1"></div>
        </div>
        <div className="flex items-center">
          <FaTemperatureLow className="w-4 h-4"/>
          <p className="text-sm ml-1">24</p>
        </div>
        <div className="flex items-center">
          <LuSyringe className="w-4 h-4"/>
          <div className="flex gap-1 ml-1">
            <div className="rounded-full w-1 h-1 bg-gray-400 dark:bg-gray-400"></div>
            <div className="rounded-full w-1 h-1 bg-gray-400 dark:bg-gray-400"></div>
            <div className="rounded-full w-1 h-1 bg-gray-200 dark:bg-gray-700"></div>
            <div className="rounded-full w-1 h-1 bg-gray-200 dark:bg-gray-700"></div>
            <div className="rounded-full w-1 h-1 bg-gray-200 dark:bg-gray-700"></div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 border mt-3">
        {/* subgrid 1 */}
        <div className="grid grid-cols-2 col-span-2">
          {/* item 1 */}
          <div className="col-span-1 flex flex-col border-b h-[260px]">
            <div className="h-full p-4 border-b bg-neutral-100 dark:bg-neutral-900">
              <p className="font-oxanium uppercase text-sm text-muted-foreground">
                Sales Today
              </p>
              <div className="font-semibold text-xl sm:text-2xl pt-7 font-oxanium">
                ${value.salesToday}
              </div>
            </div>
            <div className="h-full p-4">
              <p className="font-oxanium uppercase text-sm text-muted-foreground">
                Weekly Sales
              </p>
              <div className="font-semibold text-xl sm:text-2xl pt-7 font-oxanium">
                ${value.weeklySales}
              </div>
            </div>
          </div>
          {/* item 2 */}
          <div className="col-span-1 border-l border-b h-[260px]">
            <div className="flex flex-col h-full p-5">
              <p className="font-oxanium uppercase text-sm text-muted-foreground">
                Completed Orders
              </p>
              <div className="text-xl sm:text-2xl flex h-full items-end font-semibold py-4 font-oxanium">
                {value.completedOrders}
              </div>
              <Separator/>
              <div className="pt-2 text-sm text-muted-foreground">
                {value.ordersInProgress} <span className="text-xs">in progress</span>
              </div>
            </div>
          </div>
          {/* Item 3 */}
          <div className="md:col-span-1 col-span-2  border-b md:border-b-0">
            <div className="flex flex-col h-full md:p-5 sm:p-4 p-3 overflow-auto">
              <h2 className="font-oxanium uppercase text-sm text-muted-foreground">
                patient count
              </h2>
              <p className="text-xl sm:text-2xl py-3 font-semibold font-oxanium">{totalPatientCount}</p>
              <div className="w-full min-h-[200px]">
                <HealthcarePatients data={value.patientCount}/>
              </div>
            </div>
          </div>
          {/* item 4 */}
          <div className="md:col-span-1 col-span-2 md:border-l md:border-b-0 border-b">
            <div className="flex flex-col h-full sm:p-5 p-4">
              <h2 className="font-oxanium uppercase text-sm text-muted-foreground">
                top studies
              </h2>
              {/* here goes the bar chart */}
              <div className="h-[300px]">
                <HealthcareStudies data={value.topStudies}/>
              </div>
            </div>
          </div>
        </div>
        
        {/* subgrid 2 */}
        <div className="grid grid-cols-2 col-span-2 w-full md:border-l">
          {/* item 1 */}
          <div className="p-4 col-span-2 border-b h-[260px]">
            <div className="flex font-oxanium uppercase text-sm">
              total income
            </div>
            <div className="lg:flex h-full">
              <div className="text-xl sm:text-2xl font-semibold flex items-end py-3 lg:pb-6 font-oxanium">${value.totalIncome}</div>
              <div className="py-2 w-full">
                <HealthcareBalance data={value.dailyIncome}/>
              </div>
            </div>
          </div>
          {/* item 2 */}
          <div className="col-span-2 p-4 max-h-[360px] overflow-y-auto bg-zinc-100 dark:bg-zinc-900">
            <h2 className="font-oxanium uppercase text-sm text-muted-foreground">
              pending orders
            </h2>
            <HealthcareTable/>
          </div>
          
        </div>
      </div>
    </div>
  );
}
 
export default HealthcareDashboard;