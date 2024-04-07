import { ComponentProps } from "react"
import { formatDistanceToNow } from "date-fns"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Analytics } from "@/data/analytics/data"
import { useAnalytics } from "@/hooks/use-analytics"
import { useRouter } from "next/navigation"

interface AnalyticsListProps {
  items: Analytics[]
}

export function AnalyticsList({ items }: AnalyticsListProps) {
  const [post, setPost] = useAnalytics()
  const router = useRouter();

  return (
      <div className="flex flex-col gap-2">
        {items.map((item) => (
          <button
            key={item.id}
            className={cn(
              "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent",
              post.selected === item.id && "bg-muted"
            )}
            onClick={() => {
              setPost({
                ...post,
                selected: item.id,
              });
              router.push(`/app/analytics${item.href!}`)
            }
            }
          >
            <div className="flex flex-col gap-1 w-full">
              <div className="flex items-center">
                <div className="flex items-center gap-1">
                  <div className="font-semibold line-clamp-2">{item.name}</div>
                  {!item.read && (
                    <span className="shrink-0 h-2 w-2 rounded-full bg-blue-600" />
                  )}
                </div>
                <div
                  className={cn(
                    "ml-auto text-xs pl-1 shrink-0",
                    post.selected === item.id
                      ? "text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {formatDistanceToNow(new Date(item.date), {
                    addSuffix: true,
                  })}
                </div>
              </div>
              <div className="text-xs font-medium">{item.subject}</div>
            </div>
            <div className="text-xs text-muted-foreground line-clamp-4">
              {item.text.substring(0, 300)}
            </div>
            
            {/* TODO: overflow-x is not working, check fix */}
            {item.labels.length ? (
                <div className="flex flex-wrap items-center gap-2 overflow-x-auto">
                  {item.labels.map((label) => (
                    <Badge key={label} variant={getBadgeVariantFromLabel(label)}>
                      {label}
                    </Badge>
                  ))}
                </div>
            ) : null}

          </button>
        ))}
      </div>
  )
}

function getBadgeVariantFromLabel(
  label: string
): ComponentProps<typeof Badge>["variant"] {
  if (["python"].includes(label.toLowerCase())) {
    return "default"
  }

  if (["personal"].includes(label.toLowerCase())) {
    return "outline"
  }

  return "secondary"
}