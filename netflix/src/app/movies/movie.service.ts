import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from './movie/movie.interface';
import { MovieList } from './movies/movieList.interface';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

// const fetch
export class MovieService {
  url =
    'https://api.themoviedb.org/3/discover/movie?api_key=9f7b20416809f982ba3dd585db30907b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate';

  constructor(private http: HttpClient, private router: Router) {}

  getMovies$ = this.http.get<MovieList>(this.url);

  getDataAndNavigate(id: string) {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=9f7b20416809f982ba3dd585db30907b&language=en-US&append_to_response=credits,images`
    );
  }

  getMovieDetails(movieId: string): Observable<any> {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=9f7b20416809f982ba3dd585db30907b&append_to_response=credits`;
    return this.http.get(url);
  }

  getActors(movieId: string): Observable<any[]> {
    return this.getMovieDetails(movieId).pipe(
      map((response: any) => {
        const cast = response.credits.cast;
        return cast.map((actor: any) => ({
          name: actor.name,
          character: actor.character,
          profileImage: this.getPosterImageUrl(actor.profile_path, 'w92'),
        }));
      })
    );
  }

  private getPosterImageUrl(path: string, size: string): string {
    if (!path) {
      return '';
    }
    const imageSize = size;
    return `https://image.tmdb.org/t/p/${imageSize}${path}`;
  }

  getMovieGeneralInfo(movieId: string): Observable<any> {
    return this.getMovieDetails(movieId).pipe(
      map((response: any) => {
        return {
          title: response.original_title,
          poster_path: response.backdrop_path,
          overview: response.overview,
          release_date: response.release_date,
          runtime: response.runtime,
          original_language: response.original_language,
          genres: response.genres.map((genre: any) => genre.name),
        };
      })
    );
  }

  getMoviePostersLimited(movieId: string, limit: number) {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/images?api_key=9f7b20416809f982ba3dd585db30907b`;
    return this.http
      .get(url)
      .pipe(
        map((data: any) =>
          data.backdrops
            .slice(0, limit)
            .map((poster: any) =>
              this.getPosterImageUrl(poster.file_path, 'w185')
            )
        )
      );
  }

  getMovieTrailers(movieId: string | null) {
    return this.http
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=9f7b20416809f982ba3dd585db30907b`
      )
      .pipe(map((data: any) => data.results.map((video: any) => video.key)));
  }
}
