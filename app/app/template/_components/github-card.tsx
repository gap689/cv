
  
  import { Button } from "@/components/ui/button"
  import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  import { Separator } from "@/components/ui/separator"
import { ChevronDown, Circle, Plus, Star } from "lucide-react"
import Link from "next/link"
  
  export function DemoGithub() {
    return (
      <Card>
        <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
          <div className="space-y-1">
            <CardTitle className="text-lg">gap689/cv</CardTitle>
            <CardDescription>
              Beautifully designed dashboard-type resume.
              Web app that renders minimalist CV with dashboard style layout. Built with Next.js and shadcn/ui, deployed on Vercel. Accessible. Customizable. Open Source.
            </CardDescription>
          </div>
          <Link href="https://github.com/gap689/cv">

          <div className="flex items-center space-x-1 rounded-md bg-secondary text-secondary-foreground">
            <Button variant="secondary" className="px-3 shadow-none">
              <Star className="mr-2 h-4 w-4" />
              Star
            </Button>
            <Separator orientation="vertical" className="h-[20px]" />
                <Button variant="secondary" className="px-2 shadow-none">
                <ChevronDown className="h-4 w-4 text-secondary-foreground" />
                </Button>
          </div>
          </Link>

        </CardHeader>
        <CardContent>
          <div className="flex space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Circle className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
              TypeScript
            </div>
            <div className="flex items-center">
              <Star className="mr-1 h-3 w-3" />
              1K
            </div>
            <div>Updated February 2024</div>
          </div>
        </CardContent>
      </Card>
    )
  }