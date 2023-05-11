import { Inject, Injectable } from '@angular/core';
import { MovieItemComplete, Response, MovieItem } from '../interface/movie';
import { HttpClient } from '@angular/common/http';
import { discoverPath, movieUrl } from '../app.module';
import { Subject, map, tap } from 'rxjs';
import { ResolveData } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private movieList: MovieItemComplete[] = [];

  private api_key: string = '?api_key=' + '9b4d0b3f81f6c163aac86be798191447';
  private posterUrl: string = 'https://image.tmdb.org/t/p/original';

  constructor(
    private http: HttpClient,
    @Inject(movieUrl) private movieUrl: string,
    @Inject(discoverPath) private dicssoverPath: string
  ) {}

  retrieveData() {
    console.log('retrieving data');
    console.log(this.movieUrl + this.dicssoverPath + this.api_key);
    return this.http
      .get<Response>(this.movieUrl + this.dicssoverPath + this.api_key)
      .pipe(
        map((response: Response) => {
          return response.results.map((movies: MovieItemComplete) => {
            return {
              title: movies.title,
              poster: this.posterUrl + movies.poster_path,
              year: movies.release_date.slice(0, 4),
              rating: movies.vote_average,
              language: movies.original_language,
              overview: movies.overview,
            };
          });
        }),
        tap(console.log)
      );
  }
}
