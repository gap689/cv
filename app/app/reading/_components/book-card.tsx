import Image from "next/image"

import { cn } from "@/lib/utils"

import { Library } from "@/data/reading/books"
import { PlusCircle } from "lucide-react"
import Link from "next/link"

interface BookCardProps extends React.HTMLAttributes<HTMLDivElement> {
  book: Library
  aspectRatio?: "portrait" | "square"
  width?: number
  height?: number
}

export function BookCard({
  book,
  aspectRatio = "portrait",
  width,
  height,
  className,
  ...props
}: BookCardProps) {
  return (
    <div className={cn("space-y-3", className)} {...props}>
      <div className="overflow-hidden rounded-md">
        <Image
          src={book.cover}
          alt={book.name}
          width={width}
          height={height}
          className={cn(
            "h-auto object-cover transition-all hover:scale-105",
            aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
          )}
        />
      </div>

      <div className="space-y-1 text-sm">
        <Link href={book.url} target="_blank" className="hover:underline">
            <h3 className="font-medium leading-none">{book.name}</h3>
        </Link>
        <p className="text-xs text-muted-foreground">{book.author}</p>
      </div>
    </div>
  )
}