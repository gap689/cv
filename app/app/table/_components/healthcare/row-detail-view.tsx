import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaPrescriptionBottleMedical } from "react-icons/fa6";
import { cn } from "@/lib/utils";

export function RowDetailView({
    data,
    collapse
  }: any)
  {  
    return ( 
      <div className={cn("transition-all duration-500 ease-linear overflow-y-auto", collapse ? "max-h-[650px]": "max-h-0 ")}>
        <div className="border rounded-xl bg-background p-4 sm:p-5 lg:p-8">
          <div className="xs:flex">
            {/* título */}
            <div className="w-full space-y-2 text-xs sm:text-sm">
              <div className="font-semibold sm:text-lg text-base font-oxanium">
                {data.test_name}
              </div>
              { data.synonyms &&
                <div className="flex items-center">
                  <p className="font-medium">Synonyms: </p>
                  <p className="text-muted-foreground ml-2">{data.synonyms}</p>
                </div>
              }
              { data.container &&
                <div className="py-2 flex items-center">
                  <FaPrescriptionBottleMedical className="w-5 h-5 mr-2 shrink-0"/>
                  <p className="text-muted-foreground">{data.container}</p>
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
          {data.use &&(
            <div className="pt-2 pb-3">
              <p className="font-semibold">Description</p>
              <div className="flex">
                <p className="text-muted-foreground text-xs sm:text-sm pt-2">
                  {data.use}
                </p>
              </div>
            </div>
            
          )}
          {/* details */}
          
          <div className="sm:flex gap-3 lg:gap-4 xl:gap-6 2xl:gap-8">  
            <div className="sm:w-2/5 w-full">
              <div className="font-lg font-semibold py-3">Specimen Requirements</div>
              <table className="w-full">
                <tbody className="divide-y">
                  { data.specimen && 
                    <tr><td className="p-1 sm:p-2 font-medium text-xs sm:text-sm">Specimen</td><td className="p-1 sm:p-2 text-muted-foreground text-xs sm:text-sm"> {data.specimen} </td></tr>
                  }
                  {
                    data.volume &&
                      <tr><td className="p-1 sm:p-2 font-medium text-xs sm:text-sm">Volume</td><td className="p-1 sm:p-2 text-muted-foreground text-xs sm:text-sm"> {data.volume} </td></tr>
                  }
                  {
                    data.minimum_volume &&
                      <tr><td className="p-1 sm:p-2 font-medium text-xs sm:text-sm">Min Volume</td><td className="p-1 sm:p-2 text-muted-foreground text-xs sm:text-sm"> {data.minimum_volume} </td></tr>
                  }
                  {
                    data.causes_for_rejection && 
                    <tr><td className="p-1 sm:p-2 font-medium text-xs sm:text-sm">Causes for rejection</td><td className="p-1 sm:p-2 text-muted-foreground text-xs sm:text-sm"> {data.causes_for_rejection} </td></tr>
                  }
                </tbody>
              </table>
            </div>

            <div className="sm:w-3/5 w-full">
              <div className="font-lg font-semibold py-3">Special Instructions</div>
              <table className="w-full">
                <tbody className="divide-y">
                  { data.patient_preparation && 
                    <tr><td className="p-1 sm:p-2 font-medium text-xs sm:text-sm">Patient Preparation</td><td className="p-1 sm:p-2 text-muted-foreground text-xs sm:text-sm"> {data.patient_preparation} </td></tr>
                  }
                  {
                    data.collection &&
                      <tr><td className="p-1 sm:p-2 font-medium text-xs sm:text-sm">Collection</td><td className="p-1 sm:p-2 text-muted-foreground text-xs sm:text-sm"> {data.collection} </td></tr>
                  }
                  {
                    data.storage_instructions &&
                      <tr><td className="p-1 sm:p-2 font-medium text-xs sm:text-sm">Storage Instructions</td><td className="p-1 sm:p-2 text-muted-foreground text-xs sm:text-sm"> {data.storage_instructions} </td></tr>
                  }
                  {
                    data.special_instructions && 
                    <tr><td className="p-1 sm:p-2 font-medium text-xs sm:text-sm">Special Instructions</td><td className="p-1 sm:p-2 text-muted-foreground text-xs sm:text-sm"> {data.special_instructions} </td></tr>
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
