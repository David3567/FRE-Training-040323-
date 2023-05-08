import { Component, Input } from '@angular/core';
import { Movie } from './movie.interface';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
    @Input() movieDetails!: Movie
}
