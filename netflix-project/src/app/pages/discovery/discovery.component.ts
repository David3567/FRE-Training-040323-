import { Router } from '@angular/router';
import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { MovieItem } from 'src/app/interface/movie';

@Component({
  selector: 'app-discovery',
  templateUrl: './discovery.component.html',
  styleUrls: ['./discovery.component.scss'],
})
export class DiscoveryComponent implements OnInit {
  constructor(private router: Router, private movieService: MovieService) {}

  movies: MovieItem[] = [];
  ngOnInit(): void {
    this.movieService.retrieveList().subscribe((data) => {
      this.movies = data;
      console.log('current movie list', this.movies);
    });
  }
}
