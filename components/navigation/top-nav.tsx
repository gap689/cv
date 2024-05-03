"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useWindowSize } from 'usehooks-ts'

import { ModeToggle } from '@/components/mode-toggle';
import { LayoutPanelLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MobileSidebar from './mobile-sidebar';
import { cn } from '@/lib/utils';

interface CreatePolygonProps {
    color: string;
    width: number;
    height: number;
    flapWidth: number;
    middleHeight: number;
    cornerValue?: number;
    rightTopFlap?: boolean;
    leftTopFlap?: boolean;
    rightBottomFlap?: boolean;
    leftBottomFlap?: boolean;
}

interface CreateSVGProps {
    color: string;
    width: number;
    height: number;
    flapWidth: number;
    middleHeight: number;
  }

// Function to create a polygon with dynamic points
const createPolygon: React.FC<CreatePolygonProps> = ({ color, width, height, flapWidth, middleHeight, cornerValue = 0, ...rest }) => {
  const calculatePoints = () => {
    const rightTopFlap = +!!rest.rightTopFlap * middleHeight;
    const leftTopFlap = +!!rest.leftTopFlap * middleHeight;
    const rightBottomFlap = +!!rest.rightBottomFlap * middleHeight;
    const leftBottomFlap = +!!rest.leftBottomFlap * middleHeight;

    const pointsArray = [
      [0, leftTopFlap], [flapWidth - middleHeight, leftTopFlap], [flapWidth, 0],
      [width - flapWidth, 0], [width - flapWidth + middleHeight, rightTopFlap],
      [width, rightTopFlap], [width, height - cornerValue - rightBottomFlap],
      [width - cornerValue, height - rightBottomFlap], [width - flapWidth + middleHeight, height - rightBottomFlap],
      [width - flapWidth, height - middleHeight], [flapWidth, height - middleHeight],
      [flapWidth - middleHeight, height - leftBottomFlap], [cornerValue, height - leftBottomFlap],
      [0, height - cornerValue - leftBottomFlap]
    ];

    return pointsArray.map(point => point.join(",")).join(" ");
  };

  return (
    <polygon points={calculatePoints()} strokeWidth={1}/>
  );
};

const CreateSVG: React.FC<CreateSVGProps> = ({color, width, height, flapWidth, middleHeight }) => {
    return (
      <svg width={width} height={height} className='stroke-neutral-300 dark:stroke-neutral-700 fill-white dark:fill-inherit'>
        {createPolygon({color, width, height, flapWidth, middleHeight })}
      </svg>
    );
  };

// Function to create a responsive image component
const TopNavigation = () => {
  const { width } = useWindowSize()
  
  const [calculatedWidth, setCalculatedWidth] = useState<number>(width);
  const [calculatedHeight, setCalculatedHeight] = useState(56);

  const pathname= usePathname();

  useEffect(() => {
    const handleResize = () => {
      setCalculatedWidth(window.innerWidth);
    };

    // Initial width
    setCalculatedWidth(window.innerWidth);

    // Event listener for window resize
    window.addEventListener("resize", handleResize, true);
      
    return () => {
      window.removeEventListener("resize", handleResize, true);
    };
  }, []);
  
    return (
        <div className="h-14 fixed flex items-center top-0 w-screen z-30">
          <CreateSVG color='none' width={calculatedWidth} height={66} flapWidth={120} middleHeight={10} />
          <div className='flex items-center justify-between absolute w-full px-3 sm:px-6' >
            <div className='flex items-center w-full'>
              <LayoutPanelLeft className='sm:flex hidden w-5 h-5'/>
              <p className='text-sm hidden sm:flex ml-2'>CV Template</p>
              <MobileSidebar/>
            </div>
            <div className='w-full'>
              <ul className='flex items-center justify-center space-x-1 sm:space-x-4 text-xs uppercase font-oxanium'>
                <ol>
                  <Link href="/">
                    <Button variant="link" className={cn('text-xs font-normal uppercase', pathname==="/" && "font-semibold underline")}>
                      Intro
                    </Button>
                  </Link>
                </ol>
                <ol>
                  <Link href="/app">
                    <Button variant="link" className={cn('text-xs font-normal uppercase', pathname.startsWith("/app") && "font-semibold underline")}>
                      App
                    </Button>
                  </Link>
                </ol>
                <ol>
                  <Link href="/about">
                    <Button variant="link" className={cn('text-xs font-normal uppercase', pathname==="/about" && "font-semibold underline ")}>
                      About
                    </Button>
                  </Link>
                </ol>
              </ul>
            </div>
            <div className='flex w-full justify-end'>
              <ModeToggle/>

            </div>
          </div>
        </div>
    )
    ;
  };
  
  export default TopNavigation;