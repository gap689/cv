import Image from "next/image"

import { cn } from "@/lib/utils"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

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
      <ContextMenu>
        <ContextMenuTrigger>
          <div className="overflow-hidden rounded-md">
            <Image
              src={book.cover}
              alt={book.name}
              width={width}
              height={height}
              className={cn(
                "h-auto w-auto object-cover transition-all hover:scale-105",
                aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
              )}
            />
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent className="w-40">
          <ContextMenuItem>Add to Library</ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger>Add to Playlist</ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-48">
              <ContextMenuItem>
                <PlusCircle className="mr-2 h-4 w-4" />
                New List
              </ContextMenuItem>
              <ContextMenuSeparator />
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSeparator />
          <ContextMenuItem>Like</ContextMenuItem>
          <ContextMenuItem>Share</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
      <div className="space-y-1 text-sm">
        <Link href={book.url} target="_blank" className="hover:underline">
            <h3 className="font-medium leading-none">{book.name}</h3>
        </Link>
        <p className="text-xs text-muted-foreground">{book.author}</p>
      </div>
    </div>
  )
}