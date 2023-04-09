import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  cityName!:string;
  placeHolder:string = 'Enter city name';
  onFocus(){
    this.placeHolder = '';
  }
  onBlur(){
    this.placeHolder='Enter city name';
  }


}
