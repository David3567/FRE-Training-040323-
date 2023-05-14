import { Component } from '@angular/core';
import { ApiserviceService } from '../service/service';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent {
  baseUrl = "https://image.tmdb.org/t/p/original";
  movieList : any;
  constructor(private _apiservice: ApiserviceService) {}

  ngOnInit() {
    this._apiservice.getdata().subscribe(res => {
      this.movieList = res;
      this.movieList = this.movieList.results;
      this.movieList.forEach((ele : any) => {
        ele.poster_path = this.baseUrl + ele.poster_path;
      })
      console.log(this.movieList);
    })
  }
}
