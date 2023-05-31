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
import { MatIconModule } from '@angular/material/icon';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { UserUpdateComponent } from './user-update/user-update.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
@NgModule({
  declarations: [
    MoviesComponent,
    MovieComponent,
    MovieDetailComponent,
    YoutubePlayerComponent,
    UserUpdateComponent,
  ],
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
    MatIconModule,
    YouTubePlayerModule,
    MatProgressSpinnerModule,
    InfiniteScrollModule,
    ReactiveFormsModule,
    MatTableModule,
  ],
})
export class MoviesModule {}
