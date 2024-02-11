import { Metadata } from "next"

import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import { readingNow, nextReading, readingNowElse } from "@/data/reading/books"
import { PlusCircle } from "lucide-react"
import { BookCard } from "./_components/book-card"

export const metadata: Metadata = {
  title: "Music App",
  description: "Example music app using the components.",
}

export default function ReadingPage() {
  return (
    <>
      <div className="block">
        <div className="grid lg:grid-cols-4">
          
          <div className="col-span-3 lg:col-span-4">
            <div className="h-full px-4 py-6 lg:px-8">
              <div className="flex items-center justify-between pb-4">
                <div className="space-y-1">
                  <h2 className="text-2xl font-semibold tracking-tight">
                    Reading List
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Books I'm reading right now
                  </p>
                </div>
              </div>
              <Tabs defaultValue="programming" className="space-y-6">
                <div className="space-between flex items-center">
                  <TabsList>
                    <TabsTrigger value="programming" className="relative">
                      Programming
                    </TabsTrigger>
                    <TabsTrigger value="else">
                      Anything else
                    </TabsTrigger>
                  </TabsList>
                </div>

                <Separator className="my-4"/>

                <TabsContent
                  value="programming"
                  className="border-none p-0 outline-none"
                >
                  <div className="relative">
                    <ScrollArea>
                      <div className="flex space-x-4 pb-4">
                        {readingNow.map((book) => (
                          <BookCard
                            key={book.name}
                            book={book}
                            className="w-[250px]"
                            aspectRatio="portrait"
                            width={250}
                            height={330}
                          />
                        ))}
                      </div>
                      <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                  </div>
                </TabsContent>

                <TabsContent
                  value="else"
                  className="h-full flex-col border-none p-0 data-[state=active]:flex"
                >
                  <div className="flex items-center justify-between">
                    <div className="relative">
                      <ScrollArea>
                        <div className="flex space-x-4 pb-4">
                          {readingNowElse.map((book) => (
                            <BookCard
                              key={book.name}
                              book={book}
                              className="w-[250px]"
                              aspectRatio="portrait"
                              width={250}
                              height={330}
                            />
                          ))}
                        </div>
                        <ScrollBar orientation="horizontal" />
                      </ScrollArea>
                    </div>
                  </div>                  
                </TabsContent>
              </Tabs>

              <div className="mt-6 space-y-1">
                    <h2 className="text-2xl font-semibold tracking-tight">
                      Want to read
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      A list of books that I want to read
                    </p>
                  </div>
                  <Separator className="my-4" />
                  <div className="relative">
                    <ScrollArea>
                      <div className="flex space-x-4 pb-4">
                        {nextReading.map((book) => (
                          <BookCard
                            key={book.name}
                            book={book}
                            className="w-[150px]"
                            aspectRatio="square"
                            width={150}
                            height={150}
                          />
                        ))}
                      </div>
                      <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}