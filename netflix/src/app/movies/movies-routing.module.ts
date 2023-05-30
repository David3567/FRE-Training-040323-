import { NgModule, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterModule,
  RouterStateSnapshot,
  Routes,
} from '@angular/router';

import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { Observable, forkJoin, map, of } from 'rxjs';
import { MovieService } from './movie.service';

const movieDetailResolver: ResolveFn<any> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<any> => {
  const movieId = route.paramMap.get('id');
  if (movieId) {
    const actorsObservable = inject(MovieService).getActors(movieId);
    const movieInfoObservable =
      inject(MovieService).getMovieGeneralInfo(movieId);
    const moviePostersObservable = inject(MovieService).getMoviePostersLimited(
      movieId,
      3
    );

    return forkJoin([
      actorsObservable,
      movieInfoObservable,
      moviePostersObservable,
    ]).pipe(
      map(([actors, movieInfo, moviePosters]: [any[], any, any[]]) => {
        // console.log(actors, movieInfo, moviePosters);
        return {
          actors,
          movieInfo,
          moviePosters,
        };
      })
    );
  } else {
    // Handle the case when movieId is null
    // For example, you can redirect to a default page or display an error message
    return of(null); // Return an Observable with a null value or handle the case appropriately
  }
};

const routes: Routes = [
  {
    path: '',
    component: MoviesComponent,
  },
  {
    path: ':id',
    component: MovieDetailComponent,
    resolve: { data: movieDetailResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
