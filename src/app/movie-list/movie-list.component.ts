import { Component } from '@angular/core';
import { ApiserviceService } from '../service/service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {
  id : any;
  baseUrl = "https://image.tmdb.org/t/p/original";
  movieList : any;
  
  constructor(private _apiservice: ApiserviceService, private router: Router) {}

  setId(movieId: number) {
    console.log(movieId)
    this.id = movieId.toString();
    this._apiservice.setId(movieId.toString());
    this.router.navigate(['/movie-details']);
  }

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
