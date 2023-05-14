import { Component, Input } from '@angular/core';
import { Movie } from './movie.interface';
import { Router } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent {
  @Input() movieDetails!: Movie;

  constructor(private router: Router, private movieService: MovieService) {}
  onButtonClick() {
    console.log(this.movieDetails.id);
  }

  getDataAndNavigate(id: number) {
    this.movieService.getActors(id).subscribe((actors: any[]) => {
      this.movieService.getMovieGeneralInfo(id).subscribe((movieInfo: any) => {
        this.movieService
          .getMoviePostersLimited(id, 3)
          .subscribe((moviePosters: any) => {
            const data = {
              actors,
              movieInfo,
              moviePosters,
            };
            this.router.navigate(['/movies', id], { state: { data } });
          });
      });
    });
  }
}
