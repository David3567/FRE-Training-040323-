import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}
  actors!: any[];
  imageUrl: string = '';
  movieInfo: any;
  moviePosters!: any[];
  id: string | null = '';
  movieTrailers: any[] = [];
  videosLoaded = false;
  data: any;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.route.data.subscribe((data) => {
      const resolvedData = data['data'];
      this.actors = resolvedData.actors;
      this.movieInfo = resolvedData.movieInfo;
      this.moviePosters = resolvedData.moviePosters;
      this.imageUrl = `https://image.tmdb.org/t/p/original/${this.movieInfo.poster_path}`;
    });
  }

  getMovieTrailers() {
    this.movieService
      .getMovieTrailers(this.id)
      .subscribe((trailers: string[]) => {
        this.movieTrailers = trailers;
        this.videosLoaded = true;
      });
  }

}
