"use client";

import { Suspense } from 'react';

import { SiGooglecolab } from "react-icons/si";
import dynamic from 'next/dynamic';

const BtcAnalysisPage = () => {
  
  const ReactEmbedGist = dynamic(() => import("react-embed-gist"), {
    ssr: false,
  });

  return ( 
        <div className="p-4 h-full">
          <Suspense fallback={<SiGooglecolab className='w-8 h-8 animate-pulse'/>}>
            <ReactEmbedGist
              gist="gap689/ae02ecea60d0516a19c2cd0bf1d190f7"
            />
          </Suspense>
      </div>
    );
}
 
export default BtcAnalysisPage;