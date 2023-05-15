import { MovieService } from 'src/app/services/movie.service';
import { Injectable, OnInit } from '@angular/core';

import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  ActivatedRoute,
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieDetailResolver implements Resolve<any> {
  movieID?: any;

  constructor(private mService: MovieService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    const id = route.paramMap.get('id');
    console.log(id);
    if (!id) return of(null);
    return this.mService.retrieveMovieDetails(id);
  }
}
