import { RESUME_DATA } from "@/data/resume-data";
import { Mail } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link"
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { TbMessageCircleCode } from "react-icons/tb";

export const metadata: Metadata = {
  title: "Contact Me",
  description: "Feel free to contact me",
}

const ContactPage = () => {
  return (
    <div className="flex flex-col p-section">
      <div className="md:text-3xl sm:text-2xl text-xl font-semibold md:py-10 py-5 font-orbitron uppercase tracking-wider">
        Contact Me
      </div>
      <div className="flex flex-col space-y-4 h-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 border">
          <section className="col-span-1 sm:col-span-2 flex flex-col justify-center sm:p-10 p-6 border-b">
            <TbMessageCircleCode className="md:w-14 md:h-14 h-12 w-12 mb-3"/>
            <h2 className="text-3xl md:text-4xl font-semibold font-oxanium">
              Let&apos;s talk
            </h2>
            <p className="text-muted-foreground pt-4 text-sm md:text-base">
              Happy to connect. I&apos;m open to colaborate at the intersection of front end, fullstack development, AI and data analytics.
            </p>
            <div className="py-3 flex">
              <Mail className="sm:w-6 sm:h-6 w-5 h-5 shrink-0"/> <p className="font-semibold pl-3 font-oxanium text-sm sm:text-base">{RESUME_DATA.contact.email}</p>
            </div>
          </section>

          <section className="pt-12 p-6 sm:col-span-1 col-span-2">
            <div className="flex flex-col h-full gap-4">
              <div className="min-w-[200px] flex flex-col items-center justify-center gap-y-4">
                <BsTwitterX className="w-10 h-10"/>
                <div>Follow me on X</div>
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
                <div>Check out my work on Github</div>
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