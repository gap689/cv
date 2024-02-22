"use client";

import SideMenu from "./_components/side-menu";

const AnalyticsPage = (
  { 
    children,
  }: { 
    children: React.ReactNode;
  }
) => {

  return (
    <div className="flex flex-col flex-grow h-full">
      <div className="flex items-center justify-between space-y-2 p-8">
        <div>
          <h2 className="md:text-3xl text-2xl font-bold tracking-tight">Analytic Notebooks</h2>
          <p className="text-muted-foreground">
            Explore my data-driven journey through a curated portfolio of analytical notebooks!
          </p>
        </div>
      </div>
      <div className="flex w-full h-full">
        <SideMenu/>
        <div className="w-full border-t">
          { children }
        </div>
      </div>
    </div>
  );
}
 
export default AnalyticsPage;