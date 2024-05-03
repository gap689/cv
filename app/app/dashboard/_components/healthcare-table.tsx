import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function HealthcareTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Customer</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="hidden md:table-cell">Date</TableHead>
          <TableHead className="text-right hidden sm:table-cell">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow className="hover:bg-accent">
          <TableCell>
            <div className="font-medium">Liam Johnson</div>
            <div className="hidden text-sm text-muted-foreground md:inline">
              liam@example.com
            </div>
          </TableCell>
          <TableCell>
            <Badge className="text-xs truncate bg-white dark:bg-zinc-700" variant="outline">
              In progress
            </Badge>
          </TableCell>
          <TableCell className="hidden md:table-cell">2023-06-23</TableCell>
          <TableCell className="text-right hidden sm:table-cell">$250.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <div className="font-medium">Olivia Smith</div>
            <div className="hidden text-sm text-muted-foreground md:inline">
              olivia@example.com
            </div>
          </TableCell>
          <TableCell>
            <Badge className="text-xs truncate bg-white dark:bg-zinc-700" variant="outline">
              In progress
            </Badge>
          </TableCell>
          <TableCell className="hidden md:table-cell">2023-06-24</TableCell>
          <TableCell className="text-right hidden sm:table-cell">$150.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <div className="font-medium">Noah Williams</div>
            <div className="hidden text-sm text-muted-foreground md:inline">
              noah@example.com
            </div>
          </TableCell>
          <TableCell>
            <Badge className="text-xs truncate bg-white dark:bg-zinc-700" variant="outline">
              Pending sample
            </Badge>
          </TableCell>
          <TableCell className="hidden md:table-cell">2023-06-25</TableCell>
          <TableCell className="text-right hidden sm:table-cell">$350.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <div className="font-medium">Emma Brown</div>
            <div className="hidden text-sm text-muted-foreground md:inline">
              emma@example.com
            </div>
          </TableCell>
          <TableCell>
            <Badge className="text-xs truncate bg-white dark:bg-zinc-700" variant="outline">
              In progress
            </Badge>
          </TableCell>
          <TableCell className="hidden md:table-cell">2023-06-26</TableCell>
          <TableCell className="text-right hidden sm:table-cell">$450.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <div className="font-medium">Liam Johnson</div>
            <div className="hidden text-sm text-muted-foreground md:inline">
              liam@example.com
            </div>
          </TableCell>
          <TableCell>
            <Badge className="text-xs truncate bg-white dark:bg-zinc-700" variant="outline">
              Pending sample
            </Badge>
          </TableCell>
          <TableCell className="hidden md:table-cell">2023-06-23</TableCell>
          <TableCell className="text-right hidden sm:table-cell">$250.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <div className="font-medium">Olivia Smith</div>
            <div className="hidden text-sm text-muted-foreground md:inline">
              olivia@example.com
            </div>
          </TableCell>
          <TableCell>
            <Badge className="text-xs truncate bg-white dark:bg-zinc-700" variant="outline">
              Declined
            </Badge>
          </TableCell>
          <TableCell className="hidden md:table-cell">2023-06-24</TableCell>
          <TableCell className="hidden sm:table-cell text-right">$150.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
