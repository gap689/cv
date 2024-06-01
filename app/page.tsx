import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { RESUME_DATA } from '@/data/resume-data'
import { Rocket, Wand} from "lucide-react"
import { BiLogoTypescript } from "react-icons/bi";
import TypewriterComponent from './app/_components/typewriter'

export default function Home() {
  return (
    <main className="flex min-h-[600px] h-full dark:bg-inherit flex-col items-center justify-center pt-12">
      <div className='font-light uppercase sm:p-10 p-5 text-pretty min-w-full xs:min-w-[360px] sm:min-w-[560px] md:min-w-[680px] xl:min-w-[700px]'>
        <div className='md:text-2xl text-lg lowercase font-light text-muted-foreground font-oxanium'>
          v.2024
        </div>
        <div className='xs:flex flex-wrap gap-x-2 xl:text-6xl md:text-5xl text-4xl font-medium font-orbitron text-secondary-foreground'>
          {/* Building digital products */}
          {/* Aedificans Futurum Technologiarum */}
          {/* Building technological solutions */}
          {/* Building digital products */}
          {/* Building data */}
          {/* Building future possibilities */}
          {/* Accelerating AI opportunity */}
          {/* Engineering dynamic solutions */}
          {/* building with advanced technologies */}
          {/* Building Digital futures */}
          {/* Transforming Tomorrow with Tech */}
          {/* Engineering the Future: */}
          {/* Turning Ideas into software */}
          {/* Digital Vanguardism */}
          {/* Digital Alchemy */}
          {/* towards a technological future */}
          {/* Technological frontiers */}
          {/* From concept to action */}
          {/* One step at a time */}
          {/* Stay hungry, stay foolish. */}
          {/* Next-generation technology */}
          {/* Create your future */}
          {/* Data-driven solutions */}
          {/* Data-powered Explorations */}
          {/* driven by data */}
          {/* data powered  */}
          {/* Inspired by data */}
          {/* Data driven technologies */}
          <h1 className='flex whitespace-nowrap'>Powered By </h1>
          <div className='text-transparent bg-clip-text bg-gradient-to-r dark:from-indigo-400 dark:to-blue-700 from-blue-400 to-blue-800'>
            <TypewriterComponent/>
          </div>
        </div>
        <div className='text-muted-foreground font-light py-3 font-oxanium text-lg xs:text-xl sm:text-2xl md:text-3xl'>
          A Technologist&apos;s Journey
        </div>
      </div>

      <div className="flex items-center space-x-2 sm:space-x-4">
        <Image
          alt="Avatar"
          className="rounded-full"
          height="64"
          src={RESUME_DATA.avatarUrl}
          style={{
            aspectRatio: "64/64",
            objectFit: "cover",
          }}
          width="64"
        />
        <div className="grid gap-1 text-sm">
          <div className="flex items-center space-x-2 ">
            <span className="font-medium">{RESUME_DATA.name}</span>
            <span className="text-gray-500 dark:text-gray-400">
              <Link href="https://twitter.com/GermanAlamillaP" target='_blank'>
                <Button variant="link" className='text-muted-foreground p-0'>
                  @GermanAlamillaP
                </Button>
              </Link>
            </span>
          </div>
        </div>
      </div>
      
      <div className='flex flex-wrap justify-center my-8'>
        
        <a className="flex items-center space-x-2 mr-4 my-2" href='https://nextjs.org' target='_blank'><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:h-10 md:w-10 h-5 w-5 text-neutral-500 dark:text-neutral-400 flex-shrink-0 stroke-1"><path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993"></path><path d="M15 12v-3"></path></svg></span><span className="text-sm font-semibold text-neutral-500 dark:text-neutral-400 flex-shrink-0">Next.js</span></a>

        <a className="flex items-center space-x-2 mr-4 my-2" href='https://react.dev/' target='_blank'><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:h-10 md:w-10 h-5 w-5 text-neutral-500 dark:text-neutral-400 flex-shrink-0 stroke-1"><path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102"></path><path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102"></path><path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2"></path><path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2"></path><path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896"></path><path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897"></path><path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z"></path></svg></span><span className="text-sm font-semibold text-neutral-500 dark:text-neutral-400 flex-shrink-0">React</span></a>

        <a className='flex items-center space-x-2 mr-4 my-2' href='https://typescriptlang.org' target='_blank'>
          <BiLogoTypescript className='md:h-10 md:w-10 h-5 w-5 text-neutral-500 dark:text-neutral-400 flex-shrink-0 stroke-1'/>
          <span className="text-sm font-semibold text-neutral-500 dark:text-neutral-400 flex-shrink-0">Typescript</span>
        </a>

        <a className="flex items-center space-x-2 mr-4 my-2" href='https://tailwindcss.com/' target='_blank'><span><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="md:h-10 md:w-10 h-5 w-5 text-neutral-500 dark:text-neutral-400 flex-shrink-0 stroke-[0.5px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z"></path></svg></span><span className="text-sm font-semibold text-neutral-500 dark:text-neutral-400 flex-shrink-0">TailwindCSS</span></a>

        <a className="flex items-center space-x-2 mr-4 my-2" href="https://ui.shadcn.com/" target='_blank'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="sm:h-7 sm:w-7 h-6 w-6 text-neutral-500 dark:text-neutral-400 flex-shrink-0 stroke-[0.5px]"><rect width="256" height="256" fill="none"></rect><line x1="208" y1="128" x2="128" y2="208" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line><line x1="192" y1="40" x2="40" y2="192" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line></svg><span className="inline-block text-sm font-semibold text-neutral-500 dark:text-neutral-400 flex-shrink-0">shadcn/ui</span></a>
      </div>
      <div className='flex space-x-3'>
        <Link href="/app/contact">
          <Button variant="outline" className="group flex items-center border border-zinc-300 dark:border-zinc-700">
            <p className="font-bold">Get in touch</p>
            <Wand className="w-5 h-5 ml-2 text-secondary-foreground group-hover:scale-125 transition duration-500"/>
          </Button>
        </Link>
        <Link href="/app">
          <Button variant="default" className="group flex items-center border border-zinc-300 dark:border-zinc-700">
            <p className="font-bold">Explore Now</p>
            <Rocket className="w-6 h-6 ml-2 text-primary-foreground group-hover:animate-shake"/>
          </Button>
        </Link>
      </div>
    </main>
  )
}
