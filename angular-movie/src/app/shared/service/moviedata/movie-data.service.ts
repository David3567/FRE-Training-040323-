import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import {Movie} from 'src/app/core/model/Movie';
import {ApiResponse} from 'src/app/core/model/ApiResponse';
import { MovieDetail } from 'src/app/core/model/MovieDetail';
import { MovieImage } from 'src/app/core/model/MovieImage';
import { Credits } from 'src/app/core/model/Credits';
import { Videos } from 'src/app/core/model/Videos';
@Injectable()

export class MovieDataService {
  private api_key = `api_key=dd90bae2cb25e037d26aa48a77956cd9`;
  constructor(private http: HttpClient) { }
  get img_url(): string {
    return `https://image.tmdb.org/t/p/w1280`;
  }
  fetchApiData(): Observable<Movie[]> {
    return this.http.get<ApiResponse>(`https://api.themoviedb.org/3/discover/movie?${this.api_key}`).pipe(
      map(res => res.results)
    );
  }

  fetchMovieDetail(movieid: number): Observable<MovieDetail>{
    return this.http.get<MovieDetail>(`https://api.themoviedb.org/3/movie/${movieid}?${this.api_key}`);
  }

  fetchMovieImage(movieid: number): Observable<MovieImage>{
    return this.http.get<MovieImage>(`https://api.themoviedb.org/3/movie/${movieid}/images?${this.api_key}`);
  }

  fetchMovieCredit(movieid: number): Observable<Credits>{
    return this.http.get<Credits>(`https://api.themoviedb.org/3/movie/${movieid}/credits?${this.api_key}`);
  }


  fetchMovieVideos(movieid: number): Observable<Videos>{
    return this.http.get<Videos>(`https://api.themoviedb.org/3/movie/${movieid}/videos?${this.api_key}`);
  }
}
