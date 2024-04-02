import { FlaskConical } from "lucide-react";

const ExperimentsPage = () => {
    return ( 
        <div className="w-full h-full flex flex-col items-center justify-center relative dark:bg-grid-white/[0.2] bg-grid-black/[0.2]">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

            <div className="flex text-2xl uppercase items-center">
                <FlaskConical className="w-6 h-6 mr-3"/> In progress
            </div>
        </div>
     );
}
 
export default ExperimentsPage;