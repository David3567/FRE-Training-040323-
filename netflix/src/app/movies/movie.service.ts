import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from './movie/movie.interface';
import { MovieList } from './movies/movieList.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  url =
    'https://api.themoviedb.org/3/discover/movie?api_key=9f7b20416809f982ba3dd585db30907b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate';

  constructor(private http: HttpClient, private router: Router) {}

  getMovies$ = this.http.get<MovieList>(this.url);

  getDataAndNavigate(id: number) {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=9f7b20416809f982ba3dd585db30907b&language=en-US`
    );
  }
}
