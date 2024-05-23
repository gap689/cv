// import { Study } from "@/data/table/studies-schema";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaPrescriptionBottleMedical } from "react-icons/fa6";
import { cn } from "@/lib/utils";

import { Row } from '@tanstack/react-table'
import { Study } from "@/data/table/studies-schema";


export function SubRowDetailView({
    row
  }: { row: Row<Study>})
  {  
    return ( 
      <div className={cn("transition-all duration-500 ease-linear overflow-y-auto")}>
        <div className="border rounded-xl bg-background p-4 sm:p-5 lg:p-8">
          <div className="xs:flex">
            {/* título */}
            <div className="w-full space-y-2 text-xs sm:text-sm">
              <div className="font-semibold sm:text-lg text-base font-oxanium">
                {row.original.test_name}
              </div>
              { row.original.synonyms &&
                <div className="flex items-center">
                  <p className="font-medium">Synonyms: </p>
                  <p className="text-muted-foreground ml-2">{row.original.synonyms}</p>
                </div>
              }
              { row.original.container &&
                <div className="py-2 flex items-center">
                  <FaPrescriptionBottleMedical className="w-5 h-5 mr-2 shrink-0"/>
                  <p className="text-muted-foreground">{row.original.container}</p>
                </div>
              }
            </div>
            {/* botón de acción */}
            <div className="xs:p-6 py-2">
              <Button variant="default" className="font-semibold sm:text-sm text-xs">
                Add
                <MdOutlineShoppingCart className="sm:w-6 sm:h-6 w-5 h-5 ml-1" />
              </Button>
            </div>
          </div>
          <Separator/>
          {/* middle section Description*/}
          {row.original.use &&(
            <div className="pt-2 pb-3">
              <p className="font-semibold">Description</p>
              <div className="flex">
                <p className="text-muted-foreground text-xs sm:text-sm pt-2">
                  {row.original.use}
                </p>
              </div>
              {
                row.original.test_includes && (
                  <div className="flex items-center gap-2 py-2">
                    <p className="font-semibold">Includes:</p>
                    <div className="text-muted-foreground text-xs sm:text-sm">
                      {row.original.test_includes}
                    </div>
                  </div>
                )
              }
            </div>
            
          )}
          {/* details */}
          <div className="sm:flex gap-3 lg:gap-4 xl:gap-6 2xl:gap-8">  
            <div className="sm:w-2/5 w-full">
              <div className="font-lg font-semibold py-3">Specimen Requirements</div>
              <table className="w-full">
                <tbody className="divide-y">
                  { row.original.specimen && 
                    <tr><td className="p-1 sm:p-2 font-medium text-xs sm:text-sm">Specimen</td><td className="p-1 sm:p-2 text-muted-foreground text-xs sm:text-sm"> {row.original.specimen} </td></tr>
                  }
                  {
                    row.original.volume &&
                      <tr><td className="p-1 sm:p-2 font-medium text-xs sm:text-sm">Volume</td><td className="p-1 sm:p-2 text-muted-foreground text-xs sm:text-sm"> {row.original.volume} </td></tr>
                  }
                  {
                    row.original.minimum_volume &&
                      <tr><td className="p-1 sm:p-2 font-medium text-xs sm:text-sm">Min Volume</td><td className="p-1 sm:p-2 text-muted-foreground text-xs sm:text-sm"> {row.original.minimum_volume} </td></tr>
                  }
                  {
                    row.original.causes_for_rejection && 
                    <tr><td className="p-1 sm:p-2 font-medium text-xs sm:text-sm">Causes for rejection</td><td className="p-1 sm:p-2 text-muted-foreground text-xs sm:text-sm"> {row.original.causes_for_rejection} </td></tr>
                  }
                </tbody>
              </table>
            </div>

            <div className="sm:w-3/5 w-full">
              <div className="font-lg font-semibold py-3">Special Instructions</div>
              <table className="w-full">
                <tbody className="divide-y">
                  { row.original.patient_preparation && 
                    <tr><td className="p-1 sm:p-2 font-medium text-xs sm:text-sm">Patient Preparation</td><td className="p-1 sm:p-2 text-muted-foreground text-xs sm:text-sm"> {row.original.patient_preparation} </td></tr>
                  }
                  {
                    row.original.collection &&
                      <tr><td className="p-1 sm:p-2 font-medium text-xs sm:text-sm">Collection</td><td className="p-1 sm:p-2 text-muted-foreground text-xs sm:text-sm"> {row.original.collection} </td></tr>
                  }
                  {
                    row.original.storage_instructions &&
                      <tr><td className="p-1 sm:p-2 font-medium text-xs sm:text-sm">Storage Instructions</td><td className="p-1 sm:p-2 text-muted-foreground text-xs sm:text-sm"> {row.original.storage_instructions} </td></tr>
                  }
                  {
                    row.original.special_instructions && 
                    <tr><td className="p-1 sm:p-2 font-medium text-xs sm:text-sm">Special Instructions</td><td className="p-1 sm:p-2 text-muted-foreground text-xs sm:text-sm"> {row.original.special_instructions} </td></tr>
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
