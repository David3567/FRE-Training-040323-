import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  cardsData = [
    {
      title: 'Enjoy on your TV',
      content: 'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.',
      iconPath: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/pictogram/tv.svg'
    },
    {
      title: 'Watch Everywhere',
      content: 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.',
      iconPath: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/pictogram/popcorn.svg'
    },
    {
      title: 'Create Profiles for kids',
      content: 'Send kids on adventures with their favorite characters in a space made just for them--free with your membership.',
      iconPath: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/pictogram/crystalball.svg'
    },
    {
      title: 'Download your shows to watch offline',
      content: 'Only available on ad-free plans.',
      iconPath: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/pictogram/download.svg'
    },

  ]
}
