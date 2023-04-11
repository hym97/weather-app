import {Injectable, OnDestroy} from '@angular/core';
import {filter, interval, map, Observable, startWith} from "rxjs";
import {PanelTimeObj} from "./interfaces";

@Injectable({
  providedIn: 'root'
})
export class TimeService implements  OnDestroy{
  private date!:Date
  private intervalId!:number;


  private updateDate():void{
    this.date = new Date()
  }
  constructor() {
    this.updateDate();
    setInterval(() => {
      this.updateDate();
    }, 1000);
  }

  private getCurrentTime(currTime:Date):string{
    let suffix:string = 'am';
    let hours:number = currTime.getHours();
    if (hours > 12){
      hours -= 12;
      suffix = 'pm';
    }
    const minutes:number = currTime.getMinutes();
    const minuteTemplate:string = this.parseDigit(minutes);

    return `${hours}:` + minuteTemplate +  ` ${suffix}`;
  }

  private parseDigit(num:number):string{
    let template:string;
    if (num < 10){
      template = `0${num}`;
    }else{
      template = String(num);
    }
    return template
  }
  private getCurrentDay(currTime:Date):string{
    const today:number = currTime.getDay();

    return  ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][today]
  }

  private getCurrentDate(currTime:Date):string{
    const currMonth:number = currTime.getMonth();
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    const currDate:number = currTime.getDate();
    return months[currMonth - 1] + ' ' +  this.parseDigit(currDate)
  }


  private getPanelTimeObj(currTime:Date):PanelTimeObj{
    const date = this.getCurrentDate(this.date);
    const time = this.getCurrentTime(this.date);
    const day = this.getCurrentDay(this.date);
    return {date,time,day}
  }
  getTime():Observable<PanelTimeObj>{
    return interval(1000).pipe(
      filter(()=> this.date.getSeconds() === 0),
      map(()=> this.getPanelTimeObj(this.date)),
      startWith(this.getPanelTimeObj(this.date))
    );
  };


  ngOnDestroy():void{
  clearInterval(this.intervalId);
  }
}


