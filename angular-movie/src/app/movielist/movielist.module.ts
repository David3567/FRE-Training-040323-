import { NgModule } from '@angular/core';

import { MovielistRoutingModule } from './movielist-routing.module';
import { MovielistComponent } from './movielist.component';
import { MoviecardComponent } from './components/moviecard/moviecard.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MovielistComponent,
    MoviecardComponent
  ],
  imports: [
    SharedModule,
    MovielistRoutingModule
  ]
})
export class MovielistModule { }
