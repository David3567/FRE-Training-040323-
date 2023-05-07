import { Component } from '@angular/core';
import { MovieDataService } from 'src/app/service/movie-data.service';
import {Movie} from 'src/app/model/Movie';

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
