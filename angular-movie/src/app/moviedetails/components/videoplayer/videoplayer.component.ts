import { Component, ElementRef, Input, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';
let apiLoaded = false;
@Component({
  selector: 'app-videoplayer',
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.scss']
})
export class VideoplayerComponent {
  @Input() videoId!: string;
  constructor(private elRef: ElementRef){}
  ngOnInit() {
    if (!apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      apiLoaded = true;
    }
  }



}
