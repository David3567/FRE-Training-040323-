import { Component, Input, OnInit } from '@angular/core';
import { TruncatePipe } from 'src/app/truncate.pipe';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {

  constructor(private truncatePipe: TruncatePipe) {

  }
  @Input() movieInfo: any;
  movieOverview: any;
  ngOnInit() {
    this.movieOverview = this.truncatePipe.transform(this.movieInfo.overview)
  }
}
