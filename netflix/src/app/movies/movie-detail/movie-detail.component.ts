import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  actors!: any[];
  imageUrl: string = '';
  movieInfo: any;
  moviePosters!: any[];
  ngOnInit(): void {
    // const id = this.route.snapshot.paramMap.get('id');
    const data = history.state.data;
    this.actors = data.actors;
    console.log(this.actors);
    this.movieInfo = data.movieInfo;
    this.moviePosters = data.moviePosters;
    this.imageUrl = `https://image.tmdb.org/t/p/original/${this.movieInfo.poster_path}`;
  }
}
