import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent {
  movies$ = this.movieService.getMovies$.pipe(map((movies) => movies.results));

  constructor(private movieService: MovieService) {}
}
