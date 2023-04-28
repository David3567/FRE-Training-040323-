import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { card } from '../interface/interface';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Output() setColor = new EventEmitter;

  cards: card[] = [
    {
      title: 'Title 1',
      content: 'Header region of a card, intended for use within <mat-card>. This header captures a card title, subtitle, and avatar. This component is an optional convenience for use with other convenience elements, such as <mat-card-footer>.',
      button: 'Set Blue',
      color: 'blue'
    },
    {
      title: 'Title 2',
      content: 'Header region of a card, intended for use within <mat-card>. This header captures a card title, subtitle, and avatar. This component is an optional convenience for use with other convenience elements, such as <mat-card-footer>.',
      button: 'Set Black',
      color: 'black'
    },
    {
      title: 'Title 3',
      content: 'Header region of a card, intended for use within <mat-card>. This header captures a card title, subtitle, and avatar. This component is an optional convenience for use with other convenience elements, such as <mat-card-footer>.',
      button: 'Set Red',
      color: 'red'
    },
    {
      title: 'Title 4',
      content: 'Header region of a card, intended for use within <mat-card>. This header captures a card title, subtitle, and avatar. This component is an optional convenience for use with other convenience elements, such as <mat-card-footer>.',
      button: 'Set Green',
      color: 'green'
    },
  ];

  cardColor: String = '';
  cardTitle: String = '';
  borderStyle: String = '';
  constructor() { }

  ngOnInit(): void {
  }

  changeColor(color:String, title: String){
    this.cardColor = color
    this.cardTitle = title
    this.borderStyle = '1px solid';
    this.setColor.emit(color)
  }
}
