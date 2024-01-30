import { Badge } from "@/components/ui/badge";

interface Transactions {
  tradeId: number,
  price: string,
  insertTime: number,
  symbol: string,
  side: string,
  activeBuy: Boolean,
  qty: string,
  fee: string,
  commissionAsset: string,
  totalQuota: string,
  baseAsset: string,
  quoteAsset: string,
  marginAsset: string,
  realizedProfit: string,
}
interface RecentTradesProps{
  transaction: Transactions
}
  const RecentTrades: React.FC<RecentTradesProps> = ({transaction}: RecentTradesProps) => {

  const formattedTime = new Date(transaction.insertTime).toDateString();
  
  return (
    <div className="flex items-center hover:bg-gray-50 dark:hover:bg-neutral-900 p-2 rounded-md">
      {transaction.side=== "BUY" ? 
        (<Badge variant="default" className="bg-green-200/70 text-green-600 dark:bg-green-300 dark:text-green-800 font-medium">
          {transaction.side}
        </Badge>) :
        (<Badge className="bg-red-100 text-red-600 dark:bg-red-300 dark:text-pink-800 font-medium">
          {transaction.side}
        </Badge>)
      }        
      <div className="ml-4 space-y-1 w-full max-w-full truncate whitespace-nowrap">
        <p className="text-sm font-medium leading-none">{transaction.baseAsset}</p>
        <p className="text-sm text-muted-foreground">
          {formattedTime}
        </p>
      </div>
      <div className="ml-8 font-medium w-full">
        <p className="text-xs text-muted-foreground">Quantity</p>
        <div>
          {transaction.qty}
        </div>
      </div>
    </div>
    );
  }
   
  export default RecentTrades;