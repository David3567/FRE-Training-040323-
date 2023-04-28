import { Component, OnInit } from '@angular/core';
import { Card } from './card';

// import('./jake');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  cardList: Card[] = [];
  selectedColor!: string;
  selectedCard!: Card;
  ngOnInit() {
    this.cardList = [
      {
        title: 'Nulla varius ligula a lorem pharetra bibendum',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies euismod risus eu consequat. Duis vel lectus volutpat, scelerisque tellus eget, finibus risus. Nulla varius ligula a lorem pharetra bibendum. Integer at justo purus. Phasellus vel aliquam mi. Sed ut ultrices nibh. Nullam nec odio pulvinar, pellentesque orci ut, lacinia risus.',
        color: '#6C9BCF',
      },
      {
        title: 'Nulla varius ligula a lorem pharetra bibendum',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies euismod risus eu consequat. Duis vel lectus volutpat, scelerisque tellus eget, finibus risus. Nulla varius ligula a lorem pharetra bibendum. Integer at justo purus. Phasellus vel aliquam mi. Sed ut ultrices nibh. Nullam nec odio pulvinar, pellentesque orci ut, lacinia risus.',
        color: '#000',
      },
      {
        title: 'Nulla varius ligula a lorem pharetra bibendum',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies euismod risus eu consequat. Duis vel lectus volutpat, scelerisque tellus eget, finibus risus. Nulla varius ligula a lorem pharetra bibendum. Integer at justo purus. Phasellus vel aliquam mi. Sed ut ultrices nibh. Nullam nec odio pulvinar, pellentesque orci ut, lacinia risus.',
        color: '#9CA777',
      },
      {
        title: 'Nulla varius ligula a lorem pharetra bibendum',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies euismod risus eu consequat. Duis vel lectus volutpat, scelerisque tellus eget, finibus risus. Nulla varius ligula a lorem pharetra bibendum. Integer at justo purus. Phasellus vel aliquam mi. Sed ut ultrices nibh. Nullam nec odio pulvinar, pellentesque orci ut, lacinia risus.',
        color: '#C9A7EB',
      },
    ];
  }
  onColorChanged(data: string) {
    this.selectedColor = data;
  }
  
}
