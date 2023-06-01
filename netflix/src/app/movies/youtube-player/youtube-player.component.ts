import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.css'],
})
export class YoutubePlayerComponent
  implements OnInit
{
  @Input() videos: string[] = [];
  
  currentVideoIndex: number = 0;

  constructor(){}
  
  ngOnInit(): void {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }
  nextVideo() {
    this.currentVideoIndex = (this.currentVideoIndex + 1) % this.videos.length;
    console.log(this.currentVideoIndex);
  }
  prevVideo() {
    this.currentVideoIndex =
      (this.currentVideoIndex - 1 + this.videos.length) % this.videos.length;
    console.log(this.currentVideoIndex);
  }
  // currentVideo = this.videos[this.currentVideoIndex];

}
