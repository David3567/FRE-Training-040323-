import { Component } from '@angular/core';
import { Movie } from '../core/model/Movie';
import { MovieDataService } from '../shared/service/moviedata/movie-data.service';
import { BehaviorSubject, Observable, map, scan, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.scss']
})
export class MovielistComponent {

  page: number = 1;
  loading: boolean = false;
  movieData$: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>([]);
  constructor(private dataservice: MovieDataService) {

  }
  ngOnInit(): void {
    this.fetchMovieData();
  }

  onScroll(){
    if (!this.loading) {
      this.page++;
      this.fetchMovieData();
    }
  }


  fetchMovieData(): void {
    this.loading = true;
    this.dataservice.fetchApiData(this.page).pipe(
      tap((newData: Movie[]) => {
        this.movieData$.next(this.movieData$.getValue().concat(newData));
        this.loading = false;
      })
    ).subscribe();
  }
}
