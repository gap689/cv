'use client'

import { FC, MouseEvent, memo, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Balancer from 'react-wrap-balancer'
import { ArrowLeftIcon, RadioIcon } from 'lucide-react'

import { SCROLL_AREA_ID, MOBILE_SCROLL_THRESHOLD } from '@/lib/constants'
import { Button } from '@/components/ui/button'

interface FloatingHeaderProps {
    scrollTitle: string;
    title: string;
    goBackLink: string;
  }

export const FloatingHeader: FC<FloatingHeaderProps> = memo(({ scrollTitle, title, goBackLink }) => {
  const [transformValues, setTransformValues] = useState({ translateY: 0, opacity: scrollTitle ? 0 : 1 })
  
  useEffect(() => {
    const scrollAreaElem = document.querySelector(`#${SCROLL_AREA_ID}`) as HTMLElement | null;

    // const onScroll = (e: MouseEvent<HTMLDivElement, MouseEvent>):void => {
    //   const scrollY = e.currentTarget.scrollTop
    const onScroll = (e: Event):void => {
      
      const target = e.target as HTMLDivElement;

      const scrollY = target.scrollTop

      const translateY = Math.max(100 - scrollY, 0)
      
      const rawOpacity = (scrollY - MOBILE_SCROLL_THRESHOLD * (MOBILE_SCROLL_THRESHOLD / (scrollY ** 2 / 100))) / 100;

      const opacity = Math.min(Math.max(parseFloat(rawOpacity.toFixed(2)), 0), 1);

      // const opacity = Math.min(Math.max(((scrollY - MOBILE_SCROLL_THRESHOLD * (MOBILE_SCROLL_THRESHOLD / (scrollY ** 2 / 100))) / 100).toFixed(2), 0), 1)

      setTransformValues({ translateY, opacity })
    }

    if (scrollTitle && scrollAreaElem) {
      scrollAreaElem.addEventListener('scroll', onScroll, {
        passive: true
      })
    }
    return () => {
      if(scrollAreaElem){
        scrollAreaElem.removeEventListener('scroll', onScroll)
      }
    }
  }, [scrollTitle, setTransformValues])

  return (
    <header className="sticky inset-x-0 top-0 z-10 mx-auto flex h-12 w-full shrink-0 items-center overflow-hidden border-b bg-white text-sm font-medium md:hidden">
      <div className="flex h-full w-full items-center px-3">
        <div className="flex w-full items-center justify-between gap-2">
          <div className="flex flex-1 items-center gap-1">
            {goBackLink && (
              <Button variant="ghost" size="icon" className="shrink-0" asChild>
                <Link href={goBackLink} title="Go back">
                  <ArrowLeftIcon size={16} />
                </Link>
              </Button>
              ) 
              // : (
              //   <MobileDrawer />
              // )
            }
            <div className="flex flex-1 items-center justify-between">
              {scrollTitle && (
                <span
                  className="line-clamp-2 font-semibold tracking-tight"
                  style={{
                    transform: `translateY(${transformValues.translateY}%)`,
                    opacity: transformValues.opacity
                  }}
                >
                  {scrollTitle}
                </span>
              )}
              {/* {title && (
                <Balancer ratio={0.35}>
                  <span className="line-clamp-2 font-semibold tracking-tight text-red-200">{title}</span>
                </Balancer>
              )} */}
            </div>
          </div>
          {/* This is a hack to show writing views with framer motion reveal effect */}
          {/* {scrollTitle && isWritingPath && <div className="flex min-w-[50px] justify-end">{children}</div>} */}
        </div>
      </div>
    </header>
  )
})