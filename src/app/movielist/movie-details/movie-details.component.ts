import { Component, Input, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/service/service';
import { YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {
  @Input() getId: any;
  videoId: any;
  baseUrl = "https://image.tmdb.org/t/p/original";
  movieList : any;
  movieInfo : any;

  constructor(private apiservice: ApiserviceService, private youtube: YouTubePlayer) {}

  getMovieVideo(id: number) {
    this.apiservice.getMovieVideo(id).subscribe((response: any) => {
      this.videoId = response.results[0].key;
      this.playVideo();
    });
  }

  private playVideo() {
    this.youtube.playVideo();
  }

  ngOnInit() {
    this.apiservice.id$.subscribe(id => { this.getId = id; });
    this.apiservice.getdata().subscribe(res => {
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
