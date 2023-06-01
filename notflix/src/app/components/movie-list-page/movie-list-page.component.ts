import { Component, OnInit } from '@angular/core';
import { MovieDataService } from 'src/app/movieData.service';

@Component({
  selector: 'app-movie-list-page',
  templateUrl: './movie-list-page.component.html',
  styleUrls: ['./movie-list-page.component.scss']
})
export class MovieListPageComponent implements OnInit {

  movieData: any;
  currentPage: number;

  constructor(private movieDataService: MovieDataService) {

  }

  ngOnInit(): void {
    // this.httpClient.get('https://api.themoviedb.org/3/discover/movie?api_key=72c578daa554cf85908fc4c8e4cd8c7f'
    // ).subscribe((response) => {
    //   console.log(response)
    // })
    this.currentPage = 1;

    this.movieDataService.getMoviesData(this.currentPage).subscribe((data: {results: string[]}) => {
      console.log(data)
      this.movieData = data.results;
    })

  }

  getMovieData() {
    console.log('called')
    this.movieDataService.getMoviesData(++this.currentPage).subscribe((data: {results: string[]}) => {
      console.log(data.results)
      this.movieData = this.movieData.concat(data.results)
    })
    console.log(this.movieData)
  }
}
