import { Component } from '@angular/core';
import { Movie } from '../core/model/Movie';
import { MovieDataService } from '../shared/service/moviedata/movie-data.service';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.scss']
})
export class MovielistComponent {
  movieData: Movie[] = [];
  constructor(private dataservice: MovieDataService) {

  }
  ngOnInit(): void {
    this.dataservice.fetchApiData().subscribe(data => {
      this.movieData = data;
    });

  }
}
