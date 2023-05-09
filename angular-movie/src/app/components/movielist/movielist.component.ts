import { Component } from '@angular/core';
import {Movie} from 'src/app/model/Movie';
import { MovieDataService } from 'src/app/service/moviedata/movie-data.service';

@Component({
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
