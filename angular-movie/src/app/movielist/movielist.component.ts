import { Component, ElementRef, ViewChild } from '@angular/core';
import { Movie } from '../core/model/Movie';
import { MovieDataService } from '../shared/service/moviedata/movie-data.service';
import { BehaviorSubject, Observable, filter, forkJoin, map, scan, switchMap, tap, zip } from 'rxjs';
import { RestorescrollService } from '../shared/service/utility/restorescroll.service';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.scss']
})
export class MovielistComponent {

  page: number = 1;
  loading: boolean = false;
  @ViewChild('scroll') elementRef!: ElementRef;
  movieData$: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>([]);
  constructor(private dataservice: MovieDataService, private scrollService: RestorescrollService, private router: Router) {
  }
  ngOnInit(){
    this.fetchMovieData()


  }
  ngAfterViewInit(){
    let y = this.scrollService.restorePosition()
    this.elementRef.nativeElement.scrollTop += y;
  }

  onScroll() {
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
    ).subscribe(()=>{
    });
  }
}
