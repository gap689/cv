import Link from "next/link"
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { TbMessageCircleCode } from "react-icons/tb";

const ContactPage = () => {
  return (
    <div className="flex flex-col">
      <div className="md:text-3xl sm:text-2xl text-xl font-semibold md:p-10 p-5">
        Contact Me
      </div>
      <div className="flex flex-col space-y-4 pt-6 h-full p-section">
        <div className="grid grid-cols-1 sm:grid-cols-2 border">
          <section className="col-span-1 sm:col-span-2 flex flex-col justify-center p-10 border-b">
            <TbMessageCircleCode className="md:w-14 md:h-14 h-12 w-12 mb-3"/>
            <h2 className="text-3xl md:text-4xl font-semibold">
              Let&apos;s talk
            </h2>
            <p className="text-muted-foreground pt-4 text-sm md:text-base">
              Happy to connect. I&apos;m open to colaborate at the intersection of front end, fullstack development or data analytics.
            </p>
          </section>

          <section className="pt-12 p-6 sm:col-span-1 col-span-2">
            <div className="flex flex-col h-full gap-4">
              <div className="min-w-[200px] flex flex-col items-center justify-center gap-y-4">
                <BsTwitterX className="w-10 h-10"/>
                <div>Follow me on Twitter</div>
              </div>
              
              <div className="w-full flex items-center justify-center">
                <Link href="https://twitter.com/GermanAlamillaP" className="rounded-full border border-gray-300 dark:border-gray-700 px-4 py-2 text-xs sm:text-sm">
                  Follow @GermanAlamillaP
                </Link>
              </div>
            </div>
          </section>
          
          <section className="pt-12 p-6 sm:col-span-1 col-span-2 sm:border-l sm:border-t-0 border-t">
            <div className="flex flex-col h-full gap-4">
              <div className="min-w-[200px] flex flex-col items-center justify-center gap-y-4">
                <FaGithub className="w-10 h-10"/>
                <div>Check my work on Github</div>
              </div>
              
              <div className="w-full flex items-center justify-center">
                <Link href="https://github.com/gap689" className="rounded-full border border-gray-300 dark:border-gray-700 px-4 py-2 text-xs sm:text-sm">
                  Follow @gap689
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
 
export default ContactPage;