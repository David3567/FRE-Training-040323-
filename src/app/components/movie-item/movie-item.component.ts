import { Component, Input, OnInit } from '@angular/core';
import { MovieItem } from 'src/app/interface/movie';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss'],
})
export class MovieItemComponent implements OnInit {
  @Input() InputMovie?: MovieItem;

  constructor() {}

  ngOnInit() {
    console.log('for individual', this.InputMovie);
  }
}
