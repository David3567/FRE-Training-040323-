import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Card } from '../card';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() title: string = '';
  @Input() content: string = '';
  @Input() color: string = '';
  @Input() nowColor: string = '';
  @Output() selectedColor = new EventEmitter<string>();
  constructor() {}
  ngOnInit(): void {}
  // applyColor() {
  //   this.showColor = true;
  // }
  selectCard() {
    this.selectedColor.emit(this.color);
  }
}
