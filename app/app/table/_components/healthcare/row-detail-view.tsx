// import { Study } from "@/data/table/studies-schema";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MdOutlineShoppingCart } from "react-icons/md";
import { LuTestTubes } from "react-icons/lu";

// interface DetailViewProps {
//     data: Study
//   }

// interface RowDetailProps<TData> {
//     data: TData[]
//   }

// export function RowDetailView<TData>({
//     data
// }: RowDetailProps<TData>){

export function RowDetailView({
    data
  }: any)
  {  
    return ( 
      <div className="xs:p-4 sm:p-5 lg:p-8 border rounded-xl bg-background">
        {/* encabezado */}
        <div className="xs:flex">
          {/* título */}
          <div className="w-full space-y-2">
            <div className="font-semibold sm:text-lg text-base font-oxanium">
              {data.test_name}
            </div>
            { data.synonyms &&
              <div className="text-sm flex items-center">
                <p className="font-medium">Synonym: </p>
                <p className="text-muted-foreground">{' '}{data.synonyms}</p>
              </div>
            }
            <div className="py-2 text-sm flex items-center">
              <LuTestTubes className="w-5 h-5 mr-2"/>
              {data.container}
            </div>
          </div>
          {/* botón de acción */}
          <div className="p-6">
            <p></p>
            <Button variant="default" className="font-semibold">
              Add to cart
              <MdOutlineShoppingCart className="w-6 h-6 ml-1" />
            </Button>
          </div>
        </div>
        <Separator/>
        {/* middle section */}
        {data.use &&(
          <div className="pt-2 pb-3">
            <p className="font-semibold">Description</p>
            <p className="text-muted-foreground">
              {data.use}
            </p>
          </div>
        )}
        {/* details */}
        <div className="sm:flex gap-3 lg:gap-4 xl:gap-5">
          <div className="w-full">
            <div className="font-lg font-semibold py-3">Specimen Requirements</div>
            <div className="flex justify-between p-1">
              <p className="font-semibold">Specimen</p>
              <p className="text-muted-foreground">{data.specimen}</p>
            </div>
            {
              data.volume &&(
                <div className="flex justify-between p-1">
                  <p className="font-semibold">Volume</p>
                  <p className="text-muted-foreground">{data.volume}</p>
                </div>
              )
            }
            { data.minimum_volume &&(
              <div className="flex justify-between p-1">
                <p className="font-semibold">Min Volume</p>
                <p className="text-muted-foreground">{data.minimum_volume}</p>
              </div>
              )
            }
            <div></div>
            <div></div>
          </div>
          {/* instructions */}
          <div className="w-full">
            <div className="font-lg font-semibold py-3">Special Instructions</div>
            { data.patient_preparation &&(
              <div className="flex justify-between p-1">
                <p className="font-semibold">Patient Preparation</p>
                <p className="text-muted-foreground">{data.patient_preparation}</p>
              </div>
              )
            }
            { data.collection &&(
              <div className="flex justify-between p-1">
                <p className="font-semibold">Collection</p>
                <p className="text-muted-foreground">{data.collection}</p>
              </div>
              )
            }
            { data.storage_instructions &&(
              <div className="flex justify-between p-1">
                <p className="font-semibold">Storage instructions</p>
                <p className="text-muted-foreground">{data.storage_instructions}</p>
              </div>
              )
            }
            <div></div>
          </div>
        </div>
      </div>
    );
  }
 
// export default RowDetailView;