import { Component, Input } from '@angular/core';
import { Movie } from './movie.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent {
  @Input() movieDetails!: Movie;
  isLoading: boolean = false;
  constructor(private router: Router, private route: ActivatedRoute) {}
  onButtonClick() {
    console.log(this.movieDetails.id);
  }

  getDataAndNavigate(id: string) {
    this.isLoading = true;
    this.router.navigate(['/movies', id]);
  }
}
