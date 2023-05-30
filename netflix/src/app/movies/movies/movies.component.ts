import { Component, OnDestroy, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Observable, Subscription, map } from 'rxjs';
import { Movie } from '../movie/movie.interface';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit, OnDestroy {
  movies$ = this.movieService.getMovies$;
  movies: Movie[] = [];
  isLoading: boolean = false;
  page: number = 1;
  subscription: Subscription | undefined;

  fetchMovies(): void {
    this.isLoading = true;
    this.subscription = this.movieService
      .getMovies(this.page)
      .subscribe((moviesList) => {
        this.movies = this.movies.concat(moviesList);
        this.isLoading = false;
      });
  }
  constructor(private movieService: MovieService) {}
  ngOnInit(): void {
    this.fetchMovies();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  scrollCallback(): void {
    console.log('scrolled');
    // if (!this.isLoading) {
    this.page++;
    this.fetchMovies();
    // }
  }
}
