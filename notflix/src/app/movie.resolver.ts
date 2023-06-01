import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { MovieDataService } from './movieData.service';

@Injectable({
  providedIn: 'root'
})
export class MovieResolver {

  constructor(private movieDataService: MovieDataService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const movieId = route.paramMap.get('id');
    return this.movieDataService.getMovieData(movieId)
  }
}
