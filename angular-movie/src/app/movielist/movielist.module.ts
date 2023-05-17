import { NgModule } from '@angular/core';

import { MovielistRoutingModule } from './movielist-routing.module';
import { MovielistComponent } from './movielist.component';
import { MoviecardComponent } from './components/moviecard/moviecard.component';
import { SharedModule } from '../shared/shared.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ScrollingModule } from '@angular/cdk/scrolling';


@NgModule({
  declarations: [
    MovielistComponent,
    MoviecardComponent
  ],
  imports: [
    SharedModule,
    MovielistRoutingModule,
    InfiniteScrollModule,
    ScrollingModule
  ]
})
export class MovielistModule { }
