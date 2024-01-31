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

export const todaysPNL = (
  userProfits: ProfitEntry[],
): number => {

  let todaysPNL = 0;
  
  userProfits.forEach((profitEntry:ProfitEntry) => {
    const entryDate: Date = new Date(profitEntry.day);
    const todayDate: Date = new Date();

    if(isSameDay(entryDate, todayDate)) {
      todaysPNL = profitEntry.balance
    }
   
  });
  return todaysPNL;
};

export const lastSevenDaysProfit = (
  userProfits: ProfitEntry[],
): number => {

  const today = new Date();
  const sevenDaysAgo = subDays(today, 7);

  let sumProfit = 0;
  
  userProfits.forEach((profitEntry:ProfitEntry) => {
    const entryDate: Date = new Date(profitEntry.day);

    if(entryDate >= sevenDaysAgo && entryDate <= today) {
      sumProfit += profitEntry.profit;    }
   
  });
  return sumProfit;
};

export const calculateProfitRangeChange = (
  userProfits: ProfitEntry[],
  startDate: Date ,
  endDate: Date ,
): number => {

  const filteredObjects = userProfits.filter(obj => new Date(obj.day) >= startDate && new Date(obj.day) <= endDate);


  if (filteredObjects.length >= 2) {
    // Extract balances from the first and last objects in the filtered array
    const initialBalance = filteredObjects[0].balance;
    const finalBalance = filteredObjects[filteredObjects.length - 1].balance;

    // Calculate percentage change
    const percentageChange = ((finalBalance - initialBalance) / initialBalance) * 100;

    return parseFloat(percentageChange.toFixed(2));
} else {
    return 0;
}   

};