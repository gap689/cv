import { Metadata } from "next";
import { DemoGithub } from "./_components/github-card";

export const metadata: Metadata = {
  title: "Get this template",
  description: "Github repository for the template",
}

const TemplatePage = () => {
  return ( 
    <div className="flex flex-col space-y-4 p-8 pt-6 h-full">
      <p className="text-xl font-semibold py-4">
          Get the template
      </p>
      <div className="w-[440px]">
          <DemoGithub/>
      </div>
    </div>
    );
}
 
export default TemplatePage;