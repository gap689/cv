import { isSameDay, subDays } from "date-fns";

interface ProfitEntry {
    userId: number;
    day: number;
    balance: number;
    netInflow: number;
    profit: number;
    debt: number;
    transferIn: number;
  }
export const calculateCryptoBalance = (
    userProfits: ProfitEntry[],
    startDate: Date |undefined,
    endDate: Date |undefined,
): number => {
  
  let previousDay: Date;
  let previousDayBalance;
  
  if(startDate){
    previousDay = new Date( subDays(startDate, 1) );
    previousDayBalance= userProfits.find(entry => isSameDay(new Date(entry.day), previousDay))?.balance!;
  } else {
    return 0
  }

  let balance = 0;
  
  userProfits.forEach((profitEntry:ProfitEntry) => {
    const entryDate: Date = new Date(profitEntry.day);
    const dateOnlyString: string = entryDate.toISOString().split('T')[0];
    const dateOnlyDate: Date = new Date(dateOnlyString);

    if(startDate && endDate){
      if (dateOnlyDate.getDate() >= startDate.getDate() && dateOnlyDate.getDate() <= endDate.getDate()) {    
        balance += profitEntry.netInflow + profitEntry.profit;
      }
    }
  });
  return previousDayBalance + balance;
  };


export const calculateNetProfit = (
  userProfits: ProfitEntry[],
  startDate: Date |undefined,
  endDate: Date |undefined,
): number => {

  let netProfit = 0;
  
  userProfits.forEach((profitEntry:ProfitEntry) => {
    const entryDate: Date = new Date(profitEntry.day);
    const dateOnlyString: string = entryDate.toISOString().split('T')[0];
    const dateOnlyDate: Date = new Date(dateOnlyString);

    if(startDate && endDate){
      if (dateOnlyDate.getDate() >= startDate.getDate() && dateOnlyDate.getDate() <= endDate.getDate()) {    
        netProfit += profitEntry.profit;
      }
    }
  });
  return netProfit;
};