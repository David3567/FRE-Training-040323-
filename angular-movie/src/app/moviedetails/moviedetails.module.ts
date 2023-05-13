import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviedetailsRoutingModule } from './moviedetails-routing.module';
import { MoviedetailsComponent } from './moviedetails.component';
import { SharedModule } from '../shared/shared.module';
import { VideoplayerComponent } from './components/videoplayer/videoplayer.component';
import { DialogComponent, DialogElementsExampleDialog } from './dialog/dialog.component';


@NgModule({
  declarations: [
    MoviedetailsComponent,
    VideoplayerComponent,
    DialogComponent,
    DialogElementsExampleDialog
  ],
  imports: [
    CommonModule,
    MoviedetailsRoutingModule,
    SharedModule
  ],
})
export class MoviedetailsModule { }
