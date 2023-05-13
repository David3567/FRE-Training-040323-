import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatChipsModule } from '@angular/material/chips';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MoviesRoutingModule } from './movies-routing.module';
@NgModule({
  declarations: [MoviesComponent, MovieComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatFormFieldModule,
    MatGridListModule,
    MatChipsModule,
    HttpClientModule,
    MatButtonModule,
    MoviesRoutingModule,
  ],
})
export class MoviesModule {}
