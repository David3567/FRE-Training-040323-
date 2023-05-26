import { Component, Input, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/core/service';
import { YouTubePlayer } from '@angular/youtube-player';
import { LocalStorageService } from '../../core/localStorage';
import { range } from 'rxjs';
import { concatMap } from 'rxjs/operators';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent {
  @ViewChild('myPlayer') youtubePlayer!: YouTubePlayer;
  getId: any;
  videoId: any;
  baseUrl = "https://image.tmdb.org/t/p/original";
  tempUrl = "https://image.tmdb.org/t/p/w200";
  movieList: any[] = [];
  movieInfo: any;
  movieCredits: any;
  movieImages: any;
  showVideoPopup: boolean = false;

  constructor(private service: ApiService, private storage: LocalStorageService) { }

  openVideoPopup() {
    this.showVideoPopup = true;
    this.getVideo(this.getId);
  }

  getVideo(id: number) {
    this.showVideoPopup = true;
    this.service.getVideo(id).subscribe((res: any) => {
      this.videoId = res.results[0].key;
      this.youtubePlayer.videoId = this.videoId;
    });
  }

  stopVideo() {
    this.showVideoPopup = false;
  }

  getData() {
    this.service.getInfo(this.getId).subscribe(res => {
      this.movieInfo = res;
      this.movieInfo.backdrop_path = this.baseUrl + this.movieInfo.backdrop_path;
    })


    const pageNum = parseInt(this.storage.getItem('page'));
    range(1, pageNum + 1).pipe(concatMap(i => this.service.getData(i))).subscribe((res) => {
      let newList: any = res;
      console.log(newList);
      newList = newList.results;
      newList.forEach((ele: any) => {
        ele.poster_path = this.baseUrl + ele.poster_path;
      });
      this.movieList = [...this.movieList, ...newList];
    });

    this.service.getImages(this.getId).subscribe(res => {
      this.movieImages = res;
      this.movieImages = this.movieImages.backdrops;
      this.movieImages.forEach((ele: any) => {
        ele.file_path = this.tempUrl + ele.file_path;
      })
    })

    this.service.getCredits(this.getId).subscribe(res => {
      this.movieCredits = res;
      this.movieCredits = this.movieCredits.cast;
      this.movieCredits.forEach((ele: any) => {
        ele.profile_path = this.tempUrl + ele.profile_path;
      })
    })
  }

  ngOnInit() {
    this.service.id$.subscribe(id => {
      this.getId = id;
      if (id == null || id == undefined || id == "") {
        this.getId = this.storage.getItem("movieId");
        this.getData();
      } else if (id != null || id != undefined) {
        this.storage.setItem("movieId", this.getId);
        this.getData();
      }
    });
  }
}
