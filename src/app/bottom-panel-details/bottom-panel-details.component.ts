import { Component } from '@angular/core';


const details = [
  {name:'Humidity', iconUrl:'/assets/Glyph.svg', display:'41%'},
  {name:'Sunrise', iconUrl:'/assets/sunrise.svg', display:'6:30am'},
  {name:'UV Index', iconUrl:'/assets/sun.svg', display:'0 of 10'},
  {name:'Sunset', iconUrl:'/assets/sunset.svg', display:'7:30pm'},

]
@Component({
  selector: 'app-bottom-panel-details',
  templateUrl: './bottom-panel-details.component.html',
  styleUrls: ['./bottom-panel-details.component.scss']
})
export class BottomPanelDetailsComponent {

  protected readonly details = details;
}
