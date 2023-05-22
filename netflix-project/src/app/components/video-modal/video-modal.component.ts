import { MovieService } from './../../services/movie.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-modal',
  templateUrl: './video-modal.component.html',
  styleUrls: ['./video-modal.component.scss'],
})
export class VideoModalComponent implements OnInit {
  @Input() movieId!: string;
  videoId!: string;
  constructor(private movie: MovieService) {}

  ngOnInit(): void {
    this.movie.getMovieTrailer(this.movieId).subscribe((data: any) => {
      console.log(data);
      this.videoId = data;
    });
  }
}
