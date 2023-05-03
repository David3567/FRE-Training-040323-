import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { SideViewComponent } from './components/side-view/side-view.component';
import {EllipsisPipe} from './pipes/ellipsis.pipe'

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SideViewComponent,
    EllipsisPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
