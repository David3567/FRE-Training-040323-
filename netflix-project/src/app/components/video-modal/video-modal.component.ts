import { MovieService } from './../../services/movie.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-video-modal',
  templateUrl: './video-modal.component.html',
  styleUrls: ['./video-modal.component.scss'],
})
export class VideoModalComponent implements OnInit {
  @Input() movieId!: string;
  @Output() closeModalEvent = new EventEmitter();
  videoId?: string;
  constructor(private movie: MovieService) {}

  closeModal() {
    this.closeModalEvent.emit();
  }

  ngOnInit(): void {
    this.movie.getMovieTrailer(this.movieId).subscribe((data: string[]) => {
      console.log('get movie url', data);
      this.videoId = data[0];
    });
  }
}
