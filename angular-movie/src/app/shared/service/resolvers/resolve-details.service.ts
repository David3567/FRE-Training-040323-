import { Injectable } from '@angular/core';
import { MovieDataService } from '../moviedata/movie-data.service';
import { MovieDetail } from 'src/app/core/model/MovieDetail';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, delay, forkJoin, of, tap } from 'rxjs';
import { Credits } from 'src/app/core/model/Credits';

@Injectable()
export class ResolveDetailsService implements Resolve<any> {
  constructor(private dataService: MovieDataService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<[MovieDetail, Credits, null]> {
    let id = Number(route.paramMap.get('id'));
    const movieDetail$ = this.dataService.fetchMovieDetail(id);
    const movieCredit$ = this.dataService.fetchMovieCredit(id);
    // add delay to simulate server load
    const delay$ = of(null).pipe(delay(1000));
    return forkJoin([movieDetail$, movieCredit$,delay$]);
  }
}
