import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieDataService } from 'src/app/movieData.service';
import { TruncatePipe } from 'src/app/truncate.pipe';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {

  constructor(private truncatePipe: TruncatePipe, private movieDataService: MovieDataService, private router: Router) {

  }
  @Input() movieInfo: any;
  movieID: number;
  movieOverview: string;
  movieYear: number;

  ngOnInit() {
    this.movieOverview = this.truncatePipe.transform(this.movieInfo.overview)
    this.movieID = this.movieInfo.id
    this.movieYear = new Date(this.movieInfo.releaseDate).getFullYear()
    console.log(this.movieYear)
  }

  onClick() {
    this.router.navigate(['/movies', this.movieID])
  }
}
