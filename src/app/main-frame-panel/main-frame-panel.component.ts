import {Component, OnInit} from '@angular/core';

import {TimeService} from "../time.service";
import {PanelTimeObj} from "../interfaces";

@Component({
  selector: 'app-main-frame-panel',
  templateUrl: './main-frame-panel.component.html',
  styleUrls: ['./main-frame-panel.component.scss']
})
export class MainFramePanelComponent implements  OnInit{

  timeObj!:PanelTimeObj;
  constructor(private timeService: TimeService) {
  }

  ngOnInit() {
    this.timeService.getTime().subscribe(obj => {
      this.timeObj = obj;
    })
  }

  // getCurrentTime():string{
  //   let suffix:string = 'am';
  //   let hours:number = this.currTime.getHours();
  //   if (hours > 12){
  //     hours -= 12;
  //     suffix = 'pm';
  //   }
  //   const minutes:number = this.currTime.getMinutes();
  //   let minuteTemplate:string;
  //   if (minutes < 10){
  //     minuteTemplate = `0${minutes}`;
  //   }else{
  //     minuteTemplate = String(minutes);
  //   }
  //   return `${hours}:` + minuteTemplate +  ` ${suffix}`;
  // }

}
