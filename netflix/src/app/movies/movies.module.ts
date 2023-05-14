import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MoviesRoutingModule } from './movies-routing.module';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
@NgModule({
  declarations: [MoviesComponent, MovieComponent, MovieDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatFormFieldModule,
    MatGridListModule,
    MatChipsModule,
    HttpClientModule,
    MatButtonModule,
    MoviesRoutingModule,
    MatCardModule,
  ],
})
export class MoviesModule {}
