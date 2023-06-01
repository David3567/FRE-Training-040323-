import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MovieImages } from "./movie-images.interface";
import { MovieActors } from "./movie-actors";
import { MovieVideos } from "./movie-videos";

@Injectable({
  providedIn: 'root'
})
export class MovieDataService {

  constructor(private http: HttpClient) {

  }

  movieID: number;

  getMoviesData(page: number) {
    return this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=72c578daa554cf85908fc4c8e4cd8c7f&page=${page}`)
  }

  getMovieData(id: string) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=72c578daa554cf85908fc4c8e4cd8c7f`)
  }

  getMovieImages(id: string) {
    return this.http.get<MovieImages>(`https://api.themoviedb.org/3/movie/${id}/images?api_key=72c578daa554cf85908fc4c8e4cd8c7f`)
  }

  getMovieActors(id: string) {
    return this.http.get<MovieActors>(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=72c578daa554cf85908fc4c8e4cd8c7f`)
  }

  getMovieVideos(id: string) {
    return this.http.get<MovieVideos>(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=72c578daa554cf85908fc4c8e4cd8c7f`)
  }
}