import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss'],
})
export class BlockComponent {
  @Input() id: number;
  @Input() title: string;
  @Input() text: string;
  @Input() color: string;
  @Input() selected: number;
  @Output() valueChanged = new EventEmitter<number>();

  constructor() {
    this.id = 0;
    this.title = '';
    this.text = '';
    this.color = 'red';
    this.selected = 1;
  }

  buttonColor() {
    return {
      'background-color': this.color,
    };
  }

  onClickButton(buttonid: number) {
    //console.log(buttonid);
    this.valueChanged.emit(buttonid);
  }
}
