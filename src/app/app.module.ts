import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import {FormsModule} from "@angular/forms";
import {NgOptimizedImage} from "@angular/common";
import { MainFrameComponent } from './main-frame/main-frame.component';
import { MainFramePanelComponent } from './main-frame-panel/main-frame-panel.component';
import { BottomPanelComponent } from './bottom-panel/bottom-panel.component';
import { BottomPanelDetailsComponent } from './bottom-panel-details/bottom-panel-details.component';
import { BottomPanelRainfallsComponent } from './bottom-panel-rainfalls/bottom-panel-rainfalls.component';
import { BottomPanelSevenDayForcastComponent } from './bottom-panel-seven-day-forcast/bottom-panel-seven-day-forcast.component';
import { BottomPanelSevenDayChartComponent } from './bottom-panel-seven-day-chart/bottom-panel-seven-day-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SearchBarComponent,
    MainFrameComponent,
    MainFramePanelComponent,
    BottomPanelComponent,
    BottomPanelDetailsComponent,
    BottomPanelRainfallsComponent,
    BottomPanelSevenDayForcastComponent,
    BottomPanelSevenDayChartComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        NgOptimizedImage
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
