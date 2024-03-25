"use client";

import { Suspense } from 'react';

import { SiGooglecolab } from "react-icons/si";
import dynamic from 'next/dynamic';

const GarchPage = () => {
  const ReactEmbedGist = dynamic(() => import("react-embed-gist"), {
    ssr: false,
  });

  return ( 
    <div className="p-4 h-full">
      <Suspense fallback={<SiGooglecolab className='w-8 h-8 animate-pulse'/>}>
        <ReactEmbedGist
          gist="gap689/c573a9304f0efbea811e55476bac64d2"
          // contentClass="gist__content"
          //loadingFallback={<SiGooglecolab/>}
        />
      </Suspense>
    </div>
  );
}
 
export default GarchPage;