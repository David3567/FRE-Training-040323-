import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MovieDataService {

  constructor(private http: HttpClient) {

  }

  getMovieData() {
    return this.http.get('https://api.themoviedb.org/3/discover/movie?api_key=72c578daa554cf85908fc4c8e4cd8c7f')
  }
}