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
  @Output() selectedColor = new EventEmitter<string>();
  constructor() {}
  showColor: boolean = false;
  ngOnInit(): void {}
  // applyColor() {
  //   this.showColor = true;
  // }
  selectCard() {
    this.showColor = true;
    this.selectedColor.emit(this.color);
  }
}
