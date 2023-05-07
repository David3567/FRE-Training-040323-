import { Component, Input } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import { Movie } from 'src/app/model/Movie';
import { MovieDataService } from 'src/app/service/movie-data.service';

export interface ChipColor {
  name: string;
  color: ThemePalette;
}
@Component({
  selector: 'app-moviecard',
  templateUrl: './moviecard.component.html',
  styleUrls: ['./moviecard.component.scss']
})
export class MoviecardComponent {
  @Input() movieInfo!: Movie;
  availableColors: ChipColor[] = [
    {name: 'none', color: undefined},
    {name: 'Primary', color: 'primary'},
    {name: 'Accent', color: 'accent'},
    {name: 'Warn', color: 'warn'},
  ];
  constructor(private data: MovieDataService){}
  ngOnInit(){
    this.movieInfo.poster_path = this.data.img_url + this.movieInfo.poster_path;
  }
}
