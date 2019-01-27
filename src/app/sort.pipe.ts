import { Pipe, PipeTransform } from '@angular/core';

declare global{
  interface Date {
    getWeek(): number;
    isThisWeek(): boolean;
    isToday(): boolean;
    isSameDate(date: Date): boolean;
    isSameWeek(date: Date): boolean;
  }
}


Date.prototype.isToday = function(): boolean {
  let today = new Date();
  return this.isSameDate(today);
};
Date.prototype.isThisWeek = function(): boolean {
  let today = new Date(2019, 1, 2);
  return this.isSameWeek(today);
};

Date.prototype.isSameDate = function(date: Date): boolean {
  return date && this.getFullYear() === date.getFullYear() && this.getMonth() === date.getMonth() && this.getDate() === date.getDate();
};
Date.prototype.isSameWeek = function(date: Date): boolean {
  return this.getWeek() == date.getWeek()
};

Date.prototype.getWeek = function (): number {
  const dowOffset = 0; //default dowOffset to zero
  const newYear = new Date(this.getFullYear(),0,1);
  let day = newYear.getDay() - dowOffset; //the day of week the year begins on
  day = (day >= 0 ? day : day + 7);
  const daynum = Math.floor((this.getTime() - newYear.getTime() - 
  (this.getTimezoneOffset()-newYear.getTimezoneOffset())*60000)/86400000) + 1;
  let weeknum;
  //if the year starts before the middle of a week
  if(day < 4) {
      weeknum = Math.floor((daynum+day-1)/7) + 1;
      if(weeknum > 52) {
          const nYear = new Date(this.getFullYear() + 1,0,1);
          let nday = nYear.getDay() - dowOffset;
          nday = nday >= 0 ? nday : nday + 7;
          /*if the next year starts before the middle of
            the week, it is week #1 of that year*/
          weeknum = nday < 4 ? 1 : 53;
      }
  }
  else {
      weeknum = Math.floor((daynum+day-1)/7);
  }
  return weeknum;
  };

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {



  transform(items: any, type: string): Array<string> {
    if(!items) return [];
    if(!type) return items;
    if(type=='today'){
      return items.filter( it => {
        const current = it.dateTime.split(' ')[0].split('-');
        let currentDate = new Date (Number(current[2]), Number(current[1]-1), Number(current[0]))
        return (currentDate.isToday())
      })
    }
    else if(type=='week'){
      return items.filter( it => {
        const current = it.dateTime.split(' ')[0].split('-');
        let currentDate = new Date (Number(current[2]), Number(current[1]-1), Number(current[0]))
        return (currentDate.isThisWeek());

      })
    }
    else{
      return items.filter( it => {
      const today = new Date();
      const weekLeft = today.getDay()
      
      const current = it.dateTime.split(' ')[0].split('-');
      let currentDate = new Date (Number(current[2]), Number(current[1]-1), Number(current[0]))
      return (!currentDate.isToday() && !currentDate.isThisWeek());
    })
    }
  }

}
