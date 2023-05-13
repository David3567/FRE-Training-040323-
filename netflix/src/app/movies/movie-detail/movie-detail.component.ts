import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  id!: string | null;
  data: any;
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.data = history.state.data;
  }
}
