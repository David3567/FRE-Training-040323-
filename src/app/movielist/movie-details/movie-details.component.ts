import { Component, Input } from '@angular/core';
import { ApiserviceService } from 'src/app/service/service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {
  @Input() getId: any;
  baseUrl = "https://image.tmdb.org/t/p/original";
  movieList : any;
  movieInfo : any;

  constructor(private _apiservice: ApiserviceService) {}

  ngOnInit() {
    this._apiservice.id$.subscribe(id => {
      this.getId = id;
      //console.log(this.getId);
    });
    this._apiservice.getdata().subscribe(res => {
      this.movieList = res;
      this.movieList = this.movieList.results;
      this.movieList.forEach((ele : any) => {
        if (ele.id == this.getId) {
          this.movieInfo = ele;
        }
      })
      console.log(this.movieInfo);
    })
  }
}
