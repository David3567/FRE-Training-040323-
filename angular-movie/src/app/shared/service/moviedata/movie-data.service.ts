import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import {Movie} from 'src/app/core/model/Movie';
import {ApiResponse} from 'src/app/core/model/ApiResponse';
@Injectable()

export class MovieDataService {
  private api_key = `api_key=dd90bae2cb25e037d26aa48a77956cd9`;
  constructor(private http: HttpClient) { }
  get img_url(): string {
    return `https://image.tmdb.org/t/p/w500`;
  }
  fetchApiData(): Observable<Movie[]> {
    return this.http.get<ApiResponse>(`https://api.themoviedb.org/3/discover/movie?${this.api_key}`).pipe(
      map(res => res.results)
    );
  }
}
