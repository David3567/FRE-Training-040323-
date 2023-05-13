import { Component, Input } from '@angular/core';
import { Movie } from './movie.interface';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent {
  @Input() movieDetails!: Movie;

  constructor(private http: HttpClient, private router: Router) {}
  onButtonClick() {
    console.log(this.movieDetails.id);
  }

  getDataAndNavigate() {
    this.http
      .get(
        `https://api.themoviedb.org/3/movie/${this.movieDetails.id}?api_key=9f7b20416809f982ba3dd585db30907b&language=en-US`
      )
      .subscribe((data: any) => {
        const id = data.id;
        this.router.navigate(['/movies', id], { state: { data } });
      });
  }
}
