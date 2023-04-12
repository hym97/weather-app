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

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SearchBarComponent,
    MainFrameComponent,
    MainFramePanelComponent,
    BottomPanelComponent
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
